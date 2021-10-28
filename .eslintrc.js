module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    'plugin:vue/essential',
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 13,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: [
    'vue',
    '@typescript-eslint',
    'jest',
    '@typescript-eslint/eslint-plugin',
  ],
  ignorePatterns: ['.eslintrc.js', '**/dist/**'],
  rules: {
    'import/no-unresolved': 0,
    'import/prefer-default-export': 0,
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'no-useless-constructor': 'off',
    'class-methods-use-this': 'off',
    'import/no-extraneous-dependencies': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'import/extensions': 'off',
  },
};
