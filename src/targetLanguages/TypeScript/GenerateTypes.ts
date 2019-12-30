//tslint:disable: no-shadowed-variable
import * as fp from "fountain-pen"
import {
    CompilationUnit,
} from "../../generated/types"
import { sanitize } from "./sanitize"

function assertUnreachable<T>(_x: never): T {
    throw new Error("Unreachable")
}


export class GenerateTypes {
    public CompilationUnit(compilationUnit: CompilationUnit): fp.IParagraph {
        return [
            `//tslint:disable: ban-types`,
            `//@ts-ignore`,
            `import * as gt from "./genericTypes"`,
            compilationUnit.types.getAlphabeticalOrdering({}).map<fp.IParagraph>({
                callback: (type, key) => {
                    return [
                        ``,
                        fp.line([
                            `export type ${sanitize(key)} = `,
                            ((): fp.IInlineSection => {
                                switch (type.type[0]) {
                                    case "object": {
                                        const $ = type.type[1]
                                        return fp.line([
                                            `{`,
                                            () => {
                                                return $.properties.getAlphabeticalOrdering({}).map({
                                                    callback: (alt, altKey) => {
                                                        return [
                                                            fp.line([
                                                                `readonly "${altKey}": `,
                                                                ((): fp.IInlineSection => {
                                                                    switch (alt.type[0]) {
                                                                        case "generic type": {
                                                                            const $ = alt.type[1]
                                                                            return fp.line([
                                                                                `gt.`,
                                                                                $["referenced type"],
                                                                                `<`,
                                                                                fp.line($.arguments.getAlphabeticalOrdering({}).mapWithSeparator({
                                                                                    onSeparator: () => `, `,
                                                                                    onElement: arg => arg.raw,
                                                                                })),
                                                                                `>`,
                                                                            ])
                                                                        }
                                                                        case "raw": {
                                                                            const $ = alt.type[1]
                                                                            return fp.token($.raw)
                                                                        }
                                                                        case "reference": {
                                                                            const $ = alt.type[1]
                                                                            return fp.token($["referenced type"])
                                                                        }
                                                                        case "string": {
                                                                            //const $ = alt.type[1]
                                                                            return fp.token(`string`)
                                                                        }
                                                                        default: return assertUnreachable(alt.type[0])
                                                                    }
                                                                })(),
                                                            ]),
                                                        ]
                                                    },
                                                })
                                            },
                                            `}`,
                                        ])
                                    }
                                    case "tagged union": {
                                        const $ = type.type[1]
                                        return fp.line([
                                            () => {
                                                return $.alternatives.getAlphabeticalOrdering({}).map({
                                                    callback: (alt, altKey) => {
                                                        return [
                                                            `| [ "${altKey}", ${alt["referenced type"]} ]`,
                                                        ]
                                                    },
                                                })
                                            },
                                        ])
                                    }
                                    default: return assertUnreachable(type.type[0])
                                }
                            })(),
                        ]),
                    ]
                },
            }),
            ``,
        ]
    }
}
