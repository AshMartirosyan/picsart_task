module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['@typescript-eslint', 'react', 'prettier', 'import'],
  ignorePatterns: ['webpack.common.js', 'webpack.dev.js', 'webpack.prod.js', 'webpack.server.js'],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js'],
      rules: {
        'prettier/prettier': 'error',
        'no-unused-vars': 'off',
        'no-undef': 'off',
        '@typescript-eslint/no-unused-vars': 'warn',
        'react/react-in-jsx-scope': 'off',
        'react/prop-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/ban-ts-ignore': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',

        'padding-line-between-statements': [
          'error',
          { blankLine: 'always', prev: 'directive', next: '*' },
          { blankLine: 'any', prev: 'directive', next: 'directive' },
        ],
        'react/display-name': 'off',
        'import/no-cycle': 'error',
        'sort-imports': [
          'error',
          {
            ignoreCase: true,
            ignoreDeclarationSort: true,
            ignoreMemberSort: true,
          },
        ],
        'import/order': [
          'error',
          {
            groups: ['external', 'internal'],
            pathGroups: [
              {
                pattern: 'react+(|-dom)',
                group: 'external',
                position: 'before',
              },
              { pattern: '@/components', group: 'internal' },
              { pattern: '@/pages', group: 'internal' },
              { pattern: '@/**', group: 'internal' },
            ],
            pathGroupsExcludedImportTypes: ['react', 'internal'],
            'newlines-between': 'never',
            alphabetize: {
              order: 'asc',
              caseInsensitive: true,
            },
          },
        ],
      },
    },
  ],
};
