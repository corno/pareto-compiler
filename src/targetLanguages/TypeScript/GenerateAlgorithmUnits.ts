
import * as fp from "fountain-pen"
import {
    Block,
    CompilationUnit,
    FunctionCall,
    FunctionSpecification,
    Initializer,
} from "../../generated/types"
import { sanitize } from "./sanitize"

function assertUnreachable<T>(_x: never): T {
    throw new Error("Unreachable")
}

export class GenerateAlgorithms {
    public CompilationUnit(compilationUnit: CompilationUnit): fp.IParagraph {
        return [
            `/* eslint`,
            `    @typescript-eslint/no-unused-vars: "off",`,
            `    dot-notation: "off",`,
            `*/`,
            `import { gf } from "../genericFunctions"`,
            `import * as gt from "./genericTypes"`,
            `import * as i from "./interfaces"`,
            `import * as t from "./types"`,
            ``,
            `export const _ = null`,
            ``,
            `function assertUnreachable(_x: never) { throw new Error("Unreachable") }`,
            compilationUnit["algorithm units"].getAlphabeticalOrdering({}).map<fp.IParagraph>({
                callback: cp => {
                    switch (cp.element.type[0]) {
                        case "class": {
                            const clss = cp.element.type[1]
                            return [
                                ``,
                                `export class C${sanitize(cp.key)} {`,
                                () => {
                                    return [
                                        //the properties
                                        clss.properties.getAlphabeticalOrdering({}).map({
                                            callback: cp => {
                                                return [
                                                    fp.line([
                                                        `private readonly ${sanitize(cp.key)}`,
                                                        ((): fp.InlinePart => {
                                                            switch (cp.element.initialization[0]) {
                                                                case "default":
                                                                    return ` = ${cp.element.initialization[1].xinitializer}`
                                                                case "parametrized":
                                                                    return `: ${cp.element.initialization[1].xtype}`
                                                                default: return assertUnreachable(cp.element.initialization[0])
                                                            }
                                                        })(),
                                                    ]),
                                                ]
                                            },
                                        }),
                                        //the constructor
                                        fp.line([
                                            `constructor(_p: {`,
                                            () => {
                                                return clss.properties.getAlphabeticalOrdering({}).filter({
                                                    callback: cp => cp.element.initialization[0] === "parametrized" ? cp.element.initialization[1] : null,
                                                }).map({
                                                    callback: cp => {
                                                        return `"${cp.key}": ${cp.element.xtype}`
                                                    },
                                                })
                                            },
                                            `}) {`,
                                        ]),
                                        () => {
                                            return clss.properties.getAlphabeticalOrdering({}).filter({
                                                callback: cp => cp.element.initialization[0] === "parametrized" ? cp.element.initialization[1] : null,
                                            }).map({
                                                callback: cp => {
                                                    return [
                                                        `this.${sanitize(cp.key)} = _p["${cp.key}"]`,
                                                    ]
                                                },
                                            })
                                        },
                                        `}`,
                                        //the methods
                                        clss.methods.getAlphabeticalOrdering({}).map({
                                            callback: cp => {
                                                return [
                                                    fp.line([
                                                        ((): string => {
                                                            switch (cp.element.specification.access[0]) {
                                                                case "private": {
                                                                    return `private`
                                                                }
                                                                case "public": {
                                                                    return `public`
                                                                }
                                                                default:
                                                                    return assertUnreachable(cp.element.specification.access[0])
                                                            }
                                                        })(),
                                                        ` `,
                                                        this.FunctionSpecification(cp.element.specification, cp.key),
                                                    ]),
                                                ]
                                            },
                                        }),
                                    ]
                                },
                                `}`,
                            ]
                        }
                        case "function": {
                            const $ = cp.element.type[1]
                            return [
                                ``,
                                fp.line([
                                    ((): string => {
                                        switch ($.specification.access[0]) {
                                            case "private": {
                                                return ``
                                            }
                                            case "public": {
                                                return `export `
                                            }
                                            default:
                                                return assertUnreachable($.specification.access[0])
                                        }
                                    })(),
                                    `function `,
                                    this.FunctionSpecification($.specification, cp.key),
                                ]),
                            ]
                        }
                        default: return assertUnreachable(cp.element.type[0])
                    }
                },
            }),
            ``,
        ]
    }
    private FunctionSpecification(fs: FunctionSpecification, name: string): fp.InlinePart {
        return [
            `${sanitize(name)}(`,
            ((): fp.InlinePart => {
                switch (fs.access[0]) {
                    case "private": {
                        const $ = fs.access[1]
                        return [
                            `_p: { `,
                            () => {
                                return $.parameters.getAlphabeticalOrdering({}).map({
                                    callback: (cp): string => {
                                        switch (cp.element.type[0]) {
                                            case "rawz": {
                                                const $$ = cp.element.type[1]
                                                return `readonly "${cp.key}": ${$$.rawPrivParam}`
                                            }
                                            default:
                                                return assertUnreachable(cp.element.type[0])
                                        }
                                    },
                                })
                            },
                            `}) {`,
                            () => {
                                return this.Block($.block)
                            },
                            `}`,
                        ]
                    }
                    case "public": {
                        const $ = fs.access[1]
                        return [
                            () => {
                                return $.parameters.getOrderings({}).dependencies.map({
                                    callback: (cp): string => {
                                        switch (cp.element.type[0]) {
                                            case "rawz": {
                                                const $$ = cp.element.type[1]
                                                return `${sanitize(cp.key)}: ${$$.rawPubParam},`
                                            }
                                            default:
                                                return assertUnreachable(cp.element.type[0])
                                        }
                                    },
                                })
                            },
                            `) {`,
                            () => {
                                return this.Block($.block)
                            },
                            `}`,
                        ]
                    }
                    default:
                        return assertUnreachable(fs.access[0])
                }
            })(),
        ]
    }
    private Block(b: Block): fp.IParagraph {
        return [
            b.variables.getOrderings({}).dependencies.map({
                callback: cp => {
                    return [
                        fp.line([
                            `const ${sanitize(cp.key)} = `,
                            this.Initializer(cp.element.initializer),
                        ]),
                    ]
                },
            }),
            b.statements.map({
                callback: cp => {
                    return ((): fp.IParagraph => {
                        switch (cp.element.type[0]) {
                            case "call": {
                                const $$ = cp.element.type[1]
                                return [fp.line([this.FunctionCall($$.call)])]
                            }
                            case "raw": {
                                const $$ = cp.element.type[1]
                                return [
                                    $$["xraw value"],
                                ]
                            }
                            case "sub block": {
                                const $$ = cp.element.type[1]
                                return [
                                    `{`,
                                    () => {
                                        return this.Block($$.block)
                                    },
                                    `}`,
                                ]
                            }
                            case "switch": {
                                const $$ = cp.element.type[1]
                                return [
                                    `switch (${$$["xraw expression"]}[0]) {`,
                                    () => {
                                        return [
                                            $$.cases.getAlphabeticalOrdering({}).map({
                                                callback: cp => {
                                                    return [
                                                        `case "${cp.key}": {`,
                                                        () => {
                                                            return [
                                                                `const _$ = ${$$["xraw expression"]}[1]`,
                                                                `{`,
                                                                () => {
                                                                    return [
                                                                        `const $ = _$`,
                                                                        this.Block(cp.element.block),
                                                                        `break`,
                                                                    ]
                                                                },
                                                                `}`,
                                                            ]
                                                        },
                                                        `}`,
                                                    ]
                                                },
                                            }),
                                            `default: return assertUnreachable(${$$["xraw expression"]}[0])`,
                                        ]
                                    },
                                    `}`,
                                ]
                            }
                            default:
                                return assertUnreachable(cp.element.type[0])
                        }

                    })()
                },
            }),
        ]
    }
    private FunctionCall($: FunctionCall): fp.InlinePart {
        return [
            $.xpath,
            `({`,
            () => {
                return $.arguments.getAlphabeticalOrdering({}).map({
                    callback: cp => {
                        return [
                            fp.line([
                                `"${cp.key}": `,
                                ((): fp.InlinePart => {
                                    switch (cp.element.type[0]) {
                                        case "callback": {
                                            const $$ = cp.element.type[1]
                                            return [
                                                `_cp => {`,
                                                () => {
                                                    return this.Block($$.block)
                                                },
                                                `}`,
                                            ]
                                        }
                                        case "initializer": {
                                            const $$ = cp.element.type[1]
                                            return this.Initializer($$.initializer)
                                        }
                                        default:
                                            return assertUnreachable(cp.element.type[0])
                                    }

                                })(),
                                `,`,
                            ]),
                        ]
                    },
                })
            },
            `})`,
        ]
    }
    private Initializer(initializer: Initializer): fp.InlinePart {
        switch (initializer.type[0]) {
            case "constructor call": {
                const $ = initializer.type[1]
                return [
                    `new C`,
                    sanitize($.xpath),
                    `({`,
                    () => {
                        return $.arguments.getAlphabeticalOrdering({}).map({
                            callback: cp => {
                                return [
                                    fp.line([
                                        `"${cp.key}": `,
                                        this.Initializer(cp.element.initializer),
                                        `,`,
                                    ]),
                                ]
                            },
                        })
                    },
                    `})`,
                ]
            }
            case "function call": {
                const $ = initializer.type[1]
                return this.FunctionCall($.call)
            }
            case "false": {
                return "false"
            }
            case "generic function call": {
                const $ = initializer.type[1]
                return ["gt.", this.FunctionCall($.call)]
            }
            case "object": {
                const $ = initializer.type[1]
                return [
                    `{`,
                    () => {
                        return $.properties.getAlphabeticalOrdering({}).map({
                            callback: cp => {
                                return [
                                    fp.line([
                                        `"${cp.key}": `,
                                        this.Initializer(cp.element.initializer),
                                        `,`,
                                    ]),
                                ]
                            },
                        })
                    },
                    `}`,
                ]
            }
            case "rawx": {
                const $ = initializer.type[1]
                return $.xrawstring
            }
            case "selection": {
                const $ = initializer.type[1]
                return [
                    ((): string => {
                        switch ($["start point"][0]) {
                            case "parameter":
                                const $_$ = $["start point"][1]
                                {
                                    const $ = $_$
                                    return `_p["${$.xparameter}"]`
                                }
                            case "callback parameter": {
                                const $$ = $["start point"][1]
                                return `_cp["${$$.xparameter}"]`
                            }
                            case "property": {
                                const $$ = $["start point"][1]
                                return `this.${sanitize($$.xproperty)}`
                            }
                            case "variable": {
                                const $$ = $["start point"][1]
                                return `${sanitize($$.xvariable)}`
                            }
                            default:
                                return assertUnreachable($["start point"][0])
                        }
                    })(),
                    $.steps.map({
                        callback: cp => `["${cp.element.xrawselectionstring}"]`,
                    }),
                ]
            }
            case "string literal": {
                const $ = initializer.type[1]
                return `"${$.value}"`
            }
            case "tagged union": {
                const $ = initializer.type[1]
                switch ($["type specification"][0]) {
                    case "derived": {
                        return [
                            `[ "${$.xstate}", `,
                            this.Initializer($.initializer),
                            ` ]`,
                        ]
                    }
                    case "reference": {
                        const $$ = $["type specification"][1]
                        return [
                            `((): t.${$$.xtype} => {`,
                            () => {
                                return [
                                    fp.line([
                                        `return ["${$.xstate}", `,
                                        this.Initializer($.initializer),
                                        `]`,
                                    ]),
                                ]
                            },
                            `})()`,
                        ]
                    }
                    default:
                        return assertUnreachable($["type specification"][0])
                }
            }
            case "true": {
                return "true"
            }
            default:
                return assertUnreachable(initializer.type[0])
        }
    }
}
