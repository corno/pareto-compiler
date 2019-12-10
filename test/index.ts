//tslint:disable: no-console
import * as lf from "lingua-franca-building"
import { compile, generateTypeScriptCode } from "../src"

const rr = new lf.SimpleResolveReporter(
    (_dependent, message) => {
        console.log(message)
    },
    message => {
        console.log(message)
    }
)

const compilationUnit = compile(rr, builder => {
    return builder.build(c => c
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
})


console.log(generateTypeScriptCode(compilationUnit))


