import * as fs from "fs"
import * as path from "path"
import { Directory } from "./types"

function assertUnreachable<T>(_x: never): T {
    throw new Error("Unreachable")
}

export function saveDirectory(targetPath: string, dir: Directory): void {
    Object.keys(dir.nodes).forEach(key => {
        const node = dir.nodes[key]
        switch (node[0]) {
            case "directory": {
                const $ = node[1]
                const subDir = path.join(targetPath, key)
                if (!fs.existsSync(subDir)) {
                    fs.mkdirSync(subDir, { recursive: true})
                }
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
