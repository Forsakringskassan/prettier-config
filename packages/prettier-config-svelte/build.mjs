import fs from "node:fs/promises";
import { build } from "esbuild";

async function readJsonFile(filename) {
    const content = await fs.readFile(filename, "utf-8");
    return JSON.parse(content);
}

const { externalDependencies } = await readJsonFile("package.json");

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
        target: "node20",
        outExtension: {
            ".js": extension,
        },
        alias: {
            "@forsakringskassan/prettier-config": `../prettier-config/dist/index${extension}`,
        },
        external: externalDependencies,
    });
}
