//tslint:disable: no-shadowed-variable
import * as fp from "fountain-pen"
import {
    CompilationUnit,
} from "../../generated/types"
import { sanitize, sanitize2 } from "./sanitize"

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
                callback: cp => {
                    return [
                        ``,
                        fp.line([
                            `export type ${sanitize(cp.key)} = `,
                            ((): fp.InlinePart => {
                                switch (cp.element.type[0]) {
                                    case "object": {
                                        const $ = cp.element.type[1]
                                        return [
                                            `{`,
                                            () => {
                                                return $.properties.getAlphabeticalOrdering({}).map({
                                                    callback: cp => {
                                                        return [
                                                            fp.line([
                                                                `readonly "${cp.key}": `,
                                                                ((): fp.InlinePart => {
                                                                    switch (cp.element.type[0]) {
                                                                        case "generic type": {
                                                                            const $ = cp.element.type[1]
                                                                            return [
                                                                                `gt.`,
                                                                                $["referenced type"].getKey({ sanitizer: sanitize2 }),
                                                                                `<`,
                                                                                $.arguments.getAlphabeticalOrdering({}).mapWithSeparator({
                                                                                    onSeparator: () => `, `,
                                                                                    onElement: cp => cp.element.raw,
                                                                                }),
                                                                                `>`,
                                                                            ]
                                                                        }
                                                                        case "raw": {
                                                                            const $ = cp.element.type[1]
                                                                            return $.raw
                                                                        }
                                                                        case "reference": {
                                                                            const $ = cp.element.type[1]
                                                                            return $["referenced type"]
                                                                        }
                                                                        case "string": {
                                                                            //const $ = alt.type[1]
                                                                            return `string`
                                                                        }
                                                                        default: return assertUnreachable(cp.element.type[0])
                                                                    }
                                                                })(),
                                                            ]),
                                                        ]
                                                    },
                                                })
                                            },
                                            `}`,
                                        ]
                                    }
                                    case "tagged union": {
                                        const $ = cp.element.type[1]
                                        return [
                                            () => {
                                                return $.alternatives.getAlphabeticalOrdering({}).map({
                                                    callback: cp => {
                                                        return [
                                                            `| [ "${cp.key}", ${cp.element["referenced type"]} ]`,
                                                        ]
                                                    },
                                                })
                                            },
                                        ]
                                    }
                                    default: return assertUnreachable(cp.element.type[0])
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
