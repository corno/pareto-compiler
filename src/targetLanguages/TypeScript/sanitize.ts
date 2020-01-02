export function sanitize(str: string) {
    return str.replace(/ /g, "_").replace(/\./g, "dot")
}

export function sanitize2(p: { readonly rawValue: string }) {
    return p.rawValue.replace(/ /g, "_").replace(/\./g, "dot")
}
