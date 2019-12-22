// tslint:disable: max-classes-per-file object-literal-key-quotes variable-name no-string-literal member-ordering
import * as gt from "./genericTypes"
import * as t from "./types"

export class AlgorithmBuilder {
    private readonly buildContext: gt.IBuildContext
    private readonly builder: gt.IDictionaryBuilder<t.Algorithm>
    constructor(p: {
        buildContext: gt.IBuildContext
        builder: gt.IDictionaryBuilder<t.Algorithm>
    }) {
        this.buildContext = p.buildContext
        this.builder = p.builder
    }
    public Algorithm(
        key: string,
        par__type: (builder: AlgorithmTypeBuilder) => t.AlgorithmType,
    ) {
        const x = this.x_Algorithm({
            "buildContext": this.buildContext,
            "key": key,
            "par__type": p => par__type(p.builder),
        })
        return x
    }
    private x_Algorithm(_p: {
        readonly "buildContext": gt.IBuildContext
        readonly "key": string
        readonly "par__type": (p: { builder: AlgorithmTypeBuilder }) => t.AlgorithmType
    }) {
        const var_type = _p["par__type"]({
            "builder": new AlgorithmTypeBuilder({
                "buildContext": _p.buildContext,
            }),
        })
        const entry = {
            "type": var_type,
        }
        this.builder.add({ key: _p.key, entry: entry })
        return this
    }
}

export class AlgorithmTypeBuilder {
    private readonly buildContext: gt.IBuildContext
    constructor(p: {
        buildContext: gt.IBuildContext
    }) {
        this.buildContext = p.buildContext
    }
    public class(
        par__properties: (builder: ClassPropertyBuilder) => void,
        par__methods: (builder: MethodBuilder) => void,
    ) {
        const x = this.x_class({
            "buildContext": this.buildContext,
            "par__methods": p => par__methods(p.builder),
            "par__properties": p => par__properties(p.builder),
        })
        return x
    }
    public function(
        par__specification_access: (builder: FunctionAccessBuilder) => t.FunctionAccess,
        par__specification_block_variables: (builder: VariableBuilder) => void,
        par__specification_block_statements: (builder: StatementBuilder) => void,
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
        readonly "par__methods": (p: { builder: MethodBuilder }) => void
        readonly "par__properties": (p: { builder: ClassPropertyBuilder }) => void
    }) {
        const var_properties = _p.buildContext.createDictionary<t.ClassProperty>({
            "callback": _cp => {
                const x = new ClassPropertyBuilder({
                    "buildContext": _p.buildContext,
                    "builder": _cp.builder,
                })
                const y = _p["par__properties"]({
                    "builder": x,
                })
                return y
            },
            "reporter": gt.createSimpleConflictingEntryReporter({
                "reportError": _errorStr => {},
                "typeInfo": "ClassProperty",
            }),
        })
        const var_methods = _p.buildContext.createDictionary<t.Method>({
            "callback": _cp => {
                const x = new MethodBuilder({
                    "buildContext": _p.buildContext,
                    "builder": _cp.builder,
                })
                const y = _p["par__methods"]({
                    "builder": x,
                })
                return y
            },
            "reporter": gt.createSimpleConflictingEntryReporter({
                "reportError": _errorStr => {},
                "typeInfo": "Method",
            }),
        })
        const sg = ((): t.AlgorithmType => { return [ "class", {
            "methods": var_methods,
            "properties": var_properties,
        } ]})()
        return sg
    }
    private x_function(_p: {
        readonly "buildContext": gt.IBuildContext
        readonly "par__specification_access": (p: { builder: FunctionAccessBuilder }) => t.FunctionAccess
        readonly "par__specification_block_statements": (p: { builder: StatementBuilder }) => void
        readonly "par__specification_block_variables": (p: { builder: VariableBuilder }) => void
    }) {
        const var_specification = create_function_specification({
            "buildContext": _p.buildContext,
            "par__access": _p["par__specification_access"],
            "par__block_statements": _p["par__specification_block_statements"],
            "par__block_variables": _p["par__specification_block_variables"],
        })
        const sg = ((): t.AlgorithmType => { return [ "function", {
            "specification": var_specification,
        } ]})()
        return sg
    }
}

export class ArgumentTypeBuilder {
    private readonly buildContext: gt.IBuildContext
    constructor(p: {
        buildContext: gt.IBuildContext
    }) {
        this.buildContext = p.buildContext
    }
    public callback(
        par__block_variables: (builder: VariableBuilder) => void,
        par__block_statements: (builder: StatementBuilder) => void,
    ) {
        const x = this.x_callback({
            "buildContext": this.buildContext,
            "par__block_statements": p => par__block_statements(p.builder),
            "par__block_variables": p => par__block_variables(p.builder),
        })
        return x
    }
    public initializer(
        par__initializer_type: (builder: InitializerTypeBuilder) => t.InitializerType,
    ) {
        const x = this.x_initializer({
            "buildContext": this.buildContext,
            "par__initializer_type": p => par__initializer_type(p.builder),
        })
        return x
    }
    private x_callback(_p: {
        readonly "buildContext": gt.IBuildContext
        readonly "par__block_statements": (p: { builder: StatementBuilder }) => void
        readonly "par__block_variables": (p: { builder: VariableBuilder }) => void
    }) {
        const var_block = create_block({
            "buildContext": _p.buildContext,
            "par__statements": _p["par__block_statements"],
            "par__variables": _p["par__block_variables"],
        })
        const sg = ((): t.ArgumentType => { return [ "callback", {
            "block": var_block,
        } ]})()
        return sg
    }
    private x_initializer(_p: {
        readonly "buildContext": gt.IBuildContext
        readonly "par__initializer_type": (p: { builder: InitializerTypeBuilder }) => t.InitializerType
    }) {
        const var_initializer = create_initializer({
            "buildContext": _p.buildContext,
            "par__type": _p["par__initializer_type"],
        })
        const sg = ((): t.ArgumentType => { return [ "initializer", {
            "initializer": var_initializer,
        } ]})()
        return sg
    }
}

