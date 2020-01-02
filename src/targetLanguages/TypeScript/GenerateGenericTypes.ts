//tslint:disable: no-shadowed-variable
import * as fp from "fountain-pen"
import {
    CompilationUnit,
    GenericInterfaceReference,
    GenericInType,
    GenericReturnType,
} from "../../generated/types"
import { sanitize } from "./sanitize"

function assertUnreachable<T>(_x: never): T {
    throw new Error("Unreachable")
}


export class GenerateGenericTypes {
    public CompilationUnit(compilationUnit: CompilationUnit): fp.IParagraph {
        return [
            `//tslint:disable: ban-types interface-name pareto array-type no-empty-interface`,
            compilationUnit["generic interface declarations"].getAlphabeticalOrdering({}).map<fp.IParagraph>({
                callback: (type, key) => {
                    return [
                        ``,
                        fp.line([
                            `export interface ${sanitize(key)}<`,
                            type.parameters.getAlphabeticalOrdering({}).mapWithSeparator({
                                onSeparator: () => `, `,
                                onElement: (_param, paramKey) => {
                                    return sanitize(paramKey)
                                },
                            }),
                            `>`,
                            type["base interfaces"].getAlphabeticalOrdering({}).onEmpty<fp.InlinePart>({
                                onEmpty: () => ``,
                                onNotEmpty: baseInterfaces => [
                                    ` extends `,
                                    baseInterfaces.mapWithSeparator<fp.InlinePart>({
                                        onSeparator: () => `, `,
                                        onElement: bi => this.GenericInterfaceReference(bi.interface),
                                    }),
                                ],
                            }),
                            ` {`,
                        ]),
                        () => {
                            //methods
                            return type.methods.getAlphabeticalOrdering({}).map({
                                callback: (method, methodKey) => {
                                    return fp.line([
                                        `${sanitize(methodKey)}`,
                                        method["type parameters"].getAlphabeticalOrdering({}).onEmpty<fp.InlinePart>({
                                            onEmpty: () => ``,
                                            onNotEmpty: typeParams => {
                                                return [
                                                    `<`,
                                                    typeParams.mapWithSeparator<fp.InlinePart>({
                                                        onSeparator: () => `, `,
                                                        onElement: (_tp, typeParamKey) => {
                                                            return sanitize(typeParamKey)
                                                        },
                                                    }),
                                                    `>`,
                                                ]
                                            },
                                        }),
                                        `(p: {`,
                                        method.parameters.getAlphabeticalOrdering({}).mapWithSeparator<fp.InlinePart>({
                                            onSeparator: () => `, `,
                                            onElement: (param, paramKey) => [
                                                ` readonly `,
                                                sanitize(paramKey),
                                                `: `,
                                                this.GenericInType(param.type),
                                            ],
                                        }),
                                        `})`,
                                        `: `,
                                        ((): fp.InlinePart => {
                                            switch (method.type[0]) {
                                                case "function": {
                                                    const $ = method.type[1]
                                                    return [
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
                                                    ]
                                                }
                                                case "procedure": {
                                                    return `void`
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
    private GenericInType(gt: GenericInType): fp.InlinePart {
        switch (gt.type[0]) {
            case "callback": {
                const $ = gt.type[1]
                return [
                    `(`,
                    $.parameters.getAlphabeticalOrdering({}).mapWithSeparator<fp.InlinePart>({
                        onSeparator: () => `, `,
                        onElement: (param, paramKey) => [
                            sanitize(paramKey),
                            `: `,
                            this.GenericReturnType(param.type),
                        ],
                    }),
                    `)`,
                    ` => `,
                    ((): fp.InlinePart => {
                        switch ($.type[0]) {
                            case "function": {
                                const $$ = $.type[1]
                                return [
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
                                ]
                            }
                            case "procedure": {
                                return `void`
                            }
                            default:
                                return assertUnreachable($.type[0])
                        }
                    })(),
                ]
            }
            case "method type parameter": {
                const $ = gt.type[1]
                return $["type parameter"].getKey({ sanitizer: sanitize })
            }
            case "string": {
                return "string"
            }
            default:
                return assertUnreachable(gt.type[0])
        }
    }
    private GenericReturnType(gt: GenericReturnType): fp.InlinePart {
        switch (gt.type[0]) {
            case "interface parameter": {
                const $ = gt.type[1]
                return $.parameter
            }
            case "method type parameter": {
                const $ = gt.type[1]
                return $["type parameter"].getKey({ sanitizer: key => key})
            }
            case "reference to generic declaration": {
                const $ = gt.type[1]
                return this.GenericInterfaceReference($.interface)
            }
            case "string": {
                return "string"
            }
            default:
                return assertUnreachable(gt.type[0])
        }
    }
    private GenericInterfaceReference(gir: GenericInterfaceReference) {
        return [
            gir.interface,
            `<`,
            gir["type arguments"].getAlphabeticalOrdering({}).mapWithSeparator({
                onSeparator: () => `, `,
                onElement: ta => this.GenericReturnType(ta.type),
            }),
            `>`,
        ]
    }
}
