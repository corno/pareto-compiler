//tslint:disable: no-shadowed-variable

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
            `// tslint:disable: max-classes-per-file object-literal-key-quotes variable-name no-string-literal member-ordering no-shadowed-variable`,
            `//@ts-ignore`,
            `import * as gt from "./genericTypes"`,
            `//@ts-ignore`,
            `import * as i from "./interfaces"`,
            `//@ts-ignore`,
            `import * as t from "./types"`,
            ``,
            `function assertUnreachable(_x: never) { throw new Error("Unreachable") }`,
            ``,
            compilationUnit["algorithm units"].getAlphabeticalOrdering({}).map<fp.IParagraph>({
                callback: (alg, key) => {
                    switch (alg.type[0]) {
                        case "class": {
                            const clss = alg.type[1]
                            return [
                                ``,
                                `export class C${sanitize(key)} {`,
                                () => {
                                    return [
                                        //the properties
                                        clss.properties.getAlphabeticalOrdering({}).map({
                                            callback: (prop, propKey) => {
                                                return [
                                                    fp.line([
                                                        `private readonly ${sanitize(propKey)}`,
                                                        ((): fp.InlinePart => {
                                                            switch (prop.initialization[0]) {
                                                                case "default":
                                                                    return ` = ${prop.initialization[1].initializer}`
                                                                case "parametrized":
                                                                    return `: ${prop.initialization[1].type}`
                                                                default: return assertUnreachable(prop.initialization[0])
                                                            }
                                                        })(),
                                                    ]),
                                                ]
                                            },
                                        }),
                                        //the possible constructor
                                        clss.properties.getAlphabeticalOrdering({}).filter({ callback: prop => prop.initialization[0] === "parametrized" ? prop.initialization[1] : null }).onEmpty({
                                            onEmpty: () => [],
                                            onNotEmpty: parametrizedProperties => [
                                                fp.line([
                                                    `constructor(p: {`,
                                                    () => {
                                                        return parametrizedProperties.map({
                                                            callback: (_pp, propKey) => {
                                                                return `"${propKey}": ${_pp.type}`
                                                            },
                                                        })
                                                    },
                                                    `}) {`,
                                                ]),
                                                () => {
                                                    return parametrizedProperties.map({
                                                        callback: (_pp, propKey) => {
                                                            return [
                                                                `this.${sanitize(propKey)} = p["${propKey}"]`,
                                                            ]
                                                        },
                                                    })
                                                },
                                                `}`,
                                            ],
                                        }),
                                        //the methods
                                        clss.methods.getAlphabeticalOrdering({}).map({
                                            callback: (method, methodKey) => {
                                                return [
                                                    fp.line([
                                                        ((): string => {
                                                            switch (method.specification.access[0]) {
                                                                case "private": {
                                                                    return `private`
                                                                }
                                                                case "public": {
                                                                    return `public`
                                                                }
                                                                default:
                                                                    return assertUnreachable(method.specification.access[0])
                                                            }
                                                        })(),
                                                        ` `,
                                                        this.FunctionSpecification(method.specification, methodKey),
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
                            const $ = alg.type[1]
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
                                    this.FunctionSpecification($.specification, key),
                                ]),
                            ]
                        }
                        default: return assertUnreachable(alg.type[0])
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
                                    callback: (param, paramKey) => {
                                        return `readonly "${paramKey}": ${param.type}`
                                    },
                                })
                            },
                            `}`,
                        ]
                    }
                    case "public": {
                        const $ = fs.access[1]
                        return [
                            () => {
                                return $.parameters.getOrderings({}).dependencies.map({
                                    callback: (param, paramKey) => {
                                        return `${sanitize(paramKey)}: ${param.type},`
                                    },
                                })
                            },
                        ]
                    }
                    default:
                        return assertUnreachable(fs.access[0])
                }
            })(),
            `) {`,
            () => {
                return this.Block(fs.block)
            },
            `}`,
        ]
    }
    private Block(b: Block): fp.IParagraph {
        return [
            b.variables.getOrderings({}).dependencies.map({
                callback: (variable, variableKey) => {
                    return [
                        fp.line([
                            `const ${sanitize(variableKey)} = `,
                            this.Initializer(variable.initializer),
                        ]),
                    ]
                },
            }),
            b.statements.map({
                callback: statement => {
                    return ((): fp.IParagraph => {
                        switch (statement.type[0]) {
                            case "call": {
                                const $$ = statement.type[1]
                                return [fp.line([this.FunctionCall($$.call)])]
                            }
                            case "raw": {
                                const $$ = statement.type[1]
                                return [
                                    $$["raw value"],
                                ]
                            }
                            case "switch": {
                                const $$ = statement.type[1]
                                return [
                                    `switch (${$$["raw expression"]}[0]) {`,
                                    () => {
                                        return [
                                            $$.cases.getAlphabeticalOrdering({}).map({
                                                callback: (cs, caseKey) => {
                                                    return [
                                                        `case "${caseKey}": {`,
                                                        () => {
                                                            return [
                                                                `const _$ = ${$$["raw expression"]}[1]`,
                                                                `{`,
                                                                () => {
                                                                    return [
                                                                        `const $ = _$`,
                                                                        this.Block(cs.block),
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
                                            `default: return assertUnreachable(${$$["raw expression"]}[0])`,
                                        ]
                                    },
                                    `}`,
                                ]
                            }
                            default:
                                return assertUnreachable(statement.type[0])
                        }

                    })()
                },
            }),
        ]
    }
    private FunctionCall($: FunctionCall): fp.InlinePart {
        return [
            $.path,
            `({`,
            () => {
                return $.arguments.getAlphabeticalOrdering({}).map({
                    callback: (arg, argKey) => {
                        return [
                            fp.line([
                                `"${argKey}": `,
                                ((): fp.InlinePart => {
                                    switch (arg.type[0]) {
                                        case "callback": {
                                            const $$ = arg.type[1]
                                            return [
                                                `_cp => {`,
                                                () => {
                                                    return this.Block($$.block)
                                                },
                                                `}`,
                                            ]
                                        }
                                        case "initializer": {
                                            const $$ = arg.type[1]
                                            return this.Initializer($$.initializer)
                                        }
                                        default:
                                            return assertUnreachable(arg.type[0])
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
                    sanitize($.path),
                    `({`,
                    () => {
                        return $.arguments.getAlphabeticalOrdering({}).map({
                            callback: (arg, argKey) => {
                                return [
                                    fp.line([
                                        `"${argKey}": `,
                                        this.Initializer(arg.initializer),
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
            case "object": {
                const $ = initializer.type[1]
                return [
                    `{`,
                    () => {
                        return $.properties.getAlphabeticalOrdering({}).map({
                            callback: (prop, propKey) => {
                                return [
                                    fp.line([
                                        `"${propKey}": `,
                                        this.Initializer(prop.initializer),
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
                return $.rawstring
            }
            case "selection": {
                const $ = initializer.type[1]
                return [
                    ((): string => {
                        switch ($["start point"][0]) {
                            case "parameter":
                                const _$ = $["start point"][1]
                                {
                                    const $ = _$
                                    return `_p["${$.parameter}"]`
                                }
                            case "callback parameter": {
                                const $$ = $["start point"][1]
                                return `_cp["${$$.parameter}"]`
                            }
                            case "property": {
                                const $$ = $["start point"][1]
                                return `this.${sanitize($$.property)}`
                            }
                            case "variable": {
                                const $$ = $["start point"][1]
                                return `${sanitize($$.variable)}`
                            }
                            default:
                                return assertUnreachable($["start point"][0])
                        }
                    })(),
                    $.steps.map({
                        callback: step => `["${step.rawselectionstring}"]`,
                    }),
                ]
            }
            case "tagged union": {
                const $ = initializer.type[1]
                switch ($["type specification"][0]) {
                    case "derived": {
                        return [
                            `[ "${$.state}", `,
                            this.Initializer($.initializer),
                            ` ]`,
                        ]
                    }
                    case "reference": {
                        const $$ = $["type specification"][1]
                        return [
                            `((): t.${$$.type} => {`,
                            () => {
                                return [
                                    fp.line([
                                        `return ["${$.state}", `,
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
            default:
                return assertUnreachable(initializer.type[0])
        }
    }
}
