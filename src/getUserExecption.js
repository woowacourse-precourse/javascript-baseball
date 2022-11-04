const getUserExecption = (input) => {
  const arr = changeNumberToArray(input);
  if (!checkLength(arr) || !checkIsNumber(arr) || !checkOverlap(arr)) {
    throw "error";
  } else return;
};

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

const checkIsNumber = (arr) => {
  let check = true;
  const checkList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  arr.forEach((num) => {
    if (!checkList.includes(num)) {
      console.log(num);
      check = false;
    }
  });
  return check;
};

const checkOverlap = (arr) => {
  const set = [...new Set(arr)];
  if (arr.length !== set.length) return false;
  return true;
};

module.exports = getUserExecption;
