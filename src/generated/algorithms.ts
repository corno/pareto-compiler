// tslint:disable: max-classes-per-file object-literal-key-quotes variable-name no-string-literal
import * as lf from "lingua-franca-building"
import * as T from "./types"

export class VariableBuilder {
    //@ts-ignore
    private readonly _buildContext: lf.IBuildContext
    private readonly imp: lf.IDictionaryBuilder<T.Variable>
    constructor(
        buildContext: lf.IBuildContext,
        imp: lf.IDictionaryBuilder<T.Variable>,
    ) {
        this._buildContext = buildContext
        this.imp = imp
    }
    public Variable(
        key: string,
        par__initializer_type: (builder: InitializerTypeBuilder) => T.InitializerType,
    ) {
        const var_initializer = create_initializer(
            this._buildContext,
            par__initializer_type,
        )
        const entry: T.Variable = {
            "initializer": var_initializer,
        }
        this.imp.add({ key: key, entry: entry })
        return this
    }
}

export class StatementBuilder {
    //@ts-ignore
    private readonly _buildContext: lf.IBuildContext
    private readonly imp: lf.IListBuilder<T.Statement>
    constructor(
        buildContext: lf.IBuildContext,
        imp: lf.IListBuilder<T.Statement>,
    ) {
        this._buildContext = buildContext
        this.imp = imp
    }
    public Statement(
        par__raw_value: string,
    ) {
        const var_raw_value = par__raw_value
        const entry: T.Statement = {
            "raw value": var_raw_value,
        }
        this.imp.push({ element: entry })
        return this
    }
}

function create_block(
    _buildContext: lf.IBuildContext,
    par__variables: (builder: VariableBuilder) => void,
    par__statements: (builder: StatementBuilder) => void,
): T.Block {
    const var_variables = (() => {
        const dict = _buildContext.createOrderedDictionary<T.Variable, T.VariableOrderings>({
            reporter: lf.createSimpleConflictingEntryReporter({ typeInfo: "Variable", reportError: _errorStr => {} }),
            callback: cp => par__variables(new VariableBuilder(
                _buildContext,
                cp.builder,
            )),
            createOrderings: x => ({
                dependencies: x.orderingCreator.createBasedOnInsertionOrder({}),
            }),
        })
        return dict
    })()
    const var_statements = _buildContext.createList<T.Statement>({
        callback: intermediateList => par__statements(new StatementBuilder(
            _buildContext,
            intermediateList.builder,
        )),
    })
    return {
        "variables": var_variables,
        "statements": var_statements,
    }
}

export class PrivateParameterBuilder {
    //@ts-ignore
    private readonly _buildContext: lf.IBuildContext
    private readonly imp: lf.IDictionaryBuilder<T.PrivateParameter>
    constructor(
        buildContext: lf.IBuildContext,
        imp: lf.IDictionaryBuilder<T.PrivateParameter>,
    ) {
        this._buildContext = buildContext
        this.imp = imp
    }
    public PrivateParameter(
        key: string,
        par__type: string,
    ) {
        const var_type = par__type
        const entry: T.PrivateParameter = {
            "type": var_type,
        }
        this.imp.add({ key: key, entry: entry })
        return this
    }
}

export class PublicParameterBuilder {
    //@ts-ignore
    private readonly _buildContext: lf.IBuildContext
    private readonly imp: lf.IDictionaryBuilder<T.PublicParameter>
    constructor(
        buildContext: lf.IBuildContext,
        imp: lf.IDictionaryBuilder<T.PublicParameter>,
    ) {
        this._buildContext = buildContext
        this.imp = imp
    }
    public PublicParameter(
        key: string,
        par__type: string,
    ) {
        const var_type = par__type
        const entry: T.PublicParameter = {
            "type": var_type,
        }
        this.imp.add({ key: key, entry: entry })
        return this
    }
}

export class FunctionAccessBuilder {
    //@ts-ignore
    private readonly _buildContext: lf.IBuildContext
    constructor(
        buildContext: lf.IBuildContext,
    ) {
        this._buildContext = buildContext
    }
    public private(
        par__parameters: (builder: PrivateParameterBuilder) => void,
    ): T.FunctionAccess {
        const var_parameters = this._buildContext.createDictionary<T.PrivateParameter>({
            reporter: lf.createSimpleConflictingEntryReporter({ typeInfo: "PrivateParameter", reportError: _errorStr => {} }),
            callback: cp => par__parameters(new PrivateParameterBuilder(
                this._buildContext,
                cp.builder,
            )),
        })
        return ["private", {
            "parameters": var_parameters,
        }]
    }
    public public(
        par__parameters: (builder: PublicParameterBuilder) => void,
    ): T.FunctionAccess {
        const var_parameters = (() => {
            const dict = this._buildContext.createOrderedDictionary<T.PublicParameter, T.PublicParameterOrderings>({
                reporter: lf.createSimpleConflictingEntryReporter({ typeInfo: "PublicParameter", reportError: _errorStr => {} }),
                callback: cp => par__parameters(new PublicParameterBuilder(
                    this._buildContext,
                    cp.builder,
                )),
                createOrderings: x => ({
                    dependencies: x.orderingCreator.createBasedOnInsertionOrder({}),
                }),
            })
            return dict
        })()
        return ["public", {
            "parameters": var_parameters,
        }]
    }
}

