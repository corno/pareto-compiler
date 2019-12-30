// tslint:disable: max-classes-per-file object-literal-key-quotes variable-name no-string-literal member-ordering
//@ts-ignore
import * as gt from "./genericTypes"
//@ts-ignore
import * as i from "./interfaces"
//@ts-ignore
import * as t from "./types"

export class CAlgorithmUnitBuilder {
    private readonly buildContext: gt.IBuildContext
    private readonly builder: gt.IDictionaryBuilder<t.AlgorithmUnit>
    constructor(p: {
        "buildContext": gt.IBuildContext
        "builder": gt.IDictionaryBuilder<t.AlgorithmUnit>
    }) {
        this.buildContext = p["buildContext"]
        this.builder = p["builder"]
    }
    public AlgorithmUnit(
        key: string,
        par__type: (builder: CAlgorithmUnitTypeBuilder) => t.AlgorithmUnitType,
    ) {
        const x = this.x_AlgorithmUnit({
            "buildContext": this.buildContext,
            "key": key,
            "par__type": p => par__type(p.builder),
        })
        return x
    }
    private x_AlgorithmUnit(_p: {
        readonly "buildContext": gt.IBuildContext
        readonly "key": string
        readonly "par__type": (p: { builder: CAlgorithmUnitTypeBuilder }) => t.AlgorithmUnitType
    }) {
        const var_type = _p["par__type"]({
            "builder": new CAlgorithmUnitTypeBuilder({
                "buildContext": _p["buildContext"],
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
    private readonly buildContext: gt.IBuildContext
    constructor(p: {
        "buildContext": gt.IBuildContext
    }) {
        this.buildContext = p["buildContext"]
    }
    public class(
        par__properties: (builder: CClassPropertyBuilder) => void,
        par__methods: (builder: CClassMethodBuilder) => void,
    ) {
        const x = this.x_class({
            "buildContext": this.buildContext,
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
            "buildContext": this.buildContext,
            "par__specification_access": p => par__specification_access(p.builder),
            "par__specification_block_statements": p => par__specification_block_statements(p.builder),
            "par__specification_block_variables": p => par__specification_block_variables(p.builder),
        })
        return x
    }
    private x_class(_p: {
        readonly "buildContext": gt.IBuildContext
        readonly "par__methods": (p: { builder: CClassMethodBuilder }) => void
        readonly "par__properties": (p: { builder: CClassPropertyBuilder }) => void
    }) {
        const var_properties = _p.buildContext.createDictionary<t.ClassProperty>({
            "callback": _cp => {
                const x = new CClassPropertyBuilder({
                    "buildContext": _p["buildContext"],
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
        const var_methods = _p.buildContext.createDictionary<t.ClassMethod>({
            "callback": _cp => {
                const x = new CClassMethodBuilder({
                    "buildContext": _p["buildContext"],
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
        readonly "buildContext": gt.IBuildContext
        readonly "par__specification_access": (p: { builder: CFunctionAccessBuilder }) => t.FunctionAccess
        readonly "par__specification_block_statements": (p: { builder: CStatementBuilder }) => void
        readonly "par__specification_block_variables": (p: { builder: CVariableBuilder }) => void
    }) {
        const var_specification = create_function_specification({
            "buildContext": _p["buildContext"],
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
    private readonly buildContext: gt.IBuildContext
    constructor(p: {
        "buildContext": gt.IBuildContext
    }) {
        this.buildContext = p["buildContext"]
    }
    public callback(
        par__block_variables: (builder: CVariableBuilder) => void,
        par__block_statements: (builder: CStatementBuilder) => void,
    ) {
        const x = this.x_callback({
            "buildContext": this.buildContext,
            "par__block_statements": p => par__block_statements(p.builder),
            "par__block_variables": p => par__block_variables(p.builder),
        })
        return x
    }
    public initializer(
        par__initializer_type: (builder: CInitializerTypeBuilder) => t.InitializerType,
    ) {
        const x = this.x_initializer({
            "buildContext": this.buildContext,
            "par__initializer_type": p => par__initializer_type(p.builder),
        })
        return x
    }
    private x_callback(_p: {
        readonly "buildContext": gt.IBuildContext
        readonly "par__block_statements": (p: { builder: CStatementBuilder }) => void
        readonly "par__block_variables": (p: { builder: CVariableBuilder }) => void
    }) {
        const var_block = create_block({
            "buildContext": _p["buildContext"],
            "par__statements": _p["par__block_statements"],
            "par__variables": _p["par__block_variables"],
        })
        const sg = ((): t.ArgumentType => {
            return ["callback", {
                "block": var_block,
            }]
        })()
        return sg
    }
    private x_initializer(_p: {
        readonly "buildContext": gt.IBuildContext
        readonly "par__initializer_type": (p: { builder: CInitializerTypeBuilder }) => t.InitializerType
    }) {
        const var_initializer = create_initializer({
            "buildContext": _p["buildContext"],
            "par__type": _p["par__initializer_type"],
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
    private readonly buildContext: gt.IBuildContext
    private readonly builder: gt.IDictionaryBuilder<t.BaseInterface>
    constructor(p: {
        "buildContext": gt.IBuildContext
        "builder": gt.IDictionaryBuilder<t.BaseInterface>
    }) {
        this.buildContext = p["buildContext"]
        this.builder = p["builder"]
    }
    public BaseInterface(
        key: string,
        par__interface_interface: string,
        par__interface_type_arguments: (builder: CGenericArgumentBuilder) => void,
    ) {
        const x = this.x_BaseInterface({
            "buildContext": this.buildContext,
            "key": key,
            "par__interface_interface": par__interface_interface,
            "par__interface_type arguments": p => par__interface_type_arguments(p.builder),
        })
        return x
    }
    private x_BaseInterface(_p: {
        readonly "buildContext": gt.IBuildContext
        readonly "key": string
        readonly "par__interface_interface": string
        readonly "par__interface_type arguments": (p: { builder: CGenericArgumentBuilder }) => void
    }) {
        const var_interface = create_generic_interface_reference({
            "buildContext": _p["buildContext"],
            "par__interface": _p["par__interface_interface"],
            "par__type arguments": _p["par__interface_type arguments"],
        })
        const entry = {
            "interface": var_interface,
        }
        this.builder.add({ key: _p.key, entry: entry })
        return this
    }
}

export class CClassMethodBuilder {
    private readonly buildContext: gt.IBuildContext
    private readonly builder: gt.IDictionaryBuilder<t.ClassMethod>
    constructor(p: {
        "buildContext": gt.IBuildContext
        "builder": gt.IDictionaryBuilder<t.ClassMethod>
    }) {
        this.buildContext = p["buildContext"]
        this.builder = p["builder"]
    }
    public ClassMethod(
        key: string,
        par__specification_access: (builder: CFunctionAccessBuilder) => t.FunctionAccess,
        par__specification_block_variables: (builder: CVariableBuilder) => void,
        par__specification_block_statements: (builder: CStatementBuilder) => void,
    ) {
        const x = this.x_ClassMethod({
            "buildContext": this.buildContext,
            "key": key,
            "par__specification_access": p => par__specification_access(p.builder),
            "par__specification_block_statements": p => par__specification_block_statements(p.builder),
            "par__specification_block_variables": p => par__specification_block_variables(p.builder),
        })
        return x
    }
    private x_ClassMethod(_p: {
        readonly "buildContext": gt.IBuildContext
        readonly "key": string
        readonly "par__specification_access": (p: { builder: CFunctionAccessBuilder }) => t.FunctionAccess
        readonly "par__specification_block_statements": (p: { builder: CStatementBuilder }) => void
        readonly "par__specification_block_variables": (p: { builder: CVariableBuilder }) => void
    }) {
        const var_specification = create_function_specification({
            "buildContext": _p["buildContext"],
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
    private readonly buildContext: gt.IBuildContext
    private readonly builder: gt.IDictionaryBuilder<t.ClassProperty>
    constructor(p: {
        "buildContext": gt.IBuildContext
        "builder": gt.IDictionaryBuilder<t.ClassProperty>
    }) {
        this.buildContext = p["buildContext"]
        this.builder = p["builder"]
    }
    public ClassProperty(
        key: string,
        par__initialization: (builder: CPropertyInitializationBuilder) => t.PropertyInitialization,
    ) {
        const x = this.x_ClassProperty({
            "buildContext": this.buildContext,
            "key": key,
            "par__initialization": p => par__initialization(p.builder),
        })
        return x
    }
    private x_ClassProperty(_p: {
        readonly "buildContext": gt.IBuildContext
        readonly "key": string
        readonly "par__initialization": (p: { builder: CPropertyInitializationBuilder }) => t.PropertyInitialization
    }) {
        const var_initialization = _p["par__initialization"]({
            "builder": new CPropertyInitializationBuilder({
                "buildContext": _p["buildContext"],
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
    private readonly buildContext: gt.IBuildContext
    constructor(p: {
        "buildContext": gt.IBuildContext
    }) {
        this.buildContext = p["buildContext"]
    }
    public build(
        par__generic_interface_declarations: (builder: CGenericInterfaceDeclarationBuilder) => void,
        par__types: (builder: CTypeBuilder) => void,
        par__interfaces: (builder: CInterfaceBuilder) => void,
        par__algorithm_units: (builder: CAlgorithmUnitBuilder) => void,
    ) {
        const x = this.x_build({
            "buildContext": this.buildContext,
            "par__algorithm units": p => par__algorithm_units(p.builder),
            "par__generic interface declarations": p => par__generic_interface_declarations(p.builder),
            "par__interfaces": p => par__interfaces(p.builder),
            "par__types": p => par__types(p.builder),
        })
        return x
    }
    private x_build(_p: {
        readonly "buildContext": gt.IBuildContext
        readonly "par__algorithm units": (p: { builder: CAlgorithmUnitBuilder }) => void
        readonly "par__generic interface declarations": (p: { builder: CGenericInterfaceDeclarationBuilder }) => void
        readonly "par__interfaces": (p: { builder: CInterfaceBuilder }) => void
        readonly "par__types": (p: { builder: CTypeBuilder }) => void
    }) {
        const var_generic_interface_declarations = _p.buildContext.createDictionary<t.GenericInterfaceDeclaration>({
            "callback": _cp => {
                const x = new CGenericInterfaceDeclarationBuilder({
                    "buildContext": _p["buildContext"],
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
        const var_types = _p.buildContext.createDictionary<t.Type>({
            "callback": _cp => {
                const x = new CTypeBuilder({
                    "buildContext": _p["buildContext"],
                    "builder": _cp["builder"],
                    "propvar_generic interface declarations": this.buildContext.createLookup({ dict: var_generic_interface_declarations }),
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
        const var_interfaces = _p.buildContext.createDictionary<t.Interface>({
            "callback": _cp => {
                const x = new CInterfaceBuilder({
                    "buildContext": _p["buildContext"],
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
        const var_algorithm_units = _p.buildContext.createDictionary<t.AlgorithmUnit>({
            "callback": _cp => {
                const x = new CAlgorithmUnitBuilder({
                    "buildContext": _p["buildContext"],
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
    private readonly buildContext: gt.IBuildContext
    private readonly builder: gt.IDictionaryBuilder<t.ConstructorCallArgurment>
    constructor(p: {
        "buildContext": gt.IBuildContext
        "builder": gt.IDictionaryBuilder<t.ConstructorCallArgurment>
    }) {
        this.buildContext = p["buildContext"]
        this.builder = p["builder"]
    }
    public ConstructorCallArgurment(
        key: string,
        par__initializer_type: (builder: CInitializerTypeBuilder) => t.InitializerType,
    ) {
        const x = this.x_ConstructorCallArgurment({
            "buildContext": this.buildContext,
            "key": key,
            "par__initializer_type": p => par__initializer_type(p.builder),
        })
        return x
    }
    private x_ConstructorCallArgurment(_p: {
        readonly "buildContext": gt.IBuildContext
        readonly "key": string
        readonly "par__initializer_type": (p: { builder: CInitializerTypeBuilder }) => t.InitializerType
    }) {
        const var_initializer = create_initializer({
            "buildContext": _p["buildContext"],
            "par__type": _p["par__initializer_type"],
        })
        const entry = {
            "initializer": var_initializer,
        }
        this.builder.add({ key: _p.key, entry: entry })
        return this
    }
}
function create_block(_p: {
    readonly "buildContext": gt.IBuildContext
    readonly "par__statements": (p: { builder: CStatementBuilder }) => void
    readonly "par__variables": (p: { builder: CVariableBuilder }) => void
}) {
    const var_variables = _p.buildContext.createOrderedDictionary<t.Variable, t.VariableOrderings>({
        "callback": _cp => {
            const x = new CVariableBuilder({
                "buildContext": _p["buildContext"],
                "builder": _cp["builder"],
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
    const var_statements = _p.buildContext.createList<t.Statement>({
        "callback": _cp => {
            const x = new CStatementBuilder({
                "buildContext": _p["buildContext"],
                "builder": _cp["builder"],
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
function create_function_specification(_p: {
    readonly "buildContext": gt.IBuildContext
    readonly "par__access": (p: { builder: CFunctionAccessBuilder }) => t.FunctionAccess
    readonly "par__block_statements": (p: { builder: CStatementBuilder }) => void
    readonly "par__block_variables": (p: { builder: CVariableBuilder }) => void
}) {
    const var_access = _p["par__access"]({
        "builder": new CFunctionAccessBuilder({
            "buildContext": _p["buildContext"],
        }),
    })
    const var_block = create_block({
        "buildContext": _p["buildContext"],
        "par__statements": _p["par__block_statements"],
        "par__variables": _p["par__block_variables"],
    })
    const component = {
        "access": var_access,
        "block": var_block,
    }
    return component
}
function create_generic_in_type(_p: {
    readonly "buildContext": gt.IBuildContext
    readonly "par__type": (p: { builder: CGenericInTypeTypeBuilder }) => t.GenericInTypeType
    readonly "param_method type parameters": gt.ILookup<t.GenericMethodTypeParameter>
}) {
    const var_type = _p["par__type"]({
        "builder": new CGenericInTypeTypeBuilder({
            "buildContext": _p["buildContext"],
            "param_method type parameters": _p["param_method type parameters"],
        }),
    })
    const component = {
        "type": var_type,
    }
    return component
}
function create_generic_interface_reference(_p: {
    readonly "buildContext": gt.IBuildContext
    readonly "par__interface": string
    readonly "par__type arguments": (p: { builder: CGenericArgumentBuilder }) => void
}) {
    const var_interface = _p["par__interface"]
    const var_type_arguments = _p.buildContext.createDictionary<t.GenericArgument>({
        "callback": _cp => {
            const x = new CGenericArgumentBuilder({
                "buildContext": _p["buildContext"],
                "builder": _cp["builder"],
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
    readonly "buildContext": gt.IBuildContext
    readonly "par__type": (p: { builder: CGenericReturnTypeTypeBuilder }) => t.GenericReturnTypeType
}) {
    const var_type = _p["par__type"]({
        "builder": new CGenericReturnTypeTypeBuilder({
            "buildContext": _p["buildContext"],
        }),
    })
    const component = {
        "type": var_type,
    }
    return component
}
function create_initializer(_p: {
    readonly "buildContext": gt.IBuildContext
    readonly "par__type": (p: { builder: CInitializerTypeBuilder }) => t.InitializerType
}) {
    const var_type = _p["par__type"]({
        "builder": new CInitializerTypeBuilder({
            "buildContext": _p["buildContext"],
        }),
    })
    const component = {
        "type": var_type,
    }
    return component
}

export class CFunctionAccessBuilder {
    private readonly buildContext: gt.IBuildContext
    constructor(p: {
        "buildContext": gt.IBuildContext
    }) {
        this.buildContext = p["buildContext"]
    }
    public private(
        par__parameters: (builder: CPrivateParameterBuilder) => void,
    ) {
        const x = this.x_private({
            "buildContext": this.buildContext,
            "par__parameters": p => par__parameters(p.builder),
        })
        return x
    }
    public public(
        par__parameters: (builder: CPublicParameterBuilder) => void,
    ) {
        const x = this.x_public({
            "buildContext": this.buildContext,
            "par__parameters": p => par__parameters(p.builder),
        })
        return x
    }
    private x_private(_p: {
        readonly "buildContext": gt.IBuildContext
        readonly "par__parameters": (p: { builder: CPrivateParameterBuilder }) => void
    }) {
        const var_parameters = _p.buildContext.createDictionary<t.PrivateParameter>({
            "callback": _cp => {
                const x = new CPrivateParameterBuilder({
                    "buildContext": _p["buildContext"],
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
        readonly "buildContext": gt.IBuildContext
        readonly "par__parameters": (p: { builder: CPublicParameterBuilder }) => void
    }) {
        const var_parameters = _p.buildContext.createOrderedDictionary<t.PublicParameter, t.PublicParameterOrderings>({
            "callback": _cp => {
                const x = new CPublicParameterBuilder({
                    "buildContext": _p["buildContext"],
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
    private readonly buildContext: gt.IBuildContext
    private readonly builder: gt.IDictionaryBuilder<t.FunctionCallArgurment>
    constructor(p: {
        "buildContext": gt.IBuildContext
        "builder": gt.IDictionaryBuilder<t.FunctionCallArgurment>
    }) {
        this.buildContext = p["buildContext"]
        this.builder = p["builder"]
    }
    public FunctionCallArgurment(
        key: string,
        par__type: (builder: CArgumentTypeBuilder) => t.ArgumentType,
    ) {
        const x = this.x_FunctionCallArgurment({
            "buildContext": this.buildContext,
            "key": key,
            "par__type": p => par__type(p.builder),
        })
        return x
    }
    private x_FunctionCallArgurment(_p: {
        readonly "buildContext": gt.IBuildContext
        readonly "key": string
        readonly "par__type": (p: { builder: CArgumentTypeBuilder }) => t.ArgumentType
    }) {
        const var_type = _p["par__type"]({
            "builder": new CArgumentTypeBuilder({
                "buildContext": _p["buildContext"],
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
    private readonly buildContext: gt.IBuildContext
    private readonly builder: gt.IDictionaryBuilder<t.GenericArgument>
    constructor(p: {
        "buildContext": gt.IBuildContext
        "builder": gt.IDictionaryBuilder<t.GenericArgument>
    }) {
        this.buildContext = p["buildContext"]
        this.builder = p["builder"]
    }
    public GenericArgument(
        key: string,
        par__type_type: (builder: CGenericReturnTypeTypeBuilder) => t.GenericReturnTypeType,
    ) {
        const x = this.x_GenericArgument({
            "buildContext": this.buildContext,
            "key": key,
            "par__type_type": p => par__type_type(p.builder),
        })
        return x
    }
    private x_GenericArgument(_p: {
        readonly "buildContext": gt.IBuildContext
        readonly "key": string
        readonly "par__type_type": (p: { builder: CGenericReturnTypeTypeBuilder }) => t.GenericReturnTypeType
    }) {
        const var_type = create_generic_return_type({
            "buildContext": _p["buildContext"],
            "par__type": _p["par__type_type"],
        })
        const entry = {
            "type": var_type,
        }
        this.builder.add({ key: _p.key, entry: entry })
        return this
    }
}

export class CGenericCallbackParameterBuilder {
    private readonly buildContext: gt.IBuildContext
    private readonly builder: gt.IDictionaryBuilder<t.GenericCallbackParameter>
    private readonly param_method_type_parameters: gt.ILookup<t.GenericMethodTypeParameter>
    constructor(p: {
        "buildContext": gt.IBuildContext
        "builder": gt.IDictionaryBuilder<t.GenericCallbackParameter>
        "param_method type parameters": gt.ILookup<t.GenericMethodTypeParameter>
    }) {
        this.buildContext = p["buildContext"]
        this.builder = p["builder"]
        this.param_method_type_parameters = p["param_method type parameters"]
    }
    public GenericCallbackParameter(
        key: string,
        par__type_type: (builder: CGenericReturnTypeTypeBuilder) => t.GenericReturnTypeType,
    ) {
        const x = this.x_GenericCallbackParameter({
            "buildContext": this.buildContext,
            "key": key,
            "par__type_type": p => par__type_type(p.builder),
            "param_method type parameters": this.param_method_type_parameters,
        })
        return x
    }
    private x_GenericCallbackParameter(_p: {
        readonly "buildContext": gt.IBuildContext
        readonly "key": string
        readonly "par__type_type": (p: { builder: CGenericReturnTypeTypeBuilder }) => t.GenericReturnTypeType
        readonly "param_method type parameters": gt.ILookup<t.GenericMethodTypeParameter>
    }) {
        const var_type = create_generic_return_type({
            "buildContext": _p["buildContext"],
            "par__type": _p["par__type_type"],
        })
        const entry = {
            "type": var_type,
        }
        this.builder.add({ key: _p.key, entry: entry })
        return this
    }
}

export class CGenericCallbackTypeBuilder {
    private readonly buildContext: gt.IBuildContext
    private readonly param_method_type_parameters: gt.ILookup<t.GenericMethodTypeParameter>
    constructor(p: {
        "buildContext": gt.IBuildContext
        "param_method type parameters": gt.ILookup<t.GenericMethodTypeParameter>
    }) {
        this.buildContext = p["buildContext"]
        this.param_method_type_parameters = p["param_method type parameters"]
    }
    public function(
        par__guaranteed: (builder: CIsCallbackReturnValueGuaranteedBuilder) => t.IsCallbackReturnValueGuaranteed,
        par__type_type: (builder: CGenericInTypeTypeBuilder) => t.GenericInTypeType,
    ) {
        const x = this.x_function({
            "buildContext": this.buildContext,
            "par__guaranteed": p => par__guaranteed(p.builder),
            "par__type_type": p => par__type_type(p.builder),
            "param_method type parameters": this.param_method_type_parameters,
        })
        return x
    }
    public procedure(
    ) {
        const x = this.x_procedure({
            "buildContext": this.buildContext,
            "param_method type parameters": this.param_method_type_parameters,
        })
        return x
    }
    private x_function(_p: {
        readonly "buildContext": gt.IBuildContext
        readonly "par__guaranteed": (p: { builder: CIsCallbackReturnValueGuaranteedBuilder }) => t.IsCallbackReturnValueGuaranteed
        readonly "par__type_type": (p: { builder: CGenericInTypeTypeBuilder }) => t.GenericInTypeType
        readonly "param_method type parameters": gt.ILookup<t.GenericMethodTypeParameter>
    }) {
        const var_guaranteed = _p["par__guaranteed"]({
            "builder": new CIsCallbackReturnValueGuaranteedBuilder({
                "buildContext": _p["buildContext"],
                "param_method type parameters": _p["param_method type parameters"],
            }),
        })
        const var_type = create_generic_in_type({
            "buildContext": _p["buildContext"],
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
        readonly "buildContext": gt.IBuildContext
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
    private readonly buildContext: gt.IBuildContext
    constructor(p: {
        "buildContext": gt.IBuildContext
    }) {
        this.buildContext = p["buildContext"]
    }
    public function(
        par__guaranteed: (builder: CIsGenericReturnValueGuaranteedBuilder) => t.IsGenericReturnValueGuaranteed,
        par__type_type: (builder: CGenericReturnTypeTypeBuilder) => t.GenericReturnTypeType,
    ) {
        const x = this.x_function({
            "buildContext": this.buildContext,
            "par__guaranteed": p => par__guaranteed(p.builder),
            "par__type_type": p => par__type_type(p.builder),
        })
        return x
    }
    public procedure(
    ) {
        const x = this.x_procedure({
            "buildContext": this.buildContext,
        })
        return x
    }
    private x_function(_p: {
        readonly "buildContext": gt.IBuildContext
        readonly "par__guaranteed": (p: { builder: CIsGenericReturnValueGuaranteedBuilder }) => t.IsGenericReturnValueGuaranteed
        readonly "par__type_type": (p: { builder: CGenericReturnTypeTypeBuilder }) => t.GenericReturnTypeType
    }) {
        const var_guaranteed = _p["par__guaranteed"]({
            "builder": new CIsGenericReturnValueGuaranteedBuilder({
                "buildContext": _p["buildContext"],
            }),
        })
        const var_type = create_generic_return_type({
            "buildContext": _p["buildContext"],
            "par__type": _p["par__type_type"],
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
        readonly "buildContext": gt.IBuildContext
    }) {
        const sg = ((): t.GenericFunctionType => {
            return ["procedure", {
            }]
        })()
        return sg
    }
}

export class CGenericInterfaceDeclarationBuilder {
    private readonly buildContext: gt.IBuildContext
    private readonly builder: gt.IDictionaryBuilder<t.GenericInterfaceDeclaration>
    constructor(p: {
        "buildContext": gt.IBuildContext
        "builder": gt.IDictionaryBuilder<t.GenericInterfaceDeclaration>
    }) {
        this.buildContext = p["buildContext"]
        this.builder = p["builder"]
    }
    public GenericInterfaceDeclaration(
        key: string,
        par__parameters: (builder: CGenericInterfaceParameterBuilder) => void,
        par__base_interfaces: (builder: CBaseInterfaceBuilder) => void,
        par__methods: (builder: CGenericInterfaceMethodBuilder) => void,
    ) {
        const x = this.x_GenericInterfaceDeclaration({
            "buildContext": this.buildContext,
            "key": key,
            "par__base interfaces": p => par__base_interfaces(p.builder),
            "par__methods": p => par__methods(p.builder),
            "par__parameters": p => par__parameters(p.builder),
        })
        return x
    }
    private x_GenericInterfaceDeclaration(_p: {
        readonly "buildContext": gt.IBuildContext
        readonly "key": string
        readonly "par__base interfaces": (p: { builder: CBaseInterfaceBuilder }) => void
        readonly "par__methods": (p: { builder: CGenericInterfaceMethodBuilder }) => void
        readonly "par__parameters": (p: { builder: CGenericInterfaceParameterBuilder }) => void
    }) {
        const var_parameters = _p.buildContext.createDictionary<t.GenericInterfaceParameter>({
            "callback": _cp => {
                const x = new CGenericInterfaceParameterBuilder({
                    "buildContext": _p["buildContext"],
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
        const var_base_interfaces = _p.buildContext.createDictionary<t.BaseInterface>({
            "callback": _cp => {
                const x = new CBaseInterfaceBuilder({
                    "buildContext": _p["buildContext"],
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
        const var_methods = _p.buildContext.createDictionary<t.GenericInterfaceMethod>({
            "callback": _cp => {
                const x = new CGenericInterfaceMethodBuilder({
                    "buildContext": _p["buildContext"],
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
    private readonly buildContext: gt.IBuildContext
    private readonly builder: gt.IDictionaryBuilder<t.GenericInterfaceMethod>
    constructor(p: {
        "buildContext": gt.IBuildContext
        "builder": gt.IDictionaryBuilder<t.GenericInterfaceMethod>
    }) {
        this.buildContext = p["buildContext"]
        this.builder = p["builder"]
    }
    public GenericInterfaceMethod(
        key: string,
        par__type_parameters: (builder: CGenericMethodTypeParameterBuilder) => void,
        par__parameters: (builder: CGenericMethodParameterBuilder) => void,
        par__type: (builder: CGenericFunctionTypeBuilder) => t.GenericFunctionType,
    ) {
        const x = this.x_GenericInterfaceMethod({
            "buildContext": this.buildContext,
            "key": key,
            "par__parameters": p => par__parameters(p.builder),
            "par__type": p => par__type(p.builder),
            "par__type parameters": p => par__type_parameters(p.builder),
        })
        return x
    }
    private x_GenericInterfaceMethod(_p: {
        readonly "buildContext": gt.IBuildContext
        readonly "key": string
        readonly "par__parameters": (p: { builder: CGenericMethodParameterBuilder }) => void
        readonly "par__type": (p: { builder: CGenericFunctionTypeBuilder }) => t.GenericFunctionType
        readonly "par__type parameters": (p: { builder: CGenericMethodTypeParameterBuilder }) => void
    }) {
        const var_type_parameters = _p.buildContext.createDictionary<t.GenericMethodTypeParameter>({
            "callback": _cp => {
                const x = new CGenericMethodTypeParameterBuilder({
                    "buildContext": _p["buildContext"],
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
        const var_parameters = _p.buildContext.createDictionary<t.GenericMethodParameter>({
            "callback": _cp => {
                const x = new CGenericMethodParameterBuilder({
                    "buildContext": _p["buildContext"],
                    "builder": _cp["builder"],
                    "propvar_type parameters": this.buildContext.createLookup({ dict: var_type_parameters }),
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
                "buildContext": _p["buildContext"],
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
    private readonly buildContext: gt.IBuildContext
    private readonly builder: gt.IDictionaryBuilder<t.GenericInterfaceParameter>
    constructor(p: {
        "buildContext": gt.IBuildContext
        "builder": gt.IDictionaryBuilder<t.GenericInterfaceParameter>
    }) {
        this.buildContext = p["buildContext"]
        this.builder = p["builder"]
    }
    public GenericInterfaceParameter(
        key: string,
    ) {
        const x = this.x_GenericInterfaceParameter({
            "buildContext": this.buildContext,
            "key": key,
        })
        return x
    }
    private x_GenericInterfaceParameter(_p: {
        readonly "buildContext": gt.IBuildContext
        readonly "key": string
    }) {
        const entry = {
        }
        this.builder.add({ key: _p.key, entry: entry })
        return this
    }
}

export class CGenericInTypeTypeBuilder {
    private readonly buildContext: gt.IBuildContext
    private readonly param_method_type_parameters: gt.ILookup<t.GenericMethodTypeParameter>
    constructor(p: {
        "buildContext": gt.IBuildContext
        "param_method type parameters": gt.ILookup<t.GenericMethodTypeParameter>
    }) {
        this.buildContext = p["buildContext"]
        this.param_method_type_parameters = p["param_method type parameters"]
    }
    public callback(
        par__parameters: (builder: CGenericCallbackParameterBuilder) => void,
        par__type: (builder: CGenericCallbackTypeBuilder) => t.GenericCallbackType,
    ) {
        const x = this.x_callback({
            "buildContext": this.buildContext,
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
            "buildContext": this.buildContext,
            "par__type parameter": par__type_parameter,
            "param_method type parameters": this.param_method_type_parameters,
        })
        return x
    }
    public string(
    ) {
        const x = this.x_string({
            "buildContext": this.buildContext,
            "param_method type parameters": this.param_method_type_parameters,
        })
        return x
    }
    private x_callback(_p: {
        readonly "buildContext": gt.IBuildContext
        readonly "par__parameters": (p: { builder: CGenericCallbackParameterBuilder }) => void
        readonly "par__type": (p: { builder: CGenericCallbackTypeBuilder }) => t.GenericCallbackType
        readonly "param_method type parameters": gt.ILookup<t.GenericMethodTypeParameter>
    }) {
        const var_parameters = _p.buildContext.createDictionary<t.GenericCallbackParameter>({
            "callback": _cp => {
                const x = new CGenericCallbackParameterBuilder({
                    "buildContext": _p["buildContext"],
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
                "buildContext": _p["buildContext"],
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
        readonly "buildContext": gt.IBuildContext
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
        readonly "buildContext": gt.IBuildContext
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
    private readonly buildContext: gt.IBuildContext
    private readonly builder: gt.IDictionaryBuilder<t.GenericMethodParameter>
    private readonly propvar_type_parameters: gt.ILookup<t.GenericMethodTypeParameter>
    constructor(p: {
        "buildContext": gt.IBuildContext
        "builder": gt.IDictionaryBuilder<t.GenericMethodParameter>
        "propvar_type parameters": gt.ILookup<t.GenericMethodTypeParameter>
    }) {
        this.buildContext = p["buildContext"]
        this.builder = p["builder"]
        this.propvar_type_parameters = p["propvar_type parameters"]
    }
    public GenericMethodParameter(
        key: string,
        par__type_type: (builder: CGenericInTypeTypeBuilder) => t.GenericInTypeType,
    ) {
        const x = this.x_GenericMethodParameter({
            "buildContext": this.buildContext,
            "key": key,
            "par__type_type": p => par__type_type(p.builder),
        })
        return x
    }
    private x_GenericMethodParameter(_p: {
        readonly "buildContext": gt.IBuildContext
        readonly "key": string
        readonly "par__type_type": (p: { builder: CGenericInTypeTypeBuilder }) => t.GenericInTypeType
    }) {
        const var_type = create_generic_in_type({
            "buildContext": _p["buildContext"],
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
    private readonly buildContext: gt.IBuildContext
    private readonly builder: gt.IDictionaryBuilder<t.GenericMethodTypeParameter>
    constructor(p: {
        "buildContext": gt.IBuildContext
        "builder": gt.IDictionaryBuilder<t.GenericMethodTypeParameter>
    }) {
        this.buildContext = p["buildContext"]
        this.builder = p["builder"]
    }
    public GenericMethodTypeParameter(
        key: string,
    ) {
        const x = this.x_GenericMethodTypeParameter({
            "buildContext": this.buildContext,
            "key": key,
        })
        return x
    }
    private x_GenericMethodTypeParameter(_p: {
        readonly "buildContext": gt.IBuildContext
        readonly "key": string
    }) {
        const entry = {
        }
        this.builder.add({ key: _p.key, entry: entry })
        return this
    }
}

export class CGenericReturnTypeTypeBuilder {
    private readonly buildContext: gt.IBuildContext
    constructor(p: {
        "buildContext": gt.IBuildContext
    }) {
        this.buildContext = p["buildContext"]
    }
    public interface_parameter(
        par__parameter: string,
    ) {
        const x = this.x_interface_parameter({
            "buildContext": this.buildContext,
            "par__parameter": par__parameter,
        })
        return x
    }
    public method_type_parameter(
        par__type_parameter: string,
    ) {
        const x = this.x_method_type_parameter({
            "buildContext": this.buildContext,
            "par__type parameter": par__type_parameter,
        })
        return x
    }
    public reference_to_generic_declaration(
        par__interface_interface: string,
        par__interface_type_arguments: (builder: CGenericArgumentBuilder) => void,
    ) {
        const x = this.x_reference_to_generic_declaration({
            "buildContext": this.buildContext,
            "par__interface_interface": par__interface_interface,
            "par__interface_type arguments": p => par__interface_type_arguments(p.builder),
        })
        return x
    }
    public string(
    ) {
        const x = this.x_string({
            "buildContext": this.buildContext,
        })
        return x
    }
    private x_interface_parameter(_p: {
        readonly "buildContext": gt.IBuildContext
        readonly "par__parameter": string
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
        readonly "buildContext": gt.IBuildContext
        readonly "par__type parameter": string
    }) {
        const var_type_parameter = _p["par__type parameter"]
        const sg = ((): t.GenericReturnTypeType => {
            return ["method type parameter", {
                "type parameter": var_type_parameter,
            }]
        })()
        return sg
    }
    private x_reference_to_generic_declaration(_p: {
        readonly "buildContext": gt.IBuildContext
        readonly "par__interface_interface": string
        readonly "par__interface_type arguments": (p: { builder: CGenericArgumentBuilder }) => void
    }) {
        const var_interface = create_generic_interface_reference({
            "buildContext": _p["buildContext"],
            "par__interface": _p["par__interface_interface"],
            "par__type arguments": _p["par__interface_type arguments"],
        })
        const sg = ((): t.GenericReturnTypeType => {
            return ["reference to generic declaration", {
                "interface": var_interface,
            }]
        })()
        return sg
    }
    private x_string(_p: {
        readonly "buildContext": gt.IBuildContext
    }) {
        const sg = ((): t.GenericReturnTypeType => {
            return ["string", {
            }]
        })()
        return sg
    }
}

export class CGenericTypeArgumentsBuilder {
    private readonly buildContext: gt.IBuildContext
    private readonly builder: gt.IDictionaryBuilder<t.GenericTypeArguments>
    constructor(p: {
        "buildContext": gt.IBuildContext
        "builder": gt.IDictionaryBuilder<t.GenericTypeArguments>
    }) {
        this.buildContext = p["buildContext"]
        this.builder = p["builder"]
    }
    public GenericTypeArguments(
        key: string,
        par__raw: string,
    ) {
        const x = this.x_GenericTypeArguments({
            "buildContext": this.buildContext,
            "key": key,
            "par__raw": par__raw,
        })
        return x
    }
    private x_GenericTypeArguments(_p: {
        readonly "buildContext": gt.IBuildContext
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
    private readonly buildContext: gt.IBuildContext
    constructor(p: {
        "buildContext": gt.IBuildContext
    }) {
        this.buildContext = p["buildContext"]
    }
    public constructor_call(
        par__path: string,
        par__arguments: (builder: CConstructorCallArgurmentBuilder) => void,
    ) {
        const x = this.x_constructor_call({
            "buildContext": this.buildContext,
            "par__arguments": p => par__arguments(p.builder),
            "par__path": par__path,
        })
        return x
    }
    public function_call(
        par__path: string,
        par__arguments: (builder: CFunctionCallArgurmentBuilder) => void,
    ) {
        const x = this.x_function_call({
            "buildContext": this.buildContext,
            "par__arguments": p => par__arguments(p.builder),
            "par__path": par__path,
        })
        return x
    }
    public object(
        par__properties: (builder: CPropertyInitialierBuilder) => void,
    ) {
        const x = this.x_object({
            "buildContext": this.buildContext,
            "par__properties": p => par__properties(p.builder),
        })
        return x
    }
    public rawx(
        par__rawstring: string,
    ) {
        const x = this.x_rawx({
            "buildContext": this.buildContext,
            "par__rawstring": par__rawstring,
        })
        return x
    }
    public selection(
        par__start_point: (builder: CSelectionStartPointBuilder) => t.SelectionStartPoint,
        par__steps: (builder: CSelectionStepBuilder) => void,
    ) {
        const x = this.x_selection({
            "buildContext": this.buildContext,
            "par__start point": p => par__start_point(p.builder),
            "par__steps": p => par__steps(p.builder),
        })
        return x
    }
    public tagged_union(
        par__type_specification: (builder: CTaggedUnionTypeSpecificationBuilder) => t.TaggedUnionTypeSpecification,
        par__state: string,
        par__initializer_type: (builder: CInitializerTypeBuilder) => t.InitializerType,
    ) {
        const x = this.x_tagged_union({
            "buildContext": this.buildContext,
            "par__initializer_type": p => par__initializer_type(p.builder),
            "par__state": par__state,
            "par__type specification": p => par__type_specification(p.builder),
        })
        return x
    }
    private x_constructor_call(_p: {
        readonly "buildContext": gt.IBuildContext
        readonly "par__arguments": (p: { builder: CConstructorCallArgurmentBuilder }) => void
        readonly "par__path": string
    }) {
        const var_path = _p["par__path"]
        const var_arguments = _p.buildContext.createDictionary<t.ConstructorCallArgurment>({
            "callback": _cp => {
                const x = new CConstructorCallArgurmentBuilder({
                    "buildContext": _p["buildContext"],
                    "builder": _cp["builder"],
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
        readonly "buildContext": gt.IBuildContext
        readonly "par__arguments": (p: { builder: CFunctionCallArgurmentBuilder }) => void
        readonly "par__path": string
    }) {
        const var_path = _p["par__path"]
        const var_arguments = _p.buildContext.createDictionary<t.FunctionCallArgurment>({
            "callback": _cp => {
                const x = new CFunctionCallArgurmentBuilder({
                    "buildContext": _p["buildContext"],
                    "builder": _cp["builder"],
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
        const sg = ((): t.InitializerType => {
            return ["function call", {
                "arguments": var_arguments,
                "path": var_path,
            }]
        })()
        return sg
    }
    private x_object(_p: {
        readonly "buildContext": gt.IBuildContext
        readonly "par__properties": (p: { builder: CPropertyInitialierBuilder }) => void
    }) {
        const var_properties = _p.buildContext.createDictionary<t.PropertyInitialier>({
            "callback": _cp => {
                const x = new CPropertyInitialierBuilder({
                    "buildContext": _p["buildContext"],
                    "builder": _cp["builder"],
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
        readonly "buildContext": gt.IBuildContext
        readonly "par__rawstring": string
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
        readonly "buildContext": gt.IBuildContext
        readonly "par__start point": (p: { builder: CSelectionStartPointBuilder }) => t.SelectionStartPoint
        readonly "par__steps": (p: { builder: CSelectionStepBuilder }) => void
    }) {
        const var_start_point = _p["par__start point"]({
            "builder": new CSelectionStartPointBuilder({
                "buildContext": _p["buildContext"],
            }),
        })
        const var_steps = _p.buildContext.createList<t.SelectionStep>({
            "callback": _cp => {
                const x = new CSelectionStepBuilder({
                    "buildContext": _p["buildContext"],
                    "builder": _cp["builder"],
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
        readonly "buildContext": gt.IBuildContext
        readonly "par__initializer_type": (p: { builder: CInitializerTypeBuilder }) => t.InitializerType
        readonly "par__state": string
        readonly "par__type specification": (p: { builder: CTaggedUnionTypeSpecificationBuilder }) => t.TaggedUnionTypeSpecification
    }) {
        const var_type_specification = _p["par__type specification"]({
            "builder": new CTaggedUnionTypeSpecificationBuilder({
                "buildContext": _p["buildContext"],
            }),
        })
        const var_state = _p["par__state"]
        const var_initializer = create_initializer({
            "buildContext": _p["buildContext"],
            "par__type": _p["par__initializer_type"],
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
    private readonly buildContext: gt.IBuildContext
    private readonly builder: gt.IDictionaryBuilder<t.Interface>
    constructor(p: {
        "buildContext": gt.IBuildContext
        "builder": gt.IDictionaryBuilder<t.Interface>
    }) {
        this.buildContext = p["buildContext"]
        this.builder = p["builder"]
    }
    public Interface(
        key: string,
        par__methods: (builder: CInterfaceMethodBuilder) => void,
    ) {
        const x = this.x_Interface({
            "buildContext": this.buildContext,
            "key": key,
            "par__methods": p => par__methods(p.builder),
        })
        return x
    }
    private x_Interface(_p: {
        readonly "buildContext": gt.IBuildContext
        readonly "key": string
        readonly "par__methods": (p: { builder: CInterfaceMethodBuilder }) => void
    }) {
        const var_methods = _p.buildContext.createDictionary<t.InterfaceMethod>({
            "callback": _cp => {
                const x = new CInterfaceMethodBuilder({
                    "buildContext": _p["buildContext"],
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
    private readonly buildContext: gt.IBuildContext
    private readonly builder: gt.IDictionaryBuilder<t.InterfaceMethod>
    constructor(p: {
        "buildContext": gt.IBuildContext
        "builder": gt.IDictionaryBuilder<t.InterfaceMethod>
    }) {
        this.buildContext = p["buildContext"]
        this.builder = p["builder"]
    }
    public InterfaceMethod(
        key: string,
        par__parameters: (builder: CInterfaceMethodParameterBuilder) => void,
        par__type: (builder: CInterfaceMethodTypeBuilder) => t.InterfaceMethodType,
    ) {
        const x = this.x_InterfaceMethod({
            "buildContext": this.buildContext,
            "key": key,
            "par__parameters": p => par__parameters(p.builder),
            "par__type": p => par__type(p.builder),
        })
        return x
    }
    private x_InterfaceMethod(_p: {
        readonly "buildContext": gt.IBuildContext
        readonly "key": string
        readonly "par__parameters": (p: { builder: CInterfaceMethodParameterBuilder }) => void
        readonly "par__type": (p: { builder: CInterfaceMethodTypeBuilder }) => t.InterfaceMethodType
    }) {
        const var_parameters = _p.buildContext.createDictionary<t.InterfaceMethodParameter>({
            "callback": _cp => {
                const x = new CInterfaceMethodParameterBuilder({
                    "buildContext": _p["buildContext"],
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
                "buildContext": _p["buildContext"],
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
    private readonly buildContext: gt.IBuildContext
    private readonly builder: gt.IDictionaryBuilder<t.InterfaceMethodParameter>
    constructor(p: {
        "buildContext": gt.IBuildContext
        "builder": gt.IDictionaryBuilder<t.InterfaceMethodParameter>
    }) {
        this.buildContext = p["buildContext"]
        this.builder = p["builder"]
    }
    public InterfaceMethodParameter(
        key: string,
        par__type: string,
    ) {
        const x = this.x_InterfaceMethodParameter({
            "buildContext": this.buildContext,
            "key": key,
            "par__type": par__type,
        })
        return x
    }
    private x_InterfaceMethodParameter(_p: {
        readonly "buildContext": gt.IBuildContext
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
    private readonly buildContext: gt.IBuildContext
    constructor(p: {
        "buildContext": gt.IBuildContext
    }) {
        this.buildContext = p["buildContext"]
    }
    public function(
        par__guaranteed: (builder: CIsInterfaceReturnValueGuaranteedBuilder) => t.IsInterfaceReturnValueGuaranteed,
        par__raw_return_type: string,
    ) {
        const x = this.x_function({
            "buildContext": this.buildContext,
            "par__guaranteed": p => par__guaranteed(p.builder),
            "par__raw return type": par__raw_return_type,
        })
        return x
    }
    public procedure(
    ) {
        const x = this.x_procedure({
            "buildContext": this.buildContext,
        })
        return x
    }
    private x_function(_p: {
        readonly "buildContext": gt.IBuildContext
        readonly "par__guaranteed": (p: { builder: CIsInterfaceReturnValueGuaranteedBuilder }) => t.IsInterfaceReturnValueGuaranteed
        readonly "par__raw return type": string
    }) {
        const var_guaranteed = _p["par__guaranteed"]({
            "builder": new CIsInterfaceReturnValueGuaranteedBuilder({
                "buildContext": _p["buildContext"],
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
        readonly "buildContext": gt.IBuildContext
    }) {
        const sg = ((): t.InterfaceMethodType => {
            return ["procedure", {
            }]
        })()
        return sg
    }
}

export class CIsCallbackReturnValueGuaranteedBuilder {
    private readonly buildContext: gt.IBuildContext
    private readonly param_method_type_parameters: gt.ILookup<t.GenericMethodTypeParameter>
    constructor(p: {
        "buildContext": gt.IBuildContext
        "param_method type parameters": gt.ILookup<t.GenericMethodTypeParameter>
    }) {
        this.buildContext = p["buildContext"]
        this.param_method_type_parameters = p["param_method type parameters"]
    }
    public no(
    ) {
        const x = this.x_no({
            "buildContext": this.buildContext,
            "param_method type parameters": this.param_method_type_parameters,
        })
        return x
    }
    private x_no(_p: {
        readonly "buildContext": gt.IBuildContext
        readonly "param_method type parameters": gt.ILookup<t.GenericMethodTypeParameter>
    }) {
        const sg = ((): t.IsCallbackReturnValueGuaranteed => {
            return ["no", {
            }]
        })()
        return sg
    }
    private x_yes(_p: {
        readonly "buildContext": gt.IBuildContext
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
            "buildContext": this.buildContext,
            "param_method type parameters": this.param_method_type_parameters,
        })
        return x
    }
}

export class CIsGenericReturnValueGuaranteedBuilder {
    private readonly buildContext: gt.IBuildContext
    constructor(p: {
        "buildContext": gt.IBuildContext
    }) {
        this.buildContext = p["buildContext"]
    }
    public no(
    ) {
        const x = this.x_no({
            "buildContext": this.buildContext,
        })
        return x
    }
    private x_no(_p: {
        readonly "buildContext": gt.IBuildContext
    }) {
        const sg = ((): t.IsGenericReturnValueGuaranteed => {
            return ["no", {
            }]
        })()
        return sg
    }
    private x_yes(_p: {
        readonly "buildContext": gt.IBuildContext
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
            "buildContext": this.buildContext,
        })
        return x
    }
}

export class CIsInterfaceReturnValueGuaranteedBuilder {
    private readonly buildContext: gt.IBuildContext
    constructor(p: {
        "buildContext": gt.IBuildContext
    }) {
        this.buildContext = p["buildContext"]
    }
    public no(
    ) {
        const x = this.x_no({
            "buildContext": this.buildContext,
        })
        return x
    }
    private x_no(_p: {
        readonly "buildContext": gt.IBuildContext
    }) {
        const sg = ((): t.IsInterfaceReturnValueGuaranteed => {
            return ["no", {
            }]
        })()
        return sg
    }
    private x_yes(_p: {
        readonly "buildContext": gt.IBuildContext
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
            "buildContext": this.buildContext,
        })
        return x
    }
}

export class CObjectPropertyBuilder {
    private readonly buildContext: gt.IBuildContext
    private readonly builder: gt.IDictionaryBuilder<t.ObjectProperty>
    private readonly propvar_generic_interface_declarations: gt.ILookup<t.GenericInterfaceDeclaration>
    constructor(p: {
        "buildContext": gt.IBuildContext
        "builder": gt.IDictionaryBuilder<t.ObjectProperty>
        "propvar_generic interface declarations": gt.ILookup<t.GenericInterfaceDeclaration>
    }) {
        this.buildContext = p["buildContext"]
        this.builder = p["builder"]
        this.propvar_generic_interface_declarations = p["propvar_generic interface declarations"]
    }
    public ObjectProperty(
        key: string,
        par__type: (builder: CPropertyTypeBuilder) => t.PropertyType,
    ) {
        const x = this.x_ObjectProperty({
            "buildContext": this.buildContext,
            "key": key,
            "par__type": p => par__type(p.builder),
        })
        return x
    }
    private x_ObjectProperty(_p: {
        readonly "buildContext": gt.IBuildContext
        readonly "key": string
        readonly "par__type": (p: { builder: CPropertyTypeBuilder }) => t.PropertyType
    }) {
        const var_type = _p["par__type"]({
            "builder": new CPropertyTypeBuilder({
                "buildContext": _p["buildContext"],
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
    private readonly buildContext: gt.IBuildContext
    private readonly builder: gt.IDictionaryBuilder<t.PrivateParameter>
    constructor(p: {
        "buildContext": gt.IBuildContext
        "builder": gt.IDictionaryBuilder<t.PrivateParameter>
    }) {
        this.buildContext = p["buildContext"]
        this.builder = p["builder"]
    }
    public PrivateParameter(
        key: string,
        par__type: string,
    ) {
        const x = this.x_PrivateParameter({
            "buildContext": this.buildContext,
            "key": key,
            "par__type": par__type,
        })
        return x
    }
    private x_PrivateParameter(_p: {
        readonly "buildContext": gt.IBuildContext
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
    private readonly buildContext: gt.IBuildContext
    private readonly builder: gt.IDictionaryBuilder<t.PropertyInitialier>
    constructor(p: {
        "buildContext": gt.IBuildContext
        "builder": gt.IDictionaryBuilder<t.PropertyInitialier>
    }) {
        this.buildContext = p["buildContext"]
        this.builder = p["builder"]
    }
    public PropertyInitialier(
        key: string,
        par__initializer_type: (builder: CInitializerTypeBuilder) => t.InitializerType,
    ) {
        const x = this.x_PropertyInitialier({
            "buildContext": this.buildContext,
            "key": key,
            "par__initializer_type": p => par__initializer_type(p.builder),
        })
        return x
    }
    private x_PropertyInitialier(_p: {
        readonly "buildContext": gt.IBuildContext
        readonly "key": string
        readonly "par__initializer_type": (p: { builder: CInitializerTypeBuilder }) => t.InitializerType
    }) {
        const var_initializer = create_initializer({
            "buildContext": _p["buildContext"],
            "par__type": _p["par__initializer_type"],
        })
        const entry = {
            "initializer": var_initializer,
        }
        this.builder.add({ key: _p.key, entry: entry })
        return this
    }
}

export class CPropertyInitializationBuilder {
    private readonly buildContext: gt.IBuildContext
    constructor(p: {
        "buildContext": gt.IBuildContext
    }) {
        this.buildContext = p["buildContext"]
    }
    public default(
        par__initializer: string,
    ) {
        const x = this.x_default({
            "buildContext": this.buildContext,
            "par__initializer": par__initializer,
        })
        return x
    }
    public parametrized(
        par__type: string,
    ) {
        const x = this.x_parametrized({
            "buildContext": this.buildContext,
            "par__type": par__type,
        })
        return x
    }
    private x_default(_p: {
        readonly "buildContext": gt.IBuildContext
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
        readonly "buildContext": gt.IBuildContext
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
    private readonly buildContext: gt.IBuildContext
    private readonly propvar_generic_interface_declarations: gt.ILookup<t.GenericInterfaceDeclaration>
    constructor(p: {
        "buildContext": gt.IBuildContext
        "propvar_generic interface declarations": gt.ILookup<t.GenericInterfaceDeclaration>
    }) {
        this.buildContext = p["buildContext"]
        this.propvar_generic_interface_declarations = p["propvar_generic interface declarations"]
    }
    public generic_type(
        par__referenced_type: string,
        par__arguments: (builder: CGenericTypeArgumentsBuilder) => void,
    ) {
        const x = this.x_generic_type({
            "buildContext": this.buildContext,
            "par__arguments": p => par__arguments(p.builder),
            "par__referenced type": par__referenced_type,
        })
        return x
    }
    public raw(
        par__raw: string,
    ) {
        const x = this.x_raw({
            "buildContext": this.buildContext,
            "par__raw": par__raw,
        })
        return x
    }
    public reference(
        par__referenced_type: string,
    ) {
        const x = this.x_reference({
            "buildContext": this.buildContext,
            "par__referenced type": par__referenced_type,
        })
        return x
    }
    public string(
    ) {
        const x = this.x_string({
            "buildContext": this.buildContext,
        })
        return x
    }
    private x_generic_type(_p: {
        readonly "buildContext": gt.IBuildContext
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
        const var_arguments = _p.buildContext.createDictionary<t.GenericTypeArguments>({
            "callback": _cp => {
                const x = new CGenericTypeArgumentsBuilder({
                    "buildContext": _p["buildContext"],
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
        readonly "buildContext": gt.IBuildContext
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
        readonly "buildContext": gt.IBuildContext
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
        readonly "buildContext": gt.IBuildContext
    }) {
        const sg = ((): t.PropertyType => {
            return ["string", {
            }]
        })()
        return sg
    }
}

export class CPublicParameterBuilder {
    private readonly buildContext: gt.IBuildContext
    private readonly builder: gt.IDictionaryBuilder<t.PublicParameter>
    constructor(p: {
        "buildContext": gt.IBuildContext
        "builder": gt.IDictionaryBuilder<t.PublicParameter>
    }) {
        this.buildContext = p["buildContext"]
        this.builder = p["builder"]
    }
    public PublicParameter(
        key: string,
        par__type: string,
    ) {
        const x = this.x_PublicParameter({
            "buildContext": this.buildContext,
            "key": key,
            "par__type": par__type,
        })
        return x
    }
    private x_PublicParameter(_p: {
        readonly "buildContext": gt.IBuildContext
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
    private readonly buildContext: gt.IBuildContext
    constructor(p: {
        "buildContext": gt.IBuildContext
    }) {
        this.buildContext = p["buildContext"]
    }
    public callback_parameter(
        par__parameter: string,
    ) {
        const x = this.x_callback_parameter({
            "buildContext": this.buildContext,
            "par__parameter": par__parameter,
        })
        return x
    }
    public parameter(
        par__parameter: string,
    ) {
        const x = this.x_parameter({
            "buildContext": this.buildContext,
            "par__parameter": par__parameter,
        })
        return x
    }
    public property(
        par__property: string,
    ) {
        const x = this.x_property({
            "buildContext": this.buildContext,
            "par__property": par__property,
        })
        return x
    }
    public variable(
        par__variable: string,
    ) {
        const x = this.x_variable({
            "buildContext": this.buildContext,
            "par__variable": par__variable,
        })
        return x
    }
    private x_callback_parameter(_p: {
        readonly "buildContext": gt.IBuildContext
        readonly "par__parameter": string
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
        readonly "buildContext": gt.IBuildContext
        readonly "par__parameter": string
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
        readonly "buildContext": gt.IBuildContext
        readonly "par__property": string
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
        readonly "buildContext": gt.IBuildContext
        readonly "par__variable": string
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
    private readonly buildContext: gt.IBuildContext
    private readonly builder: gt.IListBuilder<t.SelectionStep>
    constructor(p: {
        "buildContext": gt.IBuildContext
        "builder": gt.IListBuilder<t.SelectionStep>
    }) {
        this.buildContext = p["buildContext"]
        this.builder = p["builder"]
    }
    public SelectionStep(
        par__rawselectionstring: string,
    ) {
        const x = this.x_SelectionStep({
            "buildContext": this.buildContext,
            "par__rawselectionstring": par__rawselectionstring,
        })
        return x
    }
    private x_SelectionStep(_p: {
        readonly "buildContext": gt.IBuildContext
        readonly "par__rawselectionstring": string
    }) {
        const var_rawselectionstring = _p["par__rawselectionstring"]
        const entry = {
            "rawselectionstring": var_rawselectionstring,
        }
        this.builder.push({ element: entry })
        return this
    }
}

export class CStatementBuilder {
    private readonly buildContext: gt.IBuildContext
    private readonly builder: gt.IListBuilder<t.Statement>
    constructor(p: {
        "buildContext": gt.IBuildContext
        "builder": gt.IListBuilder<t.Statement>
    }) {
        this.buildContext = p["buildContext"]
        this.builder = p["builder"]
    }
    public Statement(
        par__raw_value: string,
    ) {
        const x = this.x_Statement({
            "buildContext": this.buildContext,
            "par__raw value": par__raw_value,
        })
        return x
    }
    private x_Statement(_p: {
        readonly "buildContext": gt.IBuildContext
        readonly "par__raw value": string
    }) {
        const var_raw_value = _p["par__raw value"]
        const entry = {
            "raw value": var_raw_value,
        }
        this.builder.push({ element: entry })
        return this
    }
}

export class CTaggedUnionAlternativeBuilder {
    private readonly buildContext: gt.IBuildContext
    private readonly builder: gt.IDictionaryBuilder<t.TaggedUnionAlternative>
    constructor(p: {
        "buildContext": gt.IBuildContext
        "builder": gt.IDictionaryBuilder<t.TaggedUnionAlternative>
    }) {
        this.buildContext = p["buildContext"]
        this.builder = p["builder"]
    }
    public TaggedUnionAlternative(
        key: string,
        par__referenced_type: string,
    ) {
        const x = this.x_TaggedUnionAlternative({
            "buildContext": this.buildContext,
            "key": key,
            "par__referenced type": par__referenced_type,
        })
        return x
    }
    private x_TaggedUnionAlternative(_p: {
        readonly "buildContext": gt.IBuildContext
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
    private readonly buildContext: gt.IBuildContext
    constructor(p: {
        "buildContext": gt.IBuildContext
    }) {
        this.buildContext = p["buildContext"]
    }
    public derived(
    ) {
        const x = this.x_derived({
            "buildContext": this.buildContext,
        })
        return x
    }
    public reference(
        par__type: string,
    ) {
        const x = this.x_reference({
            "buildContext": this.buildContext,
            "par__type": par__type,
        })
        return x
    }
    private x_derived(_p: {
        readonly "buildContext": gt.IBuildContext
    }) {
        const sg = ((): t.TaggedUnionTypeSpecification => {
            return ["derived", {
            }]
        })()
        return sg
    }
    private x_reference(_p: {
        readonly "buildContext": gt.IBuildContext
        readonly "par__type": string
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
    private readonly buildContext: gt.IBuildContext
    private readonly builder: gt.IDictionaryBuilder<t.Type>
    private readonly propvar_generic_interface_declarations: gt.ILookup<t.GenericInterfaceDeclaration>
    constructor(p: {
        "buildContext": gt.IBuildContext
        "builder": gt.IDictionaryBuilder<t.Type>
        "propvar_generic interface declarations": gt.ILookup<t.GenericInterfaceDeclaration>
    }) {
        this.buildContext = p["buildContext"]
        this.builder = p["builder"]
        this.propvar_generic_interface_declarations = p["propvar_generic interface declarations"]
    }
    public Type(
        key: string,
        par__type: (builder: CTypeTypeBuilder) => t.TypeType,
    ) {
        const x = this.x_Type({
            "buildContext": this.buildContext,
            "key": key,
            "par__type": p => par__type(p.builder),
        })
        return x
    }
    private x_Type(_p: {
        readonly "buildContext": gt.IBuildContext
        readonly "key": string
        readonly "par__type": (p: { builder: CTypeTypeBuilder }) => t.TypeType
    }) {
        const var_type = _p["par__type"]({
            "builder": new CTypeTypeBuilder({
                "buildContext": _p["buildContext"],
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
    private readonly buildContext: gt.IBuildContext
    private readonly propvar_generic_interface_declarations: gt.ILookup<t.GenericInterfaceDeclaration>
    constructor(p: {
        "buildContext": gt.IBuildContext
        "propvar_generic interface declarations": gt.ILookup<t.GenericInterfaceDeclaration>
    }) {
        this.buildContext = p["buildContext"]
        this.propvar_generic_interface_declarations = p["propvar_generic interface declarations"]
    }
    public object(
        par__properties: (builder: CObjectPropertyBuilder) => void,
    ) {
        const x = this.x_object({
            "buildContext": this.buildContext,
            "par__properties": p => par__properties(p.builder),
        })
        return x
    }
    public tagged_union(
        par__alternatives: (builder: CTaggedUnionAlternativeBuilder) => void,
    ) {
        const x = this.x_tagged_union({
            "buildContext": this.buildContext,
            "par__alternatives": p => par__alternatives(p.builder),
        })
        return x
    }
    private x_object(_p: {
        readonly "buildContext": gt.IBuildContext
        readonly "par__properties": (p: { builder: CObjectPropertyBuilder }) => void
    }) {
        const var_properties = _p.buildContext.createDictionary<t.ObjectProperty>({
            "callback": _cp => {
                const x = new CObjectPropertyBuilder({
                    "buildContext": _p["buildContext"],
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
        readonly "buildContext": gt.IBuildContext
        readonly "par__alternatives": (p: { builder: CTaggedUnionAlternativeBuilder }) => void
    }) {
        const var_alternatives = _p.buildContext.createDictionary<t.TaggedUnionAlternative>({
            "callback": _cp => {
                const x = new CTaggedUnionAlternativeBuilder({
                    "buildContext": _p["buildContext"],
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
    private readonly buildContext: gt.IBuildContext
    private readonly builder: gt.IDictionaryBuilder<t.Variable>
    constructor(p: {
        "buildContext": gt.IBuildContext
        "builder": gt.IDictionaryBuilder<t.Variable>
    }) {
        this.buildContext = p["buildContext"]
        this.builder = p["builder"]
    }
    public Variable(
        key: string,
        par__initializer_type: (builder: CInitializerTypeBuilder) => t.InitializerType,
    ) {
        const x = this.x_Variable({
            "buildContext": this.buildContext,
            "key": key,
            "par__initializer_type": p => par__initializer_type(p.builder),
        })
        return x
    }
    private x_Variable(_p: {
        readonly "buildContext": gt.IBuildContext
        readonly "key": string
        readonly "par__initializer_type": (p: { builder: CInitializerTypeBuilder }) => t.InitializerType
    }) {
        const var_initializer = create_initializer({
            "buildContext": _p["buildContext"],
            "par__type": _p["par__initializer_type"],
        })
        const entry = {
            "initializer": var_initializer,
        }
        this.builder.add({ key: _p.key, entry: entry })
        return this
    }
}
