import configs from '@/configs';
const pageSourse = configs.pagePower();
const elementSourse = configs.elementPower();
// 验证路由是否有权限
const pagePower = (path) => {
  let key = path.split('/');
  key.shift();
  key = key.join('_');
  return pageSourse.includes(key);
};
// 页面元素权限判断
const elementPower = (key) => {
  let oneKey = key.join('_')[0];
  return elementSourse[oneKey].includes(key);
};
export { pagePower, elementPower };
