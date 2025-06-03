// @ts-check
const eslint = require('@eslint/js');
const tseslint = require('typescript-eslint');
const angular = require('angular-eslint');

module.exports = tseslint.config(
  {
    files: ['**/*.ts'],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['tsconfig.json', 'tsconfig.spec.json'],
        createDefaultProgram: true,
      },
    },
    processor: angular.processInlineTemplates,
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/member-ordering': [
        'error',
        {
          default: ['public-static-field', 'public-instance-method', 'private-instance-method'],
        },
      ],
      '@typescript-eslint/explicit-function-return-type': [
        'error',
        { allowedNames: ['ngOnInit', 'ngOnDestroy', 'ngOnChanges'] },
      ],
      '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'enumMember',
          format: ['PascalCase', 'UPPER_CASE'],
        },
        {
          selector: 'method',
          format: ['camelCase'],
        },
      ],
      '@typescript-eslint/prefer-readonly': 'error',
      '@typescript-eslint/no-empty-function': 'error',
      '@typescript-eslint/no-loop-func': 'error',
      '@typescript-eslint/no-magic-numbers': [
        'error',
        {
          ignoreReadonlyClassProperties: true,
          ignoreDefaultValues: true,
          ignoreClassFieldInitialValues: true,
          ignoreArrayIndexes: true,
        },
      ],
      '@typescript-eslint/no-unused-expressions': 'error',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'none',
        },
      ],
      'no-console': [
        'error',
        {
          allow: ['error', 'warn', 'info'],
        },
      ],
      '@typescript-eslint/dot-notation': [
        'error',
        {
          allowPrivateClassPropertyAccess: true,
          allowProtectedClassPropertyAccess: true,
        },
      ],
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/unbound-method': [
        'error',
        {
          ignoreStatic: true,
        },
      ],
      '@angular-eslint/no-input-rename': 'warn',
      '@angular-eslint/component-max-inline-declarations': [
        'error',
        {
          animations: 20,
          styles: 8,
          template: 25,
        },
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: '',
          style: 'kebab-case',
        },
      ],

      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'app',
          style: 'camelCase',
        },
      ],
    },
  },
  {
    files: ['**/*.html'],
    extends: [...angular.configs.templateRecommended, ...angular.configs.templateAccessibility],
    rules: {
      '@angular-eslint/template/button-has-type': ['error'],
      '@angular-eslint/template/conditional-complexity': [
        'warn',
        {
          maxComplexity: 10,
        },
      ],
      '@angular-eslint/template/cyclomatic-complexity': [
        'warn',
        {
          maxComplexity: 10,
        },
      ],
      '@angular-eslint/template/use-track-by-function': 'warn',
    },
  }
);
