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
                callback: cp => {
                    return [
                        ``,
                        `export interface I${sanitize(cp.key)} {`,
                        () => {
                            return [
                                cp.element.methods.getAlphabeticalOrdering({}).map({
                                    callback: cp => {
                                        return [
                                            `${sanitize(cp.key)}(`,
                                            cp.element.parameters.getAlphabeticalOrdering({}).mapWithSeparator<fp.InlinePart>({
                                                onSeparator: () => `,`,
                                                onElement: cp => [
                                                    ` readonly `,
                                                    cp.key,
                                                    `: `,
                                                    cp.element.type,
                                                ],
                                            }),
                                            `)`,
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
                                                            $["raw return type"],
                                                        ]
                                                    }
                                                    case "procedure": {
                                                        return `void`
                                                    }
                                                    default:
                                                        return assertUnreachable(cp.element.type[0])
                                                }
                                            })(),
                                        ]
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
