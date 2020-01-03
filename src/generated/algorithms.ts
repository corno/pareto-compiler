// tslint:disable: max-classes-per-file object-literal-key-quotes variable-name no-string-literal member-ordering no-shadowed-variable no-empty
import { gf } from "../genericFunctions"
import * as gt from "./genericTypes"
import * as i from "./interfaces"
import * as t from "./types"

function assertUnreachable(_x: never) { throw new Error("Unreachable") }


export class CAlgorithmUnitBuilder {
    private readonly builder: gt.IDictionaryBuilder<t.AlgorithmUnit>
    constructor(_p: {
        "builder": gt.IDictionaryBuilder<t.AlgorithmUnit>
    }) {
        this.builder = _p["builder"]
    }
    public AlgorithmUnit(
        key: string,
        par__type: (builder: CAlgorithmUnitTypeBuilder) => t.AlgorithmUnitType,
    ) {
        const x = this.x_AlgorithmUnit({
            "key": key,
            "par__type": p => par__type(p.builder),
        })
        return x
    }
    private x_AlgorithmUnit(_p: {
        readonly "key": string
        readonly "par__type": (p: { builder: CAlgorithmUnitTypeBuilder }) => t.AlgorithmUnitType
    }) {
        const var_type = _p["par__type"]({
            "builder": new CAlgorithmUnitTypeBuilder({
            }),
        })
        const entry = {
            "type": var_type,
        }
        this.builder.add({ key: _p.key, entry: entry })
        return this
    }
}

export class CAlgorithmUnitTypeBuilder {
    constructor(_p: {
    }) {
    }
    public class(
        par__properties: (builder: CClassPropertyBuilder) => void,
        par__methods: (builder: CClassMethodBuilder) => void,
    ) {
        const x = this.x_class({
            "par__methods": p => par__methods(p.builder),
            "par__properties": p => par__properties(p.builder),
        })
        return x
    }
    public function(
        par__specification_access: (builder: CFunctionAccessBuilder) => t.FunctionAccess,
        par__specification_block_variables: (builder: CVariableBuilder) => void,
        par__specification_block_statements: (builder: CStatementBuilder) => void,
    ) {
        const x = this.x_function({
            "par__specification_access": p => par__specification_access(p.builder),
            "par__specification_block_statements": p => par__specification_block_statements(p.builder),
            "par__specification_block_variables": p => par__specification_block_variables(p.builder),
        })
        return x
    }
    private x_class(_p: {
        readonly "par__methods": (p: { builder: CClassMethodBuilder }) => void
        readonly "par__properties": (p: { builder: CClassPropertyBuilder }) => void
    }) {
        const var_properties = gf.createDictionary<t.ClassProperty>({
            "callback": _cp => {
                const x = new CClassPropertyBuilder({
                    "builder": _cp["builder"],
                })
                const y = _p["par__properties"]({
                    "builder": x,
                })
                return y
            },
            "reporter": gt.createSimpleConflictingEntryReporter({
                "reportError": (_dependent, errorStr) => { console.error(errorStr) },
                "typeInfo": "ClassProperty",
            }),
        })
        const var_methods = gf.createDictionary<t.ClassMethod>({
            "callback": _cp => {
                const x = new CClassMethodBuilder({
                    "builder": _cp["builder"],
                })
                const y = _p["par__methods"]({
                    "builder": x,
                })
                return y
            },
            "reporter": gt.createSimpleConflictingEntryReporter({
                "reportError": (_dependent, errorStr) => { console.error(errorStr) },
                "typeInfo": "ClassMethod",
            }),
        })
        const sg = ((): t.AlgorithmUnitType => {
            return ["class", {
                "methods": var_methods,
                "properties": var_properties,
            }]
        })()
        return sg
    }
    private x_function(_p: {
        readonly "par__specification_access": (p: { builder: CFunctionAccessBuilder }) => t.FunctionAccess
        readonly "par__specification_block_statements": (p: { builder: CStatementBuilder }) => void
        readonly "par__specification_block_variables": (p: { builder: CVariableBuilder }) => void
    }) {
        const var_specification = create_function_specification({
            "par__access": _p["par__specification_access"],
            "par__block_statements": _p["par__specification_block_statements"],
            "par__block_variables": _p["par__specification_block_variables"],
        })
        const sg = ((): t.AlgorithmUnitType => {
            return ["function", {
                "specification": var_specification,
            }]
        })()
        return sg
    }
}

export class CArgumentTypeBuilder {
    private readonly param_function_parameters: gt.ILookup<t.PrivateParameter>
    constructor(_p: {
        "param_function parameters": gt.ILookup<t.PrivateParameter>
    }) {
        this.param_function_parameters = _p["param_function parameters"]
    }
    public callback(
        par__block_variables: (builder: CVariableBuilder) => void,
        par__block_statements: (builder: CStatementBuilder) => void,
    ) {
        const x = this.x_callback({
            "par__block_statements": p => par__block_statements(p.builder),
            "par__block_variables": p => par__block_variables(p.builder),
            "param_function parameters": this.param_function_parameters,
        })
        return x
    }
    public initializer(
        par__initializer_type: (builder: CInitializerTypeBuilder) => t.InitializerType,
    ) {
        const x = this.x_initializer({
            "par__initializer_type": p => par__initializer_type(p.builder),
            "param_function parameters": this.param_function_parameters,
        })
        return x
    }
    private x_callback(_p: {
        readonly "par__block_statements": (p: { builder: CStatementBuilder }) => void
        readonly "par__block_variables": (p: { builder: CVariableBuilder }) => void
        readonly "param_function parameters": gt.ILookup<t.PrivateParameter>
    }) {
        const var_block = create_block({
            "par__statements": _p["par__block_statements"],
            "par__variables": _p["par__block_variables"],
            "param_function parameters": _p["param_function parameters"],
        })
        const sg = ((): t.ArgumentType => {
            return ["callback", {
                "block": var_block,
            }]
        })()
        return sg
    }
    private x_initializer(_p: {
        readonly "par__initializer_type": (p: { builder: CInitializerTypeBuilder }) => t.InitializerType
        readonly "param_function parameters": gt.ILookup<t.PrivateParameter>
    }) {
        const var_initializer = create_initializer({
            "par__type": _p["par__initializer_type"],
            "param_function parameters": _p["param_function parameters"],
        })
        const sg = ((): t.ArgumentType => {
            return ["initializer", {
                "initializer": var_initializer,
            }]
        })()
        return sg
    }
}

export class CBaseInterfaceBuilder {
    private readonly builder: gt.IDictionaryBuilder<t.BaseInterface>
    constructor(_p: {
        "builder": gt.IDictionaryBuilder<t.BaseInterface>
    }) {
        this.builder = _p["builder"]
    }
    public BaseInterface(
        key: string,
        par__interface_interface: string,
        par__interface_type_arguments: (builder: CGenericArgumentBuilder) => void,
    ) {
        const x = this.x_BaseInterface({
            "key": key,
            "par__interface_interface": par__interface_interface,
            "par__interface_type arguments": p => par__interface_type_arguments(p.builder),
        })
        return x
    }
    private x_BaseInterface(_p: {
        readonly "key": string
        readonly "par__interface_interface": string
        readonly "par__interface_type arguments": (p: { builder: CGenericArgumentBuilder }) => void
    }) {
        const var_interface = create_generic_interface_reference({
            "par__interface": _p["par__interface_interface"],
            "par__type arguments": _p["par__interface_type arguments"],
            "param_method type parameters": gf.createNonExistentLookup({}),
        })
        const entry = {
            "interface": var_interface,
        }
        this.builder.add({ key: _p.key, entry: entry })
        return this
    }
}

export class CClassMethodBuilder {
    private readonly builder: gt.IDictionaryBuilder<t.ClassMethod>
    constructor(_p: {
        "builder": gt.IDictionaryBuilder<t.ClassMethod>
    }) {
        this.builder = _p["builder"]
    }
    public ClassMethod(
        key: string,
        par__specification_access: (builder: CFunctionAccessBuilder) => t.FunctionAccess,
        par__specification_block_variables: (builder: CVariableBuilder) => void,
        par__specification_block_statements: (builder: CStatementBuilder) => void,
    ) {
        const x = this.x_ClassMethod({
            "key": key,
            "par__specification_access": p => par__specification_access(p.builder),
            "par__specification_block_statements": p => par__specification_block_statements(p.builder),
            "par__specification_block_variables": p => par__specification_block_variables(p.builder),
        })
        return x
    }
    private x_ClassMethod(_p: {
        readonly "key": string
        readonly "par__specification_access": (p: { builder: CFunctionAccessBuilder }) => t.FunctionAccess
        readonly "par__specification_block_statements": (p: { builder: CStatementBuilder }) => void
        readonly "par__specification_block_variables": (p: { builder: CVariableBuilder }) => void
    }) {
        const var_specification = create_function_specification({
            "par__access": _p["par__specification_access"],
            "par__block_statements": _p["par__specification_block_statements"],
            "par__block_variables": _p["par__specification_block_variables"],
        })
        const entry = {
            "specification": var_specification,
        }
        this.builder.add({ key: _p.key, entry: entry })
        return this
    }
}

export class CClassPropertyBuilder {
    private readonly builder: gt.IDictionaryBuilder<t.ClassProperty>
    constructor(_p: {
        "builder": gt.IDictionaryBuilder<t.ClassProperty>
    }) {
        this.builder = _p["builder"]
    }
    public ClassProperty(
        key: string,
        par__initialization: (builder: CPropertyInitializationBuilder) => t.PropertyInitialization,
    ) {
        const x = this.x_ClassProperty({
            "key": key,
            "par__initialization": p => par__initialization(p.builder),
        })
        return x
    }
    private x_ClassProperty(_p: {
        readonly "key": string
        readonly "par__initialization": (p: { builder: CPropertyInitializationBuilder }) => t.PropertyInitialization
    }) {
        const var_initialization = _p["par__initialization"]({
            "builder": new CPropertyInitializationBuilder({
            }),
        })
        const entry = {
            "initialization": var_initialization,
        }
        this.builder.add({ key: _p.key, entry: entry })
        return this
    }
}

export class CCompilationUnitBuilder {
    constructor(_p: {
    }) {
    }
    public build(
        par__generic_interface_declarations: (builder: CGenericInterfaceDeclarationBuilder) => void,
        par__types: (builder: CTypeBuilder) => void,
        par__interfaces: (builder: CInterfaceBuilder) => void,
        par__algorithm_units: (builder: CAlgorithmUnitBuilder) => void,
    ) {
        const x = this.x_build({
            "par__algorithm units": p => par__algorithm_units(p.builder),
            "par__generic interface declarations": p => par__generic_interface_declarations(p.builder),
            "par__interfaces": p => par__interfaces(p.builder),
            "par__types": p => par__types(p.builder),
        })
        return x
    }
    private x_build(_p: {
        readonly "par__algorithm units": (p: { builder: CAlgorithmUnitBuilder }) => void
        readonly "par__generic interface declarations": (p: { builder: CGenericInterfaceDeclarationBuilder }) => void
        readonly "par__interfaces": (p: { builder: CInterfaceBuilder }) => void
        readonly "par__types": (p: { builder: CTypeBuilder }) => void
    }) {
        const var_generic_interface_declarations = gf.createDictionary<t.GenericInterfaceDeclaration>({
            "callback": _cp => {
                const x = new CGenericInterfaceDeclarationBuilder({
                    "builder": _cp["builder"],
                })
                const y = _p["par__generic interface declarations"]({
                    "builder": x,
                })
                return y
            },
            "reporter": gt.createSimpleConflictingEntryReporter({
                "reportError": (_dependent, errorStr) => { console.error(errorStr) },
                "typeInfo": "GenericInterfaceDeclaration",
            }),
        })
        const var_types = gf.createDictionary<t.Type>({
            "callback": _cp => {
                const x = new CTypeBuilder({
                    "builder": _cp["builder"],
                    "propvar_generic interface declarations": gf.createLookup({ dict: var_generic_interface_declarations }),
                })
                const y = _p["par__types"]({
                    "builder": x,
                })
                return y
            },
            "reporter": gt.createSimpleConflictingEntryReporter({
                "reportError": (_dependent, errorStr) => { console.error(errorStr) },
                "typeInfo": "Type",
            }),
        })
        const var_interfaces = gf.createDictionary<t.Interface>({
            "callback": _cp => {
                const x = new CInterfaceBuilder({
                    "builder": _cp["builder"],
                })
                const y = _p["par__interfaces"]({
                    "builder": x,
                })
                return y
            },
            "reporter": gt.createSimpleConflictingEntryReporter({
                "reportError": (_dependent, errorStr) => { console.error(errorStr) },
                "typeInfo": "Interface",
            }),
        })
        const var_algorithm_units = gf.createDictionary<t.AlgorithmUnit>({
            "callback": _cp => {
                const x = new CAlgorithmUnitBuilder({
                    "builder": _cp["builder"],
                })
                const y = _p["par__algorithm units"]({
                    "builder": x,
                })
                return y
            },
            "reporter": gt.createSimpleConflictingEntryReporter({
                "reportError": (_dependent, errorStr) => { console.error(errorStr) },
                "typeInfo": "AlgorithmUnit",
            }),
        })
        const entry = {
            "algorithm units": var_algorithm_units,
            "generic interface declarations": var_generic_interface_declarations,
            "interfaces": var_interfaces,
            "types": var_types,
        }
        return entry
    }
}

export class CConstructorCallArgurmentBuilder {
    private readonly builder: gt.IDictionaryBuilder<t.ConstructorCallArgurment>
    private readonly param_function_parameters: gt.ILookup<t.PrivateParameter>
    constructor(_p: {
        "builder": gt.IDictionaryBuilder<t.ConstructorCallArgurment>
        "param_function parameters": gt.ILookup<t.PrivateParameter>
    }) {
        this.builder = _p["builder"]
        this.param_function_parameters = _p["param_function parameters"]
    }
    public ConstructorCallArgurment(
        key: string,
        par__initializer_type: (builder: CInitializerTypeBuilder) => t.InitializerType,
    ) {
        const x = this.x_ConstructorCallArgurment({
            "key": key,
            "par__initializer_type": p => par__initializer_type(p.builder),
            "param_function parameters": this.param_function_parameters,
        })
        return x
    }
    private x_ConstructorCallArgurment(_p: {
        readonly "key": string
        readonly "par__initializer_type": (p: { builder: CInitializerTypeBuilder }) => t.InitializerType
        readonly "param_function parameters": gt.ILookup<t.PrivateParameter>
    }) {
        const var_initializer = create_initializer({
            "par__type": _p["par__initializer_type"],
            "param_function parameters": _p["param_function parameters"],
        })
        const entry = {
            "initializer": var_initializer,
        }
        this.builder.add({ key: _p.key, entry: entry })
        return this
    }
}

function create_block(_p: {
    readonly "par__statements": (p: { builder: CStatementBuilder }) => void
    readonly "par__variables": (p: { builder: CVariableBuilder }) => void
    readonly "param_function parameters": gt.ILookup<t.PrivateParameter>
}) {
    const var_variables = gf.createOrderedDictionary<t.Variable, t.VariableOrderings>({
        "callback": _cp => {
            const x = new CVariableBuilder({
                "builder": _cp["builder"],
                "param_function parameters": _p["param_function parameters"],
            })
            const y = _p["par__variables"]({
                "builder": x,
            })
            return y
        },
        "createOrderings": _cp => {
            const z = {
                "dependencies": _cp.orderingCreator.createBasedOnInsertionOrder({}),
            }
            return z
        },
        "reporter": gt.createSimpleConflictingEntryReporter({
            "reportError": (_dependent, errorStr) => { console.error(errorStr) },
            "typeInfo": "Variable",
        }),
    })
    const var_statements = gf.createList<t.Statement>({
        "callback": _cp => {
            const x = new CStatementBuilder({
                "builder": _cp["builder"],
                "param_function parameters": _p["param_function parameters"],
            })
            const y = _p["par__statements"]({
                "builder": x,
            })
            return y
        },
    })
    const component = {
        "statements": var_statements,
        "variables": var_variables,
    }
    return component
}

function create_function_call(_p: {
    readonly "par__arguments": (p: { builder: CFunctionCallArgurmentBuilder }) => void
    readonly "par__path": string
    readonly "param_function parameters": gt.ILookup<t.PrivateParameter>
}) {
    const var_path = _p["par__path"]
    const var_arguments = gf.createDictionary<t.FunctionCallArgurment>({
        "callback": _cp => {
            const x = new CFunctionCallArgurmentBuilder({
                "builder": _cp["builder"],
                "param_function parameters": _p["param_function parameters"],
            })
            const y = _p["par__arguments"]({
                "builder": x,
            })
            return y
        },
        "reporter": gt.createSimpleConflictingEntryReporter({
            "reportError": (_dependent, errorStr) => { console.error(errorStr) },
            "typeInfo": "FunctionCallArgurment",
        }),
    })
    const component = {
        "arguments": var_arguments,
        "path": var_path,
    }
    return component
}

