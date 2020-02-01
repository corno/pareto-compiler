// tslint:disable: max-classes-per-file object-literal-key-quotes variable-name no-string-literal member-ordering no-shadowed-variable no-empty
import { gf } from "../genericFunctions"
//import * as gt from "./genericTypes"
import * as i from "./interfaces"
import * as t from "./types"

function assertUnreachable(_x: never) { throw new Error("Unreachable") }

export class CFoo {
    private readonly a = new Array<number>()
    private readonly b: string
    constructor(_p: {
        "b": string
    }) {
        this.b = _p["b"]
    }
    public bla(
        _param: boolean
    ) {
        console.error("XX")
    }
}
