//tslint:disable: ban-types
import * as gt from "./genericTypes"

export type Algorithm = {
    readonly "type": AlgorithmType
}

export type AlgorithmType =
    | [ "class", Class ]
    | [ "function", Function ]

export type BaseInterface = {
    readonly "interface": GenericInterfaceReference
}

export type Block = {
    readonly "statements": gt.List<Statement>
    readonly "variables": gt.OrderedDictionary<Variable, VariableOrderings>
}

export type CallbackReturnValueIsGuaranteed = {
}

export type CallbackReturnValueIsNotGuaranteed = {
}

export type Class = {
    readonly "methods": gt.Dictionary<Method>
    readonly "properties": gt.Dictionary<ClassProperty>
}

export type ClassProperty = {
    readonly "initialization": PropertyInitialization
}

export type CompilationUnit = {
    readonly "algorithms": gt.Dictionary<Algorithm>
    readonly "generic interface declarations": gt.Dictionary<GenericInterfaceDeclaration>
    readonly "types": gt.Dictionary<Type>
}

export type DefaultInitialize = {
    readonly "initializer": string
}

export type Function = {
    readonly "specification": FunctionSpecification
}

export type FunctionSpecification = {
    readonly "block": Block
    readonly "parameters": gt.Dictionary<Parameter>
}

export type GenericArgument = {
    readonly "type": GenericReturnType
}

export type GenericCallback = {
    readonly "parameters": gt.Dictionary<GenericCallbackParameter>
    readonly "type": GenericCallbackType
}

export type GenericCallbackFunction = {
    readonly "guaranteed": IsCallbackReturnValueGuaranteed
    readonly "type": GenericInType
}

export type GenericCallbackParameter = {
    readonly "type": GenericReturnType
}

export type GenericCallbackProcedure = {
}

export type GenericCallbackType =
    | [ "function", GenericCallbackFunction ]
    | [ "procedure", GenericCallbackProcedure ]

export type GenericFunction = {
    readonly "guaranteed": IsGenericReturnValueGuaranteed
    readonly "type": GenericReturnType
}

export type GenericFunctionType =
    | [ "function", GenericFunction ]
    | [ "procedure", GenericProcedure ]

export type GenericInterfaceDeclaration = {
    readonly "base interfaces": gt.Dictionary<BaseInterface>
    readonly "methods": gt.Dictionary<GenericInterfaceMethod>
    readonly "parameters": gt.Dictionary<GenericInterfaceParameter>
}

export type GenericInterfaceMethod = {
    readonly "parameters": gt.Dictionary<GenericMethodParameter>
    readonly "type": GenericFunctionType
    readonly "type parameters": gt.Dictionary<GenericMethodTypeParameter>
}

export type GenericInterfaceParameter = {
}

export type GenericInterfaceReference = {
    readonly "interface": string
    readonly "type arguments": gt.Dictionary<GenericArgument>
}

export type GenericInType = {
    readonly "type": GenericInTypeType
}

export type GenericInTypeType =
    | [ "callback", GenericCallback ]
    | [ "method type parameter", InReferenceToMethodTypeParameter ]
    | [ "string", StringGenericInType ]

export type GenericMethodParameter = {
    readonly "type": GenericInType
}

export type GenericMethodTypeParameter = {
}

export type GenericProcedure = {
}

export type GenericReturnType = {
    readonly "type": GenericReturnTypeType
}

export type GenericReturnTypeType =
    | [ "interface parameter", ReferenceToInterfaceParameter ]
    | [ "method type parameter", ReferenceToMethodTypeParameter ]
    | [ "reference to generic declaration", ReferenceToGenericDeclaration ]
    | [ "string", StringGenericReturnType ]

export type GenericReturnValueIsGuaranteed = {
}

export type GenericReturnValueIsNotGuaranteed = {
}

export type Initializer = {
    readonly "type": InitializerType
}

export type InitializerType =
    | [ "object", ObjectInitializer ]
    | [ "raw", RawInitializer ]

export type InReferenceToMethodTypeParameter = {
    readonly "type parameter": string
}

export type IsCallbackReturnValueGuaranteed =
    | [ "no", CallbackReturnValueIsNotGuaranteed ]
    | [ "yes", CallbackReturnValueIsGuaranteed ]

export type IsGenericReturnValueGuaranteed =
    | [ "no", GenericReturnValueIsNotGuaranteed ]
    | [ "yes", GenericReturnValueIsGuaranteed ]

export type Method = {
    readonly "function specification": FunctionSpecification
}

export type ObjectInitializer = {
    readonly "properties": gt.Dictionary<PropertyInitialier>
}

export type ObjectProperty = {
    readonly "type": PropertyType
}

export type ObjectType = {
    readonly "properties": gt.Dictionary<ObjectProperty>
}

export type Parameter = {
    readonly "type": string
}

export type ParametrizedInitialize = {
    readonly "type": string
}

export type PropertyInitialier = {
    readonly "initializer": Initializer
}

export type PropertyInitialization =
    | [ "default", DefaultInitialize ]
    | [ "parametrized", ParametrizedInitialize ]

export type PropertyType =
    | [ "raw", RawPropertyType ]
    | [ "reference", TypeReference ]
    | [ "string", String ]

export type RawInitializer = {
    readonly "rawstring": string
}

export type RawPropertyType = {
    readonly "raw": string
}

export type ReferenceToGenericDeclaration = {
    readonly "interface": GenericInterfaceReference
}

export type ReferenceToInterfaceParameter = {
    readonly "parameter": string
}

export type ReferenceToMethodTypeParameter = {
    readonly "type parameter": string
}

export type Statement = {
    readonly "raw value": string
}

export type String = {
}

export type StringGenericInType = {
}

export type StringGenericReturnType = {
}

export type TaggedUnion = {
    readonly "alternatives": gt.Dictionary<TaggedUnionAlternative>
}

export type TaggedUnionAlternative = {
    readonly "referenced type": string
}

export type Type = {
    readonly "type": TypeType
}

export type TypeReference = {
    readonly "referenced type": string
}

export type TypeType =
    | [ "object", ObjectType ]
    | [ "tagged union", TaggedUnion ]

export type Variable = {
    readonly "initializer": Initializer
}

export type VariableOrderings = {
    readonly "dependencies": gt.DictionaryOrdering<Variable>
}