function create_function_specification(
    _buildContext: lf.IBuildContext,
    par__access: (builder: FunctionAccessBuilder) => T.FunctionAccess,
    par__block_variables: (builder: VariableBuilder) => void,
    par__block_statements: (builder: StatementBuilder) => void,
): T.FunctionSpecification {
    const var_access = par__access(new FunctionAccessBuilder(
        _buildContext,
    ))
    const var_block = create_block(
        _buildContext,
        par__block_variables,
        par__block_statements,
    )
    return {
        "access": var_access,
        "block": var_block,
    }
}

export class GenericCallbackParameterBuilder {
    //@ts-ignore
    private readonly _buildContext: lf.IBuildContext
    private readonly imp: lf.IDictionaryBuilder<T.GenericCallbackParameter>
    constructor(
        buildContext: lf.IBuildContext,
        imp: lf.IDictionaryBuilder<T.GenericCallbackParameter>,
    ) {
        this._buildContext = buildContext
        this.imp = imp
    }
    public GenericCallbackParameter(
        key: string,
        par__type_type: (builder: GenericReturnTypeTypeBuilder) => T.GenericReturnTypeType,
    ) {
        const var_type = create_generic_return_type(
            this._buildContext,
            par__type_type,
        )
        const entry: T.GenericCallbackParameter = {
            "type": var_type,
        }
        this.imp.add({ key: key, entry: entry })
        return this
    }
}

export class IsCallbackReturnValueGuaranteedBuilder {
    //@ts-ignore
    private readonly _buildContext: lf.IBuildContext
    constructor(
        buildContext: lf.IBuildContext,
    ) {
        this._buildContext = buildContext
    }
    public no(
    ): T.IsCallbackReturnValueGuaranteed {
        return ["no", {
        }]
    }
    public yes(
    ): T.IsCallbackReturnValueGuaranteed {
        return ["yes", {
        }]
    }
}

export class GenericCallbackTypeBuilder {
    //@ts-ignore
    private readonly _buildContext: lf.IBuildContext
    constructor(
        buildContext: lf.IBuildContext,
    ) {
        this._buildContext = buildContext
    }
    public function(
        par__guaranteed: (builder: IsCallbackReturnValueGuaranteedBuilder) => T.IsCallbackReturnValueGuaranteed,
        par__type_type: (builder: GenericInTypeTypeBuilder) => T.GenericInTypeType,
    ): T.GenericCallbackType {
        const var_guaranteed = par__guaranteed(new IsCallbackReturnValueGuaranteedBuilder(
            this._buildContext,
        ))
        const var_type = create_generic_in_type(
            this._buildContext,
            par__type_type,
        )
        return ["function", {
            "guaranteed": var_guaranteed,
            "type": var_type,
        }]
    }
    public procedure(
    ): T.GenericCallbackType {
        return ["procedure", {
        }]
    }
}

export class GenericInTypeTypeBuilder {
    //@ts-ignore
    private readonly _buildContext: lf.IBuildContext
    constructor(
        buildContext: lf.IBuildContext,
    ) {
        this._buildContext = buildContext
    }
    public callback(
        par__parameters: (builder: GenericCallbackParameterBuilder) => void,
        par__type: (builder: GenericCallbackTypeBuilder) => T.GenericCallbackType,
    ): T.GenericInTypeType {
        const var_parameters = this._buildContext.createDictionary<T.GenericCallbackParameter>({
            reporter: lf.createSimpleConflictingEntryReporter({ typeInfo: "GenericCallbackParameter", reportError: _errorStr => {} }),
            callback: cp => par__parameters(new GenericCallbackParameterBuilder(
                this._buildContext,
                cp.builder,
            )),
        })
        const var_type = par__type(new GenericCallbackTypeBuilder(
            this._buildContext,
        ))
        return ["callback", {
            "parameters": var_parameters,
            "type": var_type,
        }]
    }
    public method_type_parameter(
        par__type_parameter: string,
    ): T.GenericInTypeType {
        const var_type_parameter = par__type_parameter
        return ["method type parameter", {
            "type parameter": var_type_parameter,
        }]
    }
    public string(
    ): T.GenericInTypeType {
        return ["string", {
        }]
    }
}

