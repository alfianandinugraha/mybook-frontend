require('dotenv').config()

const { NODE_ENV } = process.env

const config = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-typescript',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier/react',
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*/**.ts'],
      parserOptions: {
        project: ['./tsconfig.json'],
      },
    },
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
    project: ['./tsconfig.eslint.json'],
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'no-console': NODE_ENV === 'development' ? 'off' : 'error',
    'import/newline-after-import': 'error',
    quotes: ['error', 'single'],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    semi: 'off',
    '@typescript-eslint/semi': 'off',
    'arrow-body-style': ['off', 'as-needed'],
    '@typescript-eslint/comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
        imports: 'always-multiline',
        objects: 'always-multiline',
      },
    ],
    '@typescript-eslint/no-var-requires': ['off'],
    'import/order': 'error',
    'import/first': 'error',
    'import/no-unresolved': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    'react/prop-types': 'off',
    'react/destructuring-assignment': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',
    'react/no-unused-prop-types': 'off',
    'no-alert': 'off',
    'no-underscore-dangle': 'off',
    'consistent-return': 'off',
    'import/prefer-default-export': 'off',
  },
}

module.exports = config
