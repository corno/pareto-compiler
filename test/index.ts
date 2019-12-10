//tslint:disable: no-console
import { serialize } from "fountain-pen"
import * as lf from "lingua-franca-building"
import * as x from "../src/generated/builder"
import { GenerateClasses } from "../src/targetLanguages/TypeScript/GenerateClasses"

const rr = new lf.SimpleResolveReporter(
    (_dependent, message) => {
        console.log(message)
    },
    message => {
        console.log(message)
    }
)

const db = new x.DummyBuilder(lf.createBuildContext(rr))

const result = db.build(c => c
    .Class("Foo"
        , p => p
            .ClassProperty("a", t => t.default("new Array<int>()"))
            .ClassProperty("b", t => t.parametrized("string"))
        , m => m
            .Method("bla"
            , p => p
                .MethodParameter("param", "boolean")
            , s => s
                .Statement("console.log('X')")
            )
    )
)

const gc = new GenerateClasses()

const paragraph = gc.Dummy(result)

serialize(paragraph, "    ", true, str => { console.log(str) })