function create_generic_in_type(
    _buildContext: lf.IBuildContext,
    par__type: (builder: GenericInTypeTypeBuilder) => T.GenericInTypeType,
): T.GenericInType {
    const var_type = par__type(new GenericInTypeTypeBuilder(
        _buildContext,
    ))
    return {
        "type": var_type,
    }
}

export class GenericArgumentBuilder {
    //@ts-ignore
    private readonly _buildContext: lf.IBuildContext
    private readonly imp: lf.IDictionaryBuilder<T.GenericArgument>
    constructor(
        buildContext: lf.IBuildContext,
        imp: lf.IDictionaryBuilder<T.GenericArgument>,
    ) {
        this._buildContext = buildContext
        this.imp = imp
    }
    public GenericArgument(
        key: string,
        par__type_type: (builder: GenericReturnTypeTypeBuilder) => T.GenericReturnTypeType,
    ) {
        const var_type = create_generic_return_type(
            this._buildContext,
            par__type_type,
        )
        const entry: T.GenericArgument = {
            "type": var_type,
        }
        this.imp.add({ key: key, entry: entry })
        return this
    }
}

function create_generic_interface_reference(
    _buildContext: lf.IBuildContext,
    par__interface: string,
    par__type_arguments: (builder: GenericArgumentBuilder) => void,
): T.GenericInterfaceReference {
    const var_interface = par__interface
    const var_type_arguments = _buildContext.createDictionary<T.GenericArgument>({
        reporter: lf.createSimpleConflictingEntryReporter({ typeInfo: "GenericArgument", reportError: _errorStr => {} }),
        callback: cp => par__type_arguments(new GenericArgumentBuilder(
            _buildContext,
            cp.builder,
        )),
    })
    return {
        "interface": var_interface,
        "type arguments": var_type_arguments,
    }
}

export class GenericReturnTypeTypeBuilder {
    //@ts-ignore
    private readonly _buildContext: lf.IBuildContext
    constructor(
        buildContext: lf.IBuildContext,
    ) {
        this._buildContext = buildContext
    }
    public interface_parameter(
        par__parameter: string,
    ): T.GenericReturnTypeType {
        const var_parameter = par__parameter
        return ["interface parameter", {
            "parameter": var_parameter,
        }]
    }
    public method_type_parameter(
        par__type_parameter: string,
    ): T.GenericReturnTypeType {
        const var_type_parameter = par__type_parameter
        return ["method type parameter", {
            "type parameter": var_type_parameter,
        }]
    }
    public reference_to_generic_declaration(
        par__interface_interface: string,
        par__interface_type_arguments: (builder: GenericArgumentBuilder) => void,
    ): T.GenericReturnTypeType {
        const var_interface = create_generic_interface_reference(
            this._buildContext,
            par__interface_interface,
            par__interface_type_arguments,
        )
        return ["reference to generic declaration", {
            "interface": var_interface,
        }]
    }
    public string(
    ): T.GenericReturnTypeType {
        return ["string", {
        }]
    }
}

function create_generic_return_type(
    _buildContext: lf.IBuildContext,
    par__type: (builder: GenericReturnTypeTypeBuilder) => T.GenericReturnTypeType,
): T.GenericReturnType {
    const var_type = par__type(new GenericReturnTypeTypeBuilder(
        _buildContext,
    ))
    return {
        "type": var_type,
    }
}

export class ConstructorCallArgurmentBuilder {
    //@ts-ignore
    private readonly _buildContext: lf.IBuildContext
    private readonly imp: lf.IDictionaryBuilder<T.ConstructorCallArgurment>
    constructor(
        buildContext: lf.IBuildContext,
        imp: lf.IDictionaryBuilder<T.ConstructorCallArgurment>,
    ) {
        this._buildContext = buildContext
        this.imp = imp
    }
    public ConstructorCallArgurment(
        key: string,
        par__initializer_type: (builder: InitializerTypeBuilder) => T.InitializerType,
    ) {
        const var_initializer = create_initializer(
            this._buildContext,
            par__initializer_type,
        )
        const entry: T.ConstructorCallArgurment = {
            "initializer": var_initializer,
        }
        this.imp.add({ key: key, entry: entry })
        return this
    }
}

export class ArgumentTypeBuilder {
    //@ts-ignore
    private readonly _buildContext: lf.IBuildContext
    constructor(
        buildContext: lf.IBuildContext,
    ) {
        this._buildContext = buildContext
    }
    public callback(
        par__block_variables: (builder: VariableBuilder) => void,
        par__block_statements: (builder: StatementBuilder) => void,
    ): T.ArgumentType {
        const var_block = create_block(
            this._buildContext,
            par__block_variables,
            par__block_statements,
        )
        return ["callback", {
            "block": var_block,
        }]
    }
    public initializer(
        par__initializer_type: (builder: InitializerTypeBuilder) => T.InitializerType,
    ): T.ArgumentType {
        const var_initializer = create_initializer(
            this._buildContext,
            par__initializer_type,
        )
        return ["initializer", {
            "initializer": var_initializer,
        }]
    }
}