function create_function_specification(_p: {
    readonly "par__access": (p: { builder: CFunctionAccessBuilder }) => t.FunctionAccess
    readonly "par__block_statements": (p: { builder: CStatementBuilder }) => void
    readonly "par__block_variables": (p: { builder: CVariableBuilder }) => void
}) {
    const var_access = _p["par__access"]({
        "builder": new CFunctionAccessBuilder({
        }),
    })
    const var_block = create_block({
        "par__statements": _p["par__block_statements"],
        "par__variables": _p["par__block_variables"],
        "param_function parameters": gf.createNonExistentLookup({}),
    })
    const component = {
        "access": var_access,
        "block": var_block,
    }
    return component
}

function create_generic_in_type(_p: {
    readonly "par__type": (p: { builder: CGenericInTypeTypeBuilder }) => t.GenericInTypeType
    readonly "param_method type parameters": gt.ILookup<t.GenericMethodTypeParameter>
}) {
    const var_type = _p["par__type"]({
        "builder": new CGenericInTypeTypeBuilder({
            "param_method type parameters": _p["param_method type parameters"],
        }),
    })
    const component = {
        "type": var_type,
    }
    return component
}

function create_generic_interface_reference(_p: {
    readonly "par__interface": string
    readonly "par__type arguments": (p: { builder: CGenericArgumentBuilder }) => void
    readonly "param_method type parameters": gt.ILookup<t.GenericMethodTypeParameter>
}) {
    const var_interface = _p["par__interface"]
    const var_type_arguments = gf.createDictionary<t.GenericArgument>({
        "callback": _cp => {
            const x = new CGenericArgumentBuilder({
                "builder": _cp["builder"],
                "param_method type parameters": _p["param_method type parameters"],
            })
            const y = _p["par__type arguments"]({
                "builder": x,
            })
            return y
        },
        "reporter": gt.createSimpleConflictingEntryReporter({
            "reportError": (_dependent, errorStr) => { console.error(errorStr) },
            "typeInfo": "GenericArgument",
        }),
    })
    const component = {
        "interface": var_interface,
        "type arguments": var_type_arguments,
    }
    return component
}

function create_generic_return_type(_p: {
    readonly "par__type": (p: { builder: CGenericReturnTypeTypeBuilder }) => t.GenericReturnTypeType
    readonly "param_method type parameters": gt.ILookup<t.GenericMethodTypeParameter>
}) {
    const var_type = _p["par__type"]({
        "builder": new CGenericReturnTypeTypeBuilder({
            "param_method type parameters": _p["param_method type parameters"],
        }),
    })
    const component = {
        "type": var_type,
    }
    return component
}

function create_initializer(_p: {
    readonly "par__type": (p: { builder: CInitializerTypeBuilder }) => t.InitializerType
    readonly "param_function parameters": gt.ILookup<t.PrivateParameter>
}) {
    const var_type = _p["par__type"]({
        "builder": new CInitializerTypeBuilder({
            "param_function parameters": _p["param_function parameters"],
        }),
    })
    const component = {
        "type": var_type,
    }
    return component
}

export class CFunctionAccessBuilder {
    constructor(_p: {
    }) {
    }
    public private(
        par__parameters: (builder: CPrivateParameterBuilder) => void,
    ) {
        const x = this.x_private({
            "par__parameters": p => par__parameters(p.builder),
        })
        return x
    }
    public public(
        par__parameters: (builder: CPublicParameterBuilder) => void,
    ) {
        const x = this.x_public({
            "par__parameters": p => par__parameters(p.builder),
        })
        return x
    }
    private x_private(_p: {
        readonly "par__parameters": (p: { builder: CPrivateParameterBuilder }) => void
    }) {
        const var_parameters = gf.createDictionary<t.PrivateParameter>({
            "callback": _cp => {
                const x = new CPrivateParameterBuilder({
                    "builder": _cp["builder"],
                })
                const y = _p["par__parameters"]({
                    "builder": x,
                })
                return y
            },
            "reporter": gt.createSimpleConflictingEntryReporter({
                "reportError": (_dependent, errorStr) => { console.error(errorStr) },
                "typeInfo": "PrivateParameter",
            }),
        })
        const sg = ((): t.FunctionAccess => {
            return ["private", {
                "parameters": var_parameters,
            }]
        })()
        return sg
    }
    private x_public(_p: {
        readonly "par__parameters": (p: { builder: CPublicParameterBuilder }) => void
    }) {
        const var_parameters = gf.createOrderedDictionary<t.PublicParameter, t.PublicParameterOrderings>({
            "callback": _cp => {
                const x = new CPublicParameterBuilder({
                    "builder": _cp["builder"],
                })
                const y = _p["par__parameters"]({
                    "builder": x,
                })
                return y
            },
            "createOrderings": _cp => {
                const z = {
                    "dependencies": _cp.orderingCreator.createBasedOnInsertionOrder({}),
                }
                return z
            },
            "reporter": gt.createSimpleConflictingEntryReporter({
                "reportError": (_dependent, errorStr) => { console.error(errorStr) },
                "typeInfo": "PublicParameter",
            }),
        })
        const sg = ((): t.FunctionAccess => {
            return ["public", {
                "parameters": var_parameters,
            }]
        })()
        return sg
    }
}

export class CFunctionCallArgurmentBuilder {
    private readonly builder: gt.IDictionaryBuilder<t.FunctionCallArgurment>
    private readonly param_function_parameters: gt.ILookup<t.PrivateParameter>
    constructor(_p: {
        "builder": gt.IDictionaryBuilder<t.FunctionCallArgurment>
        "param_function parameters": gt.ILookup<t.PrivateParameter>
    }) {
        this.builder = _p["builder"]
        this.param_function_parameters = _p["param_function parameters"]
    }
    public FunctionCallArgurment(
        key: string,
        par__type: (builder: CArgumentTypeBuilder) => t.ArgumentType,
    ) {
        const x = this.x_FunctionCallArgurment({
            "key": key,
            "par__type": p => par__type(p.builder),
            "param_function parameters": this.param_function_parameters,
        })
        return x
    }
    private x_FunctionCallArgurment(_p: {
        readonly "key": string
        readonly "par__type": (p: { builder: CArgumentTypeBuilder }) => t.ArgumentType
        readonly "param_function parameters": gt.ILookup<t.PrivateParameter>
    }) {
        const var_type = _p["par__type"]({
            "builder": new CArgumentTypeBuilder({
                "param_function parameters": _p["param_function parameters"],
            }),
        })
        const entry = {
            "type": var_type,
        }
        this.builder.add({ key: _p.key, entry: entry })
        return this
    }
}

export class CGenericArgumentBuilder {
    private readonly builder: gt.IDictionaryBuilder<t.GenericArgument>
    private readonly param_method_type_parameters: gt.ILookup<t.GenericMethodTypeParameter>
    constructor(_p: {
        "builder": gt.IDictionaryBuilder<t.GenericArgument>
        "param_method type parameters": gt.ILookup<t.GenericMethodTypeParameter>
    }) {
        this.builder = _p["builder"]
        this.param_method_type_parameters = _p["param_method type parameters"]
    }
    public GenericArgument(
        key: string,
        par__type_type: (builder: CGenericReturnTypeTypeBuilder) => t.GenericReturnTypeType,
    ) {
        const x = this.x_GenericArgument({
            "key": key,
            "par__type_type": p => par__type_type(p.builder),
            "param_method type parameters": this.param_method_type_parameters,
        })
        return x
    }
    private x_GenericArgument(_p: {
        readonly "key": string
        readonly "par__type_type": (p: { builder: CGenericReturnTypeTypeBuilder }) => t.GenericReturnTypeType
        readonly "param_method type parameters": gt.ILookup<t.GenericMethodTypeParameter>
    }) {
        const var_type = create_generic_return_type({
            "par__type": _p["par__type_type"],
            "param_method type parameters": _p["param_method type parameters"],
        })
        const entry = {
            "type": var_type,
        }
        this.builder.add({ key: _p.key, entry: entry })
        return this
    }
}

export class CGenericCallbackParameterBuilder {
    private readonly builder: gt.IDictionaryBuilder<t.GenericCallbackParameter>
    private readonly param_method_type_parameters: gt.ILookup<t.GenericMethodTypeParameter>
    constructor(_p: {
        "builder": gt.IDictionaryBuilder<t.GenericCallbackParameter>
        "param_method type parameters": gt.ILookup<t.GenericMethodTypeParameter>
    }) {
        this.builder = _p["builder"]
        this.param_method_type_parameters = _p["param_method type parameters"]
    }
    public GenericCallbackParameter(
        key: string,
        par__type_type: (builder: CGenericReturnTypeTypeBuilder) => t.GenericReturnTypeType,
    ) {
        const x = this.x_GenericCallbackParameter({
            "key": key,
            "par__type_type": p => par__type_type(p.builder),
            "param_method type parameters": this.param_method_type_parameters,
        })
        return x
    }
    private x_GenericCallbackParameter(_p: {
        readonly "key": string
        readonly "par__type_type": (p: { builder: CGenericReturnTypeTypeBuilder }) => t.GenericReturnTypeType
        readonly "param_method type parameters": gt.ILookup<t.GenericMethodTypeParameter>
    }) {
        const var_type = create_generic_return_type({
            "par__type": _p["par__type_type"],
            "param_method type parameters": _p["param_method type parameters"],
        })
        const entry = {
            "type": var_type,
        }
        this.builder.add({ key: _p.key, entry: entry })
        return this
    }
}

export class CGenericCallbackTypeBuilder {
    private readonly param_method_type_parameters: gt.ILookup<t.GenericMethodTypeParameter>
    constructor(_p: {
        "param_method type parameters": gt.ILookup<t.GenericMethodTypeParameter>
    }) {
        this.param_method_type_parameters = _p["param_method type parameters"]
    }
    public function(
        par__guaranteed: (builder: CIsCallbackReturnValueGuaranteedBuilder) => t.IsCallbackReturnValueGuaranteed,
        par__type_type: (builder: CGenericInTypeTypeBuilder) => t.GenericInTypeType,
    ) {
        const x = this.x_function({
            "par__guaranteed": p => par__guaranteed(p.builder),
            "par__type_type": p => par__type_type(p.builder),
            "param_method type parameters": this.param_method_type_parameters,
        })
        return x
    }
    public procedure(
    ) {
        const x = this.x_procedure({
            "param_method type parameters": this.param_method_type_parameters,
        })
        return x
    }
    private x_function(_p: {
        readonly "par__guaranteed": (p: { builder: CIsCallbackReturnValueGuaranteedBuilder }) => t.IsCallbackReturnValueGuaranteed
        readonly "par__type_type": (p: { builder: CGenericInTypeTypeBuilder }) => t.GenericInTypeType
        readonly "param_method type parameters": gt.ILookup<t.GenericMethodTypeParameter>
    }) {
        const var_guaranteed = _p["par__guaranteed"]({
            "builder": new CIsCallbackReturnValueGuaranteedBuilder({
                "param_method type parameters": _p["param_method type parameters"],
            }),
        })
        const var_type = create_generic_in_type({
            "par__type": _p["par__type_type"],
            "param_method type parameters": _p["param_method type parameters"],
        })
        const sg = ((): t.GenericCallbackType => {
            return ["function", {
                "guaranteed": var_guaranteed,
                "type": var_type,
            }]
        })()
        return sg
    }
    private x_procedure(_p: {
        readonly "param_method type parameters": gt.ILookup<t.GenericMethodTypeParameter>
    }) {
        const sg = ((): t.GenericCallbackType => {
            return ["procedure", {
            }]
        })()
        return sg
    }
}

export class CGenericFunctionTypeBuilder {
    private readonly propvar_type_parameters: gt.ILookup<t.GenericMethodTypeParameter>
    constructor(_p: {
        "propvar_type parameters": gt.ILookup<t.GenericMethodTypeParameter>
    }) {
        this.propvar_type_parameters = _p["propvar_type parameters"]
    }
    public function(
        par__guaranteed: (builder: CIsGenericReturnValueGuaranteedBuilder) => t.IsGenericReturnValueGuaranteed,
        par__type_type: (builder: CGenericReturnTypeTypeBuilder) => t.GenericReturnTypeType,
    ) {
        const x = this.x_function({
            "par__guaranteed": p => par__guaranteed(p.builder),
            "par__type_type": p => par__type_type(p.builder),
        })
        return x
    }
    public procedure(
    ) {
        const x = this.x_procedure({
        })
        return x
    }
    private x_function(_p: {
        readonly "par__guaranteed": (p: { builder: CIsGenericReturnValueGuaranteedBuilder }) => t.IsGenericReturnValueGuaranteed
        readonly "par__type_type": (p: { builder: CGenericReturnTypeTypeBuilder }) => t.GenericReturnTypeType
    }) {
        const var_guaranteed = _p["par__guaranteed"]({
            "builder": new CIsGenericReturnValueGuaranteedBuilder({
            }),
        })
        const var_type = create_generic_return_type({
            "par__type": _p["par__type_type"],
            "param_method type parameters": this.propvar_type_parameters,
        })
        const sg = ((): t.GenericFunctionType => {
            return ["function", {
                "guaranteed": var_guaranteed,
                "type": var_type,
            }]
        })()
        return sg
    }
    private x_procedure(_p: {
    }) {
        const sg = ((): t.GenericFunctionType => {
            return ["procedure", {
            }]
        })()
        return sg
    }
}

export class CGenericInterfaceDeclarationBuilder {
    private readonly builder: gt.IDictionaryBuilder<t.GenericInterfaceDeclaration>
    constructor(_p: {
        "builder": gt.IDictionaryBuilder<t.GenericInterfaceDeclaration>
    }) {
        this.builder = _p["builder"]
    }
    public GenericInterfaceDeclaration(
        key: string,
        par__parameters: (builder: CGenericInterfaceParameterBuilder) => void,
        par__base_interfaces: (builder: CBaseInterfaceBuilder) => void,
        par__methods: (builder: CGenericInterfaceMethodBuilder) => void,
    ) {
        const x = this.x_GenericInterfaceDeclaration({
            "key": key,
            "par__base interfaces": p => par__base_interfaces(p.builder),
            "par__methods": p => par__methods(p.builder),
            "par__parameters": p => par__parameters(p.builder),
        })
        return x
    }
    private x_GenericInterfaceDeclaration(_p: {
        readonly "key": string
        readonly "par__base interfaces": (p: { builder: CBaseInterfaceBuilder }) => void
        readonly "par__methods": (p: { builder: CGenericInterfaceMethodBuilder }) => void
        readonly "par__parameters": (p: { builder: CGenericInterfaceParameterBuilder }) => void
    }) {
        const var_parameters = gf.createDictionary<t.GenericInterfaceParameter>({
            "callback": _cp => {
                const x = new CGenericInterfaceParameterBuilder({
                    "builder": _cp["builder"],
                })
                const y = _p["par__parameters"]({
                    "builder": x,
                })
                return y
            },
            "reporter": gt.createSimpleConflictingEntryReporter({
                "reportError": (_dependent, errorStr) => { console.error(errorStr) },
                "typeInfo": "GenericInterfaceParameter",
            }),
        })
        const var_base_interfaces = gf.createDictionary<t.BaseInterface>({
            "callback": _cp => {
                const x = new CBaseInterfaceBuilder({
                    "builder": _cp["builder"],
                })
                const y = _p["par__base interfaces"]({
                    "builder": x,
                })
                return y
            },
            "reporter": gt.createSimpleConflictingEntryReporter({
                "reportError": (_dependent, errorStr) => { console.error(errorStr) },
                "typeInfo": "BaseInterface",
            }),
        })
        const var_methods = gf.createDictionary<t.GenericInterfaceMethod>({
            "callback": _cp => {
                const x = new CGenericInterfaceMethodBuilder({
                    "builder": _cp["builder"],
                })
                const y = _p["par__methods"]({
                    "builder": x,
                })
                return y
            },
            "reporter": gt.createSimpleConflictingEntryReporter({
                "reportError": (_dependent, errorStr) => { console.error(errorStr) },
                "typeInfo": "GenericInterfaceMethod",
            }),
        })
        const entry = {
            "base interfaces": var_base_interfaces,
            "methods": var_methods,
            "parameters": var_parameters,
        }
        this.builder.add({ key: _p.key, entry: entry })
        return this
    }
}

