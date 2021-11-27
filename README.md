# React + Vite

### 目录结构

### 初始化项目

```
yarn create vite
```

#### 配置 eslint + prettier

```
# vsCode安装插件
eslint + prettier

# 安装依赖
yarn add @babel/eslint-parser @babel/preset-react
eslint eslint-config-prettier eslint-config-react
eslint-plugin-prettier eslint-plugin-react
prettier -D


`新建.eslintrc.js`

```
// 具体查看.eslintrc.js
```

`新建.prettierrc.js`

```
// 具体查看.prettierrc.js
```

`新建.vscode/settings.json`

```
{
  "editor.defaultFormatter": "esbenp.prettier-vscode", // 设置默认格式化工具为prettier
  "editor.formatOnSave": true, // 是否开启vscode的保存自动格式化
  // 保存时修复代码
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true, // eslint
  },
  "eslint.format.enable": true // 是否开启vscode的eslint
}
```

`修改package.json`

```
// package.json
"scripts": {
  ...,
  "eslint:fix": "eslint --fix --ext .js,.jsx src",
  "prettier:fix": "prettier --write ./src/*.{less,js,jsx,json}",
  "format:all": "npm run eslint:fix && npm run prettier:fix",
},
```