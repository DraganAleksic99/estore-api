module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ['eslint:recommended', 'prettier'],
  plugins: ['prettier'],
  overrides: [
    {
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    semi: [2, 'never'],
    'no-restricted-syntax': 'off',
    'no-use-before-define': 'off',
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'max-len': [
      'error',
      {
        code: 100,
        tabWidth: 2
      }
    ],
    'no-param-reassign': 'off',
    'no-underscore-dangle': 'off',
    'import/no-unresolved': 'off',
    'consistent-return': 'off',
    'no-prototype-builtins': 'off',
    'no-nested-ternary': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto'
      }
    ]
  }
}
