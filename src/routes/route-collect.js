const routes = [
  {
    icon: 'HomeFilled',
    cname: '首页',
    ename: 'home',
    description: '',
    hide: false,
    children: []
  },
  {
    icon: 'HomeFilled',
    cname: 'module1',
    ename: 'module1',
    description: '',
    hide: false,
    children: [
      {
        icon: 'HomeFilled',
        cname: 'module2',
        ename: 'module2',
        description: '',
        hide: false,
        children: []
      }
    ]
  }
];

export default routes;
