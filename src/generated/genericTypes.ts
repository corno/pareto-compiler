//tslint:disable: array-type interface-name
//tslint:disable: ban-types

export * from "lingua-franca"

// export interface Dictionary<Type> {
//     getAlphabeticalOrdering(): DictionaryOrdering<Type>
//     getEntry(key: string): null | Type
//     getKeys(): Array<string>
// }

// export interface DictionaryOrdering<Type> {
//     filter<NewType>(onElement: (element: Type) => null | NewType): DictionaryOrdering<NewType>
//     map<NewType>(onElement: (element: Type, key: string) => NewType): Array<NewType>
//     mapWithSeparator<NewType>(onSeparator: () => NewType, onElement: (element: Type, key: string) => NewType): Array<NewType>
//     onEmpty<NewType>(isEmpty: () => NewType, isNotEmpty: (dictionaryOrdering: DictionaryOrdering<Type>) => NewType): NewType
// }

// export interface List<Type> {
//     filter<NewType>(onElement: (element: Type) => null | NewType): List<NewType>
//     map<NewType>(onElement: (element: Type) => NewType): Array<NewType>
//     mapWithSeparator<NewType>(onSeparator: () => NewType, onElement: (element: Type) => NewType): Array<NewType>
//     onEmpty<NewType>(isEmpty: () => NewType, isNotEmpty: (list: List<Type>) => NewType): NewType
// }

// export interface OrderedDictionary<Type, Orderings> extends Dictionary<Type> {
//     getOrderings(): Orderings
// }

export interface Out {
    write(p: { string: string }): void
}

export interface In {
    //write(p: { string: string }): void
    processObject(p: {
        callback: (cp: {

        } ) => void
    }): void
    processArray(p: {
        callback: (cp: {

        }) => void
    }): void
    expectProperty(p: {
        name: string,
        callback: (cp: {

        }) => void
    }): void
}
