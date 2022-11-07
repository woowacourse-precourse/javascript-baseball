function checkuserNums(input) {
  const inputToNum = Number(input);
  if (
    inputToNum === isNaN ||
    !(inputToNum >= 100 && inputToNum <= 999)
  )
    return false;
  return true;
}
exports.checkuserNums = checkuserNums;

function checkuserNums2(input) {
  const inputArr = input.split("");
  if (
    inputArr[0] === inputArr[1] ||
    inputArr[1] === inputArr[2] ||
    inputArr[0] === inputArr[2]
  )
    return false;
  return true;
}
exports.checkuserNums2 = checkuserNums2;
