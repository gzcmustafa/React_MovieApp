import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: { react: { version: '18.3' } },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {


      ...js.configs.recommended.rules,
      'no-unused-vars': [
        'warn', // Hata yerine uyarı almak için
        {
          vars: 'all', // Tüm değişkenler için geçerli
          varsIgnorePattern: '^(React|index)$', // React ve index isimli değişkenleri yok say
          args: 'after-used', // Kullanılmayan argümanları kontrol et
          argsIgnorePattern: '^_', // İsimleri '_' ile başlayan argümanları yok say
        },
      ],
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react/jsx-no-target-blank': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'react/prop-types': 'warn', // PropTypes eksikliği için uyarı
      'react/jsx-key': 'warn',
    },
  },
]
