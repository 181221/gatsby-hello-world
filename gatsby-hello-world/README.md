# gatsby-starter-hello-world

Starter with the bare essentials needed for a [Gatsby](https://www.gatsbyjs.org/) site.

Install this starter (assuming Gatsby is installed) by running from your CLI:

```
gatsby new gatsby-site https://github.com/gatsbyjs/gatsby-starter-hello-world
```

Or [view the live demo here](https://gatsby-starter-hello-world-demo.netlify.com/).

## Running in development

`gatsby develop`

## live demo

http://abrupt-spy.surge.sh/

for linter
npm i eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react -g

linter config
```JSON
{
  "extends": ["airbnb", "eslint:recommended", "plugin:react/recommended"],
  "plugins": ["react"],
  "rules": {
    "linebreak-style": ["error", "windows"],
    "semi": ["error", "always"],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "quotes": [0, "double"],
    "import/no-unresolved": "off",
    "react/display-name": [0],
    "react/jsx-one-expression-per-line": [0],
    "react/forbid-prop-types": 0
  }
}
```
