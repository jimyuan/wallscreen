// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,

    "strict": [0, "global"],
    "no-var": 2,
    "prefer-const": 0,
    "no-const-assign": 2,
    "constructor-super": 2,
    "prefer-arrow-callback": 0,
    "prefer-template": 2,
    "no-useless-concat": 2,
    "no-shadow": 2,
    "no-shadow-restricted-names": 2,
    "no-undef": 2,
    "no-unused-vars": [2, {
      "vars": "local",
      "args": "after-used"
    }],
    "no-use-before-define": 2,
    "comma-dangle": [2, "never"],
    "no-cond-assign": [2, "always"],
    "no-console": 0,
    "no-alert": 1,
    "no-constant-condition": 1,
    "no-dupe-keys": 2,
    "no-duplicate-case": 2,
    "no-empty": 2,
    "no-ex-assign": 2,
    "no-extra-boolean-cast": 0,
    "no-extra-semi": 2,
    "no-func-assign": 2,
    "no-inner-declarations": 2,
    "no-invalid-regexp": 2,
    "no-irregular-whitespace": 2,
    "no-obj-calls": 2,
    "no-sparse-arrays": 2,
    "no-unreachable": 2,
    "use-isnan": 2,
    "block-scoped-var": 2,
    "consistent-return": 2,
    "curly": [2, "multi-line"],
    "default-case": 2,
    "dot-notation": [2, {
      "allowKeywords": true
    }],
    "eqeqeq": 2,
    "guard-for-in": 2,
    "no-caller": 2,
    "no-else-return": 2,
    "no-eq-null": 2,
    "no-eval": 2,
    "no-extend-native": 2,
    "no-extra-bind": 2,
    "no-fallthrough": 2,
    "no-floating-decimal": 2,
    "no-implied-eval": 2,
    "no-lone-blocks": 2,
    "no-loop-func": 2,
    "no-multi-str": 2,
    "no-native-reassign": 2,
    "no-new": 2,
    "no-new-func": 2,
    "no-new-wrappers": 2,
    "no-octal": 2,
    "no-octal-escape": 2,
    "no-param-reassign": 2,
    "no-proto": 2,
    "no-redeclare": 2,
    "no-return-assign": 2,
    "no-script-url": 2,
    "no-self-compare": 2,
    "no-sequences": 2,
    "no-throw-literal": 2,
    "no-with": 2,
    "radix": 2,
    "vars-on-top": 2,
    "wrap-iife": [2, "any"],
    "yoda": 2,
    "indent": [
      2, 2, {
        "SwitchCase": 1
      }
    ],
    "brace-style": [
      2,
      "1tbs", {
        "allowSingleLine": true
      }
    ],
    "quotes": [
      2, "single", "avoid-escape"
    ],
    "id-length": [0, {
      "min": 2,
      "properties": "always",
      "exceptions": ["_"]
    }],
    "camelcase": [2, {
      "properties": "never"
    }],
    "comma-spacing": [2, {
      "before": false,
      "after": true
    }],
    "comma-style": [2, "last"],
    "eol-last": 2,
    "func-names": 0,
    "key-spacing": [2, {
      "beforeColon": false,
      "afterColon": true
    }],
    "new-cap": [2, {
      "newIsCap": true
    }],
    "no-multiple-empty-lines": [2, {
      "max": 2
    }],
    "no-nested-ternary": 2,
    "no-new-object": 2,
    "no-spaced-func": 2,
    "no-trailing-spaces": 2,
    "no-extra-parens": [2, "functions"],
    "no-underscore-dangle": 0,
    "one-var": [2, {
      "initialized": "never"
    }],
    "padded-blocks": [2, "never"],
    "semi": [2, "never"],
    "semi-spacing": [2, {
      "before": false,
      "after": true
    }],
    "keyword-spacing": 2,
    "space-before-blocks": 2,
    "space-before-function-paren": [2, "always"],
    "space-infix-ops": 2,
    "spaced-comment": [2, "always",  {
      "exceptions": ["-", "+"],
      "markers": ["=", "!"]
    }]
  },
  "globals": {
    "console": true,
    "afterEach": false,
    "beforeEach": false,
    "describe": false,
    "expect": false,
    "it": false,
    "require": false,
    "process": false,
    "Buffer": false,
    "window": true
  },
  "ecmaFeatures": {
    "arrowFunctions": true,
    "blockBindings": true,
    "classes": true,
    "defaultParams": true,
    "destructuring": true,
    "forOf": true,
    "generators": false,
    "modules": true,
    "objectLiteralComputedProperties": true,
    "objectLiteralDuplicateProperties": false,
    "objectLiteralShorthandMethods": true,
    "objectLiteralShorthandProperties": true,
    "spread": true,
    "superInFunctions": true,
    "templateStrings": false,
    "jsx": false
  }
}
