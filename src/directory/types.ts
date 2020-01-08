
export type Directory = {
    nodes: { [key: string]: Node }
}

export type Node =
    | ["directory", Directory]
    | ["file", string]
