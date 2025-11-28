import { type Plugin } from "prettier";
import { parsers } from "prettier/esm/parser-babel.mjs";
import { sortPackageJson } from "sort-package-json";

const parser = parsers["json-stringify"];

function testPath(path: string): boolean {
    return /(^|\\|\/)package\.json$/.test(path);
}

const plugin: Plugin = {
    parsers: {
        "json-stringify": {
            ...parser,
            async preprocess(text, options) {
                if (parser.preprocess) {
                    text = await parser.preprocess(text, options);
                }
                return testPath(options.filepath)
                    ? sortPackageJson(text)
                    : text;
            },
        },
    },
};

export default plugin;
