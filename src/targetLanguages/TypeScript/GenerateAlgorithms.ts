import * as fp from "fountain-pen"
import {
    Block,
    CompilationUnit,
    FunctionSpecification,
    Initializer
} from "../../generated/types"

function assertUnreachable<T>(_x: never): T {
    throw new Error("Unreachable")
}

export class GenerateAlgorithms {
    public CompilationUnit(compilationUnit: CompilationUnit): fp.IParagraph {
        return [
            compilationUnit.algorithms.getAlphabeticalOrdering({}).map<fp.IParagraph>({
                callback: (alg, key) => {
                    switch (alg.type[0]) {
                        case "class": {
                            const clss = alg.type[1]
                            return fp.paragraph([
                                ``,
                                `export class ${key} {`,
                                () => {
                                    return [
                                        //the properties
                                        clss.properties.getAlphabeticalOrdering({}).map({
                                            callback: (prop, propKey) => {
                                                return [
                                                    fp.line([
                                                        `private readonly ${propKey}`,
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
                                                    `constructor(`,
                                                    fp.line(parametrizedProperties.mapWithSeparator({
                                                        onSepartor: () => `, `,
                                                        onElement: (_pp, propKey) => {
                                                            return `${propKey}: ${_pp.type}`
                                                        },
                                                    })),
                                                    `) {`,
                                                ]),
                                                () => {
                                                    return parametrizedProperties.map({
                                                        callback: (_pp, propKey) => {
                                                            return [
                                                                `this.${propKey} = ${propKey}`,
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
                                                return this.FunctionSpecification(method["function specification"], methodKey, "public ")
                                            },
                                        }),
                                    ]
                                },
                                `}`,
                            ])
                        }
                        case "function": {
                            const $ = alg.type[1]
                            return [
                                ``,
                                this.FunctionSpecification($.specification, key, "export function "),
                            ]
                        }
                        default: return assertUnreachable(alg.type[0])
                    }
                },
            }),
        ]
    }
    private FunctionSpecification(fs: FunctionSpecification, name: string, prefix: string): fp.IParagraph {
        return [
            fp.line([
                `${prefix}${name}(`,
                fp.line(fs.parameters.getAlphabeticalOrdering({}).mapWithSeparator({
                    onSepartor: () => `, `,
                    onElement: (param, paramKey) => {
                        return `${paramKey}: ${param.type}`
                    },
                })),
                `) {`,
            ]),
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
                            `const ${variableKey} = `,
                            this.Initializer(variable.initializer),
                        ]),
                    ]
                },
            }),
            b.statements.map({
                callback: statement => {
                    return [
                        statement["raw value"],
                    ]
                },
            }),
        ]
    }
    private Initializer(initializer: Initializer): fp.IInlineSection {
        switch (initializer.type[0]) {
            case "function call": {
                const $ = initializer.type[1]
                return fp.line([
                    $.path,
                    `({`,
                    () => {
                        return $.arguments.getAlphabeticalOrdering({}).map({
                            callback: (arg, argKey) => {
                                return [
                                    fp.line([
                                        `"${argKey}": `,
                                        this.Initializer(arg.initializer),
                                    ]),
                                ]
                            },
                        })
                    },
                    `})`,
                ])
            }
            case "object": {
                const $ = initializer.type[1]
                return fp.line([
                    `{`,
                    () => {
                        return $.properties.getAlphabeticalOrdering({}).map({
                            callback: (prop, propKey) => {
                                return [
                                    fp.line([
                                        `"${propKey}": `,
                                        this.Initializer(prop.initializer),
                                    ]),
                                ]
                            },
                        })
                    },
                    `}`,
                ])
            }
            case "raw": {
                const $ = initializer.type[1]
                return fp.token($.rawstring)
            }
            case "tagged union": {
                const $ = initializer.type[1]
                return fp.line([
                    `[ "${$.state}", `,
                    this.Initializer($.initializer),
                    ` ]`,
                ])
            }
            default:
                return assertUnreachable(initializer.type[0])
        }
    }
}
