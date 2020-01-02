//tslint:disable: no-shadowed-variable
import * as fp from "fountain-pen"
import {
    CompilationUnit,
    GenericInterfaceReference,
    GenericInType,
    GenericReturnType,
} from "../../generated/types"
import { sanitize, sanitize2 } from "./sanitize"

function assertUnreachable<T>(_x: never): T {
    throw new Error("Unreachable")
}


export class GenerateGenericTypes {
    public CompilationUnit(compilationUnit: CompilationUnit): fp.IParagraph {
        return [
            `//tslint:disable: ban-types interface-name pareto array-type no-empty-interface`,
            compilationUnit["generic interface declarations"].getAlphabeticalOrdering({}).map<fp.IParagraph>({
                callback: cp => {
                    return [
                        ``,
                        fp.line([
                            `export interface ${sanitize(cp.key)}<`,
                            cp.element.parameters.getAlphabeticalOrdering({}).mapWithSeparator({
                                onSeparator: () => `, `,
                                onElement: cp => {
                                    return sanitize(cp.key)
                                },
                            }),
                            `>`,
                            cp.element["base interfaces"].getAlphabeticalOrdering({}).onEmpty<fp.InlinePart>({
                                onEmpty: () => ``,
                                onNotEmpty: cp => [
                                    ` extends `,
                                    cp.dictionaryOrdering.mapWithSeparator<fp.InlinePart>({
                                        onSeparator: () => `, `,
                                        onElement: cp => this.GenericInterfaceReference(cp.element.interface),
                                    }),
                                ],
                            }),
                            ` {`,
                        ]),
                        () => {
                            //methods
                            return cp.element.methods.getAlphabeticalOrdering({}).map({
                                callback: cp => {
                                    return fp.line([
                                        `${sanitize(cp.key)}`,
                                        cp.element["type parameters"].getAlphabeticalOrdering({}).onEmpty<fp.InlinePart>({
                                            onEmpty: () => ``,
                                            onNotEmpty: cp => {
                                                return [
                                                    `<`,
                                                    cp.dictionaryOrdering.mapWithSeparator<fp.InlinePart>({
                                                        onSeparator: () => `, `,
                                                        onElement: cp => {
                                                            return sanitize(cp.key)
                                                        },
                                                    }),
                                                    `>`,
                                                ]
                                            },
                                        }),
                                        `(p: {`,
                                        cp.element.parameters.getAlphabeticalOrdering({}).mapWithSeparator<fp.InlinePart>({
                                            onSeparator: () => `, `,
                                            onElement: cp => [
                                                ` readonly `,
                                                sanitize(cp.key),
                                                `: `,
                                                this.GenericInType(cp.element.type),
                                            ],
                                        }),
                                        `})`,
                                        `: `,
                                        ((): fp.InlinePart => {
                                            switch (cp.element.type[0]) {
                                                case "function": {
                                                    const $ = cp.element.type[1]
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
                                                    return assertUnreachable(cp.element.type[0])
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
                        onElement: cp => [
                            sanitize(cp.key),
                            `: `,
                            this.GenericReturnType(cp.element.type),
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
                return $["type parameter"].getKey({ sanitizer: sanitize2 })
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
                return $["type parameter"].getKey({ sanitizer: p => p.rawValue})
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
                onElement: cp => this.GenericReturnType(cp.element.type),
            }),
            `>`,
        ]
    }
}
