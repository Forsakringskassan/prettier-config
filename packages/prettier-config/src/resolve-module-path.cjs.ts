export function resolveModulePath(id: string): string {
    return require.resolve(id);
}
