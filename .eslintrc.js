module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'prettier',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
    'airbnb',
  ],
  parser: 'babel-eslint',
  plugins: ['prettier'],
  rules: {
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
      },
    ],
    'object-curly-spacing': ['warn', 'never'],
    'object-curly-newline': 'off',
    'prefer-const': ['warn', {destructuring: 'all'}],
    'no-unused-vars': ['off'],
    curly: ['error', 'all'],
    'max-statements-per-line': ['error', {max: 1}],
    'import/order': ['warn'],
    'array-callback-return': ['warn'],
    semi: 0,
    'global-require': 0,
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [1, {extensions: ['.js']}],
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-props-no-spreading': 'off',
  },
  globals: {
    React: 'writable',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['components', './components'],
          ['pagesComponents', './pagesComponents'],
          ['constants', './constants'],
          ['styles', './styles'],
          ['assets', './assets'],
          ['public', './public'],
        ],
      },
    },
  },
}
