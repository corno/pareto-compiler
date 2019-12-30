//tslint:disable: ban-types
//@ts-ignore
import * as gt from "./genericTypes"

export type AlgorithmUnit = {
    readonly "type": AlgorithmUnitType
}

export type AlgorithmUnitType =
    | [ "class", Class ]
    | [ "function", Function ]

export type ArgumentType =
    | [ "callback", Callback ]
    | [ "initializer", InitializerArgument ]

export type BaseInterface = {
    readonly "interface": GenericInterfaceReference
}

export type Block = {
    readonly "statements": gt.List<Statement>
    readonly "variables": gt.OrderedDictionary<Variable, VariableOrderings>
}

export type Callback = {
    readonly "block": Block
}

export type CallbackReturnValueIsGuaranteed = {
}

export type CallbackReturnValueIsNotGuaranteed = {
}

export type Class = {
    readonly "methods": gt.Dictionary<ClassMethod>
    readonly "properties": gt.Dictionary<ClassProperty>
}

export type ClassMethod = {
    readonly "specification": FunctionSpecification
}

export type ClassProperty = {
    readonly "initialization": PropertyInitialization
}

export type CompilationUnit = {
    readonly "algorithm units": gt.Dictionary<AlgorithmUnit>
    readonly "generic interface declarations": gt.Dictionary<GenericInterfaceDeclaration>
    readonly "interfaces": gt.Dictionary<Interface>
    readonly "types": gt.Dictionary<Type>
}

export type ConstructorCall = {
    readonly "arguments": gt.Dictionary<ConstructorCallArgurment>
    readonly "path": string
}

export type ConstructorCallArgurment = {
    readonly "initializer": Initializer
}

export type DefaultInitialize = {
    readonly "initializer": string
}

export type DerivedTaggedUnionType = {
}

export type Function = {
    readonly "specification": FunctionSpecification
}

export type FunctionAccess =
    | [ "private", Private ]
    | [ "public", Public ]

export type FunctionCall = {
    readonly "arguments": gt.Dictionary<FunctionCallArgurment>
    readonly "path": string
}

export type FunctionCallArgurment = {
    readonly "type": ArgumentType
}

export type FunctionSpecification = {
    readonly "access": FunctionAccess
    readonly "block": Block
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

export type InitializerArgument = {
    readonly "initializer": Initializer
}

export type InitializerType =
    | [ "constructor call", ConstructorCall ]
    | [ "function call", FunctionCall ]
    | [ "object", ObjectInitializer ]
    | [ "rawx", RawInitializer ]
    | [ "selection", SelectionInitializer ]
    | [ "tagged union", TaggedUnionInitializer ]

export type InReferenceToMethodTypeParameter = {
    readonly "type parameter": gt.Reference<GenericMethodTypeParameter>
}

export type Interface = {
    readonly "methods": gt.Dictionary<InterfaceMethod>
}

export type InterfaceFunction = {
    readonly "guaranteed": IsInterfaceReturnValueGuaranteed
    readonly "raw return type": string
}

export type InterfaceMethod = {
    readonly "parameters": gt.Dictionary<InterfaceMethodParameter>
    readonly "type": InterfaceMethodType
}

export type InterfaceMethodParameter = {
    readonly "type": string
}

export type InterfaceMethodType =
    | [ "function", InterfaceFunction ]
    | [ "procedure", InterfaceProcedure ]

export type InterfaceProcedure = {
}

export type InterfaceReturnValueIsGuaranteed = {
}

export type InterfaceReturnValueIsNotGuaranteed = {
}

export type IsCallbackReturnValueGuaranteed =
    | [ "no", CallbackReturnValueIsNotGuaranteed ]
    | [ "yes", CallbackReturnValueIsGuaranteed ]

export type IsGenericReturnValueGuaranteed =
    | [ "no", GenericReturnValueIsNotGuaranteed ]
    | [ "yes", GenericReturnValueIsGuaranteed ]

export type IsInterfaceReturnValueGuaranteed =
    | [ "no", InterfaceReturnValueIsNotGuaranteed ]
    | [ "yes", InterfaceReturnValueIsGuaranteed ]

export type ObjectInitializer = {
    readonly "properties": gt.Dictionary<PropertyInitialier>
}

export type ObjectProperty = {
    readonly "type": PropertyType
}

export type ObjectType = {
    readonly "properties": gt.Dictionary<ObjectProperty>
}

export type ParametrizedInitialize = {
    readonly "type": string
}

export type Private = {
    readonly "parameters": gt.Dictionary<PrivateParameter>
}

export type PrivateParameter = {
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

export type Public = {
    readonly "parameters": gt.OrderedDictionary<PublicParameter, PublicParameterOrderings>
}

export type PublicParameter = {
    readonly "type": string
}

export type PublicParameterOrderings = {
    readonly "dependencies": gt.DictionaryOrdering<PublicParameter>
}

export type RawInitializer = {
    readonly "rawstring": string
}

export type RawPropertyType = {
    readonly "raw": string
}

export type ReferencedTaggedUnionType = {
    readonly "type": string
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

export type SelectionInitializer = {
    readonly "start point": SelectionStartPoint
    readonly "steps": gt.List<SelectionStep>
}

export type SelectionStartPoint =
    | [ "callback parameter", StartFromCallbackParameter ]
    | [ "parameter", StartFromParameter ]
    | [ "property", StartFromProperty ]
    | [ "variable", StartFromVariable ]

export type SelectionStep = {
    readonly "rawselectionstring": string
}

export type StartFromCallbackParameter = {
    readonly "parameter": string
}

export type StartFromParameter = {
    readonly "parameter": string
}

export type StartFromProperty = {
    readonly "property": string
}

export type StartFromVariable = {
    readonly "variable": string
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

export type TaggedUnionInitializer = {
    readonly "initializer": Initializer
    readonly "state": string
    readonly "type specification": TaggedUnionTypeSpecification
}

export type TaggedUnionTypeSpecification =
    | [ "derived", DerivedTaggedUnionType ]
    | [ "reference", ReferencedTaggedUnionType ]

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
