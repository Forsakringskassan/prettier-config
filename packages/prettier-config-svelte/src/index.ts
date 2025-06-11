import { type Config } from "prettier";
import mainConfig from "@forsakringskassan/prettier-config";

const config = {
    ...mainConfig,
    plugins: ["prettier-plugin-svelte"],
    overrides: [
        ...mainConfig.overrides,
        { files: "*.svelte", options: { parser: "svelte" } },
    ],
} satisfies Config;

export default config;
