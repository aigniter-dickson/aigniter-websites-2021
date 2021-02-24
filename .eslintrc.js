/* eslint-disable */
module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: [
      './tsconfig.eslint.json',
      './site/*/tsconfig.json',
      './design/*/tsconfig.json',
    ],
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2019,
    sourceType: 'module',
    createDefaultProgram: true,
    tsconfigRootDir: __dirname,
    warnOnUnsupportedTypeScriptVersion: false,
    EXPERIMENTAL_useSourceOfProjectReferenceRedirect: true,
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'airbnb-typescript',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react',
    'prettier/prettier',
  ],
  rules: {
    quotes: [
      'warn',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    semi: ['warn', 'never'],
    'comma-dangle': ['error', 'always-multiline'],
    'react/destructuring-assignment': 'off', // Vscode doesn't support automatically destructuring, it's a pain to add a new variable
    'jsx-a11y/anchor-is-valid': 'off', // Next.js use his own internal link system
    'react/require-default-props': 'off', // Allow non-defined react props as undefined
    'react/jsx-props-no-spreading': [
      'warn',
      {
        custom: 'ignore',
        explicitSpread: 'ignore',
      },
    ],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@/**',
            group: 'internal',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'import/extensions': 'off',
    'import/no-cycle':
      process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'import/prefer-default-export': 'off',
    '@typescript-eslint/naming-convention':'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        // argsIgnorePattern: '^_',
      },
    ],
    'no-underscore-dangle': 'off',
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  env: {
    browser: true,
    es6: true,
    node: true,
  },
}