export class FunctionCallArgurmentBuilder {
    //@ts-ignore
    private readonly _buildContext: lf.IBuildContext
    private readonly imp: lf.IDictionaryBuilder<T.FunctionCallArgurment>
    constructor(
        buildContext: lf.IBuildContext,
        imp: lf.IDictionaryBuilder<T.FunctionCallArgurment>,
    ) {
        this._buildContext = buildContext
        this.imp = imp
    }
    public FunctionCallArgurment(
        key: string,
        par__type: (builder: ArgumentTypeBuilder) => T.ArgumentType,
    ) {
        const var_type = par__type(new ArgumentTypeBuilder(
            this._buildContext,
        ))
        const entry: T.FunctionCallArgurment = {
            "type": var_type,
        }
        this.imp.add({ key: key, entry: entry })
        return this
    }
}

export class PropertyInitialierBuilder {
    //@ts-ignore
    private readonly _buildContext: lf.IBuildContext
    private readonly imp: lf.IDictionaryBuilder<T.PropertyInitialier>
    constructor(
        buildContext: lf.IBuildContext,
        imp: lf.IDictionaryBuilder<T.PropertyInitialier>,
    ) {
        this._buildContext = buildContext
        this.imp = imp
    }
    public PropertyInitialier(
        key: string,
        par__initializer_type: (builder: InitializerTypeBuilder) => T.InitializerType,
    ) {
        const var_initializer = create_initializer(
            this._buildContext,
            par__initializer_type,
        )
        const entry: T.PropertyInitialier = {
            "initializer": var_initializer,
        }
        this.imp.add({ key: key, entry: entry })
        return this
    }
}

export class InitializerTypeBuilder {
    //@ts-ignore
    private readonly _buildContext: lf.IBuildContext
    constructor(
        buildContext: lf.IBuildContext,
    ) {
        this._buildContext = buildContext
    }
    public constructor_call(
        par__path: string,
        par__arguments: (builder: ConstructorCallArgurmentBuilder) => void,
    ): T.InitializerType {
        const var_path = par__path
        const var_arguments = this._buildContext.createDictionary<T.ConstructorCallArgurment>({
            reporter: lf.createSimpleConflictingEntryReporter({ typeInfo: "ConstructorCallArgurment", reportError: _errorStr => {} }),
            callback: cp => par__arguments(new ConstructorCallArgurmentBuilder(
                this._buildContext,
                cp.builder,
            )),
        })
        return ["constructor call", {
            "path": var_path,
            "arguments": var_arguments,
        }]
    }
    public function_call(
        par__path: string,
        par__arguments: (builder: FunctionCallArgurmentBuilder) => void,
    ): T.InitializerType {
        const var_path = par__path
        const var_arguments = this._buildContext.createDictionary<T.FunctionCallArgurment>({
            reporter: lf.createSimpleConflictingEntryReporter({ typeInfo: "FunctionCallArgurment", reportError: _errorStr => {} }),
            callback: cp => par__arguments(new FunctionCallArgurmentBuilder(
                this._buildContext,
                cp.builder,
            )),
        })
        return ["function call", {
            "path": var_path,
            "arguments": var_arguments,
        }]
    }
    public object(
        par__properties: (builder: PropertyInitialierBuilder) => void,
    ): T.InitializerType {
        const var_properties = this._buildContext.createDictionary<T.PropertyInitialier>({
            reporter: lf.createSimpleConflictingEntryReporter({ typeInfo: "PropertyInitialier", reportError: _errorStr => {} }),
            callback: cp => par__properties(new PropertyInitialierBuilder(
                this._buildContext,
                cp.builder,
            )),
        })
        return ["object", {
            "properties": var_properties,
        }]
    }
    public raw(
        par__rawstring: string,
    ): T.InitializerType {
        const var_rawstring = par__rawstring
        return ["raw", {
            "rawstring": var_rawstring,
        }]
    }
    public selection(
        par__rawselectionstring: string,
    ): T.InitializerType {
        const var_rawselectionstring = par__rawselectionstring
        return ["selection", {
            "rawselectionstring": var_rawselectionstring,
        }]
    }
    public tagged_union(
        par__state: string,
        par__initializer_type: (builder: InitializerTypeBuilder) => T.InitializerType,
    ): T.InitializerType {
        const var_state = par__state
        const var_initializer = create_initializer(
            this._buildContext,
            par__initializer_type,
        )
        return ["tagged union", {
            "state": var_state,
            "initializer": var_initializer,
        }]
    }
}

