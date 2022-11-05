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
