import {
    //@ts-ignore
    Constraint,
    //@ts-ignore
    Dictionary,
    //@ts-ignore
    DictionaryOrdering,
    //@ts-ignore
    List,
    //@ts-ignore
    Reference,
} from "lingua-franca"

export type DefaultInitialize = {
    readonly "initializer": string
}

export type ParametrizedInitialize = {
    readonly "type": string
}

export type PropertyInitialization =
    | ["default", DefaultInitialize]
    | ["parametrized", ParametrizedInitialize]

export type ClassProperty = {
    readonly "initialization": PropertyInitialization
}

export type MethodParameter = {
    readonly "type": string
}

export type Statement = {
    readonly "raw value": string
}

export type Method = {
    readonly "parameters": Dictionary<MethodParameter>
    readonly "statements": List<Statement>
}

export type Class = {
    readonly "properties": Dictionary<ClassProperty>
    readonly "methods": Dictionary<Method>
}

export type Dummy = {
    readonly "classes": Dictionary<Class>
}
