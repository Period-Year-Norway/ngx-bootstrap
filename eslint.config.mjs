import nx from '@nx/eslint-plugin';

export default [
  ...nx.configs['flat/base'],
  {
    rules: {}
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {
      '@nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: true,
          allow: ['(../)*scripts/.*'],
          depConstraints: [
            {
              sourceTag: '*',
              onlyDependOnLibsWithTags: ['*']
            }
          ]
        }
      ]
    }
  },
  ...nx.configs['flat/typescript'],
  ...nx.configs['flat/javascript'],
  // Placed after flat/javascript: its unscoped eslint-config-prettier block would otherwise turn these rules off.
  {
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      // '@typescript-eslint/semi' and '@typescript-eslint/no-extra-semi' were removed in typescript-eslint v8;
      // the core ESLint rules replace them.
      semi: ['error'],
      '@typescript-eslint/no-explicit-any': 'off',
      'no-extra-semi': 'error',
      // Newly enabled by the typescript-eslint v8 recommended set; was not enforced before the upgrade.
      '@typescript-eslint/no-unused-expressions': 'off',
      // Newly enabled by the ESLint v9 recommended set; was not enforced before the upgrade.
      'no-constant-binary-expression': 'off'
    },
    languageOptions: {
      parserOptions: {
        project: './tsconfig.*?.json'
      }
    }
  },
  {
    files: ['**/*.js', '**/*.jsx'],
    rules: {
      // '@typescript-eslint/no-extra-semi' was removed in typescript-eslint v8; the core rule replaces it.
      'no-extra-semi': 'error',
      // Newly enabled by the ESLint v9 recommended set; was not enforced before the upgrade.
      'no-constant-binary-expression': 'off'
    }
  },
  {
    ignores: ['**/*.min.js']
  }
];
