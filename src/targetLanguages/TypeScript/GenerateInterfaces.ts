//tslint:disable: no-shadowed-variable
import * as fp from "fountain-pen"
import {
    CompilationUnit,
} from "../../generated/types"
import { sanitize } from "./sanitize"

function assertUnreachable<T>(_x: never): T {
    throw new Error("Unreachable")
}

export class GenerateInterfaces {
    public CompilationUnit(compilationUnit: CompilationUnit): fp.IParagraph {
        return [
            `//tslint:disable: ban-types`,
            `//@ts-ignore`,
            `import * as t from "./types"`,
            compilationUnit.interfaces.getAlphabeticalOrdering({}).map<fp.IParagraph>({
                callback: (iface, key) => {
                    return [
                        ``,
                        `export interface I${sanitize(key)} {`,
                        () => {
                            return [
                                iface.methods.getAlphabeticalOrdering({}).map({
                                    callback: (method, methodName) => {
                                        return fp.line([
                                            `${sanitize(methodName)}(`,
                                            fp.line(method.parameters.getAlphabeticalOrdering({}).mapWithSeparator<fp.InlinePart>({
                                                onSeparator: () => `,`,
                                                onElement: (param, paramKeyGetter) => fp.line([
                                                    ` readonly `,
                                                    paramKeyGetter,
                                                    `: `,
                                                    param.type,
                                                ]),
                                            })),
                                            `)`,
                                            `: `,
                                            ((): fp.IInlineSection => {
                                                switch (method.type[0]) {
                                                    case "function": {
                                                        const $ = method.type[1]
                                                        return fp.line([
                                                            ((): string => {
                                                                switch ($.guaranteed[0]) {
                                                                    case "no": {
                                                                        return `null | `
                                                                    }
                                                                    case "yes": {
                                                                        return ``
                                                                    }
                                                                    default:
                                                                        return assertUnreachable($.guaranteed[0])
                                                                }
                                                            })(),
                                                            $.type,
                                                        ])
                                                    }
                                                    case "procedure": {
                                                        return fp.token(`void`)
                                                    }
                                                    default:
                                                        return assertUnreachable(method.type[0])
                                                }
                                            })(),
                                        ])
                                    },
                                }),
                            ]
                        },
                        `}`,
                    ]
                },
            }),
            ``,
        ]
    }
}
