import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    plugins: ['prettier', 'import'],
    extends: ['plugin:prettier/recommended'],
    rules: {
      'prettier/prettier': 'error',
      'import/order': [
        'warn',
        {
          'groups': [
            'builtin',   // Node.js 기본 모듈 (fs, path 등)
            'external',  // npm 패키지 (react, lodash 등)
            'internal',  // src 내에서 import 하는 모듈
            'parent',    // 부모 디렉토리에서 import
            'sibling',   // 같은 디렉토리에서 import
            'index'      // index 파일 import
          ],
          'newlines-between': 'always',
          'alphabetize': { 'order': 'asc', 'caseInsensitive': true },
        },
      ],
    },
  },
];

export default eslintConfig;