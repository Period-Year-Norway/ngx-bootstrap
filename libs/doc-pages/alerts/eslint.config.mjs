import baseConfig from '../../../eslint.config.mjs';
import nx from '@nx/eslint-plugin';

export default [
  ...baseConfig,
  ...nx.configs['flat/angular'],
  {
    files: ['**/*.ts'],
    languageOptions: {
      parserOptions: {
        project: ['libs/doc-pages/alerts/tsconfig.*?.json']
      }
    },
    rules: {
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'ngx-bootstrap-base',
          style: 'camelCase'
        }
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'ngx-bootstrap-base',
          style: 'kebab-case'
        }
      ],
      '@angular-eslint/prefer-inject': 'warn',
      '@angular-eslint/prefer-standalone': 'off'
    }
  },
  ...nx.configs['flat/angular-template'],
  {
    files: ['**/*.ts'],
    rules: {
      // Newly enabled by the angular-eslint v22 recommended preset; was not enforced before the upgrade.
      '@angular-eslint/prefer-on-push-component-change-detection': 'off'
    }
  },
  {
    files: ['**/*.html'],
    rules: {
      // Newly enabled by the angular-eslint v22 template presets; were not enforced before the upgrade.
      '@angular-eslint/template/prefer-control-flow': 'off',
      '@angular-eslint/template/click-events-have-key-events': 'off',
      '@angular-eslint/template/interactive-supports-focus': 'off',
      '@angular-eslint/template/label-has-associated-control': 'off',
      '@angular-eslint/template/role-has-required-aria': 'off',
      '@angular-eslint/template/alt-text': 'off'
    }
  }
];
