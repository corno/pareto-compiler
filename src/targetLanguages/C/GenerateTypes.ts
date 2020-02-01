/*eslint no-shadow: "off"*/
import * as fp from "fountain-pen"
import {
    CompilationUnit,
} from "../../generated/types"
import { sanitize, sanitize2 } from "./sanitize"

function assertUnreachable<T>(_x: never): T {
    throw new Error("Unreachable")
}


export class GenerateTypes {
    public CompilationUnit(compilationUnit: CompilationUnit, moduleName: string): fp.IParagraph {
        return [
            `#ifndef ${sanitize(moduleName)}_H`,
            `#define ${sanitize(moduleName)}_H`,
            compilationUnit.types.getAlphabeticalOrdering({}).map<fp.IParagraph>({
                callback: cp => {
                    return [
                        ``,
                        fp.line([
                            ((): fp.InlinePart => {
                                switch (cp.element.type[0]) {
                                    case "object": {
                                        const $ = cp.element.type[1]
                                        return [
                                            `struct ${sanitize(cp.key)} `,
                                            `{`,
                                            (): fp.IParagraph => {
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
                                                                                    onElement: cp => cp.element.xraw,
                                                                                }),
                                                                                `>`,
                                                                            ]
                                                                        }
                                                                        case "raw": {
                                                                            const $ = cp.element.type[1]
                                                                            return $.xraw
                                                                        }
                                                                        case "reference": {
                                                                            const $ = cp.element.type[1]
                                                                            return $["xreferenced type"]
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
                                            `enum ${sanitize(cp.key)} `,
                                            (): fp.IParagraph => {
                                                return $.alternatives.getAlphabeticalOrdering({}).map({
                                                    callback: cp => {
                                                        return [
                                                            `| [ "${cp.key}", ${cp.element["xreferenced type"]} ]`,
                                                        ]
                                                    },
                                                })
                                            },
                                            `union ${sanitize(cp.key)} `,
                                            (): fp.IParagraph => {
                                                return $.alternatives.getAlphabeticalOrdering({}).map({
                                                    callback: cp => {
                                                        return [
                                                            `| [ "${cp.key}", ${cp.element["xreferenced type"]} ]`,
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
            `#endif`,
            ``,
        ]
    }
}
