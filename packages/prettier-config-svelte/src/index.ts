import mainConfig from "@forsakringskassan/prettier-config";
import { type Config } from "prettier";

const config = {
    ...mainConfig,
    plugins: [...mainConfig.plugins, "prettier-plugin-svelte"],
    overrides: [
        ...mainConfig.overrides,
        { files: "*.svelte", options: { parser: "svelte" } },
    ],
} satisfies Config;

export default config;
