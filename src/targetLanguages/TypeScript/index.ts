import * as fp from "fountain-pen"
import { Directory } from "../../directory/types"
import { CompilationUnit } from "../../generated/types"
import { ILanguage } from "../../ILanguage"
import { GenerateAlgorithms } from "./GenerateAlgorithmUnits"
import { GenerateGenericTypes } from "./GenerateGenericTypes"
import { GenerateInterfaces } from "./GenerateInterfaces"
import { GenerateTypes } from "./GenerateTypes"

function serialize(paragraph: fp.IParagraph) {
    const out: string[] = []
    fp.serialize(paragraph, "    ", true, str => { out.push(str) })
    return out.join("\n")
}

export class TypeScript implements ILanguage {
    public generateCode(compilationUnit: CompilationUnit) {
        const dir: Directory = {
            nodes: {},
        }
        dir.nodes["algorithmUnits.ts"] = [ "file", serialize(new GenerateAlgorithms().CompilationUnit(compilationUnit))]
        dir.nodes["types.ts"] = [ "file", serialize(new GenerateTypes().CompilationUnit(compilationUnit))]
        dir.nodes["genericTypes.ts"] = [ "file", serialize(new GenerateGenericTypes().CompilationUnit(compilationUnit))]
        dir.nodes["interfaces.ts"] = [ "file", serialize(new GenerateInterfaces().CompilationUnit(compilationUnit))]
        return dir
    }
}

export function createGenerator() {
    return new TypeScript()
}