export class CGenericInterfaceMethodBuilder {
    private readonly builder: gt.IDictionaryBuilder<t.GenericInterfaceMethod>
    constructor(_p: {
        "builder": gt.IDictionaryBuilder<t.GenericInterfaceMethod>
    }) {
        this.builder = _p["builder"]
    }
    public GenericInterfaceMethod(
        key: string,
        par__type_parameters: (builder: CGenericMethodTypeParameterBuilder) => void,
        par__parameters: (builder: CGenericMethodParameterBuilder) => void,
        par__type: (builder: CGenericFunctionTypeBuilder) => t.GenericFunctionType,
    ) {
        const x = this.x_GenericInterfaceMethod({
            "key": key,
            "par__parameters": p => par__parameters(p.builder),
            "par__type": p => par__type(p.builder),
            "par__type parameters": p => par__type_parameters(p.builder),
        })
        return x
    }
    private x_GenericInterfaceMethod(_p: {
        readonly "key": string
        readonly "par__parameters": (p: { builder: CGenericMethodParameterBuilder }) => void
        readonly "par__type": (p: { builder: CGenericFunctionTypeBuilder }) => t.GenericFunctionType
        readonly "par__type parameters": (p: { builder: CGenericMethodTypeParameterBuilder }) => void
    }) {
        const var_type_parameters = gf.createDictionary<t.GenericMethodTypeParameter>({
            "callback": _cp => {
                const x = new CGenericMethodTypeParameterBuilder({
                    "builder": _cp["builder"],
                })
                const y = _p["par__type parameters"]({
                    "builder": x,
                })
                return y
            },
            "reporter": gt.createSimpleConflictingEntryReporter({
                "reportError": (_dependent, errorStr) => { console.error(errorStr) },
                "typeInfo": "GenericMethodTypeParameter",
            }),
        })
        const var_parameters = gf.createDictionary<t.GenericMethodParameter>({
            "callback": _cp => {
                const x = new CGenericMethodParameterBuilder({
                    "builder": _cp["builder"],
                    "propvar_type parameters": gf.createLookup({ dict: var_type_parameters }),
                })
                const y = _p["par__parameters"]({
                    "builder": x,
                })
                return y
            },
            "reporter": gt.createSimpleConflictingEntryReporter({
                "reportError": (_dependent, errorStr) => { console.error(errorStr) },
                "typeInfo": "GenericMethodParameter",
            }),
        })
        const var_type = _p["par__type"]({
            "builder": new CGenericFunctionTypeBuilder({
                "propvar_type parameters": gf.createLookup({ dict: var_type_parameters }),
            }),
        })
        const entry = {
            "parameters": var_parameters,
            "type": var_type,
            "type parameters": var_type_parameters,
        }
        this.builder.add({ key: _p.key, entry: entry })
        return this
    }
}

export class CGenericInterfaceParameterBuilder {
    private readonly builder: gt.IDictionaryBuilder<t.GenericInterfaceParameter>
    constructor(_p: {
        "builder": gt.IDictionaryBuilder<t.GenericInterfaceParameter>
    }) {
        this.builder = _p["builder"]
    }
    public GenericInterfaceParameter(
        key: string,
    ) {
        const x = this.x_GenericInterfaceParameter({
            "key": key,
        })
        return x
    }
    private x_GenericInterfaceParameter(_p: {
        readonly "key": string
    }) {
        const entry = {
        }
        this.builder.add({ key: _p.key, entry: entry })
        return this
    }
}

export class CGenericInTypeTypeBuilder {
    private readonly param_method_type_parameters: gt.ILookup<t.GenericMethodTypeParameter>
    constructor(_p: {
        "param_method type parameters": gt.ILookup<t.GenericMethodTypeParameter>
    }) {
        this.param_method_type_parameters = _p["param_method type parameters"]
    }
    public callback(
        par__parameters: (builder: CGenericCallbackParameterBuilder) => void,
        par__type: (builder: CGenericCallbackTypeBuilder) => t.GenericCallbackType,
    ) {
        const x = this.x_callback({
            "par__parameters": p => par__parameters(p.builder),
            "par__type": p => par__type(p.builder),
            "param_method type parameters": this.param_method_type_parameters,
        })
        return x
    }
    public method_type_parameter(
        par__type_parameter: string,
    ) {
        const x = this.x_method_type_parameter({
            "par__type parameter": par__type_parameter,
            "param_method type parameters": this.param_method_type_parameters,
        })
        return x
    }
    public string(
    ) {
        const x = this.x_string({
            "param_method type parameters": this.param_method_type_parameters,
        })
        return x
    }
    private x_callback(_p: {
        readonly "par__parameters": (p: { builder: CGenericCallbackParameterBuilder }) => void
        readonly "par__type": (p: { builder: CGenericCallbackTypeBuilder }) => t.GenericCallbackType
        readonly "param_method type parameters": gt.ILookup<t.GenericMethodTypeParameter>
    }) {
        const var_parameters = gf.createDictionary<t.GenericCallbackParameter>({
            "callback": _cp => {
                const x = new CGenericCallbackParameterBuilder({
                    "builder": _cp["builder"],
                    "param_method type parameters": _p["param_method type parameters"],
                })
                const y = _p["par__parameters"]({
                    "builder": x,
                })
                return y
            },
            "reporter": gt.createSimpleConflictingEntryReporter({
                "reportError": (_dependent, errorStr) => { console.error(errorStr) },
                "typeInfo": "GenericCallbackParameter",
            }),
        })
        const var_type = _p["par__type"]({
            "builder": new CGenericCallbackTypeBuilder({
                "param_method type parameters": _p["param_method type parameters"],
            }),
        })
        const sg = ((): t.GenericInTypeType => {
            return ["callback", {
                "parameters": var_parameters,
                "type": var_type,
            }]
        })()
        return sg
    }
    private x_method_type_parameter(_p: {
        readonly "par__type parameter": string
        readonly "param_method type parameters": gt.ILookup<t.GenericMethodTypeParameter>
    }) {
        const var_type_parameter = _p["param_method type parameters"].createReference({
            "key": _p["par__type parameter"],
            "reporter": gt.createSimpleReferenceResolveReporter({
                "delayed": false,
                "reportError": () => {},
                "typeInfo": "XXXX",
            }),
        })
        const sg = ((): t.GenericInTypeType => {
            return ["method type parameter", {
                "type parameter": var_type_parameter,
            }]
        })()
        return sg
    }
    private x_string(_p: {
        readonly "param_method type parameters": gt.ILookup<t.GenericMethodTypeParameter>
    }) {
        const sg = ((): t.GenericInTypeType => {
            return ["string", {
            }]
        })()
        return sg
    }
}

export class CGenericMethodParameterBuilder {
    private readonly builder: gt.IDictionaryBuilder<t.GenericMethodParameter>
    private readonly propvar_type_parameters: gt.ILookup<t.GenericMethodTypeParameter>
    constructor(_p: {
        "builder": gt.IDictionaryBuilder<t.GenericMethodParameter>
        "propvar_type parameters": gt.ILookup<t.GenericMethodTypeParameter>
    }) {
        this.builder = _p["builder"]
        this.propvar_type_parameters = _p["propvar_type parameters"]
    }
    public GenericMethodParameter(
        key: string,
        par__type_type: (builder: CGenericInTypeTypeBuilder) => t.GenericInTypeType,
    ) {
        const x = this.x_GenericMethodParameter({
            "key": key,
            "par__type_type": p => par__type_type(p.builder),
        })
        return x
    }
    private x_GenericMethodParameter(_p: {
        readonly "key": string
        readonly "par__type_type": (p: { builder: CGenericInTypeTypeBuilder }) => t.GenericInTypeType
    }) {
        const var_type = create_generic_in_type({
            "par__type": _p["par__type_type"],
            "param_method type parameters": this.propvar_type_parameters,
        })
        const entry = {
            "type": var_type,
        }
        this.builder.add({ key: _p.key, entry: entry })
        return this
    }
}

export class CGenericMethodTypeParameterBuilder {
    private readonly builder: gt.IDictionaryBuilder<t.GenericMethodTypeParameter>
    constructor(_p: {
        "builder": gt.IDictionaryBuilder<t.GenericMethodTypeParameter>
    }) {
        this.builder = _p["builder"]
    }
    public GenericMethodTypeParameter(
        key: string,
    ) {
        const x = this.x_GenericMethodTypeParameter({
            "key": key,
        })
        return x
    }
    private x_GenericMethodTypeParameter(_p: {
        readonly "key": string
    }) {
        const entry = {
        }
        this.builder.add({ key: _p.key, entry: entry })
        return this
    }
}

export class CGenericReturnTypeTypeBuilder {
    private readonly param_method_type_parameters: gt.ILookup<t.GenericMethodTypeParameter>
    constructor(_p: {
        "param_method type parameters": gt.ILookup<t.GenericMethodTypeParameter>
    }) {
        this.param_method_type_parameters = _p["param_method type parameters"]
    }
    public interface_parameter(
        par__parameter: string,
    ) {
        const x = this.x_interface_parameter({
            "par__parameter": par__parameter,
            "param_method type parameters": this.param_method_type_parameters,
        })
        return x
    }
    public method_type_parameter(
        par__type_parameter: string,
    ) {
        const x = this.x_method_type_parameter({
            "par__type parameter": par__type_parameter,
            "param_method type parameters": this.param_method_type_parameters,
        })
        return x
    }
    public reference_to_generic_declaration(
        par__interface_interface: string,
        par__interface_type_arguments: (builder: CGenericArgumentBuilder) => void,
    ) {
        const x = this.x_reference_to_generic_declaration({
            "par__interface_interface": par__interface_interface,
            "par__interface_type arguments": p => par__interface_type_arguments(p.builder),
            "param_method type parameters": this.param_method_type_parameters,
        })
        return x
    }
    public string(
    ) {
        const x = this.x_string({
            "param_method type parameters": this.param_method_type_parameters,
        })
        return x
    }
    private x_interface_parameter(_p: {
        readonly "par__parameter": string
        readonly "param_method type parameters": gt.ILookup<t.GenericMethodTypeParameter>
    }) {
        const var_parameter = _p["par__parameter"]
        const sg = ((): t.GenericReturnTypeType => {
            return ["interface parameter", {
                "parameter": var_parameter,
            }]
        })()
        return sg
    }
    private x_method_type_parameter(_p: {
        readonly "par__type parameter": string
        readonly "param_method type parameters": gt.ILookup<t.GenericMethodTypeParameter>
    }) {
        const var_type_parameter = _p["param_method type parameters"].createReference({
            "key": _p["par__type parameter"],
            "reporter": gt.createSimpleReferenceResolveReporter({
                "delayed": false,
                "reportError": () => {},
                "typeInfo": "XXXX",
            }),
        })
        const sg = ((): t.GenericReturnTypeType => {
            return ["method type parameter", {
                "type parameter": var_type_parameter,
            }]
        })()
        return sg
    }
    private x_reference_to_generic_declaration(_p: {
        readonly "par__interface_interface": string
        readonly "par__interface_type arguments": (p: { builder: CGenericArgumentBuilder }) => void
        readonly "param_method type parameters": gt.ILookup<t.GenericMethodTypeParameter>
    }) {
        const var_interface = create_generic_interface_reference({
            "par__interface": _p["par__interface_interface"],
            "par__type arguments": _p["par__interface_type arguments"],
            "param_method type parameters": _p["param_method type parameters"],
        })
        const sg = ((): t.GenericReturnTypeType => {
            return ["reference to generic declaration", {
                "interface": var_interface,
            }]
        })()
        return sg
    }
    private x_string(_p: {
        readonly "param_method type parameters": gt.ILookup<t.GenericMethodTypeParameter>
    }) {
        const sg = ((): t.GenericReturnTypeType => {
            return ["string", {
            }]
        })()
        return sg
    }
}

export class CGenericTypeArgumentsBuilder {
    private readonly builder: gt.IDictionaryBuilder<t.GenericTypeArguments>
    constructor(_p: {
        "builder": gt.IDictionaryBuilder<t.GenericTypeArguments>
    }) {
        this.builder = _p["builder"]
    }
    public GenericTypeArguments(
        key: string,
        par__raw: string,
    ) {
        const x = this.x_GenericTypeArguments({
            "key": key,
            "par__raw": par__raw,
        })
        return x
    }
    private x_GenericTypeArguments(_p: {
        readonly "key": string
        readonly "par__raw": string
    }) {
        const var_raw = _p["par__raw"]
        const entry = {
            "raw": var_raw,
        }
        this.builder.add({ key: _p.key, entry: entry })
        return this
    }
}

export class CInitializerTypeBuilder {
    private readonly param_function_parameters: gt.ILookup<t.PrivateParameter>
    constructor(_p: {
        "param_function parameters": gt.ILookup<t.PrivateParameter>
    }) {
        this.param_function_parameters = _p["param_function parameters"]
    }
    public constructor_call(
        par__path: string,
        par__arguments: (builder: CConstructorCallArgurmentBuilder) => void,
    ) {
        const x = this.x_constructor_call({
            "par__arguments": p => par__arguments(p.builder),
            "par__path": par__path,
            "param_function parameters": this.param_function_parameters,
        })
        return x
    }
    public function_call(
        par__call_path: string,
        par__call_arguments: (builder: CFunctionCallArgurmentBuilder) => void,
    ) {
        const x = this.x_function_call({
            "par__call_arguments": p => par__call_arguments(p.builder),
            "par__call_path": par__call_path,
            "param_function parameters": this.param_function_parameters,
        })
        return x
    }
    public object(
        par__properties: (builder: CPropertyInitialierBuilder) => void,
    ) {
        const x = this.x_object({
            "par__properties": p => par__properties(p.builder),
            "param_function parameters": this.param_function_parameters,
        })
        return x
    }
    public rawx(
        par__rawstring: string,
    ) {
        const x = this.x_rawx({
            "par__rawstring": par__rawstring,
            "param_function parameters": this.param_function_parameters,
        })
        return x
    }
    public selection(
        par__start_point: (builder: CSelectionStartPointBuilder) => t.SelectionStartPoint,
        par__steps: (builder: CSelectionStepBuilder) => void,
    ) {
        const x = this.x_selection({
            "par__start point": p => par__start_point(p.builder),
            "par__steps": p => par__steps(p.builder),
            "param_function parameters": this.param_function_parameters,
        })
        return x
    }
    public tagged_union(
        par__type_specification: (builder: CTaggedUnionTypeSpecificationBuilder) => t.TaggedUnionTypeSpecification,
        par__state: string,
        par__initializer_type: (builder: CInitializerTypeBuilder) => t.InitializerType,
    ) {
        const x = this.x_tagged_union({
            "par__initializer_type": p => par__initializer_type(p.builder),
            "par__state": par__state,
            "par__type specification": p => par__type_specification(p.builder),
            "param_function parameters": this.param_function_parameters,
        })
        return x
    }
    private x_constructor_call(_p: {
        readonly "par__arguments": (p: { builder: CConstructorCallArgurmentBuilder }) => void
        readonly "par__path": string
        readonly "param_function parameters": gt.ILookup<t.PrivateParameter>
    }) {
        const var_path = _p["par__path"]
        const var_arguments = gf.createDictionary<t.ConstructorCallArgurment>({
            "callback": _cp => {
                const x = new CConstructorCallArgurmentBuilder({
                    "builder": _cp["builder"],
                    "param_function parameters": _p["param_function parameters"],
                })
                const y = _p["par__arguments"]({
                    "builder": x,
                })
                return y
            },
            "reporter": gt.createSimpleConflictingEntryReporter({
                "reportError": (_dependent, errorStr) => { console.error(errorStr) },
                "typeInfo": "ConstructorCallArgurment",
            }),
        })
        const sg = ((): t.InitializerType => {
            return ["constructor call", {
                "arguments": var_arguments,
                "path": var_path,
            }]
        })()
        return sg
    }
    private x_function_call(_p: {
        readonly "par__call_arguments": (p: { builder: CFunctionCallArgurmentBuilder }) => void
        readonly "par__call_path": string
        readonly "param_function parameters": gt.ILookup<t.PrivateParameter>
    }) {
        const var_call = create_function_call({
            "par__arguments": _p["par__call_arguments"],
            "par__path": _p["par__call_path"],
            "param_function parameters": _p["param_function parameters"],
        })
        const sg = ((): t.InitializerType => {
            return ["function call", {
                "call": var_call,
            }]
        })()
        return sg
    }
    private x_object(_p: {
        readonly "par__properties": (p: { builder: CPropertyInitialierBuilder }) => void
        readonly "param_function parameters": gt.ILookup<t.PrivateParameter>
    }) {
        const var_properties = gf.createDictionary<t.PropertyInitialier>({
            "callback": _cp => {
                const x = new CPropertyInitialierBuilder({
                    "builder": _cp["builder"],
                    "param_function parameters": _p["param_function parameters"],
                })
                const y = _p["par__properties"]({
                    "builder": x,
                })
                return y
            },
            "reporter": gt.createSimpleConflictingEntryReporter({
                "reportError": (_dependent, errorStr) => { console.error(errorStr) },
                "typeInfo": "PropertyInitialier",
            }),
        })
        const sg = ((): t.InitializerType => {
            return ["object", {
                "properties": var_properties,
            }]
        })()
        return sg
    }
    private x_rawx(_p: {
        readonly "par__rawstring": string
        readonly "param_function parameters": gt.ILookup<t.PrivateParameter>
    }) {
        const var_rawstring = _p["par__rawstring"]
        const sg = ((): t.InitializerType => {
            return ["rawx", {
                "rawstring": var_rawstring,
            }]
        })()
        return sg
    }
    private x_selection(_p: {
        readonly "par__start point": (p: { builder: CSelectionStartPointBuilder }) => t.SelectionStartPoint
        readonly "par__steps": (p: { builder: CSelectionStepBuilder }) => void
        readonly "param_function parameters": gt.ILookup<t.PrivateParameter>
    }) {
        const var_start_point = _p["par__start point"]({
            "builder": new CSelectionStartPointBuilder({
                "param_function parameters": _p["param_function parameters"],
            }),
        })
        const var_steps = gf.createList<t.SelectionStep>({
            "callback": _cp => {
                const x = new CSelectionStepBuilder({
                    "builder": _cp["builder"],
                    "param_function parameters": _p["param_function parameters"],
                })
                const y = _p["par__steps"]({
                    "builder": x,
                })
                return y
            },
        })
        const sg = ((): t.InitializerType => {
            return ["selection", {
                "start point": var_start_point,
                "steps": var_steps,
            }]
        })()
        return sg
    }
    private x_tagged_union(_p: {
        readonly "par__initializer_type": (p: { builder: CInitializerTypeBuilder }) => t.InitializerType
        readonly "par__state": string
        readonly "par__type specification": (p: { builder: CTaggedUnionTypeSpecificationBuilder }) => t.TaggedUnionTypeSpecification
        readonly "param_function parameters": gt.ILookup<t.PrivateParameter>
    }) {
        const var_type_specification = _p["par__type specification"]({
            "builder": new CTaggedUnionTypeSpecificationBuilder({
                "param_function parameters": _p["param_function parameters"],
            }),
        })
        const var_state = _p["par__state"]
        const var_initializer = create_initializer({
            "par__type": _p["par__initializer_type"],
            "param_function parameters": _p["param_function parameters"],
        })
        const sg = ((): t.InitializerType => {
            return ["tagged union", {
                "initializer": var_initializer,
                "state": var_state,
                "type specification": var_type_specification,
            }]
        })()
        return sg
    }
}

