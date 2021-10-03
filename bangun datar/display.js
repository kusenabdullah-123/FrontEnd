const input = (str) => {
  return parseInt(prompt(str));
};
const output = (cb, ...arg) => {
  cb(arg);
};
const display = (args) => {
  alert(`Luas : ${args[0]} cm\u00B2 | Keliling : ${args[1]} cm`);
};
export { input, output, display };