function create_initializer(
    _buildContext: lf.IBuildContext,
    par__type: (builder: InitializerTypeBuilder) => T.InitializerType,
): T.Initializer {
    const var_type = par__type(new InitializerTypeBuilder(
        _buildContext,
    ))
    return {
        "type": var_type,
    }
}

export class GenericInterfaceParameterBuilder {
    //@ts-ignore
    private readonly _buildContext: lf.IBuildContext
    private readonly imp: lf.IDictionaryBuilder<T.GenericInterfaceParameter>
    constructor(
        buildContext: lf.IBuildContext,
        imp: lf.IDictionaryBuilder<T.GenericInterfaceParameter>,
    ) {
        this._buildContext = buildContext
        this.imp = imp
    }
    public GenericInterfaceParameter(
        key: string,
    ) {
        const entry: T.GenericInterfaceParameter = {
        }
        this.imp.add({ key: key, entry: entry })
        return this
    }
}

export class BaseInterfaceBuilder {
    //@ts-ignore
    private readonly _buildContext: lf.IBuildContext
    private readonly imp: lf.IDictionaryBuilder<T.BaseInterface>
    constructor(
        buildContext: lf.IBuildContext,
        imp: lf.IDictionaryBuilder<T.BaseInterface>,
    ) {
        this._buildContext = buildContext
        this.imp = imp
    }
    public BaseInterface(
        key: string,
        par__interface_interface: string,
        par__interface_type_arguments: (builder: GenericArgumentBuilder) => void,
    ) {
        const var_interface = create_generic_interface_reference(
            this._buildContext,
            par__interface_interface,
            par__interface_type_arguments,
        )
        const entry: T.BaseInterface = {
            "interface": var_interface,
        }
        this.imp.add({ key: key, entry: entry })
        return this
    }
}

export class GenericMethodTypeParameterBuilder {
    //@ts-ignore
    private readonly _buildContext: lf.IBuildContext
    private readonly imp: lf.IDictionaryBuilder<T.GenericMethodTypeParameter>
    constructor(
        buildContext: lf.IBuildContext,
        imp: lf.IDictionaryBuilder<T.GenericMethodTypeParameter>,
    ) {
        this._buildContext = buildContext
        this.imp = imp
    }
    public GenericMethodTypeParameter(
        key: string,
    ) {
        const entry: T.GenericMethodTypeParameter = {
        }
        this.imp.add({ key: key, entry: entry })
        return this
    }
}

export class GenericMethodParameterBuilder {
    //@ts-ignore
    private readonly _buildContext: lf.IBuildContext
    private readonly imp: lf.IDictionaryBuilder<T.GenericMethodParameter>
    constructor(
        buildContext: lf.IBuildContext,
        imp: lf.IDictionaryBuilder<T.GenericMethodParameter>,
    ) {
        this._buildContext = buildContext
        this.imp = imp
    }
    public GenericMethodParameter(
        key: string,
        par__type_type: (builder: GenericInTypeTypeBuilder) => T.GenericInTypeType,
    ) {
        const var_type = create_generic_in_type(
            this._buildContext,
            par__type_type,
        )
        const entry: T.GenericMethodParameter = {
            "type": var_type,
        }
        this.imp.add({ key: key, entry: entry })
        return this
    }
}

export class IsGenericReturnValueGuaranteedBuilder {
    //@ts-ignore
    private readonly _buildContext: lf.IBuildContext
    constructor(
        buildContext: lf.IBuildContext,
    ) {
        this._buildContext = buildContext
    }
    public no(
    ): T.IsGenericReturnValueGuaranteed {
        return ["no", {
        }]
    }
    public yes(
    ): T.IsGenericReturnValueGuaranteed {
        return ["yes", {
        }]
    }
}

export class GenericFunctionTypeBuilder {
    //@ts-ignore
    private readonly _buildContext: lf.IBuildContext
    constructor(
        buildContext: lf.IBuildContext,
    ) {
        this._buildContext = buildContext
    }
    public function(
        par__guaranteed: (builder: IsGenericReturnValueGuaranteedBuilder) => T.IsGenericReturnValueGuaranteed,
        par__type_type: (builder: GenericReturnTypeTypeBuilder) => T.GenericReturnTypeType,
    ): T.GenericFunctionType {
        const var_guaranteed = par__guaranteed(new IsGenericReturnValueGuaranteedBuilder(
            this._buildContext,
        ))
        const var_type = create_generic_return_type(
            this._buildContext,
            par__type_type,
        )
        return ["function", {
            "guaranteed": var_guaranteed,
            "type": var_type,
        }]
    }
    public procedure(
    ): T.GenericFunctionType {
        return ["procedure", {
        }]
    }
}