export class CInterfaceBuilder {
    private readonly builder: gt.IDictionaryBuilder<t.Interface>
    constructor(_p: {
        "builder": gt.IDictionaryBuilder<t.Interface>
    }) {
        this.builder = _p["builder"]
    }
    public Interface(
        key: string,
        par__methods: (builder: CInterfaceMethodBuilder) => void,
    ) {
        const x = this.x_Interface({
            "key": key,
            "par__methods": p => par__methods(p.builder),
        })
        return x
    }
    private x_Interface(_p: {
        readonly "key": string
        readonly "par__methods": (p: { builder: CInterfaceMethodBuilder }) => void
    }) {
        const var_methods = gf.createDictionary<t.InterfaceMethod>({
            "callback": _cp => {
                const x = new CInterfaceMethodBuilder({
                    "builder": _cp["builder"],
                })
                const y = _p["par__methods"]({
                    "builder": x,
                })
                return y
            },
            "reporter": gt.createSimpleConflictingEntryReporter({
                "reportError": (_dependent, errorStr) => { console.error(errorStr) },
                "typeInfo": "InterfaceMethod",
            }),
        })
        const entry = {
            "methods": var_methods,
        }
        this.builder.add({ key: _p.key, entry: entry })
        return this
    }
}

export class CInterfaceMethodBuilder {
    private readonly builder: gt.IDictionaryBuilder<t.InterfaceMethod>
    constructor(_p: {
        "builder": gt.IDictionaryBuilder<t.InterfaceMethod>
    }) {
        this.builder = _p["builder"]
    }
    public InterfaceMethod(
        key: string,
        par__parameters: (builder: CInterfaceMethodParameterBuilder) => void,
        par__type: (builder: CInterfaceMethodTypeBuilder) => t.InterfaceMethodType,
    ) {
        const x = this.x_InterfaceMethod({
            "key": key,
            "par__parameters": p => par__parameters(p.builder),
            "par__type": p => par__type(p.builder),
        })
        return x
    }
    private x_InterfaceMethod(_p: {
        readonly "key": string
        readonly "par__parameters": (p: { builder: CInterfaceMethodParameterBuilder }) => void
        readonly "par__type": (p: { builder: CInterfaceMethodTypeBuilder }) => t.InterfaceMethodType
    }) {
        const var_parameters = gf.createDictionary<t.InterfaceMethodParameter>({
            "callback": _cp => {
                const x = new CInterfaceMethodParameterBuilder({
                    "builder": _cp["builder"],
                })
                const y = _p["par__parameters"]({
                    "builder": x,
                })
                return y
            },
            "reporter": gt.createSimpleConflictingEntryReporter({
                "reportError": (_dependent, errorStr) => { console.error(errorStr) },
                "typeInfo": "InterfaceMethodParameter",
            }),
        })
        const var_type = _p["par__type"]({
            "builder": new CInterfaceMethodTypeBuilder({
            }),
        })
        const entry = {
            "parameters": var_parameters,
            "type": var_type,
        }
        this.builder.add({ key: _p.key, entry: entry })
        return this
    }
}

export class CInterfaceMethodParameterBuilder {
    private readonly builder: gt.IDictionaryBuilder<t.InterfaceMethodParameter>
    constructor(_p: {
        "builder": gt.IDictionaryBuilder<t.InterfaceMethodParameter>
    }) {
        this.builder = _p["builder"]
    }
    public InterfaceMethodParameter(
        key: string,
        par__type: string,
    ) {
        const x = this.x_InterfaceMethodParameter({
            "key": key,
            "par__type": par__type,
        })
        return x
    }
    private x_InterfaceMethodParameter(_p: {
        readonly "key": string
        readonly "par__type": string
    }) {
        const var_type = _p["par__type"]
        const entry = {
            "type": var_type,
        }
        this.builder.add({ key: _p.key, entry: entry })
        return this
    }
}

export class CInterfaceMethodTypeBuilder {
    constructor(_p: {
    }) {
    }
    public function(
        par__guaranteed: (builder: CIsInterfaceReturnValueGuaranteedBuilder) => t.IsInterfaceReturnValueGuaranteed,
        par__raw_return_type: string,
    ) {
        const x = this.x_function({
            "par__guaranteed": p => par__guaranteed(p.builder),
            "par__raw return type": par__raw_return_type,
        })
        return x
    }
    public procedure(
    ) {
        const x = this.x_procedure({
        })
        return x
    }
    private x_function(_p: {
        readonly "par__guaranteed": (p: { builder: CIsInterfaceReturnValueGuaranteedBuilder }) => t.IsInterfaceReturnValueGuaranteed
        readonly "par__raw return type": string
    }) {
        const var_guaranteed = _p["par__guaranteed"]({
            "builder": new CIsInterfaceReturnValueGuaranteedBuilder({
            }),
        })
        const var_raw_return_type = _p["par__raw return type"]
        const sg = ((): t.InterfaceMethodType => {
            return ["function", {
                "guaranteed": var_guaranteed,
                "raw return type": var_raw_return_type,
            }]
        })()
        return sg
    }
    private x_procedure(_p: {
    }) {
        const sg = ((): t.InterfaceMethodType => {
            return ["procedure", {
            }]
        })()
        return sg
    }
}

export class CIsCallbackReturnValueGuaranteedBuilder {
    private readonly param_method_type_parameters: gt.ILookup<t.GenericMethodTypeParameter>
    constructor(_p: {
        "param_method type parameters": gt.ILookup<t.GenericMethodTypeParameter>
    }) {
        this.param_method_type_parameters = _p["param_method type parameters"]
    }
    public no(
    ) {
        const x = this.x_no({
            "param_method type parameters": this.param_method_type_parameters,
        })
        return x
    }
    private x_no(_p: {
        readonly "param_method type parameters": gt.ILookup<t.GenericMethodTypeParameter>
    }) {
        const sg = ((): t.IsCallbackReturnValueGuaranteed => {
            return ["no", {
            }]
        })()
        return sg
    }
    private x_yes(_p: {
        readonly "param_method type parameters": gt.ILookup<t.GenericMethodTypeParameter>
    }) {
        const sg = ((): t.IsCallbackReturnValueGuaranteed => {
            return ["yes", {
            }]
        })()
        return sg
    }
    public yes(
    ) {
        const x = this.x_yes({
            "param_method type parameters": this.param_method_type_parameters,
        })
        return x
    }
}

export class CIsGenericReturnValueGuaranteedBuilder {
    constructor(_p: {
    }) {
    }
    public no(
    ) {
        const x = this.x_no({
        })
        return x
    }
    private x_no(_p: {
    }) {
        const sg = ((): t.IsGenericReturnValueGuaranteed => {
            return ["no", {
            }]
        })()
        return sg
    }
    private x_yes(_p: {
    }) {
        const sg = ((): t.IsGenericReturnValueGuaranteed => {
            return ["yes", {
            }]
        })()
        return sg
    }
    public yes(
    ) {
        const x = this.x_yes({
        })
        return x
    }
}

export class CIsInterfaceReturnValueGuaranteedBuilder {
    constructor(_p: {
    }) {
    }
    public no(
    ) {
        const x = this.x_no({
        })
        return x
    }
    private x_no(_p: {
    }) {
        const sg = ((): t.IsInterfaceReturnValueGuaranteed => {
            return ["no", {
            }]
        })()
        return sg
    }
    private x_yes(_p: {
    }) {
        const sg = ((): t.IsInterfaceReturnValueGuaranteed => {
            return ["yes", {
            }]
        })()
        return sg
    }
    public yes(
    ) {
        const x = this.x_yes({
        })
        return x
    }
}

export class CObjectPropertyBuilder {
    private readonly builder: gt.IDictionaryBuilder<t.ObjectProperty>
    private readonly propvar_generic_interface_declarations: gt.ILookup<t.GenericInterfaceDeclaration>
    constructor(_p: {
        "builder": gt.IDictionaryBuilder<t.ObjectProperty>
        "propvar_generic interface declarations": gt.ILookup<t.GenericInterfaceDeclaration>
    }) {
        this.builder = _p["builder"]
        this.propvar_generic_interface_declarations = _p["propvar_generic interface declarations"]
    }
    public ObjectProperty(
        key: string,
        par__type: (builder: CPropertyTypeBuilder) => t.PropertyType,
    ) {
        const x = this.x_ObjectProperty({
            "key": key,
            "par__type": p => par__type(p.builder),
        })
        return x
    }
    private x_ObjectProperty(_p: {
        readonly "key": string
        readonly "par__type": (p: { builder: CPropertyTypeBuilder }) => t.PropertyType
    }) {
        const var_type = _p["par__type"]({
            "builder": new CPropertyTypeBuilder({
                "propvar_generic interface declarations": this.propvar_generic_interface_declarations,
            }),
        })
        const entry = {
            "type": var_type,
        }
        this.builder.add({ key: _p.key, entry: entry })
        return this
    }
}

export class CPrivateParameterBuilder {
    private readonly builder: gt.IDictionaryBuilder<t.PrivateParameter>
    constructor(_p: {
        "builder": gt.IDictionaryBuilder<t.PrivateParameter>
    }) {
        this.builder = _p["builder"]
    }
    public PrivateParameter(
        key: string,
        par__type: string,
    ) {
        const x = this.x_PrivateParameter({
            "key": key,
            "par__type": par__type,
        })
        return x
    }
    private x_PrivateParameter(_p: {
        readonly "key": string
        readonly "par__type": string
    }) {
        const var_type = _p["par__type"]
        const entry = {
            "type": var_type,
        }
        this.builder.add({ key: _p.key, entry: entry })
        return this
    }
}

export class CPropertyInitialierBuilder {
    private readonly builder: gt.IDictionaryBuilder<t.PropertyInitialier>
    private readonly param_function_parameters: gt.ILookup<t.PrivateParameter>
    constructor(_p: {
        "builder": gt.IDictionaryBuilder<t.PropertyInitialier>
        "param_function parameters": gt.ILookup<t.PrivateParameter>
    }) {
        this.builder = _p["builder"]
        this.param_function_parameters = _p["param_function parameters"]
    }
    public PropertyInitialier(
        key: string,
        par__initializer_type: (builder: CInitializerTypeBuilder) => t.InitializerType,
    ) {
        const x = this.x_PropertyInitialier({
            "key": key,
            "par__initializer_type": p => par__initializer_type(p.builder),
            "param_function parameters": this.param_function_parameters,
        })
        return x
    }
    private x_PropertyInitialier(_p: {
        readonly "key": string
        readonly "par__initializer_type": (p: { builder: CInitializerTypeBuilder }) => t.InitializerType
        readonly "param_function parameters": gt.ILookup<t.PrivateParameter>
    }) {
        const var_initializer = create_initializer({
            "par__type": _p["par__initializer_type"],
            "param_function parameters": _p["param_function parameters"],
        })
        const entry = {
            "initializer": var_initializer,
        }
        this.builder.add({ key: _p.key, entry: entry })
        return this
    }
}

export class CPropertyInitializationBuilder {
    constructor(_p: {
    }) {
    }
    public default(
        par__initializer: string,
    ) {
        const x = this.x_default({
            "par__initializer": par__initializer,
        })
        return x
    }
    public parametrized(
        par__type: string,
    ) {
        const x = this.x_parametrized({
            "par__type": par__type,
        })
        return x
    }
    private x_default(_p: {
        readonly "par__initializer": string
    }) {
        const var_initializer = _p["par__initializer"]
        const sg = ((): t.PropertyInitialization => {
            return ["default", {
                "initializer": var_initializer,
            }]
        })()
        return sg
    }
    private x_parametrized(_p: {
        readonly "par__type": string
    }) {
        const var_type = _p["par__type"]
        const sg = ((): t.PropertyInitialization => {
            return ["parametrized", {
                "type": var_type,
            }]
        })()
        return sg
    }
}

export class CPropertyTypeBuilder {
    private readonly propvar_generic_interface_declarations: gt.ILookup<t.GenericInterfaceDeclaration>
    constructor(_p: {
        "propvar_generic interface declarations": gt.ILookup<t.GenericInterfaceDeclaration>
    }) {
        this.propvar_generic_interface_declarations = _p["propvar_generic interface declarations"]
    }
    public generic_type(
        par__referenced_type: string,
        par__arguments: (builder: CGenericTypeArgumentsBuilder) => void,
    ) {
        const x = this.x_generic_type({
            "par__arguments": p => par__arguments(p.builder),
            "par__referenced type": par__referenced_type,
        })
        return x
    }
    public raw(
        par__raw: string,
    ) {
        const x = this.x_raw({
            "par__raw": par__raw,
        })
        return x
    }
    public reference(
        par__referenced_type: string,
    ) {
        const x = this.x_reference({
            "par__referenced type": par__referenced_type,
        })
        return x
    }
    public string(
    ) {
        const x = this.x_string({
        })
        return x
    }
    private x_generic_type(_p: {
        readonly "par__arguments": (p: { builder: CGenericTypeArgumentsBuilder }) => void
        readonly "par__referenced type": string
    }) {
        const var_referenced_type = this.propvar_generic_interface_declarations.createReference({
            "key": _p["par__referenced type"],
            "reporter": gt.createSimpleReferenceResolveReporter({
                "delayed": false,
                "reportError": () => {},
                "typeInfo": "XXXX",
            }),
        })
        const var_arguments = gf.createDictionary<t.GenericTypeArguments>({
            "callback": _cp => {
                const x = new CGenericTypeArgumentsBuilder({
                    "builder": _cp["builder"],
                })
                const y = _p["par__arguments"]({
                    "builder": x,
                })
                return y
            },
            "reporter": gt.createSimpleConflictingEntryReporter({
                "reportError": (_dependent, errorStr) => { console.error(errorStr) },
                "typeInfo": "GenericTypeArguments",
            }),
        })
        const sg = ((): t.PropertyType => {
            return ["generic type", {
                "arguments": var_arguments,
                "referenced type": var_referenced_type,
            }]
        })()
        return sg
    }
    private x_raw(_p: {
        readonly "par__raw": string
    }) {
        const var_raw = _p["par__raw"]
        const sg = ((): t.PropertyType => {
            return ["raw", {
                "raw": var_raw,
            }]
        })()
        return sg
    }
    private x_reference(_p: {
        readonly "par__referenced type": string
    }) {
        const var_referenced_type = _p["par__referenced type"]
        const sg = ((): t.PropertyType => {
            return ["reference", {
                "referenced type": var_referenced_type,
            }]
        })()
        return sg
    }
    private x_string(_p: {
    }) {
        const sg = ((): t.PropertyType => {
            return ["string", {
            }]
        })()
        return sg
    }
}

export class CPublicParameterBuilder {
    private readonly builder: gt.IDictionaryBuilder<t.PublicParameter>
    constructor(_p: {
        "builder": gt.IDictionaryBuilder<t.PublicParameter>
    }) {
        this.builder = _p["builder"]
    }
    public PublicParameter(
        key: string,
        par__type: string,
    ) {
        const x = this.x_PublicParameter({
            "key": key,
            "par__type": par__type,
        })
        return x
    }
    private x_PublicParameter(_p: {
        readonly "key": string
        readonly "par__type": string
    }) {
        const var_type = _p["par__type"]
        const entry = {
            "type": var_type,
        }
        this.builder.add({ key: _p.key, entry: entry })
        return this
    }
}

