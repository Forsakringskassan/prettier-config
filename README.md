# @forsakringskassan/prettier-config

## Installation

`npm install --save-dev @forsakringskassan/prettier-config`

In `package.json`:

```json
{
    "name": "my-cool-library",
    "prettier": "@forsakringskassan/prettier-config"
}
```

You should not have `prettier` installed in your application, this preset bundles it.
If you have in since earlier you can uninstall it:

`npm rm prettier`

### Svelte Config

If you are building a application containg Svelte code use this which package instead:

`npm install --save-dev @forsakringskassan/prettier-config-svelte`

In `package.json`:

```json
{
    "name": "my-svelte-app",
    "prettier": "@forsakringskassan/prettier-config-svelte"
}
```

## Github Actions

To use with Github actions:

```yaml
jobs:
    lint:
        runs-on: ubuntu-latest
        steps:
            - name: Checkout
              uses: actions/checkout@v5
            - name: Use Node.js
              uses: actions/setup-node@v6
            - name: Install dependencies
              run: npm ci
            - name: Prettier
              uses: Forsakringskassan/prettier-config@main
```

`main` can also be replaced by a semantic versioned tag such as `v3.0.0`:

```diff
-uses: Forsakringskassan/semantic-release-config@main
+uses: Forsakringskassan/semantic-release-config@v3.0.0
```

This is recommended when using a tool such as Renovate to manage dependencies.
