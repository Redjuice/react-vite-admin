export default {
  icon: 'HomeFilled', // 菜单所显示的icon
  cname: '首页', // 菜单以及权限验证所显示的中文名（*必填）
  ename: 'home', // 权限验证所使用的 key 值，同时还可当作 name 在路由跳转中使用（*必填）
  description: '', // 模块描述
  hide: false, // 是否隐藏
  // is_authorization: true, // 是否要进行权限验证
  // type: 'base', // 区分 boss应用标识 TODO: 不确定用途
  children: [] // 子模块
};
