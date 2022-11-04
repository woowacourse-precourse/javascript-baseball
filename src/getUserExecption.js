const getUserExecption = (input) => {};
const changeNumberToArray = (input) => {
  const arr = input
    .toString()
    .split("")
    .map((e) => parseInt(e));
  return arr;
};

module.exports = getUserExecption;
