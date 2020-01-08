//tslint:disable: no-console no-shadowed-variable
//import * as lf from "lingua-franca"
import { compile, generate } from "../src"
import { saveDirectory } from "../src/directory"

// const rr = new lf.SimpleResolveReporter(
//     (_dependent, message) => {
//         console.log(message)
//     },
//     message => {
//         console.log(message)
//     }
// )

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
                        , a => a.private(p => p
                            .PrivateParameter("param", t => t.rawz("boolean"))
                            , v => v
                            , s => s
                                .Statement(t => t.raw("console.error(\"XX\")"))
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

