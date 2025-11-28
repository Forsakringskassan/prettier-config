import fs from "node:fs/promises";
import path from "node:path";
import { build } from "esbuild";

async function readJsonFile(filename) {
    const content = await fs.readFile(filename, "utf-8");
    return JSON.parse(content);
}

const { externalDependencies } = await readJsonFile("package.json");

await fs.rm("dist", { recursive: true, force: true });

for (const { format, extension } of [
    { format: "cjs", extension: ".cjs" },
    { format: "esm", extension: ".mjs" },
]) {
    await build({
        entryPoints: ["src/index.ts"],
        bundle: true,
        outdir: "dist",
        format,
        platform: "node",
        target: "node24",
        outExtension: {
            ".js": extension,
        },
        external: externalDependencies,
        plugins: [
            {
                name: "local/resolve-module-path",
                setup(build) {
                    build.onResolve({ filter: /resolve-module-path/ }, () => {
                        return {
                            path: path.resolve(
                                `src/resolve-module-path.${format}.ts`,
                            ),
                        };
                    });
                },
            },
        ],
    });
}
