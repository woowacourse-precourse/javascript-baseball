const getUserExecption = (input) => {};
const changeNumberToArray = (input) => {
  const arr = input
    .toString()
    .split("")
    .map((e) => parseInt(e));
  return arr;
};
const checkLength = (arr) => {
  return arr.length > 3 ? false : true;
};

module.exports = getUserExecption;