export class CSelectionStartPointBuilder {
    private readonly param_function_parameters: gt.ILookup<t.PrivateParameter>
    constructor(_p: {
        "param_function parameters": gt.ILookup<t.PrivateParameter>
    }) {
        this.param_function_parameters = _p["param_function parameters"]
    }
    public callback_parameter(
        par__parameter: string,
    ) {
        const x = this.x_callback_parameter({
            "par__parameter": par__parameter,
            "param_function parameters": this.param_function_parameters,
        })
        return x
    }
    public parameter(
        par__parameter: string,
    ) {
        const x = this.x_parameter({
            "par__parameter": par__parameter,
            "param_function parameters": this.param_function_parameters,
        })
        return x
    }
    public property(
        par__property: string,
    ) {
        const x = this.x_property({
            "par__property": par__property,
            "param_function parameters": this.param_function_parameters,
        })
        return x
    }
    public variable(
        par__variable: string,
    ) {
        const x = this.x_variable({
            "par__variable": par__variable,
            "param_function parameters": this.param_function_parameters,
        })
        return x
    }
    private x_callback_parameter(_p: {
        readonly "par__parameter": string
        readonly "param_function parameters": gt.ILookup<t.PrivateParameter>
    }) {
        const var_parameter = _p["par__parameter"]
        const sg = ((): t.SelectionStartPoint => {
            return ["callback parameter", {
                "parameter": var_parameter,
            }]
        })()
        return sg
    }
    private x_parameter(_p: {
        readonly "par__parameter": string
        readonly "param_function parameters": gt.ILookup<t.PrivateParameter>
    }) {
        const var_parameter = _p["par__parameter"]
        const sg = ((): t.SelectionStartPoint => {
            return ["parameter", {
                "parameter": var_parameter,
            }]
        })()
        return sg
    }
    private x_property(_p: {
        readonly "par__property": string
        readonly "param_function parameters": gt.ILookup<t.PrivateParameter>
    }) {
        const var_property = _p["par__property"]
        const sg = ((): t.SelectionStartPoint => {
            return ["property", {
                "property": var_property,
            }]
        })()
        return sg
    }
    private x_variable(_p: {
        readonly "par__variable": string
        readonly "param_function parameters": gt.ILookup<t.PrivateParameter>
    }) {
        const var_variable = _p["par__variable"]
        const sg = ((): t.SelectionStartPoint => {
            return ["variable", {
                "variable": var_variable,
            }]
        })()
        return sg
    }
}

export class CSelectionStepBuilder {
    private readonly builder: gt.IListBuilder<t.SelectionStep>
    private readonly param_function_parameters: gt.ILookup<t.PrivateParameter>
    constructor(_p: {
        "builder": gt.IListBuilder<t.SelectionStep>
        "param_function parameters": gt.ILookup<t.PrivateParameter>
    }) {
        this.builder = _p["builder"]
        this.param_function_parameters = _p["param_function parameters"]
    }
    public SelectionStep(
        par__rawselectionstring: string,
    ) {
        const x = this.x_SelectionStep({
            "par__rawselectionstring": par__rawselectionstring,
            "param_function parameters": this.param_function_parameters,
        })
        return x
    }
    private x_SelectionStep(_p: {
        readonly "par__rawselectionstring": string
        readonly "param_function parameters": gt.ILookup<t.PrivateParameter>
    }) {
        const var_rawselectionstring = _p["par__rawselectionstring"]
        const entry = {
            "rawselectionstring": var_rawselectionstring,
        }
        this.builder.push({ element: entry })
        return this
    }
}

export function serialize(
    root: t.CompilationUnit,
    out: gt.Out,
) {
    return serializex({ type: root, out: out })
}

function serialize_block(_p: {
    readonly "out": gt.Out
    readonly "type": t.Block
}) {
    _p.out.write({
        "string": "{",
    })
    _p.out.write({
        "string": '"statements": ',
    })
    _p.out.write({
        "string": "[",
    })
    _p.type["statements"].mapWithSeparator({
        "onElement": _cp => {
            _p.out.write({
                "string": "{",
            })
            _p.out.write({
                "string": '"type": ',
            })
            switch (_cp.element["type"][0]) {
                case "call": {
                    const _$ = _cp.element["type"][1]
                    {
                        const $ = _$
                        _p.out.write({
                            "string": "[",
                        })
                        _p.out.write({
                            "string": '"call", ',
                        })
                        _p.out.write({
                            "string": "{",
                        })
                        _p.out.write({
                            "string": '"call": ',
                        })
                        serialize_function_call({ type: $["call"], out: _p.out })
                        _p.out.write({
                            "string": "}",
                        })
                        _p.out.write({
                            "string": "]",
                        })
                        break
                    }
                }
                case "raw": {
                    const _$ = _cp.element["type"][1]
                    {
                        const $ = _$
                        _p.out.write({
                            "string": "[",
                        })
                        _p.out.write({
                            "string": '"raw", ',
                        })
                        _p.out.write({
                            "string": "{",
                        })
                        _p.out.write({
                            "string": '"raw value": ',
                        })
                        _p.out.write({
                            "string": '"',
                        })
                        _p.out.write({
                            "string": $["raw value"],
                        })
                        _p.out.write({
                            "string": '"',
                        })
                        _p.out.write({
                            "string": "}",
                        })
                        _p.out.write({
                            "string": "]",
                        })
                        break
                    }
                }
                case "switch": {
                    const _$ = _cp.element["type"][1]
                    {
                        const $ = _$
                        _p.out.write({
                            "string": "[",
                        })
                        _p.out.write({
                            "string": '"switch", ',
                        })
                        _p.out.write({
                            "string": "{",
                        })
                        _p.out.write({
                            "string": '"cases": ',
                        })
                        _p.out.write({
                            "string": "{",
                        })
                        $["cases"].getAlphabeticalOrdering({}).mapWithSeparator({
                            "onElement": _cp => {
                                _p.out.write({
                                    "string": '"',
                                })
                                _p.out.write({
                                    "string": _cp.key,
                                })
                                _p.out.write({
                                    "string": '": ',
                                })
                                _p.out.write({
                                    "string": "{",
                                })
                                _p.out.write({
                                    "string": '"block": ',
                                })
                                serialize_block({ type: _cp.element["block"], out: _p.out })
                                _p.out.write({
                                    "string": "}",
                                })
                            },
                            "onSeparator": _cp => {
                                _p.out.write({
                                    "string": ",",
                                })
                            },
                        })
                        _p.out.write({
                            "string": "}",
                        })
                        _p.out.write({
                            "string": ",",
                        })
                        _p.out.write({
                            "string": '"raw expression": ',
                        })
                        _p.out.write({
                            "string": '"',
                        })
                        _p.out.write({
                            "string": $["raw expression"],
                        })
                        _p.out.write({
                            "string": '"',
                        })
                        _p.out.write({
                            "string": "}",
                        })
                        _p.out.write({
                            "string": "]",
                        })
                        break
                    }
                }
                default: return assertUnreachable(_cp.element["type"][0])
            }
            _p.out.write({
                "string": "}",
            })
        },
        "onSeparator": _cp => {
            _p.out.write({
                "string": ",",
            })
        },
    })
    _p.out.write({
        "string": "]",
    })
    _p.out.write({
        "string": ",",
    })
    _p.out.write({
        "string": '"variables": ',
    })
    _p.out.write({
        "string": "{",
    })
    _p.type["variables"].getAlphabeticalOrdering({}).mapWithSeparator({
        "onElement": _cp => {
            _p.out.write({
                "string": '"',
            })
            _p.out.write({
                "string": _cp.key,
            })
            _p.out.write({
                "string": '": ',
            })
            _p.out.write({
                "string": "{",
            })
            _p.out.write({
                "string": '"initializer": ',
            })
            serialize_initializer({ type: _cp.element["initializer"], out: _p.out })
            _p.out.write({
                "string": "}",
            })
        },
        "onSeparator": _cp => {
            _p.out.write({
                "string": ",",
            })
        },
    })
    _p.out.write({
        "string": "}",
    })
    _p.out.write({
        "string": "}",
    })
}

function serialize_function_call(_p: {
    readonly "out": gt.Out
    readonly "type": t.FunctionCall
}) {
    _p.out.write({
        "string": "{",
    })
    _p.out.write({
        "string": '"arguments": ',
    })
    _p.out.write({
        "string": "{",
    })
    _p.type["arguments"].getAlphabeticalOrdering({}).mapWithSeparator({
        "onElement": _cp => {
            _p.out.write({
                "string": '"',
            })
            _p.out.write({
                "string": _cp.key,
            })
            _p.out.write({
                "string": '": ',
            })
            _p.out.write({
                "string": "{",
            })
            _p.out.write({
                "string": '"type": ',
            })
            switch (_cp.element["type"][0]) {
                case "callback": {
                    const _$ = _cp.element["type"][1]
                    {
                        const $ = _$
                        _p.out.write({
                            "string": "[",
                        })
                        _p.out.write({
                            "string": '"callback", ',
                        })
                        _p.out.write({
                            "string": "{",
                        })
                        _p.out.write({
                            "string": '"block": ',
                        })
                        serialize_block({ type: $["block"], out: _p.out })
                        _p.out.write({
                            "string": "}",
                        })
                        _p.out.write({
                            "string": "]",
                        })
                        break
                    }
                }
                case "initializer": {
                    const _$ = _cp.element["type"][1]
                    {
                        const $ = _$
                        _p.out.write({
                            "string": "[",
                        })
                        _p.out.write({
                            "string": '"initializer", ',
                        })
                        _p.out.write({
                            "string": "{",
                        })
                        _p.out.write({
                            "string": '"initializer": ',
                        })
                        serialize_initializer({ type: $["initializer"], out: _p.out })
                        _p.out.write({
                            "string": "}",
                        })
                        _p.out.write({
                            "string": "]",
                        })
                        break
                    }
                }
                default: return assertUnreachable(_cp.element["type"][0])
            }
            _p.out.write({
                "string": "}",
            })
        },
        "onSeparator": _cp => {
            _p.out.write({
                "string": ",",
            })
        },
    })
    _p.out.write({
        "string": "}",
    })
    _p.out.write({
        "string": ",",
    })
    _p.out.write({
        "string": '"path": ',
    })
    _p.out.write({
        "string": '"',
    })
    _p.out.write({
        "string": _p.type["path"],
    })
    _p.out.write({
        "string": '"',
    })
    _p.out.write({
        "string": "}",
    })
}

function serialize_function_specification(_p: {
    readonly "out": gt.Out
    readonly "type": t.FunctionSpecification
}) {
    _p.out.write({
        "string": "{",
    })
    _p.out.write({
        "string": '"access": ',
    })
    switch (_p.type["access"][0]) {
        case "private": {
            const _$ = _p.type["access"][1]
            {
                const $ = _$
                _p.out.write({
                    "string": "[",
                })
                _p.out.write({
                    "string": '"private", ',
                })
                _p.out.write({
                    "string": "{",
                })
                _p.out.write({
                    "string": '"parameters": ',
                })
                _p.out.write({
                    "string": "{",
                })
                $["parameters"].getAlphabeticalOrdering({}).mapWithSeparator({
                    "onElement": _cp => {
                        _p.out.write({
                            "string": '"',
                        })
                        _p.out.write({
                            "string": _cp.key,
                        })
                        _p.out.write({
                            "string": '": ',
                        })
                        _p.out.write({
                            "string": "{",
                        })
                        _p.out.write({
                            "string": '"type": ',
                        })
                        _p.out.write({
                            "string": '"',
                        })
                        _p.out.write({
                            "string": _cp.element["type"],
                        })
                        _p.out.write({
                            "string": '"',
                        })
                        _p.out.write({
                            "string": "}",
                        })
                    },
                    "onSeparator": _cp => {
                        _p.out.write({
                            "string": ",",
                        })
                    },
                })
                _p.out.write({
                    "string": "}",
                })
                _p.out.write({
                    "string": "}",
                })
                _p.out.write({
                    "string": "]",
                })
                break
            }
        }
        case "public": {
            const _$ = _p.type["access"][1]
            {
                const $ = _$
                _p.out.write({
                    "string": "[",
                })
                _p.out.write({
                    "string": '"public", ',
                })
                _p.out.write({
                    "string": "{",
                })
                _p.out.write({
                    "string": '"parameters": ',
                })
                _p.out.write({
                    "string": "{",
                })
                $["parameters"].getAlphabeticalOrdering({}).mapWithSeparator({
                    "onElement": _cp => {
                        _p.out.write({
                            "string": '"',
                        })
                        _p.out.write({
                            "string": _cp.key,
                        })
                        _p.out.write({
                            "string": '": ',
                        })
                        _p.out.write({
                            "string": "{",
                        })
                        _p.out.write({
                            "string": '"type": ',
                        })
                        _p.out.write({
                            "string": '"',
                        })
                        _p.out.write({
                            "string": _cp.element["type"],
                        })
                        _p.out.write({
                            "string": '"',
                        })
                        _p.out.write({
                            "string": "}",
                        })
                    },
                    "onSeparator": _cp => {
                        _p.out.write({
                            "string": ",",
                        })
                    },
                })
                _p.out.write({
                    "string": "}",
                })
                _p.out.write({
                    "string": "}",
                })
                _p.out.write({
                    "string": "]",
                })
                break
            }
        }
        default: return assertUnreachable(_p.type["access"][0])
    }
    _p.out.write({
        "string": ",",
    })
    _p.out.write({
        "string": '"block": ',
    })
    serialize_block({ type: _p.type["block"], out: _p.out })
    _p.out.write({
        "string": "}",
    })
}

function serialize_generic_in_type(_p: {
    readonly "out": gt.Out
    readonly "type": t.GenericInType
}) {
    _p.out.write({
        "string": "{",
    })
    _p.out.write({
        "string": '"type": ',
    })
    switch (_p.type["type"][0]) {
        case "callback": {
            const _$ = _p.type["type"][1]
            {
                const $ = _$
                _p.out.write({
                    "string": "[",
                })
                _p.out.write({
                    "string": '"callback", ',
                })
                _p.out.write({
                    "string": "{",
                })
                _p.out.write({
                    "string": '"parameters": ',
                })
                _p.out.write({
                    "string": "{",
                })
                $["parameters"].getAlphabeticalOrdering({}).mapWithSeparator({
                    "onElement": _cp => {
                        _p.out.write({
                            "string": '"',
                        })
                        _p.out.write({
                            "string": _cp.key,
                        })
                        _p.out.write({
                            "string": '": ',
                        })
                        _p.out.write({
                            "string": "{",
                        })
                        _p.out.write({
                            "string": '"type": ',
                        })
                        serialize_generic_return_type({ type: _cp.element["type"], out: _p.out })
                        _p.out.write({
                            "string": "}",
                        })
                    },
                    "onSeparator": _cp => {
                        _p.out.write({
                            "string": ",",
                        })
                    },
                })
                _p.out.write({
                    "string": "}",
                })
                _p.out.write({
                    "string": ",",
                })
                _p.out.write({
                    "string": '"type": ',
                })
                switch ($["type"][0]) {
                    case "function": {
                        const _$ = $["type"][1]
                        {
                            const $ = _$
                            _p.out.write({
                                "string": "[",
                            })
                            _p.out.write({
                                "string": '"function", ',
                            })
                            _p.out.write({
                                "string": "{",
                            })
                            _p.out.write({
                                "string": '"guaranteed": ',
                            })
                            switch ($["guaranteed"][0]) {
                                case "no": {
                                    const _$ = $["guaranteed"][1]
                                    {
                                        const $ = _$
                                        _p.out.write({
                                            "string": "[",
                                        })
                                        _p.out.write({
                                            "string": '"no", ',
                                        })
                                        _p.out.write({
                                            "string": "{",
                                        })
                                        _p.out.write({
                                            "string": "}",
                                        })
                                        _p.out.write({
                                            "string": "]",
                                        })
                                        break
                                    }
                                }
                                case "yes": {
                                    const _$ = $["guaranteed"][1]
                                    {
                                        const $ = _$
                                        _p.out.write({
                                            "string": "[",
                                        })
                                        _p.out.write({
                                            "string": '"yes", ',
                                        })
                                        _p.out.write({
                                            "string": "{",
                                        })
                                        _p.out.write({
                                            "string": "}",
                                        })
                                        _p.out.write({
                                            "string": "]",
                                        })
                                        break
                                    }
                                }
                                default: return assertUnreachable($["guaranteed"][0])
                            }
                            _p.out.write({
                                "string": ",",
                            })
                            _p.out.write({
                                "string": '"type": ',
                            })
                            serialize_generic_in_type({ type: $["type"], out: _p.out })
                            _p.out.write({
                                "string": "}",
                            })
                            _p.out.write({
                                "string": "]",
                            })
                            break
                        }
                    }
                    case "procedure": {
                        const _$ = $["type"][1]
                        {
                            const $ = _$
                            _p.out.write({
                                "string": "[",
                            })
                            _p.out.write({
                                "string": '"procedure", ',
                            })
                            _p.out.write({
                                "string": "{",
                            })
                            _p.out.write({
                                "string": "}",
                            })
                            _p.out.write({
                                "string": "]",
                            })
                            break
                        }
                    }
                    default: return assertUnreachable($["type"][0])
                }
                _p.out.write({
                    "string": "}",
                })
                _p.out.write({
                    "string": "]",
                })
                break
            }
        }
        case "method type parameter": {
            const _$ = _p.type["type"][1]
            {
                const $ = _$
                _p.out.write({
                    "string": "[",
                })
                _p.out.write({
                    "string": '"method type parameter", ',
                })
                _p.out.write({
                    "string": "{",
                })
                _p.out.write({
                    "string": '"type parameter": ',
                })
                _p.out.write({
                    "string": '"',
                })
                _p.out.write({
                    "string": $["type parameter"].getKey({}),
                })
                _p.out.write({
                    "string": '"',
                })
                _p.out.write({
                    "string": "}",
                })
                _p.out.write({
                    "string": "]",
                })
                break
            }
        }
        case "string": {
            const _$ = _p.type["type"][1]
            {
                const $ = _$
                _p.out.write({
                    "string": "[",
                })
                _p.out.write({
                    "string": '"string", ',
                })
                _p.out.write({
                    "string": "{",
                })
                _p.out.write({
                    "string": "}",
                })
                _p.out.write({
                    "string": "]",
                })
                break
            }
        }
        default: return assertUnreachable(_p.type["type"][0])
    }
    _p.out.write({
        "string": "}",
    })
}

