import * as fs from "fs"
import * as path from "path"
import { Directory } from "./types"

function assertUnreachable<T>(_x: never): T {
    throw new Error("Unreachable")
}

function mkdirRecursively(dirPath: string) {
    const parent = path.dirname(dirPath)
    if (parent !== dirPath) {
        mkdirRecursively(parent)
    }
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true})
    }
}

export function saveDirectory(targetPath: string, dir: Directory): void {
    Object.keys(dir.nodes).forEach(key => {
        const node = dir.nodes[key]
        switch (node[0]) {
            case "directory": {
                const $ = node[1]
                const subDir = path.join(targetPath, key)
                mkdirRecursively(subDir)
                saveDirectory(subDir, $)
                break
            }
            case "file": {
                const $ = node[1]
                fs.writeFileSync(path.join(targetPath, key), $)
                break
            }
            default:
                return assertUnreachable(node[0])
        }
    })
}