export class GenericInterfaceMethodBuilder {
    //@ts-ignore
    private readonly _buildContext: lf.IBuildContext
    private readonly imp: lf.IDictionaryBuilder<T.GenericInterfaceMethod>
    constructor(
        buildContext: lf.IBuildContext,
        imp: lf.IDictionaryBuilder<T.GenericInterfaceMethod>,
    ) {
        this._buildContext = buildContext
        this.imp = imp
    }
    public GenericInterfaceMethod(
        key: string,
        par__type_parameters: (builder: GenericMethodTypeParameterBuilder) => void,
        par__parameters: (builder: GenericMethodParameterBuilder) => void,
        par__type: (builder: GenericFunctionTypeBuilder) => T.GenericFunctionType,
    ) {
        const var_type_parameters = this._buildContext.createDictionary<T.GenericMethodTypeParameter>({
            reporter: lf.createSimpleConflictingEntryReporter({ typeInfo: "GenericMethodTypeParameter", reportError: _errorStr => {} }),
            callback: cp => par__type_parameters(new GenericMethodTypeParameterBuilder(
                this._buildContext,
                cp.builder,
            )),
        })
        const var_parameters = this._buildContext.createDictionary<T.GenericMethodParameter>({
            reporter: lf.createSimpleConflictingEntryReporter({ typeInfo: "GenericMethodParameter", reportError: _errorStr => {} }),
            callback: cp => par__parameters(new GenericMethodParameterBuilder(
                this._buildContext,
                cp.builder,
            )),
        })
        const var_type = par__type(new GenericFunctionTypeBuilder(
            this._buildContext,
        ))
        const entry: T.GenericInterfaceMethod = {
            "type parameters": var_type_parameters,
            "parameters": var_parameters,
            "type": var_type,
        }
        this.imp.add({ key: key, entry: entry })
        return this
    }
}

export class GenericInterfaceDeclarationBuilder {
    //@ts-ignore
    private readonly _buildContext: lf.IBuildContext
    private readonly imp: lf.IDictionaryBuilder<T.GenericInterfaceDeclaration>
    constructor(
        buildContext: lf.IBuildContext,
        imp: lf.IDictionaryBuilder<T.GenericInterfaceDeclaration>,
    ) {
        this._buildContext = buildContext
        this.imp = imp
    }
    public GenericInterfaceDeclaration(
        key: string,
        par__parameters: (builder: GenericInterfaceParameterBuilder) => void,
        par__base_interfaces: (builder: BaseInterfaceBuilder) => void,
        par__methods: (builder: GenericInterfaceMethodBuilder) => void,
    ) {
        const var_parameters = this._buildContext.createDictionary<T.GenericInterfaceParameter>({
            reporter: lf.createSimpleConflictingEntryReporter({ typeInfo: "GenericInterfaceParameter", reportError: _errorStr => {} }),
            callback: cp => par__parameters(new GenericInterfaceParameterBuilder(
                this._buildContext,
                cp.builder,
            )),
        })
        const var_base_interfaces = this._buildContext.createDictionary<T.BaseInterface>({
            reporter: lf.createSimpleConflictingEntryReporter({ typeInfo: "BaseInterface", reportError: _errorStr => {} }),
            callback: cp => par__base_interfaces(new BaseInterfaceBuilder(
                this._buildContext,
                cp.builder,
            )),
        })
        const var_methods = this._buildContext.createDictionary<T.GenericInterfaceMethod>({
            reporter: lf.createSimpleConflictingEntryReporter({ typeInfo: "GenericInterfaceMethod", reportError: _errorStr => {} }),
            callback: cp => par__methods(new GenericInterfaceMethodBuilder(
                this._buildContext,
                cp.builder,
            )),
        })
        const entry: T.GenericInterfaceDeclaration = {
            "parameters": var_parameters,
            "base interfaces": var_base_interfaces,
            "methods": var_methods,
        }
        this.imp.add({ key: key, entry: entry })
        return this
    }
}

export class PropertyTypeBuilder {
    //@ts-ignore
    private readonly _buildContext: lf.IBuildContext
    constructor(
        buildContext: lf.IBuildContext,
    ) {
        this._buildContext = buildContext
    }
    public raw(
        par__raw: string,
    ): T.PropertyType {
        const var_raw = par__raw
        return ["raw", {
            "raw": var_raw,
        }]
    }
    public reference(
        par__referenced_type: string,
    ): T.PropertyType {
        const var_referenced_type = par__referenced_type
        return ["reference", {
            "referenced type": var_referenced_type,
        }]
    }
    public string(
    ): T.PropertyType {
        return ["string", {
        }]
    }
}

export class ObjectPropertyBuilder {
    //@ts-ignore
    private readonly _buildContext: lf.IBuildContext
    private readonly imp: lf.IDictionaryBuilder<T.ObjectProperty>
    constructor(
        buildContext: lf.IBuildContext,
        imp: lf.IDictionaryBuilder<T.ObjectProperty>,
    ) {
        this._buildContext = buildContext
        this.imp = imp
    }
    public ObjectProperty(
        key: string,
        par__type: (builder: PropertyTypeBuilder) => T.PropertyType,
    ) {
        const var_type = par__type(new PropertyTypeBuilder(
            this._buildContext,
        ))
        const entry: T.ObjectProperty = {
            "type": var_type,
        }
        this.imp.add({ key: key, entry: entry })
        return this
    }
}

