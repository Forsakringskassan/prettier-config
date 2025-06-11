import { type Config } from "prettier";

const config = {
    singleQuote: false,
    arrowParens: "always",
    tabWidth: 4,
    printWidth: 80,
    trailingComma: "all",
    overrides: [
        {
            files: "package.json",
            options: {
                tabWidth: 2,
            },
        },
        {
            files: ["*.vue", "*.html"],
            options: {
                printWidth: 120,
            },
        },
        {
            files: ["*.scss"],
            options: {
                /* use a high value to not break add line-breaks when using
                 * variables shorthands, e.g.
                 * "padding: var(--a) var(--b) var(--c) var(--d)" */
                printWidth: 160,
            },
        },
        {
            /* adjust width for examples so they fit in the documentation "view
             * source" container */
            files: "**/examples/*.vue",
            options: {
                printWidth: 100,
            },
        },
    ],
} satisfies Config;

export default config;
