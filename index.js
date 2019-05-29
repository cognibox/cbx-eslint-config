module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended',
  ],
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2017,
    sourceType: 'module',
  },
  env: {
    es6: true,
    browser: true,
  },
  plugins: [
    'vue',
  ],
  rules: {
    'accessor-pairs': ['error', { 'getWithoutSet': true, 'setWithoutGet': true }],
    'array-bracket-newline': ['error', { 'multiline': true }],
    'array-bracket-spacing': ['error', 'never'],
    'array-callback-return': 'error',
    'array-element-newline': 'off', // when upgrade to eslint 5 and more, use: ['error', 'consistent']
    'arrow-body-style': ['error', 'as-needed'],
    'arrow-parens': ['error', 'always'],
    'arrow-spacing': ['error', { 'before': true, 'after': true }],
    'block-spacing': ['error', 'always'],
    'brace-style': ['error', '1tbs', { 'allowSingleLine': true }],
    'callback-return': 'off',
    'camelcase': ['error', { 'properties': 'always' }],
    'capitalized-comments': 'off',
    'class-methods-use-this': 'error',
    'comma-dangle': ['error', 'always-multiline'],
    'comma-spacing': ['error', { 'before': false, 'after': true }],
    'comma-style': ['error', 'last'],
    'complexity': 'off',
    'computed-property-spacing': ['error', 'never'],
    'consistent-return': ['error', { 'treatUndefinedAsUnspecified': false }],
    'consistent-this': ['error', 'self'],
    'constructor-super': 'error',
    'curly': ['error', 'multi-line'],
    'default-case': 'off',
    'dot-location': ['error', 'property'],
    'dot-notation': ['error', { 'allowKeywords': true, 'allowPattern': '^[a-z]+(_[a-z]+)+$' }],
    'eol-last': ['error', 'always'],
    'eqeqeq': ['error', 'always'],
    'for-direction': 'error',
    'func-call-spacing': ['error', 'never'],
    'func-names': ['error', 'never'],
    'func-style': 'off',
    'function-paren-newline': ['error', 'multiline'],
    'generator-star-spacing': ['error', { 'before': true, 'after': false }],
    'getter-return': ['error', { 'allowImplicit': true }],
    'guard-for-in': 'error',
    'id-blacklist': 'off',
    'id-length': 'off',
    'id-match': 'off',
    'implicit-arrow-linebreak': ['error', 'beside'],
    'indent': ['error', 2, { 'SwitchCase': 1, 'VariableDeclarator': { 'var': 2, 'let': 2, 'const': 3 } }],
    'init-declarations': 'off',
    'key-spacing': ['error', { 'beforeColon': false, 'afterColon': true, 'mode': 'strict' }],
    'keyword-spacing': ['error', { 'before': true, 'after': true }],
    'line-comment-position': 'off',
    'linebreak-style': ['error', 'unix'],
    'lines-around-comment': 'off',
    'lines-between-class-members': ['error', 'always'],
    'max-depth': ['error', { 'max': 4 }],
    'max-len': 'off',
    'max-lines': 'off',
    'max-nested-callbacks': 'off',
    'max-params': 'off',
    'max-statements': 'off',
    'max-statements-per-line': 'off',
    'multiline-comment-style': 'off',
    'multiline-ternary': ['error', 'never'],
    'new-cap': ['error', { 'newIsCap': true, 'capIsNew': false, 'properties': true }],
    'new-parens': 'error',
    'newline-per-chained-call': 'off',
    'no-alert': 'error',
    'no-array-constructor': 'error',
    'no-await-in-loop': 'error',
    'no-bitwise': 'error',
    'no-caller': 'error',
    'no-case-declarations': 'error',
    'no-catch-shadow': 'error',
    'no-class-assign': 'error',
    'no-compare-neg-zero': 'error',
    'no-cond-assign': ['error', 'always'],
    'no-confusing-arrow': ['error', { 'allowParens': true }],
    'no-console': 'error',
    'no-const-assign': 'error',
    'no-constant-condition': ['error', { 'checkLoops': true }],
    'no-continue': 'off',
    'no-control-regex': 'error',
    'no-debugger': 'error',
    'no-delete-var': 'error',
    'no-div-regex': 'error',
    'no-dupe-args': 'error',
    'no-dupe-class-members': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-duplicate-imports': 'error',
    'no-else-return': ['error', { 'allowElseIf': true }],
    'no-empty': ['error', { 'allowEmptyCatch': true }],
    'no-empty-character-class': 'error',
    'no-empty-function': 'error',
    'no-empty-pattern': 'error',
    'no-eq-null': 'error',
    'no-eval': ['error', { 'allowIndirect': false }],
    'no-ex-assign': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-boolean-cast': 'error',
    'no-extra-label': 'error',
    'no-extra-parens': 'off',
    'no-extra-semi': 'error',
    'no-fallthrough': 'error',
    'no-floating-decimal': 'error',
    'no-func-assign': 'error',
    'no-global-assign': 'error',
    'no-implicit-coercion': 'off',
    'no-implicit-globals': 'error',
    'no-implied-eval': 'error',
    'no-inline-comments': 'off',
    'no-inner-declarations': ['error', 'functions'],
    'no-invalid-regexp': 'error',
    'no-invalid-this': 'error',
    'no-irregular-whitespace': ['error', { 'skipStrings': false }],
    'no-iterator': 'error',
    'no-label-var': 'error',
    'no-labels': ['error', { 'allowLoop': false, 'allowSwitch': false }],
    'no-lone-blocks': 'error',
    'no-lonely-if': 'error',
    'no-loop-func': 'error',
    'no-magic-numbers': ['error', { "ignore": [-1, 0, 1] }],
    'no-mixed-operators': 'error',
    'no-mixed-requires': 'off',
    'no-mixed-spaces-and-tabs': 'error',
    'no-multi-assign': 'off',
    'no-multi-spaces': ['error', { 'ignoreEOLComments': false }],
    'no-multi-str': 'error',
    'no-multiple-empty-lines': ['error', { 'max': 1, 'maxBOF': 0, 'maxEOF': 0 }],
    'no-negated-condition': 'error',
    'no-nested-ternary': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-object': 'error',
    'no-new-require': 'off',
    'no-new-symbol': 'error',
    'no-new-wrappers': 'error',
    'no-obj-calls': 'error',
    'no-octal': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': 'off',
    'no-path-concat': 'off',
    'no-plusplus': 'off',
    'no-process-env': 'off',
    'no-process-exit': 'off',
    'no-proto': 'error',
    'no-prototype-builtins': 'error',
    'no-redeclare': ['error', { 'builtinGlobals': false }],
    'no-regex-spaces': 'error',
    'no-restricted-globals': 'off',
    'no-restricted-imports': 'off',
    'no-restricted-modules': 'off',
    'no-restricted-properties': 'off',
    'no-restricted-syntax': 'off',
    'no-return-assign': ['error', 'always'],
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-self-assign': ['error', { 'props': true }],
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-shadow': ['error', { 'builtinGlobals': true, 'hoist': 'all' }],
    'no-shadow-restricted-names': 'error',
    'no-sparse-arrays': 'error',
    'no-sync': 'off',
    'no-tabs': 'error',
    'no-template-curly-in-string': 'error',
    'no-ternary': 'off',
    'no-this-before-super': 'error',
    'no-throw-literal': 'error',
    'no-trailing-spaces': ['error', { 'ignoreComments': false, 'skipBlankLines': false }],
    'no-undef': ['error', { 'typeof': true }],
    'no-undef-init': 'error',
    'no-undefined': 'off',
    'no-underscore-dangle': 'off',
    'no-unexpected-multiline': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unneeded-ternary': ['error', { 'defaultAssignment': false }],
    'no-unreachable': 'error',
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': 'error',
    'no-unused-expressions': 'off',
    'no-unused-labels': 'error',
    'no-unused-vars': ['error', { 'vars': 'all', 'args': 'all', 'argsIgnorePattern': '^_', 'caughtErrors': 'all', 'caughtErrorsIgnorePattern': '^_', 'ignoreRestSiblings': true }],
    'no-use-before-define': ['error', { 'classes': true, 'functions': false, 'variables': true }],
    'no-useless-call': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-concat': 'error',
    'no-useless-constructor': 'error',
    'no-useless-escape': 'error',
    'no-useless-rename': 'error',
    'no-useless-return': 'error',
    'no-var': 'error',
    'no-void': 'error',
    'no-warning-comments': 'off',
    'no-whitespace-before-property': 'error',
    'no-with': 'error',
    'nonblock-statement-body-position': ['error', 'beside'],
    'object-curly-newline': 'off',  // when upgrade to eslint 5 and more, use: ['error', 'consistent']
    'object-curly-spacing': ['error', 'always'],
    'object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
    'object-shorthand': 'off',
    'one-var': 'off',
    'one-var-declaration-per-line': 'off',
    'operator-assignment': ['error', 'always'],
    'operator-linebreak': ['error', 'after'],
    'padded-blocks': ['error', 'never'],
    'padding-line-between-statements': 'off',
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'prefer-destructuring': 'off',
    'prefer-numeric-literals': 'off',
    'prefer-promise-reject-errors': ['error', { 'allowEmptyReject': true }],
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'quote-props': ['error', 'consistent'],
    'quotes': ['error', 'single', { 'avoidEscape': true }],
    'radix': ['error', 'always'],
    'require-await': 'error',
    'require-jsdoc': 'off',
    'require-yield': 'error',
    'rest-spread-spacing': ['error', 'never'],
    'semi': ['error', 'always'],
    'semi-spacing': ['error', { 'before': false, 'after': true }],
    'semi-style': ['error', 'last'],
    'sort-imports': 'off',
    'sort-keys': 'off',
    'sort-vars': ['error', { 'ignoreCase': true }],
    'space-before-blocks': ['error', 'always'],
    'space-before-function-paren': ['error', { 'anonymous': 'never', 'named': 'never', 'asyncArrow': 'never' }],
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': 'error',
    'space-unary-ops': ['error', { 'words': true, 'nonwords': false }],
    'spaced-comment': 'off',
    'strict': ['warn'],
    'switch-colon-spacing': ['error', { 'after': true, 'before': false }],
    'symbol-description': 'error',
    'template-curly-spacing': ['error', 'never'],
    'template-tag-spacing': ['error', 'never'],
    'unicode-bom': ['error', 'never'],
    'use-isnan': 'error',
    'valid-jsdoc': 'off',
    'valid-typeof': ['error', { 'requireStringLiterals': true }],
    'wrap-iife': ['error', 'outside'],
    'wrap-regex': 'error',
    'yield-star-spacing': ['error', { 'before': false, 'after': true }],
    'yoda': ['error', 'never']
  },
};
