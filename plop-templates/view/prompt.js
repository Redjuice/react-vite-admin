const { notEmpty } = require('../utils.js')

module.exports = {
  description: '创建 view',
  prompts: [
    {
      type: 'input',
      name: 'ename',
      message: '请输入页面路径:',
      validate: notEmpty('ename')
    },
    {
      type: 'input',
      name: 'cname',
      message: '请输入菜单名称（页面标题）:',
      validate: notEmpty('cname')
    },
    {
      type: 'list',
      name: 'temp',
      message: '请选择页面模板',
      choices: [
        { name: 'menu', value: 'menu' },
        { name: 'list', value: 'list' },
        { name: 'form', value: 'form' }
      ]
    },
    {
      type: 'checkbox',
      name: 'listBlock',
      message: '请选择页面模块组成：',
      choices: [
        {
          name: '#header',
          value: 'header',
          checked: true
        },
        {
          name: '#search',
          value: 'search',
          checked: true
        },
        {
          name: '#tabs',
          value: 'tabs',
          checked: true
        }
      ],
      when: data => {
        return data.temp === 'list'
      }
    },
    {
      type: 'checkbox',
      name: 'formBlock',
      message: '请选择页面模块组成：',
      choices: [
        {
          name: '#input',
          value: 'input',
          checked: true
        },
        {
          name: '#footer',
          value: 'footer',
          checked: true
        }
      ],
      when: data => {
        return data.temp === 'form'
      }
    }
  ],
  actions: data => {
    data.path = data.ename
    data.ename = data.ename.split('/').splice(-1)[0]
    data.template = true
    data.hide = false
    data.listBlock &&
      data.listBlock.forEach(item => {
        if (item === 'header' || item === 'search') data.headerOrSearch = true
        data[item] = true
      })
    data.formBlock &&
      data.formBlock.forEach(item => {
        data[item] = true
      })
    const pname = '{{ path }}'
    const ename = '{{ ename}}'
    const temp = '{{ lowerCase temp}}'
    const actions = [
      {
        type: 'add',
        path: `src/views/app/${pname}/${ename}.jsx`,
        templateFile: `plop-templates/view/index.${temp}.hbs`,
        data: data
      },
      {
        type: 'add',
        path: `src/views/app/${pname}/index.js`,
        templateFile: 'plop-templates/view/index.js.hbs',
        data: data
      }
    ]

    return actions
  }
}
