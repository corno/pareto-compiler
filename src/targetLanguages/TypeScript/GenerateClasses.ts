import * as fp from "fountain-pen"
import { assertUnreachable } from "lingua-franca-building"
import {
    Dummy
} from "../../generated/schema"

function sanitize(key: string) {
    return key
}

export class GenerateClasses {
    public Dummy(dummy: Dummy): fp.IParagraph {
        return [
            dummy.classes.getAlphabeticalOrdering().map((clss, keyGetter) => {
                return fp.paragraph([
                    ``,
                    `class ${keyGetter(sanitize)} {`,
                    () => {
                        return [
                            //the properties
                            clss.properties.getAlphabeticalOrdering().map((prop, propKeyGetter) => {
                                return [
                                    fp.line([
                                        `private readonly ${propKeyGetter(sanitize)}`,
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
                            }),
                            //the possible constructor
                            clss.properties.getAlphabeticalOrdering().filter(prop => prop.initialization[0] === "parametrized" ? prop.initialization[1] : null).onEmpty(
                                () => [],
                                parametrizedProperties => [
                                    fp.line([
                                        `constructor(`,
                                        fp.line(parametrizedProperties.map((_pp, propKeyGetter) => {
                                            return `${propKeyGetter(sanitize)}: ${_pp.type}`
                                        })),
                                        `) {`,
                                    ]),
                                    () => {
                                        return parametrizedProperties.map((_pp, propKeyGetter) => {
                                            return [
                                                `this.${propKeyGetter(sanitize)} = ${propKeyGetter(sanitize)}`,
                                            ]
                                        })
                                    },
                                    `}`,
                                ],
                            ),
                            //the methods
                            clss.methods.getAlphabeticalOrdering().map((method, methodKeyGetter) => {
                                return [
                                    fp.line([
                                        `public ${methodKeyGetter(sanitize)}(`,
                                        fp.line(method.parameters.getAlphabeticalOrdering().map((param, paramKeyGetter) => {
                                            return `${paramKeyGetter(sanitize)}: ${param.type}`
                                        })),
                                        `) {`,
                                    ]),
                                    () => {
                                        return method.statements.map(statement => {
                                            return [
                                                statement["raw value"],
                                            ]
                                        })
                                    },
                                    `}`,
                                ]
                            }),
                        ]
                    },
                    `}`,
                ])
            }),
        ]
    }
}
