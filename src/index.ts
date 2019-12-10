export * from "./generated/schema"

import * as fp from "fountain-pen"
import * as lf from "lingua-franca-building"
import { DummyBuilder } from "./generated/builder"
import { Dummy } from "./generated/schema"
import { GenerateClasses } from "./targetLanguages/TypeScript/GenerateClasses"

export function compile(
    resolveReporter: lf.IResolveReporter,
    callback: (builder: DummyBuilder) => Dummy
) {
    return callback(new DummyBuilder(lf.createBuildContext(resolveReporter)))
}

export function generateTypeScriptCode(compilationUnit: Dummy): string {
    const gc = new GenerateClasses()
    const paragraph = gc.Dummy(compilationUnit)
    const out: string[] = []
    fp.serialize(paragraph, "    ", true, str => { out.push(str) })
    return out.join("\n")
}
