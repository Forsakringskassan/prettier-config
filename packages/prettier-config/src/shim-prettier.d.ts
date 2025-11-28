declare module "prettier/esm/parser-babel.mjs" {
    import { type Parser } from "prettier";

    export const parsers: {
        "json-stringify": Parser;
    };
}
