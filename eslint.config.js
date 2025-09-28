import js from '@eslint/js';
import tseslint from 'typescript-eslint';

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.ts'],
    ignores:['dist/**'],
    rules:{
      '@typescript-eslint/no-explicit-any': 'off',
    },
    languageOptions: {
      parser: tseslint.parser,
    },
  },
];