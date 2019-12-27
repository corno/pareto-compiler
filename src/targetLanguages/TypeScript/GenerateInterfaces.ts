//tslint:disable: no-shadowed-variable
import * as fp from "fountain-pen"
import {
    CompilationUnit,
} from "../../generated/types"

// function assertUnreachable<T>(_x: never): T {
//     throw new Error("Unreachable")
// }

function sanitize(key: string) {
    return key.replace(/ /g, "_")
}

export class GenerateInterfaces {
    public CompilationUnit(compilationUnit: CompilationUnit): fp.IParagraph {
        return [
            `//tslint:disable: ban-types`,
            `import * as gt from "./genericTypes"`,
            compilationUnit.interfaces.getAlphabeticalOrdering({}).map<fp.IParagraph>({
                callback: (iface, key) => {
                    return [
                        ``,
                        `export interface ${sanitize(key)} {`,
                        () => {
                            return [
                                iface.methods.getAlphabeticalOrdering({}).map({
                                    callback: (method, methodName) => {
                                        return fp.line([
                                            `${sanitize(methodName)}(`,
                                            fp.line(method.parameters.getAlphabeticalOrdering({}).mapWithSeparator<fp.InlinePart>({
                                                onSeparator: () => `, `,
                                                onElement: (param, paramKeyGetter) => fp.line([
                                                    ` readonly `,
                                                    paramKeyGetter,
                                                    `: `,
                                                    param.type,
                                                ]),
                                            })),
                                            `)`,
                                        ])
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