export class TaggedUnionAlternativeBuilder {
    //@ts-ignore
    private readonly _buildContext: lf.IBuildContext
    private readonly imp: lf.IDictionaryBuilder<T.TaggedUnionAlternative>
    constructor(
        buildContext: lf.IBuildContext,
        imp: lf.IDictionaryBuilder<T.TaggedUnionAlternative>,
    ) {
        this._buildContext = buildContext
        this.imp = imp
    }
    public TaggedUnionAlternative(
        key: string,
        par__referenced_type: string,
    ) {
        const var_referenced_type = par__referenced_type
        const entry: T.TaggedUnionAlternative = {
            "referenced type": var_referenced_type,
        }
        this.imp.add({ key: key, entry: entry })
        return this
    }
}

export class TypeTypeBuilder {
    //@ts-ignore
    private readonly _buildContext: lf.IBuildContext
    constructor(
        buildContext: lf.IBuildContext,
    ) {
        this._buildContext = buildContext
    }
    public object(
        par__properties: (builder: ObjectPropertyBuilder) => void,
    ): T.TypeType {
        const var_properties = this._buildContext.createDictionary<T.ObjectProperty>({
            reporter: lf.createSimpleConflictingEntryReporter({ typeInfo: "ObjectProperty", reportError: _errorStr => {} }),
            callback: cp => par__properties(new ObjectPropertyBuilder(
                this._buildContext,
                cp.builder,
            )),
        })
        return ["object", {
            "properties": var_properties,
        }]
    }
    public tagged_union(
        par__alternatives: (builder: TaggedUnionAlternativeBuilder) => void,
    ): T.TypeType {
        const var_alternatives = this._buildContext.createDictionary<T.TaggedUnionAlternative>({
            reporter: lf.createSimpleConflictingEntryReporter({ typeInfo: "TaggedUnionAlternative", reportError: _errorStr => {} }),
            callback: cp => par__alternatives(new TaggedUnionAlternativeBuilder(
                this._buildContext,
                cp.builder,
            )),
        })
        return ["tagged union", {
            "alternatives": var_alternatives,
        }]
    }
}

export class TypeBuilder {
    //@ts-ignore
    private readonly _buildContext: lf.IBuildContext
    private readonly imp: lf.IDictionaryBuilder<T.Type>
    constructor(
        buildContext: lf.IBuildContext,
        imp: lf.IDictionaryBuilder<T.Type>,
    ) {
        this._buildContext = buildContext
        this.imp = imp
    }
    public Type(
        key: string,
        par__type: (builder: TypeTypeBuilder) => T.TypeType,
    ) {
        const var_type = par__type(new TypeTypeBuilder(
            this._buildContext,
        ))
        const entry: T.Type = {
            "type": var_type,
        }
        this.imp.add({ key: key, entry: entry })
        return this
    }
}

export class PropertyInitializationBuilder {
    //@ts-ignore
    private readonly _buildContext: lf.IBuildContext
    constructor(
        buildContext: lf.IBuildContext,
    ) {
        this._buildContext = buildContext
    }
    public default(
        par__initializer: string,
    ): T.PropertyInitialization {
        const var_initializer = par__initializer
        return ["default", {
            "initializer": var_initializer,
        }]
    }
    public parametrized(
        par__type: string,
    ): T.PropertyInitialization {
        const var_type = par__type
        return ["parametrized", {
            "type": var_type,
        }]
    }
}

export class ClassPropertyBuilder {
    //@ts-ignore
    private readonly _buildContext: lf.IBuildContext
    private readonly imp: lf.IDictionaryBuilder<T.ClassProperty>
    constructor(
        buildContext: lf.IBuildContext,
        imp: lf.IDictionaryBuilder<T.ClassProperty>,
    ) {
        this._buildContext = buildContext
        this.imp = imp
    }
    public ClassProperty(
        key: string,
        par__initialization: (builder: PropertyInitializationBuilder) => T.PropertyInitialization,
    ) {
        const var_initialization = par__initialization(new PropertyInitializationBuilder(
            this._buildContext,
        ))
        const entry: T.ClassProperty = {
            "initialization": var_initialization,
        }
        this.imp.add({ key: key, entry: entry })
        return this
    }
}

