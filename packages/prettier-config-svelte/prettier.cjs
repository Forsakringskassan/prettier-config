#!/usr/bin/env node

const path = require("path");
const { spawn } = require("child_process");

const pkgPath = path.dirname(require.resolve("prettier/package.json"));
const binary = path.join(pkgPath, "bin/prettier.cjs");

/* eslint-disable-next-line sonarjs/no-os-command-from-path -- want to execute node from PATH */
spawn("node", [binary, ...process.argv.slice(2)], {
    stdio: "inherit",
}).on("exit", (code) => {
    process.exit(code);
});
