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

### 配置 stylelint

[掘金: stylelint 代码自动格式化](https://juejin.cn/post/7022720509875847182#heading-0)

- vscode 安装 eslint + prettier
- 安装以下依赖

```
yarn add stylelint stylelint-config-standard stylelint-order -D
```

`新建.stylelintrc.js`

```
具体查看.stylelintrc.js
```

`修改package.json`

```
// package.json
"scripts": {
  ...,
  "style:fix": "stylelint \"src/**/*.(vue|less|css)\" --fix",
  "format:all": "npm run style:fix && npm run eslint:fix && npm run prettier:fix",
},
```

`修改.vscode/settings.json`

```
// settings.json
...,
"editor.codeActionsOnSave": {
  ...,
  "source.fixAll.stylelint": true
}
```

`可能出现的问题: Unknown word (CssSyntaxError) 错误`

因为插件版本太高, 对于 vue3 模板文件的支持不是很好，不能正确识别 .vue 文件的 css
代码。需要降级处理

```
"stylelint": "^13.13.1",
"stylelint-config-standard": "^22.0.0",
```

同时需要将 VSCode 的 stylelint 插件降级，现在插件的最新版本是 1.0.3，不支持
stylelint 13 版本。点击插件旁边的小齿轮，再点 Install Another Version，选择其他
版本进行安装。选 `0.87.6 ` 版本安装就可以了，这时 css 自动格式化功能恢复正常。

### 配置 less

Vite 也同时提供了对 .scss, .sass, .less, .styl 和 .stylus 文件的内置支持。没有必
要为它们安装特定的 Vite 插件，但必须安装相应的预处理器依赖：

```
yarn add less -D
```

### 配置 antd

```
yarn add antd

// 自动按需导入
yarn add vite-plugin-style-import -D

// 修改vite.config.js
// vite.config.ts
import styleImport from 'vite-plugin-style-import'

export default {
  plugins: [
    ...,
    // 配置 vite-plugin-style-import, 解决 AntDesign 按需加载
    styleImport({
      libs: [
        {
          libraryName: 'antd',
          esModule: true,
          resolveStyle: (name) => `antd/es/${name}/style`
        }
      ]
    })
  ],
  css: {
    // 指定传递给 CSS 预处理器的选项
    preprocessorOptions: {
      less: {
        javascriptEnabled: true // 支持内联JavaScript
      }
    }
  }
}
``
```

### 配置 全局 configs 文件

`详情见src/configs/**/*.js`

### 配置 全局样式文件

`详情见src/styles/**/*.less`

#### styles + less 实现样式隔离

```
// 使用CSS属性选择器和less的嵌套语法来简单实现隔离
// 组件
function App() {
  return (
    <div className="container" data-component="app">
      <div className="content">内容区域</div>
    </div>
  );
}

// less
[data-component=app].container {
  .content {
    padding: 20px;
  }
}
```

### 配置 vite.config.js

```
具体查看vite.config.js
```

### 配置 jsconfig.json

`解决配置别名后, 不提示路径的问题`

```
{
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "@/*": ["src/*"]
    }
  },
  "include": ["src/**/*.vue", "src/**/*.js", "vite.config.js"],
  "exclude": ["node_modules", "dist"]
}
// jsconfig.json 文件来定义项目上下文时，表明该目录是 JavaScript 项目的根目录，可以配置属于项目的文件、要从项目中排除的文件以及编译器选项

// Exclude 属性(glob 模式)告诉语言服务哪些文件不是源代码的一部分。 这使性能保持在一个高水平。 如果 IntelliSense 速度慢，则向排除列表添加文件夹

// 您可以使用 include 属性(glob 模式)显式地设置项目中的文件。 如果没有 include 属性，则默认情况下包含包含目录和子目录中的所有文件。 如果指定了 include 属性，则只包含这些文件。

// 如果您的工作区中没有 jsconfig.json，VS Code 将默认排除 node_modules 文件夹

// 当你的 JavaScript 项目变得太大而且性能降低时，通常是因为类似node_modules的库文件夹。 如果 VS 代码检测到项目变得太大，它将提示您编辑exclude。
```

`jsconfig.json首行可能会报错, 设置工作区.vscode/settings.json`

```
{
  ...,
  "js/ts.implicitProjectConfig.checkJs": true // 启用或禁用javaScript文件的语义检查
}
```
