//tslint:disable: no-shadowed-variable
import * as fp from "fountain-pen"
import {
    CompilationUnit,
    GenericInterfaceReference,
    GenericInType,
    GenericReturnType,
} from "../../generated/types"

function assertUnreachable<T>(_x: never): T {
    throw new Error("Unreachable")
}

export class GenerateGenericTypes {
    public CompilationUnit(compilationUnit: CompilationUnit): fp.IParagraph {
        return [
            `//tslint:disable: ban-types interface-name pareto array-type no-empty-interface`,
            compilationUnit["generic interface declarations"].getAlphabeticalOrdering({}).map<fp.IParagraph>({
                callback: (type, keyGetter) => {
                    return [
                        ``,
                        fp.line([
                            `export interface ${keyGetter}<`,
                            fp.line(type.parameters.getAlphabeticalOrdering({}).mapWithSeparator({
                                onSeparator: () => `, `,
                                onElement: (_param, paramKeyGetter) => {
                                    return paramKeyGetter
                                },
                            })),
                            `>`,
                            type["base interfaces"].getAlphabeticalOrdering({}).onEmpty<fp.IInlineSection>({
                                onEmpty: () => fp.token(``),
                                onNotEmpty: baseInterfaces => fp.line([
                                    ` extends `,
                                    fp.line(baseInterfaces.mapWithSeparator<fp.InlinePart>({
                                        onSeparator: () => `, `,
                                        onElement: bi => this.GenericInterfaceReference(bi.interface),
                                    })),
                                ]),
                            }),
                            ` {`,
                        ]),
                        () => {
                            //methods
                            return type.methods.getAlphabeticalOrdering({}).map({
                                callback: (method, methodKeyGetter) => {
                                    return fp.line([
                                        `${methodKeyGetter}`,
                                        method["type parameters"].getAlphabeticalOrdering({}).onEmpty<fp.IInlineSection>({
                                            onEmpty: () => fp.token(``),
                                            onNotEmpty: typeParams => {
                                                return fp.line([
                                                    `<`,
                                                    fp.line(typeParams.mapWithSeparator<fp.InlinePart>({
                                                        onSeparator: () => `, `,
                                                        onElement: (_tp, typeParamKeyGetter) => {
                                                            return typeParamKeyGetter
                                                        },
                                                    })),
                                                    `>`,
                                                ])
                                            },
                                        }),
                                        `(p: {`,
                                        fp.line(method.parameters.getAlphabeticalOrdering({}).mapWithSeparator<fp.InlinePart>({
                                            onSeparator: () => `, `,
                                            onElement: (param, paramKeyGetter) => fp.line([
                                                ` readonly `,
                                                paramKeyGetter,
                                                `: `,
                                                this.GenericInType(param.type),
                                            ]),
                                        })),
                                        `})`,
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
                                                        this.GenericReturnType($.type),
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
                            })
                        },
                        `}`,
                    ]
                    // switch (type.type[0]) {
                    //     case "class": {
                    //         const $ = type.type[1]
                    //     }
                    //     case "function": {
                    //         const $ = type.type[1]
                    //         return [
                    //             fp.line([
                    //                 `export type ${keyGetter} = `,
                    //                 this.FatArrowFunctionSpecification($.specification),
                    //             ]),
                    //         ]
                    //     }
                    //     default:
                    //         return assertUnreachable(type.type[0])
                    // }
                },
            }),
            ``,
        ]
    }
    private GenericInType(gt: GenericInType): fp.IInlineSection {
        switch (gt.type[0]) {
            case "callback": {
                const $ = gt.type[1]
                return fp.line([
                    `(`,
                    fp.line($.parameters.getAlphabeticalOrdering({}).mapWithSeparator<fp.InlinePart>({
                        onSeparator: () => `, `,
                        onElement: (param, paramKeyGetter) => fp.line([
                            paramKeyGetter,
                            `: `,
                            this.GenericReturnType(param.type),
                        ]),
                    })),
                    `)`,
                    ` => `,
                    ((): fp.IInlineSection => {
                        switch ($.type[0]) {
                            case "function": {
                                const $$ = $.type[1]
                                return fp.line([
                                    ((): string => {
                                        switch ($$.guaranteed[0]) {
                                            case "no": {
                                                return `null | `
                                            }
                                            case "yes": {
                                                return ``
                                            }
                                            default:
                                                return assertUnreachable($$.guaranteed[0])
                                        }
                                    })(),
                                    this.GenericInType($$.type),
                                ])
                            }
                            case "procedure": {
                                return fp.token(`void`)
                            }
                            default:
                                return assertUnreachable($.type[0])
                        }
                    })(),
                ])
            }
            case "method type parameter": {
                const $ = gt.type[1]
                return fp.token($["type parameter"])
            }
            case "string": {
                return fp.token("string")
            }
            default:
                return assertUnreachable(gt.type[0])
        }
    }
    private GenericReturnType(gt: GenericReturnType): fp.IInlineSection {
        switch (gt.type[0]) {
            case "interface parameter": {
                const $ = gt.type[1]
                return fp.token($.parameter)
            }
            case "method type parameter": {
                const $ = gt.type[1]
                return fp.token($["type parameter"])
            }
            case "reference to generic declaration": {
                const $ = gt.type[1]
                return this.GenericInterfaceReference($.interface)
            }
            case "string": {
                return fp.token("string")
            }
            default:
                return assertUnreachable(gt.type[0])
        }
    }
    private GenericInterfaceReference(gir: GenericInterfaceReference) {
        return fp.line([
            gir.interface,
            `<`,
            fp.line(gir["type arguments"].getAlphabeticalOrdering({}).mapWithSeparator({
                onSeparator: () => fp.token(`, `),
                onElement: ta => this.GenericReturnType(ta.type),
            })),
            `>`,
        ])
    }
}
