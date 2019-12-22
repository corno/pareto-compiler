export * from "./generated/types"
export * from "./generated/algorithms"

import * as fp from "fountain-pen"
import * as lf from "lingua-franca-building"
import { CompilationUnitBuilder } from "./generated/algorithms"
import { CompilationUnit } from "./generated/types"
import { GenerateAlgorithms } from "./targetLanguages/TypeScript/GenerateAlgorithms"
import { GenerateGenericTypes } from "./targetLanguages/TypeScript/GenerateGenericTypes"
import { GenerateTypes } from "./targetLanguages/TypeScript/GenerateTypes"

export function compile(
    //resolveReporter: lf.IResolveReporter,
    callback: (builder: CompilationUnitBuilder) => CompilationUnit
) {
    return callback(new CompilationUnitBuilder({ buildContext: lf.createBuildContext()}))
}

export type GeneratedCode = {
    genericTypes: string
    types: string
    algorithms: string
}

export function generateTypeScriptCode(compilationUnit: CompilationUnit): GeneratedCode {

    const ggt = new GenerateGenericTypes()
    const genericTypeParagraphs = ggt.CompilationUnit(compilationUnit)
    const genericTypesOut: string[] = []
    fp.serialize(genericTypeParagraphs, "    ", true, str => { genericTypesOut.push(str) })

    const gt = new GenerateTypes()
    const typeParagraphs = gt.CompilationUnit(compilationUnit)
    const typesOut: string[] = []
    fp.serialize(typeParagraphs, "    ", true, str => { typesOut.push(str) })

    const ga = new GenerateAlgorithms()
    const algorithmParagraphs = ga.CompilationUnit(compilationUnit)
    const algOut: string[] = []
    fp.serialize(algorithmParagraphs, "    ", true, str => { algOut.push(str) })

    return {
        genericTypes: genericTypesOut.join("\n"),
        types: typesOut.join("\n"),
        algorithms: algOut.join("\n"),
    }
}
