//tslint:disable: no-console no-shadowed-variable
//import * as lf from "lingua-franca"
import { compile, generateTypeScriptCode } from "../src"

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
                    .InterfaceMethod("IM", p => p.InterfaceMethodParameter("IMP", "X"), t => t.procedure())
                )
        , a => a
            .AlgorithmUnit("Foo", t => t.class(
                p => p
                    .ClassProperty("a", t => t.default("new Array<int>()"))
                    .ClassProperty("b", t => t.parametrized("string"))
                , m => m
                    .ClassMethod("bla"
                        , a => a.private(p => p
                            .PrivateParameter("param", "boolean")
                        )
                        , v => v
                        , s => s
                            .Statement(t => t.raw("console.log('X')"))
                    )
            ))
    )
})

const typeScriptCode = generateTypeScriptCode(compilationUnit)
console.log(typeScriptCode.types)
console.log(typeScriptCode.algorithms)


