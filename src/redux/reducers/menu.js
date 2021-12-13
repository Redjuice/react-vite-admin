import store from 'store';
import { SAVE_MENU, DELETE_MENU } from '../constant';
import configs from '@/configs';

const { menuName } = configs;
// 初始化，从LocalStorage中获取菜单的信息
let menu = store.get(menuName) || [];

const initState = {
  menu
};

export default function login(preState = initState, action) {
  const { type, data } = action;
  switch (type) {
    case SAVE_MENU:
      //将菜单信息保存到LocalStorage中
      store.set(menuName, data);
      //将用户登录的信息保存到redux中
      return data;
    case DELETE_MENU:
      //将菜单信息从LocalStorage中删除
      store.remove(menuName);
      return [];

    default:
      return preState;
  }
}
