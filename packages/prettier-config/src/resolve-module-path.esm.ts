import { fileURLToPath } from "node:url";

export function resolveModulePath(id: string): string {
    return fileURLToPath(import.meta.resolve(id));
}
