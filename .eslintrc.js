require("@forsakringskassan/eslint-config/patch/modern-module-resolution");

module.exports = {
    root: true,
    extends: ["@forsakringskassan"],
    overrides: [
        {
            files: "*.ts",
            extends: ["@forsakringskassan/typescript"],
        },
    ],
};
