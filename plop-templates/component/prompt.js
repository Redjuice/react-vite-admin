const { notEmpty } = require('../utils.js');

module.exports = {
  description: '创建 component',
  // 提示，用于捕获用户输入
  prompts: [
    {
      type: 'input', // 交互类型
      name: 'path', // 参数名称
      message: '请输入组件路径(可以为空)：' // 交互提示
    },
    {
      type: 'input',
      name: 'name',
      message: '请输入组件名称：',
      validate: notEmpty('name') // 验证
    },
    {
      type: 'list',
      name: 'type',
      message: '请选择组件类型：',
      choices: ['function', 'class']
    }
  ],
  // 行为，具体执行的内容
  actions: (data) => {
    const name = '{{properCase name}}'; // 转换成每个单词的首字母大写
    const { path, type } = data;
    const actions = [
      {
        type: 'add',
        path: `src/components/${path}/${name}/index.jsx`,
        templateFile: `plop-templates/component/index.${type}.hbs`
      },
      {
        type: 'add',
        path: `src/components/${path}/${name}/index.less`,
        templateFile: `plop-templates/component/index.less.hbs`
      },
      {
        type: 'add',
        path: `src/components/${path}/${name}/README.md`
      }
    ];
    return actions;
  }
};
