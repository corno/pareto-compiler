/* eslint no-shadow: "off"*/
//import * as lf from "lingua-franca"
import { saveDirectory } from "../src/directory/index"
import { compile, generate } from "../src"

// const rr = new lf.SimpleResolveReporter(
//     (_dependent, message) => {
//         console.log(message)
//     },
//     message => {
//         console.log(message)
//     }
// )

console.log("generating test code in ./test/out")

const compilationUnit = compile(builder => {
    return builder.build(
        gt => gt
        , t => t
            .Type("Bar", t => t.object(p => p
                .ObjectProperty("X", t => t.string())
            ))
        , i => i
                .Interface("InterfaceX", m => m
                    .InterfaceMethod("IM", p => p.InterfaceMethodParameter("IMP", "string"), t => t.procedure())
                )
        , a => a
            .AlgorithmUnit("Foo", t => t.class(
                p => p
                    .ClassProperty("a", t => t.default("new Array<number>()"))
                    .ClassProperty("b", t => t.parametrized("string"))
                , m => m
                    .ClassMethod("bla"
                        , a => a.public(p => p
                            .PublicParameter("param", t => t.rawz("boolean"))
                            , v => v
                            , s => s
                                .Statement(t => t.raw("console.error(\"XX\", param)"))
                        )
                    )
            ))
    )
})

saveDirectory("./test/out", {
    nodes: {
        TypeScript: ["directory", {
            nodes: {
                generated : [ "directory", generate.TypeScript(compilationUnit)],
            },
        }],
        C: ["directory", generate.C(compilationUnit, "FOO")],
    },
})

