// 数字转中文汉字
const toChinesNum = (num) => {
  let changeNum = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
  let unit = ['', '十', '百', '千', '万'];
  num = parseInt(num);
  let getWan = (temp) => {
    let strArr = temp.toString().split('').reverse();
    let newNum = '';
    for (var i = 0; i < strArr.length; i++) {
      newNum =
        (i == 0 && strArr[i] == 0
          ? ''
          : i > 0 && strArr[i] == 0 && strArr[i - 1] == 0
          ? ''
          : changeNum[strArr[i]] + (strArr[i] == 0 ? unit[0] : unit[i])) +
        newNum;
    }
    return newNum;
  };
  let overWan = Math.floor(num / 10000);
  let noWan = num % 10000;
  if (noWan.toString().length < 4) {
    noWan = '0' + noWan;
  }
  return overWan ? getWan(overWan) + '万' + getWan(noWan) : getWan(num);
};
/**
 * 下载文件
 * @param {String} path - 下载地址/下载请求地址。
 * @param {String} name - 下载文件的名字（考虑到兼容性问题，最好加上后缀名）
 */
const downloadFile = (path, name) => {
  const xhr = new XMLHttpRequest();
  xhr.open('get', path);
  xhr.responseType = 'blob';
  xhr.send();
  xhr.onload = function () {
    if (this.status === 200 || this.status === 304) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(this.response);
      fileReader.onload = function () {
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = this.result;
        a.download = name;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      };
    }
  };
};
/**
 * 替换所有的换行符\n 为 <br/>
 * @param {String} str - 目标字符串
 */
const replaceWrap = (str) => {
  // eslint-disable-next-line no-control-regex
  const reg = new RegExp('\n', 'g');
  const res0 = str.replace(reg, '<br/>');
  const regSpace = new RegExp(/( )/g);
  return res0.replace(regSpace, '&nbsp;');
};

// px转vw
const vm_base = 1920; // 基础尺寸
const reg = /px$/i;
const px2vw = (px) => {
  if (typeIs(px) === 'number') {
    return `${(px / vm_base) * 100}vw`;
  }

  if (!isNaN(Number(px))) {
    return `${(px / vm_base) * 100}vw`;
  }

  if (reg.test(px)) {
    return `${(px.slice(0, -2) / vm_base) * 100}vw`;
  }
  console.warn('Incorrect parameter');
};

/**
 * @description 类型判断函数
 * @author WangHeng
 * @param {*} 数据
 * @return {string} 类型
 */
const typeIs = (o) => {
  var s = Object.prototype.toString.call(o);
  // 可能返回的类型
  // type({}); // "object"
  // type([]); // "array"
  // type(5); // "number"
  // type(null); // "null"
  // type(); // "undefined"
  // type(/abcd/); // "regex"
  // type(new Date()); // "date"
  // type(new Map()); // "map"
  // type(new Set()); // "set"
  // type(Symbol()); // "symbol"
  return s.match(/\[object (.*?)\]/)[1].toLowerCase();
};

export { toChinesNum, downloadFile, replaceWrap, px2vw, typeIs };
