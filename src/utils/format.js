export function decimalRoundHandler(text, decimal = 2) {
  let num = parseFloat(text);
  if (isNaN(num)) {
    return text;
  }
  num = Math.round(num * 10 ** decimal) / 10 ** decimal;
  return num;
}

export function imgSrc(src) {
  const path = `./img/${src}`;
  const modules = import.meta.globEager("./img/*");
  return modules[path].default;
}
