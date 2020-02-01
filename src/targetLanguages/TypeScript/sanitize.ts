export function sanitize(str: string): string {
    return str.replace(/ /g, "_").replace(/\./g, "dot")
}

export function sanitize2(p: { readonly rawValue: string }): string {
    return p.rawValue.replace(/ /g, "_").replace(/\./g, "dot")
}
