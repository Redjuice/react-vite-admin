module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    es2021: true
  },
  parser: '@babel/eslint-parser',
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended'
  ],
  // 指定ESLint可以解析JSX语法
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
    requireConfigFile: false,
    ecmaFeatures: {
      jsx: true
    },
    babelOptions: {
      presets: ['@babel/preset-react']
    }
  },
  //自动发现React的版本，从而进行规范react代码
  settings: {
    react: {
      pragma: 'React',
      version: 'detect'
    }
  },
  // 在这里添加需要覆盖的规则
  rules: {
    'react/react-in-jsx-scope': 0,
    'react/prop-types': 0
  }
};
