# Gatsby blog -- Zi Huijie

This is my blog template

I built [my first blog](https://zihuijie-9d809.firebaseapp.com/) using Gatsby a while ago. It has been lots of changes, since more people recognize it works for static site. 


I decided to rebuild my Blog site after reading the following [Post](https://medium.com/@UnicornAgency/jamstack-pwa-lets-build-a-polling-app-with-gatsby-js-firebase-and-styled-components-pt-1-78a03a633092)

# Version 1

## The Setup

1. [ESLint](https://www.npmjs.com/package/eslint-config-airbnb)

For Linux/OSX can run

```sh
(
  export PKG=eslint-config-airbnb;
  npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
)
```

2. Install ESLint peer-dependancies as well as prettier:

``` sh
npm install -D babel-eslint eslint-config-react eslint-config-prettier eslint-plugin-prettier prettier
```

3. Edit .eslintrc

``` sh
{
    "extends": ["airbnb", "prettier", "prettier/react"],
    "rules": {
      "react/jsx-filename-extension": [
        "error",
        { "extensions": [".js", ".jsx"] }
      ],
      "react/react-in-jsx-scope": 0,
      "react/require-default-props": 0,
      "react/forbid-prop-types": 1,
      "react/prefer-stateless-function": 1,
      "jsx-a11y/anchor-is-valid": 0,
      "arrow-body-style": 0,
      "no-shadow": 0,
      "consistent-return": 0,
      "no-console": 1,
      "no-case-declarations": 0,
      "import/prefer-default-export": 0
    },
    "settings": {
      "import/core-modules": ["react", "prop-types"]
    },
    "globals": {
      "graphql": true
    },
    "plugins": ["prettier"],
    "parser": "babel-eslint",
    "parserOptions": {
      "ecmaVersion": 2017,
      "sourceType": "module",
      "ecmaFeatures": {
        "jsx": true
      }
    },
    "env": {
      "es6": true,
      "browser": true,
      "node": true
    }
  }
  ```
4. Edit .prettierrc

``` sh
{
  "printWidth": 80,
  "singleQuote": true,
  "trailingComma": "all",
  "write": "src/**/*.js",
  "jsxBracketSameLine": true
}
```

5. Edit .jshintrc

``` sh
{
    "esversion": 6
  }
```

6. Update header [grabient] (https://www.grabient.com/)

7. [Gatsby firebase] (https://github.com/ryanflorence/gatsby-source-firebase)

8. [Insert equations](https://using-remark.gatsbyjs.org/katex/)

# Version 2

## Using gatsby template [Lumen](https://github.com/alxshelepenok/gatsby-starter-lumen)
