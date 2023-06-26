module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['@rocketseat/eslint-config/react', 'plugin:cypress/recommended'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'react'],
  rules: {
    indent: ['off', 'tab'],
    'import/export': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    'react-hooks/rules-of-hooks': 'off',
    'jsx-a11y/alt-text': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'no-prototype-builtins': 'off',
  },
}
