export * from "./generated/types"
export * from "./generated/algorithms"
export { Directory, Node, saveDirectory } from "./directory"

import * as lf from "lingua-franca"
import { CCompilationUnitBuilder } from "./generated/algorithms"
import { CompilationUnit } from "./generated/types"
import { createGenerator as createCGenerator } from "./targetLanguages/C"
import { createGenerator as createTypescriptGenerator } from "./targetLanguages/TypeScript"

export function compile(
    //resolveReporter: lf.IResolveReporter,
    callback: (builder: CCompilationUnitBuilder) => CompilationUnit
) {
    return callback(new CCompilationUnitBuilder({ buildContext: lf.createBuildContext() }))
}

export type GeneratedCode = {
    genericTypes: string
    interfaces: string
    types: string
    algorithms: string
}

export const generate = {
    TypeScript: function generateTypeScriptCode(compilationUnit: CompilationUnit) {
        return createTypescriptGenerator().generateCode(compilationUnit)
    },
    C: function generateCCode(compilationUnit: CompilationUnit, moduleName: string) {
        return createCGenerator().generateCode(compilationUnit, moduleName)
    },
}
