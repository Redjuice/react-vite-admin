export default [
  {
    icon: 'HomeFilled', // 菜单所显示的icon
    cname: 'module3', // 菜单以及权限验证所显示的中文名（*必填）
    ename: 'module3_module31', // 权限验证所使用的 key 值，同时还可当作 name 在路由跳转中使用（*必填）
    description: '', // 模块描述
    hide: false, // 是否隐藏
    children: [], // 子模块
    exact: false // 是否完全匹配
  },
  {
    icon: 'HomeFilled', // 菜单所显示的icon
    cname: 'list', // 菜单以及权限验证所显示的中文名（*必填）
    ename: 'module3_list', // 权限验证所使用的 key 值，同时还可当作 name 在路由跳转中使用（*必填）
    description: '', // 模块描述
    hide: false, // 是否隐藏
    children: [], // 子模块
    exact: false // 是否完全匹配
  },
  {
    icon: 'HomeFilled', // 菜单所显示的icon
    cname: 'details', // 菜单以及权限验证所显示的中文名（*必填）
    ename: 'module3_details', // 权限验证所使用的 key 值，同时还可当作 name 在路由跳转中使用（*必填）
    description: '', // 模块描述
    hide: true, // 是否隐藏
    children: [], // 子模块
    exact: false // 是否完全匹配
  }
];