function serialize_generic_interface_reference(_p: {
    readonly "out": gt.Out
    readonly "type": t.GenericInterfaceReference
}) {
    _p.out.write({
        "string": "{",
    })
    _p.out.write({
        "string": '"interface": ',
    })
    _p.out.write({
        "string": '"',
    })
    _p.out.write({
        "string": _p.type["interface"],
    })
    _p.out.write({
        "string": '"',
    })
    _p.out.write({
        "string": ",",
    })
    _p.out.write({
        "string": '"type arguments": ',
    })
    _p.out.write({
        "string": "{",
    })
    _p.type["type arguments"].getAlphabeticalOrdering({}).mapWithSeparator({
        "onElement": _cp => {
            _p.out.write({
                "string": '"',
            })
            _p.out.write({
                "string": _cp.key,
            })
            _p.out.write({
                "string": '": ',
            })
            _p.out.write({
                "string": "{",
            })
            _p.out.write({
                "string": '"type": ',
            })
            serialize_generic_return_type({ type: _cp.element["type"], out: _p.out })
            _p.out.write({
                "string": "}",
            })
        },
        "onSeparator": _cp => {
            _p.out.write({
                "string": ",",
            })
        },
    })
    _p.out.write({
        "string": "}",
    })
    _p.out.write({
        "string": "}",
    })
}

function serialize_generic_return_type(_p: {
    readonly "out": gt.Out
    readonly "type": t.GenericReturnType
}) {
    _p.out.write({
        "string": "{",
    })
    _p.out.write({
        "string": '"type": ',
    })
    switch (_p.type["type"][0]) {
        case "interface parameter": {
            const _$ = _p.type["type"][1]
            {
                const $ = _$
                _p.out.write({
                    "string": "[",
                })
                _p.out.write({
                    "string": '"interface parameter", ',
                })
                _p.out.write({
                    "string": "{",
                })
                _p.out.write({
                    "string": '"parameter": ',
                })
                _p.out.write({
                    "string": '"',
                })
                _p.out.write({
                    "string": $["parameter"],
                })
                _p.out.write({
                    "string": '"',
                })
                _p.out.write({
                    "string": "}",
                })
                _p.out.write({
                    "string": "]",
                })
                break
            }
        }
        case "method type parameter": {
            const _$ = _p.type["type"][1]
            {
                const $ = _$
                _p.out.write({
                    "string": "[",
                })
                _p.out.write({
                    "string": '"method type parameter", ',
                })
                _p.out.write({
                    "string": "{",
                })
                _p.out.write({
                    "string": '"type parameter": ',
                })
                _p.out.write({
                    "string": '"',
                })
                _p.out.write({
                    "string": $["type parameter"].getKey({}),
                })
                _p.out.write({
                    "string": '"',
                })
                _p.out.write({
                    "string": "}",
                })
                _p.out.write({
                    "string": "]",
                })
                break
            }
        }
        case "reference to generic declaration": {
            const _$ = _p.type["type"][1]
            {
                const $ = _$
                _p.out.write({
                    "string": "[",
                })
                _p.out.write({
                    "string": '"reference to generic declaration", ',
                })
                _p.out.write({
                    "string": "{",
                })
                _p.out.write({
                    "string": '"interface": ',
                })
                serialize_generic_interface_reference({ type: $["interface"], out: _p.out })
                _p.out.write({
                    "string": "}",
                })
                _p.out.write({
                    "string": "]",
                })
                break
            }
        }
        case "string": {
            const _$ = _p.type["type"][1]
            {
                const $ = _$
                _p.out.write({
                    "string": "[",
                })
                _p.out.write({
                    "string": '"string", ',
                })
                _p.out.write({
                    "string": "{",
                })
                _p.out.write({
                    "string": "}",
                })
                _p.out.write({
                    "string": "]",
                })
                break
            }
        }
        default: return assertUnreachable(_p.type["type"][0])
    }
    _p.out.write({
        "string": "}",
    })
}

function serialize_initializer(_p: {
    readonly "out": gt.Out
    readonly "type": t.Initializer
}) {
    _p.out.write({
        "string": "{",
    })
    _p.out.write({
        "string": '"type": ',
    })
    switch (_p.type["type"][0]) {
        case "constructor call": {
            const _$ = _p.type["type"][1]
            {
                const $ = _$
                _p.out.write({
                    "string": "[",
                })
                _p.out.write({
                    "string": '"constructor call", ',
                })
                _p.out.write({
                    "string": "{",
                })
                _p.out.write({
                    "string": '"arguments": ',
                })
                _p.out.write({
                    "string": "{",
                })
                $["arguments"].getAlphabeticalOrdering({}).mapWithSeparator({
                    "onElement": _cp => {
                        _p.out.write({
                            "string": '"',
                        })
                        _p.out.write({
                            "string": _cp.key,
                        })
                        _p.out.write({
                            "string": '": ',
                        })
                        _p.out.write({
                            "string": "{",
                        })
                        _p.out.write({
                            "string": '"initializer": ',
                        })
                        serialize_initializer({ type: _cp.element["initializer"], out: _p.out })
                        _p.out.write({
                            "string": "}",
                        })
                    },
                    "onSeparator": _cp => {
                        _p.out.write({
                            "string": ",",
                        })
                    },
                })
                _p.out.write({
                    "string": "}",
                })
                _p.out.write({
                    "string": ",",
                })
                _p.out.write({
                    "string": '"path": ',
                })
                _p.out.write({
                    "string": '"',
                })
                _p.out.write({
                    "string": $["path"],
                })
                _p.out.write({
                    "string": '"',
                })
                _p.out.write({
                    "string": "}",
                })
                _p.out.write({
                    "string": "]",
                })
                break
            }
        }
        case "function call": {
            const _$ = _p.type["type"][1]
            {
                const $ = _$
                _p.out.write({
                    "string": "[",
                })
                _p.out.write({
                    "string": '"function call", ',
                })
                _p.out.write({
                    "string": "{",
                })
                _p.out.write({
                    "string": '"call": ',
                })
                serialize_function_call({ type: $["call"], out: _p.out })
                _p.out.write({
                    "string": "}",
                })
                _p.out.write({
                    "string": "]",
                })
                break
            }
        }
        case "object": {
            const _$ = _p.type["type"][1]
            {
                const $ = _$
                _p.out.write({
                    "string": "[",
                })
                _p.out.write({
                    "string": '"object", ',
                })
                _p.out.write({
                    "string": "{",
                })
                _p.out.write({
                    "string": '"properties": ',
                })
                _p.out.write({
                    "string": "{",
                })
                $["properties"].getAlphabeticalOrdering({}).mapWithSeparator({
                    "onElement": _cp => {
                        _p.out.write({
                            "string": '"',
                        })
                        _p.out.write({
                            "string": _cp.key,
                        })
                        _p.out.write({
                            "string": '": ',
                        })
                        _p.out.write({
                            "string": "{",
                        })
                        _p.out.write({
                            "string": '"initializer": ',
                        })
                        serialize_initializer({ type: _cp.element["initializer"], out: _p.out })
                        _p.out.write({
                            "string": "}",
                        })
                    },
                    "onSeparator": _cp => {
                        _p.out.write({
                            "string": ",",
                        })
                    },
                })
                _p.out.write({
                    "string": "}",
                })
                _p.out.write({
                    "string": "}",
                })
                _p.out.write({
                    "string": "]",
                })
                break
            }
        }
        case "rawx": {
            const _$ = _p.type["type"][1]
            {
                const $ = _$
                _p.out.write({
                    "string": "[",
                })
                _p.out.write({
                    "string": '"rawx", ',
                })
                _p.out.write({
                    "string": "{",
                })
                _p.out.write({
                    "string": '"rawstring": ',
                })
                _p.out.write({
                    "string": '"',
                })
                _p.out.write({
                    "string": $["rawstring"],
                })
                _p.out.write({
                    "string": '"',
                })
                _p.out.write({
                    "string": "}",
                })
                _p.out.write({
                    "string": "]",
                })
                break
            }
        }
        case "selection": {
            const _$ = _p.type["type"][1]
            {
                const $ = _$
                _p.out.write({
                    "string": "[",
                })
                _p.out.write({
                    "string": '"selection", ',
                })
                _p.out.write({
                    "string": "{",
                })
                _p.out.write({
                    "string": '"start point": ',
                })
                switch ($["start point"][0]) {
                    case "callback parameter": {
                        const _$ = $["start point"][1]
                        {
                            const $ = _$
                            _p.out.write({
                                "string": "[",
                            })
                            _p.out.write({
                                "string": '"callback parameter", ',
                            })
                            _p.out.write({
                                "string": "{",
                            })
                            _p.out.write({
                                "string": '"parameter": ',
                            })
                            _p.out.write({
                                "string": '"',
                            })
                            _p.out.write({
                                "string": $["parameter"],
                            })
                            _p.out.write({
                                "string": '"',
                            })
                            _p.out.write({
                                "string": "}",
                            })
                            _p.out.write({
                                "string": "]",
                            })
                            break
                        }
                    }
                    case "parameter": {
                        const _$ = $["start point"][1]
                        {
                            const $ = _$
                            _p.out.write({
                                "string": "[",
                            })
                            _p.out.write({
                                "string": '"parameter", ',
                            })
                            _p.out.write({
                                "string": "{",
                            })
                            _p.out.write({
                                "string": '"parameter": ',
                            })
                            _p.out.write({
                                "string": '"',
                            })
                            _p.out.write({
                                "string": $["parameter"],
                            })
                            _p.out.write({
                                "string": '"',
                            })
                            _p.out.write({
                                "string": "}",
                            })
                            _p.out.write({
                                "string": "]",
                            })
                            break
                        }
                    }
                    case "property": {
                        const _$ = $["start point"][1]
                        {
                            const $ = _$
                            _p.out.write({
                                "string": "[",
                            })
                            _p.out.write({
                                "string": '"property", ',
                            })
                            _p.out.write({
                                "string": "{",
                            })
                            _p.out.write({
                                "string": '"property": ',
                            })
                            _p.out.write({
                                "string": '"',
                            })
                            _p.out.write({
                                "string": $["property"],
                            })
                            _p.out.write({
                                "string": '"',
                            })
                            _p.out.write({
                                "string": "}",
                            })
                            _p.out.write({
                                "string": "]",
                            })
                            break
                        }
                    }
                    case "variable": {
                        const _$ = $["start point"][1]
                        {
                            const $ = _$
                            _p.out.write({
                                "string": "[",
                            })
                            _p.out.write({
                                "string": '"variable", ',
                            })
                            _p.out.write({
                                "string": "{",
                            })
                            _p.out.write({
                                "string": '"variable": ',
                            })
                            _p.out.write({
                                "string": '"',
                            })
                            _p.out.write({
                                "string": $["variable"],
                            })
                            _p.out.write({
                                "string": '"',
                            })
                            _p.out.write({
                                "string": "}",
                            })
                            _p.out.write({
                                "string": "]",
                            })
                            break
                        }
                    }
                    default: return assertUnreachable($["start point"][0])
                }
                _p.out.write({
                    "string": ",",
                })
                _p.out.write({
                    "string": '"steps": ',
                })
                _p.out.write({
                    "string": "[",
                })
                $["steps"].mapWithSeparator({
                    "onElement": _cp => {
                        _p.out.write({
                            "string": "{",
                        })
                        _p.out.write({
                            "string": '"rawselectionstring": ',
                        })
                        _p.out.write({
                            "string": '"',
                        })
                        _p.out.write({
                            "string": _cp.element["rawselectionstring"],
                        })
                        _p.out.write({
                            "string": '"',
                        })
                        _p.out.write({
                            "string": "}",
                        })
                    },
                    "onSeparator": _cp => {
                        _p.out.write({
                            "string": ",",
                        })
                    },
                })
                _p.out.write({
                    "string": "]",
                })
                _p.out.write({
                    "string": "}",
                })
                _p.out.write({
                    "string": "]",
                })
                break
            }
        }
        case "tagged union": {
            const _$ = _p.type["type"][1]
            {
                const $ = _$
                _p.out.write({
                    "string": "[",
                })
                _p.out.write({
                    "string": '"tagged union", ',
                })
                _p.out.write({
                    "string": "{",
                })
                _p.out.write({
                    "string": '"initializer": ',
                })
                serialize_initializer({ type: $["initializer"], out: _p.out })
                _p.out.write({
                    "string": ",",
                })
                _p.out.write({
                    "string": '"state": ',
                })
                _p.out.write({
                    "string": '"',
                })
                _p.out.write({
                    "string": $["state"],
                })
                _p.out.write({
                    "string": '"',
                })
                _p.out.write({
                    "string": ",",
                })
                _p.out.write({
                    "string": '"type specification": ',
                })
                switch ($["type specification"][0]) {
                    case "derived": {
                        const _$ = $["type specification"][1]
                        {
                            const $ = _$
                            _p.out.write({
                                "string": "[",
                            })
                            _p.out.write({
                                "string": '"derived", ',
                            })
                            _p.out.write({
                                "string": "{",
                            })
                            _p.out.write({
                                "string": "}",
                            })
                            _p.out.write({
                                "string": "]",
                            })
                            break
                        }
                    }
                    case "reference": {
                        const _$ = $["type specification"][1]
                        {
                            const $ = _$
                            _p.out.write({
                                "string": "[",
                            })
                            _p.out.write({
                                "string": '"reference", ',
                            })
                            _p.out.write({
                                "string": "{",
                            })
                            _p.out.write({
                                "string": '"type": ',
                            })
                            _p.out.write({
                                "string": '"',
                            })
                            _p.out.write({
                                "string": $["type"],
                            })
                            _p.out.write({
                                "string": '"',
                            })
                            _p.out.write({
                                "string": "}",
                            })
                            _p.out.write({
                                "string": "]",
                            })
                            break
                        }
                    }
                    default: return assertUnreachable($["type specification"][0])
                }
                _p.out.write({
                    "string": "}",
                })
                _p.out.write({
                    "string": "]",
                })
                break
            }
        }
        default: return assertUnreachable(_p.type["type"][0])
    }
    _p.out.write({
        "string": "}",
    })
}