export class BaseInterfaceBuilder {
    private readonly buildContext: gt.IBuildContext
    private readonly builder: gt.IDictionaryBuilder<t.BaseInterface>
    constructor(p: {
        buildContext: gt.IBuildContext
        builder: gt.IDictionaryBuilder<t.BaseInterface>
    }) {
        this.buildContext = p.buildContext
        this.builder = p.builder
    }
    public BaseInterface(
        key: string,
        par__interface_interface: string,
        par__interface_type_arguments: (builder: GenericArgumentBuilder) => void,
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
        readonly "par__interface_type arguments": (p: { builder: GenericArgumentBuilder }) => void
    }) {
        const var_interface = create_generic_interface_reference({
            "buildContext": _p.buildContext,
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

export class ClassPropertyBuilder {
    private readonly buildContext: gt.IBuildContext
    private readonly builder: gt.IDictionaryBuilder<t.ClassProperty>
    constructor(p: {
        buildContext: gt.IBuildContext
        builder: gt.IDictionaryBuilder<t.ClassProperty>
    }) {
        this.buildContext = p.buildContext
        this.builder = p.builder
    }
    public ClassProperty(
        key: string,
        par__initialization: (builder: PropertyInitializationBuilder) => t.PropertyInitialization,
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
        readonly "par__initialization": (p: { builder: PropertyInitializationBuilder }) => t.PropertyInitialization
    }) {
        const var_initialization = _p["par__initialization"]({
            "builder": new PropertyInitializationBuilder({
                "buildContext": _p.buildContext,
            }),
        })
        const entry = {
            "initialization": var_initialization,
        }
        this.builder.add({ key: _p.key, entry: entry })
        return this
    }
}

export class CompilationUnitBuilder {
    private readonly buildContext: gt.IBuildContext
    constructor(p: {
        buildContext: gt.IBuildContext
    }) {
        this.buildContext = p.buildContext
    }
    public build(
        par__generic_interface_declarations: (builder: GenericInterfaceDeclarationBuilder) => void,
        par__types: (builder: TypeBuilder) => void,
        par__algorithms: (builder: AlgorithmBuilder) => void,
    ) {
        const x = this.x_build({
            "buildContext": this.buildContext,
            "par__algorithms": p => par__algorithms(p.builder),
            "par__generic interface declarations": p => par__generic_interface_declarations(p.builder),
            "par__types": p => par__types(p.builder),
        })
        return x
    }
    private x_build(_p: {
        readonly "buildContext": gt.IBuildContext
        readonly "par__algorithms": (p: { builder: AlgorithmBuilder }) => void
        readonly "par__generic interface declarations": (p: { builder: GenericInterfaceDeclarationBuilder }) => void
        readonly "par__types": (p: { builder: TypeBuilder }) => void
    }) {
        const var_generic_interface_declarations = _p.buildContext.createDictionary<t.GenericInterfaceDeclaration>({
            "callback": _cp => {
                const x = new GenericInterfaceDeclarationBuilder({
                    "buildContext": _p.buildContext,
                    "builder": _cp.builder,
                })
                const y = _p["par__generic interface declarations"]({
                    "builder": x,
                })
                return y
            },
            "reporter": gt.createSimpleConflictingEntryReporter({
                "reportError": _errorStr => {},
                "typeInfo": "GenericInterfaceDeclaration",
            }),
        })
        const var_types = _p.buildContext.createDictionary<t.Type>({
            "callback": _cp => {
                const x = new TypeBuilder({
                    "buildContext": _p.buildContext,
                    "builder": _cp.builder,
                })
                const y = _p["par__types"]({
                    "builder": x,
                })
                return y
            },
            "reporter": gt.createSimpleConflictingEntryReporter({
                "reportError": _errorStr => {},
                "typeInfo": "Type",
            }),
        })
        const var_algorithms = _p.buildContext.createDictionary<t.Algorithm>({
            "callback": _cp => {
                const x = new AlgorithmBuilder({
                    "buildContext": _p.buildContext,
                    "builder": _cp.builder,
                })
                const y = _p["par__algorithms"]({
                    "builder": x,
                })
                return y
            },
            "reporter": gt.createSimpleConflictingEntryReporter({
                "reportError": _errorStr => {},
                "typeInfo": "Algorithm",
            }),
        })
        const entry = {
            "algorithms": var_algorithms,
            "generic interface declarations": var_generic_interface_declarations,
            "types": var_types,
        }
        return entry
    }
}

export class ConstructorCallArgurmentBuilder {
    private readonly buildContext: gt.IBuildContext
    private readonly builder: gt.IDictionaryBuilder<t.ConstructorCallArgurment>
    constructor(p: {
        buildContext: gt.IBuildContext
        builder: gt.IDictionaryBuilder<t.ConstructorCallArgurment>
    }) {
        this.buildContext = p.buildContext
        this.builder = p.builder
    }
    public ConstructorCallArgurment(
        key: string,
        par__initializer_type: (builder: InitializerTypeBuilder) => t.InitializerType,
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
        readonly "par__initializer_type": (p: { builder: InitializerTypeBuilder }) => t.InitializerType
    }) {
        const var_initializer = create_initializer({
            "buildContext": _p.buildContext,
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
    readonly "par__statements": (p: { builder: StatementBuilder }) => void
    readonly "par__variables": (p: { builder: VariableBuilder }) => void
}) {
    const var_variables = _p.buildContext.createOrderedDictionary<t.Variable, t.VariableOrderings>({
        "callback": _cp => {
            const x = new VariableBuilder({
                "buildContext": _p.buildContext,
                "builder": _cp.builder,
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
            "reportError": _errorStr => {},
            "typeInfo": "Variable",
        }),
    })
    const var_statements = _p.buildContext.createList<t.Statement>({
        "callback": _cp => {
            const x = new StatementBuilder({
                "buildContext": _p.buildContext,
                "builder": _cp.builder,
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
    readonly "par__access": (p: { builder: FunctionAccessBuilder }) => t.FunctionAccess
    readonly "par__block_statements": (p: { builder: StatementBuilder }) => void
    readonly "par__block_variables": (p: { builder: VariableBuilder }) => void
}) {
    const var_access = _p["par__access"]({
        "builder": new FunctionAccessBuilder({
            "buildContext": _p.buildContext,
        }),
    })
    const var_block = create_block({
        "buildContext": _p.buildContext,
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
    readonly "par__type": (p: { builder: GenericInTypeTypeBuilder }) => t.GenericInTypeType
}) {
    const var_type = _p["par__type"]({
        "builder": new GenericInTypeTypeBuilder({
            "buildContext": _p.buildContext,
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
    readonly "par__type arguments": (p: { builder: GenericArgumentBuilder }) => void
}) {
    const var_interface = _p["par__interface"]
    const var_type_arguments = _p.buildContext.createDictionary<t.GenericArgument>({
        "callback": _cp => {
            const x = new GenericArgumentBuilder({
                "buildContext": _p.buildContext,
                "builder": _cp.builder,
            })
            const y = _p["par__type arguments"]({
                "builder": x,
            })
            return y
        },
        "reporter": gt.createSimpleConflictingEntryReporter({
            "reportError": _errorStr => {},
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
    readonly "par__type": (p: { builder: GenericReturnTypeTypeBuilder }) => t.GenericReturnTypeType
}) {
    const var_type = _p["par__type"]({
        "builder": new GenericReturnTypeTypeBuilder({
            "buildContext": _p.buildContext,
        }),
    })
    const component = {
        "type": var_type,
    }
    return component
}
function create_initializer(_p: {
    readonly "buildContext": gt.IBuildContext
    readonly "par__type": (p: { builder: InitializerTypeBuilder }) => t.InitializerType
}) {
    const var_type = _p["par__type"]({
        "builder": new InitializerTypeBuilder({
            "buildContext": _p.buildContext,
        }),
    })
    const component = {
        "type": var_type,
    }
    return component
}

export class FunctionAccessBuilder {
    private readonly buildContext: gt.IBuildContext
    constructor(p: {
        buildContext: gt.IBuildContext
    }) {
        this.buildContext = p.buildContext
    }
    public private(
        par__parameters: (builder: PrivateParameterBuilder) => void,
    ) {
        const x = this.x_private({
            "buildContext": this.buildContext,
            "par__parameters": p => par__parameters(p.builder),
        })
        return x
    }
    public public(
        par__parameters: (builder: PublicParameterBuilder) => void,
    ) {
        const x = this.x_public({
            "buildContext": this.buildContext,
            "par__parameters": p => par__parameters(p.builder),
        })
        return x
    }
    private x_private(_p: {
        readonly "buildContext": gt.IBuildContext
        readonly "par__parameters": (p: { builder: PrivateParameterBuilder }) => void
    }) {
        const var_parameters = _p.buildContext.createDictionary<t.PrivateParameter>({
            "callback": _cp => {
                const x = new PrivateParameterBuilder({
                    "buildContext": _p.buildContext,
                    "builder": _cp.builder,
                })
                const y = _p["par__parameters"]({
                    "builder": x,
                })
                return y
            },
            "reporter": gt.createSimpleConflictingEntryReporter({
                "reportError": _errorStr => {},
                "typeInfo": "PrivateParameter",
            }),
        })
        const sg = ((): t.FunctionAccess => { return [ "private", {
            "parameters": var_parameters,
        } ]})()
        return sg
    }
    private x_public(_p: {
        readonly "buildContext": gt.IBuildContext
        readonly "par__parameters": (p: { builder: PublicParameterBuilder }) => void
    }) {
        const var_parameters = _p.buildContext.createOrderedDictionary<t.PublicParameter, t.PublicParameterOrderings>({
            "callback": _cp => {
                const x = new PublicParameterBuilder({
                    "buildContext": _p.buildContext,
                    "builder": _cp.builder,
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
                "reportError": _errorStr => {},
                "typeInfo": "PublicParameter",
            }),
        })
        const sg = ((): t.FunctionAccess => { return [ "public", {
            "parameters": var_parameters,
        } ]})()
        return sg
    }
}

export class FunctionCallArgurmentBuilder {
    private readonly buildContext: gt.IBuildContext
    private readonly builder: gt.IDictionaryBuilder<t.FunctionCallArgurment>
    constructor(p: {
        buildContext: gt.IBuildContext
        builder: gt.IDictionaryBuilder<t.FunctionCallArgurment>
    }) {
        this.buildContext = p.buildContext
        this.builder = p.builder
    }
    public FunctionCallArgurment(
        key: string,
        par__type: (builder: ArgumentTypeBuilder) => t.ArgumentType,
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
        readonly "par__type": (p: { builder: ArgumentTypeBuilder }) => t.ArgumentType
    }) {
        const var_type = _p["par__type"]({
            "builder": new ArgumentTypeBuilder({
                "buildContext": _p.buildContext,
            }),
        })
        const entry = {
            "type": var_type,
        }
        this.builder.add({ key: _p.key, entry: entry })
        return this
    }
}

export class GenericArgumentBuilder {
    private readonly buildContext: gt.IBuildContext
    private readonly builder: gt.IDictionaryBuilder<t.GenericArgument>
    constructor(p: {
        buildContext: gt.IBuildContext
        builder: gt.IDictionaryBuilder<t.GenericArgument>
    }) {
        this.buildContext = p.buildContext
        this.builder = p.builder
    }
    public GenericArgument(
        key: string,
        par__type_type: (builder: GenericReturnTypeTypeBuilder) => t.GenericReturnTypeType,
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
        readonly "par__type_type": (p: { builder: GenericReturnTypeTypeBuilder }) => t.GenericReturnTypeType
    }) {
        const var_type = create_generic_return_type({
            "buildContext": _p.buildContext,
            "par__type": _p["par__type_type"],
        })
        const entry = {
            "type": var_type,
        }
        this.builder.add({ key: _p.key, entry: entry })
        return this
    }
}

export class GenericCallbackParameterBuilder {
    private readonly buildContext: gt.IBuildContext
    private readonly builder: gt.IDictionaryBuilder<t.GenericCallbackParameter>
    constructor(p: {
        buildContext: gt.IBuildContext
        builder: gt.IDictionaryBuilder<t.GenericCallbackParameter>
    }) {
        this.buildContext = p.buildContext
        this.builder = p.builder
    }
    public GenericCallbackParameter(
        key: string,
        par__type_type: (builder: GenericReturnTypeTypeBuilder) => t.GenericReturnTypeType,
    ) {
        const x = this.x_GenericCallbackParameter({
            "buildContext": this.buildContext,
            "key": key,
            "par__type_type": p => par__type_type(p.builder),
        })
        return x
    }
    private x_GenericCallbackParameter(_p: {
        readonly "buildContext": gt.IBuildContext
        readonly "key": string
        readonly "par__type_type": (p: { builder: GenericReturnTypeTypeBuilder }) => t.GenericReturnTypeType
    }) {
        const var_type = create_generic_return_type({
            "buildContext": _p.buildContext,
            "par__type": _p["par__type_type"],
        })
        const entry = {
            "type": var_type,
        }
        this.builder.add({ key: _p.key, entry: entry })
        return this
    }
}

export class GenericCallbackTypeBuilder {
    private readonly buildContext: gt.IBuildContext
    constructor(p: {
        buildContext: gt.IBuildContext
    }) {
        this.buildContext = p.buildContext
    }
    public function(
        par__guaranteed: (builder: IsCallbackReturnValueGuaranteedBuilder) => t.IsCallbackReturnValueGuaranteed,
        par__type_type: (builder: GenericInTypeTypeBuilder) => t.GenericInTypeType,
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
        readonly "par__guaranteed": (p: { builder: IsCallbackReturnValueGuaranteedBuilder }) => t.IsCallbackReturnValueGuaranteed
        readonly "par__type_type": (p: { builder: GenericInTypeTypeBuilder }) => t.GenericInTypeType
    }) {
        const var_guaranteed = _p["par__guaranteed"]({
            "builder": new IsCallbackReturnValueGuaranteedBuilder({
                "buildContext": _p.buildContext,
            }),
        })
        const var_type = create_generic_in_type({
            "buildContext": _p.buildContext,
            "par__type": _p["par__type_type"],
        })
        const sg = ((): t.GenericCallbackType => { return [ "function", {
            "guaranteed": var_guaranteed,
            "type": var_type,
        } ]})()
        return sg
    }
    private x_procedure(_p: {
        readonly "buildContext": gt.IBuildContext
    }) {
        const sg = ((): t.GenericCallbackType => { return [ "procedure", {
        } ]})()
        return sg
    }
}

export class GenericFunctionTypeBuilder {
    private readonly buildContext: gt.IBuildContext
    constructor(p: {
        buildContext: gt.IBuildContext
    }) {
        this.buildContext = p.buildContext
    }
    public function(
        par__guaranteed: (builder: IsGenericReturnValueGuaranteedBuilder) => t.IsGenericReturnValueGuaranteed,
        par__type_type: (builder: GenericReturnTypeTypeBuilder) => t.GenericReturnTypeType,
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
        readonly "par__guaranteed": (p: { builder: IsGenericReturnValueGuaranteedBuilder }) => t.IsGenericReturnValueGuaranteed
        readonly "par__type_type": (p: { builder: GenericReturnTypeTypeBuilder }) => t.GenericReturnTypeType
    }) {
        const var_guaranteed = _p["par__guaranteed"]({
            "builder": new IsGenericReturnValueGuaranteedBuilder({
                "buildContext": _p.buildContext,
            }),
        })
        const var_type = create_generic_return_type({
            "buildContext": _p.buildContext,
            "par__type": _p["par__type_type"],
        })
        const sg = ((): t.GenericFunctionType => { return [ "function", {
            "guaranteed": var_guaranteed,
            "type": var_type,
        } ]})()
        return sg
    }
    private x_procedure(_p: {
        readonly "buildContext": gt.IBuildContext
    }) {
        const sg = ((): t.GenericFunctionType => { return [ "procedure", {
        } ]})()
        return sg
    }
}

export class GenericInterfaceDeclarationBuilder {
    private readonly buildContext: gt.IBuildContext
    private readonly builder: gt.IDictionaryBuilder<t.GenericInterfaceDeclaration>
    constructor(p: {
        buildContext: gt.IBuildContext
        builder: gt.IDictionaryBuilder<t.GenericInterfaceDeclaration>
    }) {
        this.buildContext = p.buildContext
        this.builder = p.builder
    }
    public GenericInterfaceDeclaration(
        key: string,
        par__parameters: (builder: GenericInterfaceParameterBuilder) => void,
        par__base_interfaces: (builder: BaseInterfaceBuilder) => void,
        par__methods: (builder: GenericInterfaceMethodBuilder) => void,
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
        readonly "par__base interfaces": (p: { builder: BaseInterfaceBuilder }) => void
        readonly "par__methods": (p: { builder: GenericInterfaceMethodBuilder }) => void
        readonly "par__parameters": (p: { builder: GenericInterfaceParameterBuilder }) => void
    }) {
        const var_parameters = _p.buildContext.createDictionary<t.GenericInterfaceParameter>({
            "callback": _cp => {
                const x = new GenericInterfaceParameterBuilder({
                    "buildContext": _p.buildContext,
                    "builder": _cp.builder,
                })
                const y = _p["par__parameters"]({
                    "builder": x,
                })
                return y
            },
            "reporter": gt.createSimpleConflictingEntryReporter({
                "reportError": _errorStr => {},
                "typeInfo": "GenericInterfaceParameter",
            }),
        })
        const var_base_interfaces = _p.buildContext.createDictionary<t.BaseInterface>({
            "callback": _cp => {
                const x = new BaseInterfaceBuilder({
                    "buildContext": _p.buildContext,
                    "builder": _cp.builder,
                })
                const y = _p["par__base interfaces"]({
                    "builder": x,
                })
                return y
            },
            "reporter": gt.createSimpleConflictingEntryReporter({
                "reportError": _errorStr => {},
                "typeInfo": "BaseInterface",
            }),
        })
        const var_methods = _p.buildContext.createDictionary<t.GenericInterfaceMethod>({
            "callback": _cp => {
                const x = new GenericInterfaceMethodBuilder({
                    "buildContext": _p.buildContext,
                    "builder": _cp.builder,
                })
                const y = _p["par__methods"]({
                    "builder": x,
                })
                return y
            },
            "reporter": gt.createSimpleConflictingEntryReporter({
                "reportError": _errorStr => {},
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

export class GenericInterfaceMethodBuilder {
    private readonly buildContext: gt.IBuildContext
    private readonly builder: gt.IDictionaryBuilder<t.GenericInterfaceMethod>
    constructor(p: {
        buildContext: gt.IBuildContext
        builder: gt.IDictionaryBuilder<t.GenericInterfaceMethod>
    }) {
        this.buildContext = p.buildContext
        this.builder = p.builder
    }
    public GenericInterfaceMethod(
        key: string,
        par__type_parameters: (builder: GenericMethodTypeParameterBuilder) => void,
        par__parameters: (builder: GenericMethodParameterBuilder) => void,
        par__type: (builder: GenericFunctionTypeBuilder) => t.GenericFunctionType,
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
        readonly "par__parameters": (p: { builder: GenericMethodParameterBuilder }) => void
        readonly "par__type": (p: { builder: GenericFunctionTypeBuilder }) => t.GenericFunctionType
        readonly "par__type parameters": (p: { builder: GenericMethodTypeParameterBuilder }) => void
    }) {
        const var_type_parameters = _p.buildContext.createDictionary<t.GenericMethodTypeParameter>({
            "callback": _cp => {
                const x = new GenericMethodTypeParameterBuilder({
                    "buildContext": _p.buildContext,
                    "builder": _cp.builder,
                })
                const y = _p["par__type parameters"]({
                    "builder": x,
                })
                return y
            },
            "reporter": gt.createSimpleConflictingEntryReporter({
                "reportError": _errorStr => {},
                "typeInfo": "GenericMethodTypeParameter",
            }),
        })
        const var_parameters = _p.buildContext.createDictionary<t.GenericMethodParameter>({
            "callback": _cp => {
                const x = new GenericMethodParameterBuilder({
                    "buildContext": _p.buildContext,
                    "builder": _cp.builder,
                })
                const y = _p["par__parameters"]({
                    "builder": x,
                })
                return y
            },
            "reporter": gt.createSimpleConflictingEntryReporter({
                "reportError": _errorStr => {},
                "typeInfo": "GenericMethodParameter",
            }),
        })
        const var_type = _p["par__type"]({
            "builder": new GenericFunctionTypeBuilder({
                "buildContext": _p.buildContext,
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

export class GenericInterfaceParameterBuilder {
    private readonly buildContext: gt.IBuildContext
    private readonly builder: gt.IDictionaryBuilder<t.GenericInterfaceParameter>
    constructor(p: {
        buildContext: gt.IBuildContext
        builder: gt.IDictionaryBuilder<t.GenericInterfaceParameter>
    }) {
        this.buildContext = p.buildContext
        this.builder = p.builder
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

export class GenericInTypeTypeBuilder {
    private readonly buildContext: gt.IBuildContext
    constructor(p: {
        buildContext: gt.IBuildContext
    }) {
        this.buildContext = p.buildContext
    }
    public callback(
        par__parameters: (builder: GenericCallbackParameterBuilder) => void,
        par__type: (builder: GenericCallbackTypeBuilder) => t.GenericCallbackType,
    ) {
        const x = this.x_callback({
            "buildContext": this.buildContext,
            "par__parameters": p => par__parameters(p.builder),
            "par__type": p => par__type(p.builder),
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
    public string(
    ) {
        const x = this.x_string({
            "buildContext": this.buildContext,
        })
        return x
    }
    private x_callback(_p: {
        readonly "buildContext": gt.IBuildContext
        readonly "par__parameters": (p: { builder: GenericCallbackParameterBuilder }) => void
        readonly "par__type": (p: { builder: GenericCallbackTypeBuilder }) => t.GenericCallbackType
    }) {
        const var_parameters = _p.buildContext.createDictionary<t.GenericCallbackParameter>({
            "callback": _cp => {
                const x = new GenericCallbackParameterBuilder({
                    "buildContext": _p.buildContext,
                    "builder": _cp.builder,
                })
                const y = _p["par__parameters"]({
                    "builder": x,
                })
                return y
            },
            "reporter": gt.createSimpleConflictingEntryReporter({
                "reportError": _errorStr => {},
                "typeInfo": "GenericCallbackParameter",
            }),
        })
        const var_type = _p["par__type"]({
            "builder": new GenericCallbackTypeBuilder({
                "buildContext": _p.buildContext,
            }),
        })
        const sg = ((): t.GenericInTypeType => { return [ "callback", {
            "parameters": var_parameters,
            "type": var_type,
        } ]})()
        return sg
    }
    private x_method_type_parameter(_p: {
        readonly "buildContext": gt.IBuildContext
        readonly "par__type parameter": string
    }) {
        const var_type_parameter = _p["par__type parameter"]
        const sg = ((): t.GenericInTypeType => { return [ "method type parameter", {
            "type parameter": var_type_parameter,
        } ]})()
        return sg
    }
    private x_string(_p: {
        readonly "buildContext": gt.IBuildContext
    }) {
        const sg = ((): t.GenericInTypeType => { return [ "string", {
        } ]})()
        return sg
    }
}

export class GenericMethodParameterBuilder {
    private readonly buildContext: gt.IBuildContext
    private readonly builder: gt.IDictionaryBuilder<t.GenericMethodParameter>
    constructor(p: {
        buildContext: gt.IBuildContext
        builder: gt.IDictionaryBuilder<t.GenericMethodParameter>
    }) {
        this.buildContext = p.buildContext
        this.builder = p.builder
    }
    public GenericMethodParameter(
        key: string,
        par__type_type: (builder: GenericInTypeTypeBuilder) => t.GenericInTypeType,
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
        readonly "par__type_type": (p: { builder: GenericInTypeTypeBuilder }) => t.GenericInTypeType
    }) {
        const var_type = create_generic_in_type({
            "buildContext": _p.buildContext,
            "par__type": _p["par__type_type"],
        })
        const entry = {
            "type": var_type,
        }
        this.builder.add({ key: _p.key, entry: entry })
        return this
    }
}

export class GenericMethodTypeParameterBuilder {
    private readonly buildContext: gt.IBuildContext
    private readonly builder: gt.IDictionaryBuilder<t.GenericMethodTypeParameter>
    constructor(p: {
        buildContext: gt.IBuildContext
        builder: gt.IDictionaryBuilder<t.GenericMethodTypeParameter>
    }) {
        this.buildContext = p.buildContext
        this.builder = p.builder
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

export class GenericReturnTypeTypeBuilder {
    private readonly buildContext: gt.IBuildContext
    constructor(p: {
        buildContext: gt.IBuildContext
    }) {
        this.buildContext = p.buildContext
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
        par__interface_type_arguments: (builder: GenericArgumentBuilder) => void,
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
        const sg = ((): t.GenericReturnTypeType => { return [ "interface parameter", {
            "parameter": var_parameter,
        } ]})()
        return sg
    }
    private x_method_type_parameter(_p: {
        readonly "buildContext": gt.IBuildContext
        readonly "par__type parameter": string
    }) {
        const var_type_parameter = _p["par__type parameter"]
        const sg = ((): t.GenericReturnTypeType => { return [ "method type parameter", {
            "type parameter": var_type_parameter,
        } ]})()
        return sg
    }
    private x_reference_to_generic_declaration(_p: {
        readonly "buildContext": gt.IBuildContext
        readonly "par__interface_interface": string
        readonly "par__interface_type arguments": (p: { builder: GenericArgumentBuilder }) => void
    }) {
        const var_interface = create_generic_interface_reference({
            "buildContext": _p.buildContext,
            "par__interface": _p["par__interface_interface"],
            "par__type arguments": _p["par__interface_type arguments"],
        })
        const sg = ((): t.GenericReturnTypeType => { return [ "reference to generic declaration", {
            "interface": var_interface,
        } ]})()
        return sg
    }
    private x_string(_p: {
        readonly "buildContext": gt.IBuildContext
    }) {
        const sg = ((): t.GenericReturnTypeType => { return [ "string", {
        } ]})()
        return sg
    }
}

export class InitializerTypeBuilder {
    private readonly buildContext: gt.IBuildContext
    constructor(p: {
        buildContext: gt.IBuildContext
    }) {
        this.buildContext = p.buildContext
    }
    public constructor_call(
        par__path: string,
        par__arguments: (builder: ConstructorCallArgurmentBuilder) => void,
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
        par__arguments: (builder: FunctionCallArgurmentBuilder) => void,
    ) {
        const x = this.x_function_call({
            "buildContext": this.buildContext,
            "par__arguments": p => par__arguments(p.builder),
            "par__path": par__path,
        })
        return x
    }
    public object(
        par__properties: (builder: PropertyInitialierBuilder) => void,
    ) {
        const x = this.x_object({
            "buildContext": this.buildContext,
            "par__properties": p => par__properties(p.builder),
        })
        return x
    }
    public raw(
        par__rawstring: string,
    ) {
        const x = this.x_raw({
            "buildContext": this.buildContext,
            "par__rawstring": par__rawstring,
        })
        return x
    }
    public selection(
        par__rawselectionstring: string,
    ) {
        const x = this.x_selection({
            "buildContext": this.buildContext,
            "par__rawselectionstring": par__rawselectionstring,
        })
        return x
    }
    public tagged_union(
        par__type_specification: (builder: TaggedUnionTypeSpecificationBuilder) => t.TaggedUnionTypeSpecification,
        par__state: string,
        par__initializer_type: (builder: InitializerTypeBuilder) => t.InitializerType,
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
        readonly "par__arguments": (p: { builder: ConstructorCallArgurmentBuilder }) => void
        readonly "par__path": string
    }) {
        const var_path = _p["par__path"]
        const var_arguments = _p.buildContext.createDictionary<t.ConstructorCallArgurment>({
            "callback": _cp => {
                const x = new ConstructorCallArgurmentBuilder({
                    "buildContext": _p.buildContext,
                    "builder": _cp.builder,
                })
                const y = _p["par__arguments"]({
                    "builder": x,
                })
                return y
            },
            "reporter": gt.createSimpleConflictingEntryReporter({
                "reportError": _errorStr => {},
                "typeInfo": "ConstructorCallArgurment",
            }),
        })
        const sg = ((): t.InitializerType => { return [ "constructor call", {
            "arguments": var_arguments,
            "path": var_path,
        } ]})()
        return sg
    }
    private x_function_call(_p: {
        readonly "buildContext": gt.IBuildContext
        readonly "par__arguments": (p: { builder: FunctionCallArgurmentBuilder }) => void
        readonly "par__path": string
    }) {
        const var_path = _p["par__path"]
        const var_arguments = _p.buildContext.createDictionary<t.FunctionCallArgurment>({
            "callback": _cp => {
                const x = new FunctionCallArgurmentBuilder({
                    "buildContext": _p.buildContext,
                    "builder": _cp.builder,
                })
                const y = _p["par__arguments"]({
                    "builder": x,
                })
                return y
            },
            "reporter": gt.createSimpleConflictingEntryReporter({
                "reportError": _errorStr => {},
                "typeInfo": "FunctionCallArgurment",
            }),
        })
        const sg = ((): t.InitializerType => { return [ "function call", {
            "arguments": var_arguments,
            "path": var_path,
        } ]})()
        return sg
    }
    private x_object(_p: {
        readonly "buildContext": gt.IBuildContext
        readonly "par__properties": (p: { builder: PropertyInitialierBuilder }) => void
    }) {
        const var_properties = _p.buildContext.createDictionary<t.PropertyInitialier>({
            "callback": _cp => {
                const x = new PropertyInitialierBuilder({
                    "buildContext": _p.buildContext,
                    "builder": _cp.builder,
                })
                const y = _p["par__properties"]({
                    "builder": x,
                })
                return y
            },
            "reporter": gt.createSimpleConflictingEntryReporter({
                "reportError": _errorStr => {},
                "typeInfo": "PropertyInitialier",
            }),
        })
        const sg = ((): t.InitializerType => { return [ "object", {
            "properties": var_properties,
        } ]})()
        return sg
    }
    private x_raw(_p: {
        readonly "buildContext": gt.IBuildContext
        readonly "par__rawstring": string
    }) {
        const var_rawstring = _p["par__rawstring"]
        const sg = ((): t.InitializerType => { return [ "raw", {
            "rawstring": var_rawstring,
        } ]})()
        return sg
    }
    private x_selection(_p: {
        readonly "buildContext": gt.IBuildContext
        readonly "par__rawselectionstring": string
    }) {
        const var_rawselectionstring = _p["par__rawselectionstring"]
        const sg = ((): t.InitializerType => { return [ "selection", {
            "rawselectionstring": var_rawselectionstring,
        } ]})()
        return sg
    }
    private x_tagged_union(_p: {
        readonly "buildContext": gt.IBuildContext
        readonly "par__initializer_type": (p: { builder: InitializerTypeBuilder }) => t.InitializerType
        readonly "par__state": string
        readonly "par__type specification": (p: { builder: TaggedUnionTypeSpecificationBuilder }) => t.TaggedUnionTypeSpecification
    }) {
        const var_type_specification = _p["par__type specification"]({
            "builder": new TaggedUnionTypeSpecificationBuilder({
                "buildContext": _p.buildContext,
            }),
        })
        const var_state = _p["par__state"]
        const var_initializer = create_initializer({
            "buildContext": _p.buildContext,
            "par__type": _p["par__initializer_type"],
        })
        const sg = ((): t.InitializerType => { return [ "tagged union", {
            "initializer": var_initializer,
            "state": var_state,
            "type specification": var_type_specification,
        } ]})()
        return sg
    }
}

export class IsCallbackReturnValueGuaranteedBuilder {
    private readonly buildContext: gt.IBuildContext
    constructor(p: {
        buildContext: gt.IBuildContext
    }) {
        this.buildContext = p.buildContext
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
        const sg = ((): t.IsCallbackReturnValueGuaranteed => { return [ "no", {
        } ]})()
        return sg
    }
    private x_yes(_p: {
        readonly "buildContext": gt.IBuildContext
    }) {
        const sg = ((): t.IsCallbackReturnValueGuaranteed => { return [ "yes", {
        } ]})()
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

export class IsGenericReturnValueGuaranteedBuilder {
    private readonly buildContext: gt.IBuildContext
    constructor(p: {
        buildContext: gt.IBuildContext
    }) {
        this.buildContext = p.buildContext
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
        const sg = ((): t.IsGenericReturnValueGuaranteed => { return [ "no", {
        } ]})()
        return sg
    }
    private x_yes(_p: {
        readonly "buildContext": gt.IBuildContext
    }) {
        const sg = ((): t.IsGenericReturnValueGuaranteed => { return [ "yes", {
        } ]})()
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

export class MethodBuilder {
    private readonly buildContext: gt.IBuildContext
    private readonly builder: gt.IDictionaryBuilder<t.Method>
    constructor(p: {
        buildContext: gt.IBuildContext
        builder: gt.IDictionaryBuilder<t.Method>
    }) {
        this.buildContext = p.buildContext
        this.builder = p.builder
    }
    public Method(
        key: string,
        par__specification_access: (builder: FunctionAccessBuilder) => t.FunctionAccess,
        par__specification_block_variables: (builder: VariableBuilder) => void,
        par__specification_block_statements: (builder: StatementBuilder) => void,
    ) {
        const x = this.x_Method({
            "buildContext": this.buildContext,
            "key": key,
            "par__specification_access": p => par__specification_access(p.builder),
            "par__specification_block_statements": p => par__specification_block_statements(p.builder),
            "par__specification_block_variables": p => par__specification_block_variables(p.builder),
        })
        return x
    }
    private x_Method(_p: {
        readonly "buildContext": gt.IBuildContext
        readonly "key": string
        readonly "par__specification_access": (p: { builder: FunctionAccessBuilder }) => t.FunctionAccess
        readonly "par__specification_block_statements": (p: { builder: StatementBuilder }) => void
        readonly "par__specification_block_variables": (p: { builder: VariableBuilder }) => void
    }) {
        const var_specification = create_function_specification({
            "buildContext": _p.buildContext,
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

export class ObjectPropertyBuilder {
    private readonly buildContext: gt.IBuildContext
    private readonly builder: gt.IDictionaryBuilder<t.ObjectProperty>
    constructor(p: {
        buildContext: gt.IBuildContext
        builder: gt.IDictionaryBuilder<t.ObjectProperty>
    }) {
        this.buildContext = p.buildContext
        this.builder = p.builder
    }
    public ObjectProperty(
        key: string,
        par__type: (builder: PropertyTypeBuilder) => t.PropertyType,
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
        readonly "par__type": (p: { builder: PropertyTypeBuilder }) => t.PropertyType
    }) {
        const var_type = _p["par__type"]({
            "builder": new PropertyTypeBuilder({
                "buildContext": _p.buildContext,
            }),
        })
        const entry = {
            "type": var_type,
        }
        this.builder.add({ key: _p.key, entry: entry })
        return this
    }
}

export class PrivateParameterBuilder {
    private readonly buildContext: gt.IBuildContext
    private readonly builder: gt.IDictionaryBuilder<t.PrivateParameter>
    constructor(p: {
        buildContext: gt.IBuildContext
        builder: gt.IDictionaryBuilder<t.PrivateParameter>
    }) {
        this.buildContext = p.buildContext
        this.builder = p.builder
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

export class PropertyInitialierBuilder {
    private readonly buildContext: gt.IBuildContext
    private readonly builder: gt.IDictionaryBuilder<t.PropertyInitialier>
    constructor(p: {
        buildContext: gt.IBuildContext
        builder: gt.IDictionaryBuilder<t.PropertyInitialier>
    }) {
        this.buildContext = p.buildContext
        this.builder = p.builder
    }
    public PropertyInitialier(
        key: string,
        par__initializer_type: (builder: InitializerTypeBuilder) => t.InitializerType,
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
        readonly "par__initializer_type": (p: { builder: InitializerTypeBuilder }) => t.InitializerType
    }) {
        const var_initializer = create_initializer({
            "buildContext": _p.buildContext,
            "par__type": _p["par__initializer_type"],
        })
        const entry = {
            "initializer": var_initializer,
        }
        this.builder.add({ key: _p.key, entry: entry })
        return this
    }
}

export class PropertyInitializationBuilder {
    private readonly buildContext: gt.IBuildContext
    constructor(p: {
        buildContext: gt.IBuildContext
    }) {
        this.buildContext = p.buildContext
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
        const sg = ((): t.PropertyInitialization => { return [ "default", {
            "initializer": var_initializer,
        } ]})()
        return sg
    }
    private x_parametrized(_p: {
        readonly "buildContext": gt.IBuildContext
        readonly "par__type": string
    }) {
        const var_type = _p["par__type"]
        const sg = ((): t.PropertyInitialization => { return [ "parametrized", {
            "type": var_type,
        } ]})()
        return sg
    }
}

export class PropertyTypeBuilder {
    private readonly buildContext: gt.IBuildContext
    constructor(p: {
        buildContext: gt.IBuildContext
    }) {
        this.buildContext = p.buildContext
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
    private x_raw(_p: {
        readonly "buildContext": gt.IBuildContext
        readonly "par__raw": string
    }) {
        const var_raw = _p["par__raw"]
        const sg = ((): t.PropertyType => { return [ "raw", {
            "raw": var_raw,
        } ]})()
        return sg
    }
    private x_reference(_p: {
        readonly "buildContext": gt.IBuildContext
        readonly "par__referenced type": string
    }) {
        const var_referenced_type = _p["par__referenced type"]
        const sg = ((): t.PropertyType => { return [ "reference", {
            "referenced type": var_referenced_type,
        } ]})()
        return sg
    }
    private x_string(_p: {
        readonly "buildContext": gt.IBuildContext
    }) {
        const sg = ((): t.PropertyType => { return [ "string", {
        } ]})()
        return sg
    }
}

export class PublicParameterBuilder {
    private readonly buildContext: gt.IBuildContext
    private readonly builder: gt.IDictionaryBuilder<t.PublicParameter>
    constructor(p: {
        buildContext: gt.IBuildContext
        builder: gt.IDictionaryBuilder<t.PublicParameter>
    }) {
        this.buildContext = p.buildContext
        this.builder = p.builder
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

export class StatementBuilder {
    private readonly buildContext: gt.IBuildContext
    private readonly builder: gt.IListBuilder<t.Statement>
    constructor(p: {
        buildContext: gt.IBuildContext
        builder: gt.IListBuilder<t.Statement>
    }) {
        this.buildContext = p.buildContext
        this.builder = p.builder
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

export class TaggedUnionAlternativeBuilder {
    private readonly buildContext: gt.IBuildContext
    private readonly builder: gt.IDictionaryBuilder<t.TaggedUnionAlternative>
    constructor(p: {
        buildContext: gt.IBuildContext
        builder: gt.IDictionaryBuilder<t.TaggedUnionAlternative>
    }) {
        this.buildContext = p.buildContext
        this.builder = p.builder
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

export class TaggedUnionTypeSpecificationBuilder {
    private readonly buildContext: gt.IBuildContext
    constructor(p: {
        buildContext: gt.IBuildContext
    }) {
        this.buildContext = p.buildContext
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
        const sg = ((): t.TaggedUnionTypeSpecification => { return [ "derived", {
        } ]})()
        return sg
    }
    private x_reference(_p: {
        readonly "buildContext": gt.IBuildContext
        readonly "par__type": string
    }) {
        const var_type = _p["par__type"]
        const sg = ((): t.TaggedUnionTypeSpecification => { return [ "reference", {
            "type": var_type,
        } ]})()
        return sg
    }
}

export class TypeBuilder {
    private readonly buildContext: gt.IBuildContext
    private readonly builder: gt.IDictionaryBuilder<t.Type>
    constructor(p: {
        buildContext: gt.IBuildContext
        builder: gt.IDictionaryBuilder<t.Type>
    }) {
        this.buildContext = p.buildContext
        this.builder = p.builder
    }
    public Type(
        key: string,
        par__type: (builder: TypeTypeBuilder) => t.TypeType,
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
        readonly "par__type": (p: { builder: TypeTypeBuilder }) => t.TypeType
    }) {
        const var_type = _p["par__type"]({
            "builder": new TypeTypeBuilder({
                "buildContext": _p.buildContext,
            }),
        })
        const entry = {
            "type": var_type,
        }
        this.builder.add({ key: _p.key, entry: entry })
        return this
    }
}

export class TypeTypeBuilder {
    private readonly buildContext: gt.IBuildContext
    constructor(p: {
        buildContext: gt.IBuildContext
    }) {
        this.buildContext = p.buildContext
    }
    public object(
        par__properties: (builder: ObjectPropertyBuilder) => void,
    ) {
        const x = this.x_object({
            "buildContext": this.buildContext,
            "par__properties": p => par__properties(p.builder),
        })
        return x
    }
    public tagged_union(
        par__alternatives: (builder: TaggedUnionAlternativeBuilder) => void,
    ) {
        const x = this.x_tagged_union({
            "buildContext": this.buildContext,
            "par__alternatives": p => par__alternatives(p.builder),
        })
        return x
    }
    private x_object(_p: {
        readonly "buildContext": gt.IBuildContext
        readonly "par__properties": (p: { builder: ObjectPropertyBuilder }) => void
    }) {
        const var_properties = _p.buildContext.createDictionary<t.ObjectProperty>({
            "callback": _cp => {
                const x = new ObjectPropertyBuilder({
                    "buildContext": _p.buildContext,
                    "builder": _cp.builder,
                })
                const y = _p["par__properties"]({
                    "builder": x,
                })
                return y
            },
            "reporter": gt.createSimpleConflictingEntryReporter({
                "reportError": _errorStr => {},
                "typeInfo": "ObjectProperty",
            }),
        })
        const sg = ((): t.TypeType => { return [ "object", {
            "properties": var_properties,
        } ]})()
        return sg
    }
    private x_tagged_union(_p: {
        readonly "buildContext": gt.IBuildContext
        readonly "par__alternatives": (p: { builder: TaggedUnionAlternativeBuilder }) => void
    }) {
        const var_alternatives = _p.buildContext.createDictionary<t.TaggedUnionAlternative>({
            "callback": _cp => {
                const x = new TaggedUnionAlternativeBuilder({
                    "buildContext": _p.buildContext,
                    "builder": _cp.builder,
                })
                const y = _p["par__alternatives"]({
                    "builder": x,
                })
                return y
            },
            "reporter": gt.createSimpleConflictingEntryReporter({
                "reportError": _errorStr => {},
                "typeInfo": "TaggedUnionAlternative",
            }),
        })
        const sg = ((): t.TypeType => { return [ "tagged union", {
            "alternatives": var_alternatives,
        } ]})()
        return sg
    }
}

export class VariableBuilder {
    private readonly buildContext: gt.IBuildContext
    private readonly builder: gt.IDictionaryBuilder<t.Variable>
    constructor(p: {
        buildContext: gt.IBuildContext
        builder: gt.IDictionaryBuilder<t.Variable>
    }) {
        this.buildContext = p.buildContext
        this.builder = p.builder
    }
    public Variable(
        key: string,
        par__initializer_type: (builder: InitializerTypeBuilder) => t.InitializerType,
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
        readonly "par__initializer_type": (p: { builder: InitializerTypeBuilder }) => t.InitializerType
    }) {
        const var_initializer = create_initializer({
            "buildContext": _p.buildContext,
            "par__type": _p["par__initializer_type"],
        })
        const entry = {
            "initializer": var_initializer,
        }
        this.builder.add({ key: _p.key, entry: entry })
        return this
    }
}
