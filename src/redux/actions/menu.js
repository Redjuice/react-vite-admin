import { SAVE_MENU, DELETE_MENU } from '../constant';

// 同步action，就是指action的值为object类型的一般对象
export const saveMenu = (data) => ({ type: SAVE_MENU, data });
export const deleteMenu = () => ({ type: DELETE_MENU });

// 异步action，就是指action的值为函数，异步action一般都会调用同步action