function serializex(_p: {
    readonly "out": gt.Out
    readonly "type": t.CompilationUnit
}) {
    _p.out.write({
        "string": "{",
    })
    _p.out.write({
        "string": '"algorithm units": ',
    })
    _p.out.write({
        "string": "{",
    })
    _p.type["algorithm units"].getAlphabeticalOrdering({}).mapWithSeparator({
        "onElement": _cp => {
            _p.out.write({
                "string": '"',
            })
            _p.out.write({
                "string": _cp.key,
            })
            _p.out.write({
                "string": '": ',
            })
            _p.out.write({
                "string": "{",
            })
            _p.out.write({
                "string": '"type": ',
            })
            switch (_cp.element["type"][0]) {
                case "class": {
                    const _$ = _cp.element["type"][1]
                    {
                        const $ = _$
                        _p.out.write({
                            "string": "[",
                        })
                        _p.out.write({
                            "string": '"class", ',
                        })
                        _p.out.write({
                            "string": "{",
                        })
                        _p.out.write({
                            "string": '"methods": ',
                        })
                        _p.out.write({
                            "string": "{",
                        })
                        $["methods"].getAlphabeticalOrdering({}).mapWithSeparator({
                            "onElement": _cp => {
                                _p.out.write({
                                    "string": '"',
                                })
                                _p.out.write({
                                    "string": _cp.key,
                                })
                                _p.out.write({
                                    "string": '": ',
                                })
                                _p.out.write({
                                    "string": "{",
                                })
                                _p.out.write({
                                    "string": '"specification": ',
                                })
                                serialize_function_specification({ type: _cp.element["specification"], out: _p.out })
                                _p.out.write({
                                    "string": "}",
                                })
                            },
                            "onSeparator": _cp => {
                                _p.out.write({
                                    "string": ",",
                                })
                            },
                        })
                        _p.out.write({
                            "string": "}",
                        })
                        _p.out.write({
                            "string": ",",
                        })
                        _p.out.write({
                            "string": '"properties": ',
                        })
                        _p.out.write({
                            "string": "{",
                        })
                        $["properties"].getAlphabeticalOrdering({}).mapWithSeparator({
                            "onElement": _cp => {
                                _p.out.write({
                                    "string": '"',
                                })
                                _p.out.write({
                                    "string": _cp.key,
                                })
                                _p.out.write({
                                    "string": '": ',
                                })
                                _p.out.write({
                                    "string": "{",
                                })
                                _p.out.write({
                                    "string": '"initialization": ',
                                })
                                switch (_cp.element["initialization"][0]) {
                                    case "default": {
                                        const _$ = _cp.element["initialization"][1]
                                        {
                                            const $ = _$
                                            _p.out.write({
                                                "string": "[",
                                            })
                                            _p.out.write({
                                                "string": '"default", ',
                                            })
                                            _p.out.write({
                                                "string": "{",
                                            })
                                            _p.out.write({
                                                "string": '"initializer": ',
                                            })
                                            _p.out.write({
                                                "string": '"',
                                            })
                                            _p.out.write({
                                                "string": $["initializer"],
                                            })
                                            _p.out.write({
                                                "string": '"',
                                            })
                                            _p.out.write({
                                                "string": "}",
                                            })
                                            _p.out.write({
                                                "string": "]",
                                            })
                                            break
                                        }
                                    }
                                    case "parametrized": {
                                        const _$ = _cp.element["initialization"][1]
                                        {
                                            const $ = _$
                                            _p.out.write({
                                                "string": "[",
                                            })
                                            _p.out.write({
                                                "string": '"parametrized", ',
                                            })
                                            _p.out.write({
                                                "string": "{",
                                            })
                                            _p.out.write({
                                                "string": '"type": ',
                                            })
                                            _p.out.write({
                                                "string": '"',
                                            })
                                            _p.out.write({
                                                "string": $["type"],
                                            })
                                            _p.out.write({
                                                "string": '"',
                                            })
                                            _p.out.write({
                                                "string": "}",
                                            })
                                            _p.out.write({
                                                "string": "]",
                                            })
                                            break
                                        }
                                    }
                                    default: return assertUnreachable(_cp.element["initialization"][0])
                                }
                                _p.out.write({
                                    "string": "}",
                                })
                            },
                            "onSeparator": _cp => {
                                _p.out.write({
                                    "string": ",",
                                })
                            },
                        })
                        _p.out.write({
                            "string": "}",
                        })
                        _p.out.write({
                            "string": "}",
                        })
                        _p.out.write({
                            "string": "]",
                        })
                        break
                    }
                }
                case "function": {
                    const _$ = _cp.element["type"][1]
                    {
                        const $ = _$
                        _p.out.write({
                            "string": "[",
                        })
                        _p.out.write({
                            "string": '"function", ',
                        })
                        _p.out.write({
                            "string": "{",
                        })
                        _p.out.write({
                            "string": '"specification": ',
                        })
                        serialize_function_specification({ type: $["specification"], out: _p.out })
                        _p.out.write({
                            "string": "}",
                        })
                        _p.out.write({
                            "string": "]",
                        })
                        break
                    }
                }
                default: return assertUnreachable(_cp.element["type"][0])
            }
            _p.out.write({
                "string": "}",
            })
        },
        "onSeparator": _cp => {
            _p.out.write({
                "string": ",",
            })
        },
    })
    _p.out.write({
        "string": "}",
    })
    _p.out.write({
        "string": ",",
    })
    _p.out.write({
        "string": '"generic interface declarations": ',
    })
    _p.out.write({
        "string": "{",
    })
    _p.type["generic interface declarations"].getAlphabeticalOrdering({}).mapWithSeparator({
        "onElement": _cp => {
            _p.out.write({
                "string": '"',
            })
            _p.out.write({
                "string": _cp.key,
            })
            _p.out.write({
                "string": '": ',
            })
            _p.out.write({
                "string": "{",
            })
            _p.out.write({
                "string": '"base interfaces": ',
            })
            _p.out.write({
                "string": "{",
            })
            _cp.element["base interfaces"].getAlphabeticalOrdering({}).mapWithSeparator({
                "onElement": _cp => {
                    _p.out.write({
                        "string": '"',
                    })
                    _p.out.write({
                        "string": _cp.key,
                    })
                    _p.out.write({
                        "string": '": ',
                    })
                    _p.out.write({
                        "string": "{",
                    })
                    _p.out.write({
                        "string": '"interface": ',
                    })
                    serialize_generic_interface_reference({ type: _cp.element["interface"], out: _p.out })
                    _p.out.write({
                        "string": "}",
                    })
                },
                "onSeparator": _cp => {
                    _p.out.write({
                        "string": ",",
                    })
                },
            })
            _p.out.write({
                "string": "}",
            })
            _p.out.write({
                "string": ",",
            })
            _p.out.write({
                "string": '"methods": ',
            })
            _p.out.write({
                "string": "{",
            })
            _cp.element["methods"].getAlphabeticalOrdering({}).mapWithSeparator({
                "onElement": _cp => {
                    _p.out.write({
                        "string": '"',
                    })
                    _p.out.write({
                        "string": _cp.key,
                    })
                    _p.out.write({
                        "string": '": ',
                    })
                    _p.out.write({
                        "string": "{",
                    })
                    _p.out.write({
                        "string": '"parameters": ',
                    })
                    _p.out.write({
                        "string": "{",
                    })
                    _cp.element["parameters"].getAlphabeticalOrdering({}).mapWithSeparator({
                        "onElement": _cp => {
                            _p.out.write({
                                "string": '"',
                            })
                            _p.out.write({
                                "string": _cp.key,
                            })
                            _p.out.write({
                                "string": '": ',
                            })
                            _p.out.write({
                                "string": "{",
                            })
                            _p.out.write({
                                "string": '"type": ',
                            })
                            serialize_generic_in_type({ type: _cp.element["type"], out: _p.out })
                            _p.out.write({
                                "string": "}",
                            })
                        },
                        "onSeparator": _cp => {
                            _p.out.write({
                                "string": ",",
                            })
                        },
                    })
                    _p.out.write({
                        "string": "}",
                    })
                    _p.out.write({
                        "string": ",",
                    })
                    _p.out.write({
                        "string": '"type": ',
                    })
                    switch (_cp.element["type"][0]) {
                        case "function": {
                            const _$ = _cp.element["type"][1]
                            {
                                const $ = _$
                                _p.out.write({
                                    "string": "[",
                                })
                                _p.out.write({
                                    "string": '"function", ',
                                })
                                _p.out.write({
                                    "string": "{",
                                })
                                _p.out.write({
                                    "string": '"guaranteed": ',
                                })
                                switch ($["guaranteed"][0]) {
                                    case "no": {
                                        const _$ = $["guaranteed"][1]
                                        {
                                            const $ = _$
                                            _p.out.write({
                                                "string": "[",
                                            })
                                            _p.out.write({
                                                "string": '"no", ',
                                            })
                                            _p.out.write({
                                                "string": "{",
                                            })
                                            _p.out.write({
                                                "string": "}",
                                            })
                                            _p.out.write({
                                                "string": "]",
                                            })
                                            break
                                        }
                                    }
                                    case "yes": {
                                        const _$ = $["guaranteed"][1]
                                        {
                                            const $ = _$
                                            _p.out.write({
                                                "string": "[",
                                            })
                                            _p.out.write({
                                                "string": '"yes", ',
                                            })
                                            _p.out.write({
                                                "string": "{",
                                            })
                                            _p.out.write({
                                                "string": "}",
                                            })
                                            _p.out.write({
                                                "string": "]",
                                            })
                                            break
                                        }
                                    }
                                    default: return assertUnreachable($["guaranteed"][0])
                                }
                                _p.out.write({
                                    "string": ",",
                                })
                                _p.out.write({
                                    "string": '"type": ',
                                })
                                serialize_generic_return_type({ type: $["type"], out: _p.out })
                                _p.out.write({
                                    "string": "}",
                                })
                                _p.out.write({
                                    "string": "]",
                                })
                                break
                            }
                        }
                        case "procedure": {
                            const _$ = _cp.element["type"][1]
                            {
                                const $ = _$
                                _p.out.write({
                                    "string": "[",
                                })
                                _p.out.write({
                                    "string": '"procedure", ',
                                })
                                _p.out.write({
                                    "string": "{",
                                })
                                _p.out.write({
                                    "string": "}",
                                })
                                _p.out.write({
                                    "string": "]",
                                })
                                break
                            }
                        }
                        default: return assertUnreachable(_cp.element["type"][0])
                    }
                    _p.out.write({
                        "string": ",",
                    })
                    _p.out.write({
                        "string": '"type parameters": ',
                    })
                    _p.out.write({
                        "string": "{",
                    })
                    _cp.element["type parameters"].getAlphabeticalOrdering({}).mapWithSeparator({
                        "onElement": _cp => {
                            _p.out.write({
                                "string": '"',
                            })
                            _p.out.write({
                                "string": _cp.key,
                            })
                            _p.out.write({
                                "string": '": ',
                            })
                            _p.out.write({
                                "string": "{",
                            })
                            _p.out.write({
                                "string": "}",
                            })
                        },
                        "onSeparator": _cp => {
                            _p.out.write({
                                "string": ",",
                            })
                        },
                    })
                    _p.out.write({
                        "string": "}",
                    })
                    _p.out.write({
                        "string": "}",
                    })
                },
                "onSeparator": _cp => {
                    _p.out.write({
                        "string": ",",
                    })
                },
            })
            _p.out.write({
                "string": "}",
            })
            _p.out.write({
                "string": ",",
            })
            _p.out.write({
                "string": '"parameters": ',
            })
            _p.out.write({
                "string": "{",
            })
            _cp.element["parameters"].getAlphabeticalOrdering({}).mapWithSeparator({
                "onElement": _cp => {
                    _p.out.write({
                        "string": '"',
                    })
                    _p.out.write({
                        "string": _cp.key,
                    })
                    _p.out.write({
                        "string": '": ',
                    })
                    _p.out.write({
                        "string": "{",
                    })
                    _p.out.write({
                        "string": "}",
                    })
                },
                "onSeparator": _cp => {
                    _p.out.write({
                        "string": ",",
                    })
                },
            })
            _p.out.write({
                "string": "}",
            })
            _p.out.write({
                "string": "}",
            })
        },
        "onSeparator": _cp => {
            _p.out.write({
                "string": ",",
            })
        },
    })
    _p.out.write({
        "string": "}",
    })
    _p.out.write({
        "string": ",",
    })
    _p.out.write({
        "string": '"interfaces": ',
    })
    _p.out.write({
        "string": "{",
    })
    _p.type["interfaces"].getAlphabeticalOrdering({}).mapWithSeparator({
        "onElement": _cp => {
            _p.out.write({
                "string": '"',
            })
            _p.out.write({
                "string": _cp.key,
            })
            _p.out.write({
                "string": '": ',
            })
            _p.out.write({
                "string": "{",
            })
            _p.out.write({
                "string": '"methods": ',
            })
            _p.out.write({
                "string": "{",
            })
            _cp.element["methods"].getAlphabeticalOrdering({}).mapWithSeparator({
                "onElement": _cp => {
                    _p.out.write({
                        "string": '"',
                    })
                    _p.out.write({
                        "string": _cp.key,
                    })
                    _p.out.write({
                        "string": '": ',
                    })
                    _p.out.write({
                        "string": "{",
                    })
                    _p.out.write({
                        "string": '"parameters": ',
                    })
                    _p.out.write({
                        "string": "{",
                    })
                    _cp.element["parameters"].getAlphabeticalOrdering({}).mapWithSeparator({
                        "onElement": _cp => {
                            _p.out.write({
                                "string": '"',
                            })
                            _p.out.write({
                                "string": _cp.key,
                            })
                            _p.out.write({
                                "string": '": ',
                            })
                            _p.out.write({
                                "string": "{",
                            })
                            _p.out.write({
                                "string": '"type": ',
                            })
                            _p.out.write({
                                "string": '"',
                            })
                            _p.out.write({
                                "string": _cp.element["type"],
                            })
                            _p.out.write({
                                "string": '"',
                            })
                            _p.out.write({
                                "string": "}",
                            })
                        },
                        "onSeparator": _cp => {
                            _p.out.write({
                                "string": ",",
                            })
                        },
                    })
                    _p.out.write({
                        "string": "}",
                    })
                    _p.out.write({
                        "string": ",",
                    })
                    _p.out.write({
                        "string": '"type": ',
                    })
                    switch (_cp.element["type"][0]) {
                        case "function": {
                            const _$ = _cp.element["type"][1]
                            {
                                const $ = _$
                                _p.out.write({
                                    "string": "[",
                                })
                                _p.out.write({
                                    "string": '"function", ',
                                })
                                _p.out.write({
                                    "string": "{",
                                })
                                _p.out.write({
                                    "string": '"guaranteed": ',
                                })
                                switch ($["guaranteed"][0]) {
                                    case "no": {
                                        const _$ = $["guaranteed"][1]
                                        {
                                            const $ = _$
                                            _p.out.write({
                                                "string": "[",
                                            })
                                            _p.out.write({
                                                "string": '"no", ',
                                            })
                                            _p.out.write({
                                                "string": "{",
                                            })
                                            _p.out.write({
                                                "string": "}",
                                            })
                                            _p.out.write({
                                                "string": "]",
                                            })
                                            break
                                        }
                                    }
                                    case "yes": {
                                        const _$ = $["guaranteed"][1]
                                        {
                                            const $ = _$
                                            _p.out.write({
                                                "string": "[",
                                            })
                                            _p.out.write({
                                                "string": '"yes", ',
                                            })
                                            _p.out.write({
                                                "string": "{",
                                            })
                                            _p.out.write({
                                                "string": "}",
                                            })
                                            _p.out.write({
                                                "string": "]",
                                            })
                                            break
                                        }
                                    }
                                    default: return assertUnreachable($["guaranteed"][0])
                                }
                                _p.out.write({
                                    "string": ",",
                                })
                                _p.out.write({
                                    "string": '"raw return type": ',
                                })
                                _p.out.write({
                                    "string": '"',
                                })
                                _p.out.write({
                                    "string": $["raw return type"],
                                })
                                _p.out.write({
                                    "string": '"',
                                })
                                _p.out.write({
                                    "string": "}",
                                })
                                _p.out.write({
                                    "string": "]",
                                })
                                break
                            }
                        }
                        case "procedure": {
                            const _$ = _cp.element["type"][1]
                            {
                                const $ = _$
                                _p.out.write({
                                    "string": "[",
                                })
                                _p.out.write({
                                    "string": '"procedure", ',
                                })
                                _p.out.write({
                                    "string": "{",
                                })
                                _p.out.write({
                                    "string": "}",
                                })
                                _p.out.write({
                                    "string": "]",
                                })
                                break
                            }
                        }
                        default: return assertUnreachable(_cp.element["type"][0])
                    }
                    _p.out.write({
                        "string": "}",
                    })
                },
                "onSeparator": _cp => {
                    _p.out.write({
                        "string": ",",
                    })
                },
            })
            _p.out.write({
                "string": "}",
            })
            _p.out.write({
                "string": "}",
            })
        },
        "onSeparator": _cp => {
            _p.out.write({
                "string": ",",
            })
        },
    })
    _p.out.write({
        "string": "}",
    })
    _p.out.write({
        "string": ",",
    })
    _p.out.write({
        "string": '"types": ',
    })
    _p.out.write({
        "string": "{",
    })
    _p.type["types"].getAlphabeticalOrdering({}).mapWithSeparator({
        "onElement": _cp => {
            _p.out.write({
                "string": '"',
            })
            _p.out.write({
                "string": _cp.key,
            })
            _p.out.write({
                "string": '": ',
            })
            _p.out.write({
                "string": "{",
            })
            _p.out.write({
                "string": '"type": ',
            })
            switch (_cp.element["type"][0]) {
                case "object": {
                    const _$ = _cp.element["type"][1]
                    {
                        const $ = _$
                        _p.out.write({
                            "string": "[",
                        })
                        _p.out.write({
                            "string": '"object", ',
                        })
                        _p.out.write({
                            "string": "{",
                        })
                        _p.out.write({
                            "string": '"properties": ',
                        })
                        _p.out.write({
                            "string": "{",
                        })
                        $["properties"].getAlphabeticalOrdering({}).mapWithSeparator({
                            "onElement": _cp => {
                                _p.out.write({
                                    "string": '"',
                                })
                                _p.out.write({
                                    "string": _cp.key,
                                })
                                _p.out.write({
                                    "string": '": ',
                                })
                                _p.out.write({
                                    "string": "{",
                                })
                                _p.out.write({
                                    "string": '"type": ',
                                })
                                switch (_cp.element["type"][0]) {
                                    case "generic type": {
                                        const _$ = _cp.element["type"][1]
                                        {
                                            const $ = _$
                                            _p.out.write({
                                                "string": "[",
                                            })
                                            _p.out.write({
                                                "string": '"generic type", ',
                                            })
                                            _p.out.write({
                                                "string": "{",
                                            })
                                            _p.out.write({
                                                "string": '"arguments": ',
                                            })
                                            _p.out.write({
                                                "string": "{",
                                            })
                                            $["arguments"].getAlphabeticalOrdering({}).mapWithSeparator({
                                                "onElement": _cp => {
                                                    _p.out.write({
                                                        "string": '"',
                                                    })
                                                    _p.out.write({
                                                        "string": _cp.key,
                                                    })
                                                    _p.out.write({
                                                        "string": '": ',
                                                    })
                                                    _p.out.write({
                                                        "string": "{",
                                                    })
                                                    _p.out.write({
                                                        "string": '"raw": ',
                                                    })
                                                    _p.out.write({
                                                        "string": '"',
                                                    })
                                                    _p.out.write({
                                                        "string": _cp.element["raw"],
                                                    })
                                                    _p.out.write({
                                                        "string": '"',
                                                    })
                                                    _p.out.write({
                                                        "string": "}",
                                                    })
                                                },
                                                "onSeparator": _cp => {
                                                    _p.out.write({
                                                        "string": ",",
                                                    })
                                                },
                                            })
                                            _p.out.write({
                                                "string": "}",
                                            })
                                            _p.out.write({
                                                "string": ",",
                                            })
                                            _p.out.write({
                                                "string": '"referenced type": ',
                                            })
                                            _p.out.write({
                                                "string": '"',
                                            })
                                            _p.out.write({
                                                "string": $["referenced type"].getKey({}),
                                            })
                                            _p.out.write({
                                                "string": '"',
                                            })
                                            _p.out.write({
                                                "string": "}",
                                            })
                                            _p.out.write({
                                                "string": "]",
                                            })
                                            break
                                        }
                                    }
                                    case "raw": {
                                        const _$ = _cp.element["type"][1]
                                        {
                                            const $ = _$
                                            _p.out.write({
                                                "string": "[",
                                            })
                                            _p.out.write({
                                                "string": '"raw", ',
                                            })
                                            _p.out.write({
                                                "string": "{",
                                            })
                                            _p.out.write({
                                                "string": '"raw": ',
                                            })
                                            _p.out.write({
                                                "string": '"',
                                            })
                                            _p.out.write({
                                                "string": $["raw"],
                                            })
                                            _p.out.write({
                                                "string": '"',
                                            })
                                            _p.out.write({
                                                "string": "}",
                                            })
                                            _p.out.write({
                                                "string": "]",
                                            })
                                            break
                                        }
                                    }
                                    case "reference": {
                                        const _$ = _cp.element["type"][1]
                                        {
                                            const $ = _$
                                            _p.out.write({
                                                "string": "[",
                                            })
                                            _p.out.write({
                                                "string": '"reference", ',
                                            })
                                            _p.out.write({
                                                "string": "{",
                                            })
                                            _p.out.write({
                                                "string": '"referenced type": ',
                                            })
                                            _p.out.write({
                                                "string": '"',
                                            })
                                            _p.out.write({
                                                "string": $["referenced type"],
                                            })
                                            _p.out.write({
                                                "string": '"',
                                            })
                                            _p.out.write({
                                                "string": "}",
                                            })
                                            _p.out.write({
                                                "string": "]",
                                            })
                                            break
                                        }
                                    }
                                    case "string": {
                                        const _$ = _cp.element["type"][1]
                                        {
                                            const $ = _$
                                            _p.out.write({
                                                "string": "[",
                                            })
                                            _p.out.write({
                                                "string": '"string", ',
                                            })
                                            _p.out.write({
                                                "string": "{",
                                            })
                                            _p.out.write({
                                                "string": "}",
                                            })
                                            _p.out.write({
                                                "string": "]",
                                            })
                                            break
                                        }
                                    }
                                    default: return assertUnreachable(_cp.element["type"][0])
                                }
                                _p.out.write({
                                    "string": "}",
                                })
                            },
                            "onSeparator": _cp => {
                                _p.out.write({
                                    "string": ",",
                                })
                            },
                        })
                        _p.out.write({
                            "string": "}",
                        })
                        _p.out.write({
                            "string": "}",
                        })
                        _p.out.write({
                            "string": "]",
                        })
                        break
                    }
                }
                case "tagged union": {
                    const _$ = _cp.element["type"][1]
                    {
                        const $ = _$
                        _p.out.write({
                            "string": "[",
                        })
                        _p.out.write({
                            "string": '"tagged union", ',
                        })
                        _p.out.write({
                            "string": "{",
                        })
                        _p.out.write({
                            "string": '"alternatives": ',
                        })
                        _p.out.write({
                            "string": "{",
                        })
                        $["alternatives"].getAlphabeticalOrdering({}).mapWithSeparator({
                            "onElement": _cp => {
                                _p.out.write({
                                    "string": '"',
                                })
                                _p.out.write({
                                    "string": _cp.key,
                                })
                                _p.out.write({
                                    "string": '": ',
                                })
                                _p.out.write({
                                    "string": "{",
                                })
                                _p.out.write({
                                    "string": '"referenced type": ',
                                })
                                _p.out.write({
                                    "string": '"',
                                })
                                _p.out.write({
                                    "string": _cp.element["referenced type"],
                                })
                                _p.out.write({
                                    "string": '"',
                                })
                                _p.out.write({
                                    "string": "}",
                                })
                            },
                            "onSeparator": _cp => {
                                _p.out.write({
                                    "string": ",",
                                })
                            },
                        })
                        _p.out.write({
                            "string": "}",
                        })
                        _p.out.write({
                            "string": "}",
                        })
                        _p.out.write({
                            "string": "]",
                        })
                        break
                    }
                }
                default: return assertUnreachable(_cp.element["type"][0])
            }
            _p.out.write({
                "string": "}",
            })
        },
        "onSeparator": _cp => {
            _p.out.write({
                "string": ",",
            })
        },
    })
    _p.out.write({
        "string": "}",
    })
    _p.out.write({
        "string": "}",
    })
}

