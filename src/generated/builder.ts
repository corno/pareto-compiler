// tslint:disable: max-classes-per-file object-literal-key-quotes variable-name no-string-literal
//import { Dictionary } from "lingua-franca"
import {
    // assertUnreachable,
    // IAutoCreateContext,
    // IAutoCreateDictionary,
    IBuildContext,
    // ICurrentDictionary,
    // IDelayedResolvable,
    IDictionaryBuilder,
    IListBuilder,
    // ILookup,
    // IPossibleContext,
    // IResolvedConstraint,
} from "lingua-franca-building"
import * as T from "./schema"

class PropertyInitializationBuilder {
    //@ts-ignore
    private readonly _buildContext: IBuildContext
    constructor(
        buildContext: IBuildContext,
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

class ClassPropertyBuilder {
    //@ts-ignore
    private readonly _buildContext: IBuildContext
    private readonly imp: IDictionaryBuilder<T.ClassProperty>
    constructor(
        buildContext: IBuildContext,
        imp: IDictionaryBuilder<T.ClassProperty>,
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
        this.imp.add(key, entry)
        return this
    }
}

class MethodParameterBuilder {
    //@ts-ignore
    private readonly _buildContext: IBuildContext
    private readonly imp: IDictionaryBuilder<T.MethodParameter>
    constructor(
        buildContext: IBuildContext,
        imp: IDictionaryBuilder<T.MethodParameter>,
    ) {
        this._buildContext = buildContext
        this.imp = imp
    }
    public MethodParameter(
        key: string,
        par__type: string,
    ) {
        const var_type = par__type
        const entry: T.MethodParameter = {
            "type": var_type,
        }
        this.imp.add(key, entry)
        return this
    }
}

class StatementBuilder {
    //@ts-ignore
    private readonly _buildContext: IBuildContext
    private readonly imp: IListBuilder<T.Statement>
    constructor(
        buildContext: IBuildContext,
        imp: IListBuilder<T.Statement>,
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
        this.imp.push(entry)
        return this
    }
}

class MethodBuilder {
    //@ts-ignore
    private readonly _buildContext: IBuildContext
    private readonly imp: IDictionaryBuilder<T.Method>
    constructor(
        buildContext: IBuildContext,
        imp: IDictionaryBuilder<T.Method>,
    ) {
        this._buildContext = buildContext
        this.imp = imp
    }
    public Method(
        key: string,
        par__parameters: (builder: MethodParameterBuilder) => void,
        par__statements: (builder: StatementBuilder) => void,
    ) {
        const var_parameters = this._buildContext.createDictionary<T.MethodParameter>(
            "MethodParameter",
            intermediateDictionary => par__parameters(new MethodParameterBuilder(
                this._buildContext,
                intermediateDictionary,
            ))
        )
        const var_statements = this._buildContext.createList<T.Statement>(
            intermediateList => par__statements(new StatementBuilder(
                this._buildContext,
                intermediateList,
            ))
        )
        const entry: T.Method = {
            "parameters": var_parameters,
            "statements": var_statements,
        }
        this.imp.add(key, entry)
        return this
    }
}

class ClassBuilder {
    //@ts-ignore
    private readonly _buildContext: IBuildContext
    private readonly imp: IDictionaryBuilder<T.Class>
    constructor(
        buildContext: IBuildContext,
        imp: IDictionaryBuilder<T.Class>,
    ) {
        this._buildContext = buildContext
        this.imp = imp
    }
    public Class(
        key: string,
        par__properties: (builder: ClassPropertyBuilder) => void,
        par__methods: (builder: MethodBuilder) => void,
    ) {
        const var_properties = this._buildContext.createDictionary<T.ClassProperty>(
            "ClassProperty",
            intermediateDictionary => par__properties(new ClassPropertyBuilder(
                this._buildContext,
                intermediateDictionary,
            ))
        )
        const var_methods = this._buildContext.createDictionary<T.Method>(
            "Method",
            intermediateDictionary => par__methods(new MethodBuilder(
                this._buildContext,
                intermediateDictionary,
            ))
        )
        const entry: T.Class = {
            "properties": var_properties,
            "methods": var_methods,
        }
        this.imp.add(key, entry)
        return this
    }
}

export class DummyBuilder {
    //@ts-ignore
    private readonly _buildContext: IBuildContext
    constructor(
        buildContext: IBuildContext,
    ) {
        this._buildContext = buildContext
    }
    public build(
        par__classes: (builder: ClassBuilder) => void,
    ) {
        const var_classes = this._buildContext.createDictionary<T.Class>(
            "Class",
            intermediateDictionary => par__classes(new ClassBuilder(
                this._buildContext,
                intermediateDictionary,
            ))
        )
        const entry: T.Dummy = {
            "classes": var_classes,
        }
        return entry
    }
}
