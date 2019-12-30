export * from "./generated/types"
export * from "./generated/algorithms"

import * as fp from "fountain-pen"
import * as lf from "lingua-franca"
import { CCompilationUnitBuilder } from "./generated/algorithms"
import { CompilationUnit } from "./generated/types"
import { GenerateAlgorithms } from "./targetLanguages/TypeScript/GenerateAlgorithms"
import { GenerateGenericTypes } from "./targetLanguages/TypeScript/GenerateGenericTypes"
import { GenerateInterfaces } from "./targetLanguages/TypeScript/GenerateInterfaces"
import { GenerateTypes } from "./targetLanguages/TypeScript/GenerateTypes"

export function compile(
    //resolveReporter: lf.IResolveReporter,
    callback: (builder: CCompilationUnitBuilder) => CompilationUnit
) {
    return callback(new CCompilationUnitBuilder({ buildContext: lf.createBuildContext()}))
}

export type GeneratedCode = {
    genericTypes: string
    interfaces: string
    types: string
    algorithms: string
}

function serialize(paragraph: fp.IParagraph) {
    const out: string[] = []
    fp.serialize(paragraph, "    ", true, str => { out.push(str) })
    return out.join("\n")
}

export function generateTypeScriptCode(compilationUnit: CompilationUnit): GeneratedCode {
    const genericTypeParagraphs = new GenerateGenericTypes().CompilationUnit(compilationUnit)
    const typeParagraphs = new GenerateTypes().CompilationUnit(compilationUnit)
    const interfaceParagraphs = new GenerateInterfaces().CompilationUnit(compilationUnit)
    const algorithmParagraphs = new GenerateAlgorithms().CompilationUnit(compilationUnit)

    return {
        genericTypes: serialize(genericTypeParagraphs),
        interfaces: serialize(interfaceParagraphs),
        types: serialize(typeParagraphs),
        algorithms: serialize(algorithmParagraphs),
    }
}
