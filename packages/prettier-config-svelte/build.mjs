import fs from "node:fs/promises";
import { build } from "esbuild";

async function readJsonFile(filename) {
    const content = await fs.readFile(filename, "utf-8");
    return JSON.parse(content);
}

const { externalDependencies } = await readJsonFile("package.json");

await build({
    entryPoints: ["src/index.ts"],
    bundle: true,
    outdir: "dist",
    format: "esm",
    platform: "node",
    target: "node20",
    outExtension: {
        ".js": ".mjs",
    },
    external: externalDependencies,
});
