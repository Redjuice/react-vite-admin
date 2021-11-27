# React + Vite

### 目录结构

### 初始化项目

```
yarn create vite
```

#### 配置 eslint + prettier

# vsCode 安装插件

eslint + prettier

# 安装依赖

yarn add @babel/eslint-parser @babel/preset-react eslint eslint-config-prettier
eslint-config-react eslint-plugin-prettier eslint-plugin-react prettier -D

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

解决 `找不到模块“..”或其相应的类型声明。ts` 的错误

`修改.vscode/settings.json`

```
...
"javascript.validate.enable": false // 启用/禁用javascript验证
```

### 配置 husky + lint-staged

`执行以下操作`

```
// && 连接符在vscode中会报错，建议在windows的powershell执行
npx husky-init && npm install

yarn add lint-staged -D
```

`修改package.json`

```
// package.json
"scripts": {
  ...,
  "lint-staged": "lint-staged"
},
"lint-staged": {
  "*.{js,vue}": [
    "npm run format:all",
    "git add ."
  ]
},
```

### 配置 commitlint

`安装依赖`

```
yarn add @commitlint/cli @commitlint/config-conventional -D
```

`新建commitlint.config.js或.commitlintrc.js`

```
// 具体查看.commitlintrc.js
```

`新建.husky/commit-msg`

```
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx --no-install commitlint --edit $1
```

`或者修改.husky/pre-commit`

```
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npm run lint-staged
npx --no-install commitlint --edit $1
```

### 配置 commitizen

```
// 全局安装
// 它会提供 git cz 命令替代我们的 git commit命令，帮助我们更加方便生成符合规范的 commit message。
npm install -g commitizen

// 项目中安装
// commitizen 的首选适配器
yarn add cz-conventional-changelog -D
```

`修改package.json`

```
// package.json
"scripts": {
  ...,
  "commit": "git cz"
},
"config": {
  "commitizen": {
    "path": "node_modules/cz-conventional-changelog"
  }
}
```

`执行 git cz 或者 yarn commit 提交代码`

### 配置 自定义 commitizen 提交规范(cz-customizable 适配器)

`安装依赖`

```
yarn add cz-customizable -D
```

`修改package.json`

```
// package.json
"scripts": {
  ...,
  "commit": "git cz"
},
"config": {
  "commitizen": {
    "path": "node_modules/cz-customizable"
  }
}
```

`新建.cz-config.js`

```
module.exports = {
  types: [
    { value: 'init', name: '🎉init: 初始提交' },
    { value: 'feat', name: '✨feat: 增加新功能' },
    { value: 'ui', name: '🌻ui: 更新UI' },
    { value: 'fix', name: '🐛fix: 修复bug' },
    { value: 'perf', name: '⚡️perf: 性能优化' },
    { value: 'refactor', name: '♻️refactor: 代码重构' },
    { value: 'chore', name: '🛠️chore: 更改配置文件' },
    { value: 'add', name: '➕add: 添加依赖' },
    { value: 'del', name: '❌del: 删除代码/文件' },
    { value: 'style', name: '🎨style: 样式修改不影响逻辑' },
    { value: 'docs', name: '📝docs: 修改文档' },
    { value: 'test', name: '✅test: 增加测试' },
    { value: 'revert', name: '⏪revert: 版本回退' },
    { value: 'release', name: '⌨️release: 发布' },
    { value: 'deploy', name: '👷deploy: 部署' }
  ],
  messages: {
    type: '选择更改类型:\n',
    subject: '简短描述:\n',
    body: '详细描述. 使用"|"换行:\n',
    confirmCommit: '确认提交?'
  },
  skipQuestions: ['scope', 'footer']
};
```

`执行 git cz 或者 yarn commit 提交代码`

### 配置 自定义 commitizen 提交规范(git-cz 适配器)

`安装依赖`

```
yarn add git-cz -D
```

`修改package.json`

```
// package.json
"scripts": {
  ...,
  "commit": "git-cz"
},
"config": {
  "commitizen": {
    "path": "git-cz"
  }
}

```

`新建changelog.config.js`

```
具体查看 changelog.config.js
```

`执行 yarn commit 或者 npx git-cz 提交代码`
