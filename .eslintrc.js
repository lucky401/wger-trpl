module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    '@nuxtjs',
    'eslint:recommended',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:vue/recommended',
    'plugin:vue/essential',
    'plugin:nuxt/recommended',
  ],
  plugins: ['prettier', 'vue'],
  // add your custom rules here
  rules: {
    'vue/singleline-html-element-content-newline': ['off'],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'prettier/prettier': [
      'error',
      { singleQuote: true, semi: true, endOfLine: 'auto' },
    ],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'any',
        },
      },
    ],
    'vue/html-indent': ['off'],
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 6,
        multiline: {
          max: 1,
          allowFirstLine: false,
        },
      },
    ],
  },
};
