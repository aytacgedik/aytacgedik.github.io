import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const customConfig = {
  files: ["**/*.ts", "**/*.tsx"],
  languageOptions: {
    parser: typescriptParser,
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
  },
  plugins: {
    '@typescript-eslint': typescriptPlugin,
  },
  rules: {
    '@typescript-eslint/ban-ts-comment': [
      'error', 
      {
        'ts-expect-error': 'allow-with-description',
        'ts-ignore': 'allow-with-description',
        'ts-nocheck': 'allow-with-description', 
        'ts-check': false,
        minimumDescriptionLength: 5, 
      },
    ],
 
  },
};

const eslintConfig = [
  ...customConfig,
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  
];

export default eslintConfig;