export class CStatementBuilder {
    private readonly builder: gt.IListBuilder<t.Statement>
    private readonly param_function_parameters: gt.ILookup<t.PrivateParameter>
    constructor(_p: {
        "builder": gt.IListBuilder<t.Statement>
        "param_function parameters": gt.ILookup<t.PrivateParameter>
    }) {
        this.builder = _p["builder"]
        this.param_function_parameters = _p["param_function parameters"]
    }
    public Statement(
        par__type: (builder: CStatementTypeBuilder) => t.StatementType,
    ) {
        const x = this.x_Statement({
            "par__type": p => par__type(p.builder),
            "param_function parameters": this.param_function_parameters,
        })
        return x
    }
    private x_Statement(_p: {
        readonly "par__type": (p: { builder: CStatementTypeBuilder }) => t.StatementType
        readonly "param_function parameters": gt.ILookup<t.PrivateParameter>
    }) {
        const var_type = _p["par__type"]({
            "builder": new CStatementTypeBuilder({
                "param_function parameters": _p["param_function parameters"],
            }),
        })
        const entry = {
            "type": var_type,
        }
        this.builder.push({ element: entry })
        return this
    }
}

export class CStatementTypeBuilder {
    private readonly param_function_parameters: gt.ILookup<t.PrivateParameter>
    constructor(_p: {
        "param_function parameters": gt.ILookup<t.PrivateParameter>
    }) {
        this.param_function_parameters = _p["param_function parameters"]
    }
    public call(
        par__call_path: string,
        par__call_arguments: (builder: CFunctionCallArgurmentBuilder) => void,
    ) {
        const x = this.x_call({
            "par__call_arguments": p => par__call_arguments(p.builder),
            "par__call_path": par__call_path,
            "param_function parameters": this.param_function_parameters,
        })
        return x
    }
    public raw(
        par__raw_value: string,
    ) {
        const x = this.x_raw({
            "par__raw value": par__raw_value,
            "param_function parameters": this.param_function_parameters,
        })
        return x
    }
    public switch(
        par__raw_expression: string,
        par__cases: (builder: CSwitchCaseBuilder) => void,
    ) {
        const x = this.x_switch({
            "par__cases": p => par__cases(p.builder),
            "par__raw expression": par__raw_expression,
            "param_function parameters": this.param_function_parameters,
        })
        return x
    }
    private x_call(_p: {
        readonly "par__call_arguments": (p: { builder: CFunctionCallArgurmentBuilder }) => void
        readonly "par__call_path": string
        readonly "param_function parameters": gt.ILookup<t.PrivateParameter>
    }) {
        const var_call = create_function_call({
            "par__arguments": _p["par__call_arguments"],
            "par__path": _p["par__call_path"],
            "param_function parameters": _p["param_function parameters"],
        })
        const sg = ((): t.StatementType => {
            return ["call", {
                "call": var_call,
            }]
        })()
        return sg
    }
    private x_raw(_p: {
        readonly "par__raw value": string
        readonly "param_function parameters": gt.ILookup<t.PrivateParameter>
    }) {
        const var_raw_value = _p["par__raw value"]
        const sg = ((): t.StatementType => {
            return ["raw", {
                "raw value": var_raw_value,
            }]
        })()
        return sg
    }
    private x_switch(_p: {
        readonly "par__cases": (p: { builder: CSwitchCaseBuilder }) => void
        readonly "par__raw expression": string
        readonly "param_function parameters": gt.ILookup<t.PrivateParameter>
    }) {
        const var_raw_expression = _p["par__raw expression"]
        const var_cases = gf.createDictionary<t.SwitchCase>({
            "callback": _cp => {
                const x = new CSwitchCaseBuilder({
                    "builder": _cp["builder"],
                    "param_function parameters": _p["param_function parameters"],
                })
                const y = _p["par__cases"]({
                    "builder": x,
                })
                return y
            },
            "reporter": gt.createSimpleConflictingEntryReporter({
                "reportError": (_dependent, errorStr) => { console.error(errorStr) },
                "typeInfo": "SwitchCase",
            }),
        })
        const sg = ((): t.StatementType => {
            return ["switch", {
                "cases": var_cases,
                "raw expression": var_raw_expression,
            }]
        })()
        return sg
    }
}

export class CSwitchCaseBuilder {
    private readonly builder: gt.IDictionaryBuilder<t.SwitchCase>
    private readonly param_function_parameters: gt.ILookup<t.PrivateParameter>
    constructor(_p: {
        "builder": gt.IDictionaryBuilder<t.SwitchCase>
        "param_function parameters": gt.ILookup<t.PrivateParameter>
    }) {
        this.builder = _p["builder"]
        this.param_function_parameters = _p["param_function parameters"]
    }
    public SwitchCase(
        key: string,
        par__block_variables: (builder: CVariableBuilder) => void,
        par__block_statements: (builder: CStatementBuilder) => void,
    ) {
        const x = this.x_SwitchCase({
            "key": key,
            "par__block_statements": p => par__block_statements(p.builder),
            "par__block_variables": p => par__block_variables(p.builder),
            "param_function parameters": this.param_function_parameters,
        })
        return x
    }
    private x_SwitchCase(_p: {
        readonly "key": string
        readonly "par__block_statements": (p: { builder: CStatementBuilder }) => void
        readonly "par__block_variables": (p: { builder: CVariableBuilder }) => void
        readonly "param_function parameters": gt.ILookup<t.PrivateParameter>
    }) {
        const var_block = create_block({
            "par__statements": _p["par__block_statements"],
            "par__variables": _p["par__block_variables"],
            "param_function parameters": _p["param_function parameters"],
        })
        const entry = {
            "block": var_block,
        }
        this.builder.add({ key: _p.key, entry: entry })
        return this
    }
}

export class CTaggedUnionAlternativeBuilder {
    private readonly builder: gt.IDictionaryBuilder<t.TaggedUnionAlternative>
    constructor(_p: {
        "builder": gt.IDictionaryBuilder<t.TaggedUnionAlternative>
    }) {
        this.builder = _p["builder"]
    }
    public TaggedUnionAlternative(
        key: string,
        par__referenced_type: string,
    ) {
        const x = this.x_TaggedUnionAlternative({
            "key": key,
            "par__referenced type": par__referenced_type,
        })
        return x
    }
    private x_TaggedUnionAlternative(_p: {
        readonly "key": string
        readonly "par__referenced type": string
    }) {
        const var_referenced_type = _p["par__referenced type"]
        const entry = {
            "referenced type": var_referenced_type,
        }
        this.builder.add({ key: _p.key, entry: entry })
        return this
    }
}

export class CTaggedUnionTypeSpecificationBuilder {
    private readonly param_function_parameters: gt.ILookup<t.PrivateParameter>
    constructor(_p: {
        "param_function parameters": gt.ILookup<t.PrivateParameter>
    }) {
        this.param_function_parameters = _p["param_function parameters"]
    }
    public derived(
    ) {
        const x = this.x_derived({
            "param_function parameters": this.param_function_parameters,
        })
        return x
    }
    public reference(
        par__type: string,
    ) {
        const x = this.x_reference({
            "par__type": par__type,
            "param_function parameters": this.param_function_parameters,
        })
        return x
    }
    private x_derived(_p: {
        readonly "param_function parameters": gt.ILookup<t.PrivateParameter>
    }) {
        const sg = ((): t.TaggedUnionTypeSpecification => {
            return ["derived", {
            }]
        })()
        return sg
    }
    private x_reference(_p: {
        readonly "par__type": string
        readonly "param_function parameters": gt.ILookup<t.PrivateParameter>
    }) {
        const var_type = _p["par__type"]
        const sg = ((): t.TaggedUnionTypeSpecification => {
            return ["reference", {
                "type": var_type,
            }]
        })()
        return sg
    }
}

export class CTypeBuilder {
    private readonly builder: gt.IDictionaryBuilder<t.Type>
    private readonly propvar_generic_interface_declarations: gt.ILookup<t.GenericInterfaceDeclaration>
    constructor(_p: {
        "builder": gt.IDictionaryBuilder<t.Type>
        "propvar_generic interface declarations": gt.ILookup<t.GenericInterfaceDeclaration>
    }) {
        this.builder = _p["builder"]
        this.propvar_generic_interface_declarations = _p["propvar_generic interface declarations"]
    }
    public Type(
        key: string,
        par__type: (builder: CTypeTypeBuilder) => t.TypeType,
    ) {
        const x = this.x_Type({
            "key": key,
            "par__type": p => par__type(p.builder),
        })
        return x
    }
    private x_Type(_p: {
        readonly "key": string
        readonly "par__type": (p: { builder: CTypeTypeBuilder }) => t.TypeType
    }) {
        const var_type = _p["par__type"]({
            "builder": new CTypeTypeBuilder({
                "propvar_generic interface declarations": this.propvar_generic_interface_declarations,
            }),
        })
        const entry = {
            "type": var_type,
        }
        this.builder.add({ key: _p.key, entry: entry })
        return this
    }
}

export class CTypeTypeBuilder {
    private readonly propvar_generic_interface_declarations: gt.ILookup<t.GenericInterfaceDeclaration>
    constructor(_p: {
        "propvar_generic interface declarations": gt.ILookup<t.GenericInterfaceDeclaration>
    }) {
        this.propvar_generic_interface_declarations = _p["propvar_generic interface declarations"]
    }
    public object(
        par__properties: (builder: CObjectPropertyBuilder) => void,
    ) {
        const x = this.x_object({
            "par__properties": p => par__properties(p.builder),
        })
        return x
    }
    public tagged_union(
        par__alternatives: (builder: CTaggedUnionAlternativeBuilder) => void,
    ) {
        const x = this.x_tagged_union({
            "par__alternatives": p => par__alternatives(p.builder),
        })
        return x
    }
    private x_object(_p: {
        readonly "par__properties": (p: { builder: CObjectPropertyBuilder }) => void
    }) {
        const var_properties = gf.createDictionary<t.ObjectProperty>({
            "callback": _cp => {
                const x = new CObjectPropertyBuilder({
                    "builder": _cp["builder"],
                    "propvar_generic interface declarations": this.propvar_generic_interface_declarations,
                })
                const y = _p["par__properties"]({
                    "builder": x,
                })
                return y
            },
            "reporter": gt.createSimpleConflictingEntryReporter({
                "reportError": (_dependent, errorStr) => { console.error(errorStr) },
                "typeInfo": "ObjectProperty",
            }),
        })
        const sg = ((): t.TypeType => {
            return ["object", {
                "properties": var_properties,
            }]
        })()
        return sg
    }
    private x_tagged_union(_p: {
        readonly "par__alternatives": (p: { builder: CTaggedUnionAlternativeBuilder }) => void
    }) {
        const var_alternatives = gf.createDictionary<t.TaggedUnionAlternative>({
            "callback": _cp => {
                const x = new CTaggedUnionAlternativeBuilder({
                    "builder": _cp["builder"],
                })
                const y = _p["par__alternatives"]({
                    "builder": x,
                })
                return y
            },
            "reporter": gt.createSimpleConflictingEntryReporter({
                "reportError": (_dependent, errorStr) => { console.error(errorStr) },
                "typeInfo": "TaggedUnionAlternative",
            }),
        })
        const sg = ((): t.TypeType => {
            return ["tagged union", {
                "alternatives": var_alternatives,
            }]
        })()
        return sg
    }
}

export class CVariableBuilder {
    private readonly builder: gt.IDictionaryBuilder<t.Variable>
    private readonly param_function_parameters: gt.ILookup<t.PrivateParameter>
    constructor(_p: {
        "builder": gt.IDictionaryBuilder<t.Variable>
        "param_function parameters": gt.ILookup<t.PrivateParameter>
    }) {
        this.builder = _p["builder"]
        this.param_function_parameters = _p["param_function parameters"]
    }
    public Variable(
        key: string,
        par__initializer_type: (builder: CInitializerTypeBuilder) => t.InitializerType,
    ) {
        const x = this.x_Variable({
            "key": key,
            "par__initializer_type": p => par__initializer_type(p.builder),
            "param_function parameters": this.param_function_parameters,
        })
        return x
    }
    private x_Variable(_p: {
        readonly "key": string
        readonly "par__initializer_type": (p: { builder: CInitializerTypeBuilder }) => t.InitializerType
        readonly "param_function parameters": gt.ILookup<t.PrivateParameter>
    }) {
        const var_initializer = create_initializer({
            "par__type": _p["par__initializer_type"],
            "param_function parameters": _p["param_function parameters"],
        })
        const entry = {
            "initializer": var_initializer,
        }
        this.builder.add({ key: _p.key, entry: entry })
        return this
    }
}
