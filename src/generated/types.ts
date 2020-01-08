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
    readonly "xpath": string
}

export type ConstructorCallArgurment = {
    readonly "initializer": Initializer
}

export type DefaultInitialize = {
    readonly "xinitializer": string
}

export type DerivedTaggedUnionType = {
}

export type False = {
}

export type Function = {
    readonly "specification": FunctionSpecification
}

export type FunctionAccess =
    | [ "private", Private ]
    | [ "public", Public ]

export type FunctionCall = {
    readonly "arguments": gt.Dictionary<FunctionCallArgurment>
    readonly "xpath": string
}

export type FunctionCallArgurment = {
    readonly "type": ArgumentType
}

export type FunctionCallInitializer = {
    readonly "call": FunctionCall
}

export type FunctionCallStatement = {
    readonly "call": FunctionCall
}

export type FunctionSpecification = {
    readonly "access": FunctionAccess
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

export type GenericFunctionCallInitializer = {
    readonly "call": FunctionCall
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
    readonly "type arguments": gt.Dictionary<GenericArgument>
    readonly "xinterface": string
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

export type GenericTypeArguments = {
    readonly "xraw": string
}

export type GenericTypeProperty = {
    readonly "arguments": gt.Dictionary<GenericTypeArguments>
    readonly "referenced type": gt.Reference<GenericInterfaceDeclaration>
}

export type Initializer = {
    readonly "type": InitializerType
}

export type InitializerArgument = {
    readonly "initializer": Initializer
}

export type InitializerType =
    | [ "constructor call", ConstructorCall ]
    | [ "false", False ]
    | [ "function call", FunctionCallInitializer ]
    | [ "generic function call", GenericFunctionCallInitializer ]
    | [ "object", ObjectInitializer ]
    | [ "rawx", RawInitializer ]
    | [ "selection", SelectionInitializer ]
    | [ "string literal", StringLiteral ]
    | [ "tagged union", TaggedUnionInitializer ]
    | [ "true", True ]

export type InReferenceToMethodTypeParameter = {
    readonly "type parameter": gt.Reference<GenericMethodTypeParameter>
}

export type Interface = {
    readonly "methods": gt.Dictionary<InterfaceMethod>
}

export type InterfaceFunction = {
    readonly "guaranteed": IsInterfaceReturnValueGuaranteed
    readonly "xraw return type": string
}

export type InterfaceMethod = {
    readonly "parameters": gt.Dictionary<InterfaceMethodParameter>
    readonly "type": InterfaceMethodType
}

export type InterfaceMethodParameter = {
    readonly "xtype": string
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
    readonly "xtype": string
}

export type Private = {
    readonly "block": Block
    readonly "parameters": gt.Dictionary<PrivateParameter>
}

export type PrivateParameter = {
    readonly "type": PrivateParameterType
}

export type PrivateParameterType =
    | [ "rawz", RawPrivateParameter ]

export type PropertyInitialier = {
    readonly "initializer": Initializer
}

export type PropertyInitialization =
    | [ "default", DefaultInitialize ]
    | [ "parametrized", ParametrizedInitialize ]

export type PropertyType =
    | [ "generic type", GenericTypeProperty ]
    | [ "raw", RawPropertyType ]
    | [ "reference", TypeReference ]
    | [ "string", String ]

export type Public = {
    readonly "block": Block
    readonly "parameters": gt.OrderedDictionary<PublicParameter, PublicParameterOrderings>
}

export type PublicParameter = {
    readonly "type": PublicParameterType
}

export type PublicParameterOrderings = {
    readonly "dependencies": gt.DictionaryOrdering<PublicParameter>
}

export type PublicParameterType =
    | [ "rawz", RawPublicParameter ]

export type RawInitializer = {
    readonly "xrawstring": string
}

export type RawPrivateParameter = {
    readonly "rawPrivParam": string
}

export type RawPropertyType = {
    readonly "xraw": string
}

export type RawPublicParameter = {
    readonly "rawPubParam": string
}

export type RawStatement = {
    readonly "xraw value": string
}

export type ReferencedTaggedUnionType = {
    readonly "xtype": string
}

export type ReferenceToGenericDeclaration = {
    readonly "interface": GenericInterfaceReference
}

export type ReferenceToInterfaceParameter = {
    readonly "xparameter": string
}

export type ReferenceToMethodTypeParameter = {
    readonly "type parameter": gt.Reference<GenericMethodTypeParameter>
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
    readonly "xrawselectionstring": string
}

export type StartFromCallbackParameter = {
    readonly "xparameter": string
}

export type StartFromParameter = {
    readonly "xparameter": string
}

export type StartFromProperty = {
    readonly "xproperty": string
}

export type StartFromVariable = {
    readonly "xvariable": string
}

export type Statement = {
    readonly "type": StatementType
}

export type StatementType =
    | [ "call", FunctionCallStatement ]
    | [ "raw", RawStatement ]
    | [ "sub block", SubBlock ]
    | [ "switch", SwitchStatement ]

export type String = {
}

export type StringGenericInType = {
}

export type StringGenericReturnType = {
}

export type StringLiteral = {
    readonly "value": string
}

export type SubBlock = {
    readonly "block": Block
}

export type SwitchCase = {
    readonly "block": Block
}

export type SwitchStatement = {
    readonly "cases": gt.Dictionary<SwitchCase>
    readonly "xraw expression": string
}

export type TaggedUnion = {
    readonly "alternatives": gt.Dictionary<TaggedUnionAlternative>
}

export type TaggedUnionAlternative = {
    readonly "xreferenced type": string
}

export type TaggedUnionInitializer = {
    readonly "initializer": Initializer
    readonly "type specification": TaggedUnionTypeSpecification
    readonly "xstate": string
}

export type TaggedUnionTypeSpecification =
    | [ "derived", DerivedTaggedUnionType ]
    | [ "reference", ReferencedTaggedUnionType ]

export type True = {
}

export type Type = {
    readonly "type": TypeType
}

export type TypeReference = {
    readonly "xreferenced type": string
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