export class MethodBuilder {
    //@ts-ignore
    private readonly _buildContext: lf.IBuildContext
    private readonly imp: lf.IDictionaryBuilder<T.Method>
    constructor(
        buildContext: lf.IBuildContext,
        imp: lf.IDictionaryBuilder<T.Method>,
    ) {
        this._buildContext = buildContext
        this.imp = imp
    }
    public Method(
        key: string,
        par__specification_access: (builder: FunctionAccessBuilder) => T.FunctionAccess,
        par__specification_block_variables: (builder: VariableBuilder) => void,
        par__specification_block_statements: (builder: StatementBuilder) => void,
    ) {
        const var_specification = create_function_specification(
            this._buildContext,
            par__specification_access,
            par__specification_block_variables,
            par__specification_block_statements,
        )
        const entry: T.Method = {
            "specification": var_specification,
        }
        this.imp.add({ key: key, entry: entry })
        return this
    }
}

export class AlgorithmTypeBuilder {
    //@ts-ignore
    private readonly _buildContext: lf.IBuildContext
    constructor(
        buildContext: lf.IBuildContext,
    ) {
        this._buildContext = buildContext
    }
    public class(
        par__properties: (builder: ClassPropertyBuilder) => void,
        par__methods: (builder: MethodBuilder) => void,
    ): T.AlgorithmType {
        const var_properties = this._buildContext.createDictionary<T.ClassProperty>({
            reporter: lf.createSimpleConflictingEntryReporter({ typeInfo: "ClassProperty", reportError: _errorStr => {} }),
            callback: cp => par__properties(new ClassPropertyBuilder(
                this._buildContext,
                cp.builder,
            )),
        })
        const var_methods = this._buildContext.createDictionary<T.Method>({
            reporter: lf.createSimpleConflictingEntryReporter({ typeInfo: "Method", reportError: _errorStr => {} }),
            callback: cp => par__methods(new MethodBuilder(
                this._buildContext,
                cp.builder,
            )),
        })
        return ["class", {
            "properties": var_properties,
            "methods": var_methods,
        }]
    }
    public function(
        par__specification_access: (builder: FunctionAccessBuilder) => T.FunctionAccess,
        par__specification_block_variables: (builder: VariableBuilder) => void,
        par__specification_block_statements: (builder: StatementBuilder) => void,
    ): T.AlgorithmType {
        const var_specification = create_function_specification(
            this._buildContext,
            par__specification_access,
            par__specification_block_variables,
            par__specification_block_statements,
        )
        return ["function", {
            "specification": var_specification,
        }]
    }
}

export class AlgorithmBuilder {
    //@ts-ignore
    private readonly _buildContext: lf.IBuildContext
    private readonly imp: lf.IDictionaryBuilder<T.Algorithm>
    constructor(
        buildContext: lf.IBuildContext,
        imp: lf.IDictionaryBuilder<T.Algorithm>,
    ) {
        this._buildContext = buildContext
        this.imp = imp
    }
    public Algorithm(
        key: string,
        par__type: (builder: AlgorithmTypeBuilder) => T.AlgorithmType,
    ) {
        const var_type = par__type(new AlgorithmTypeBuilder(
            this._buildContext,
        ))
        const entry: T.Algorithm = {
            "type": var_type,
        }
        this.imp.add({ key: key, entry: entry })
        return this
    }
}

export class CompilationUnitBuilder {
    //@ts-ignore
    private readonly _buildContext: lf.IBuildContext
    constructor(
        buildContext: lf.IBuildContext,
    ) {
        this._buildContext = buildContext
    }
    public build(
        par__generic_interface_declarations: (builder: GenericInterfaceDeclarationBuilder) => void,
        par__types: (builder: TypeBuilder) => void,
        par__algorithms: (builder: AlgorithmBuilder) => void,
    ) {
        const var_generic_interface_declarations = this._buildContext.createDictionary<T.GenericInterfaceDeclaration>({
            reporter: lf.createSimpleConflictingEntryReporter({ typeInfo: "GenericInterfaceDeclaration", reportError: _errorStr => {} }),
            callback: cp => par__generic_interface_declarations(new GenericInterfaceDeclarationBuilder(
                this._buildContext,
                cp.builder,
            )),
        })
        const var_types = this._buildContext.createDictionary<T.Type>({
            reporter: lf.createSimpleConflictingEntryReporter({ typeInfo: "Type", reportError: _errorStr => {} }),
            callback: cp => par__types(new TypeBuilder(
                this._buildContext,
                cp.builder,
            )),
        })
        const var_algorithms = this._buildContext.createDictionary<T.Algorithm>({
            reporter: lf.createSimpleConflictingEntryReporter({ typeInfo: "Algorithm", reportError: _errorStr => {} }),
            callback: cp => par__algorithms(new AlgorithmBuilder(
                this._buildContext,
                cp.builder,
            )),
        })
        const entry: T.CompilationUnit = {
            "generic interface declarations": var_generic_interface_declarations,
            "types": var_types,
            "algorithms": var_algorithms,
        }
        return entry
    }
}
