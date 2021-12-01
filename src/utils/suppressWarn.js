/**
 * antd的组件里使用了findDOMNode方法, 在react的严格模式下会产生下面的警告
 * Warning: findDOMNode is deprecated in StrictMode.
 * 此方法用于用于压制改警告
 */
const consoleError = console.error.bind(console);
console.error = (errObj, ...args) => {
  if (
    import.meta.env.MODE === 'development' &&
    typeof errObj === 'string' &&
    args.includes('findDOMNode')
  )
    return;
  consoleError(errObj, ...args);
};
