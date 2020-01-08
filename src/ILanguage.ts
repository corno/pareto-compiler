import { Directory } from "./directory/types"
import { CompilationUnit } from "./generated/types"


export interface ILanguage {
    generateCode(compilationUnit: CompilationUnit, moduleName: string): Directory
}

