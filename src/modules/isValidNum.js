function isInteger(input) {
  return input % 1 === 0;
}

function isThreeRandomNumbers(input) {
  const inputToNum = Number(input);
  if (
    inputToNum === NaN ||
    !isInteger(inputToNum) ||
    !(inputToNum >= 100 && inputToNum <= 999)
  )
    return false;
  return true;
}

function isNotZeroInInputAndNotDoubleNum(input) {
  const inputArr = input.split('');
  let isZero = false;
  inputArr.map((num) => {
    if (num === '0') isZero = true;
    return num;
  });
  if (isZero) return false;
  if (
    inputArr[0] === inputArr[1] ||
    inputArr[1] === inputArr[2] ||
    inputArr[0] === inputArr[2]
  )
    return false;
  return true;
}

function isValidNum(input) {
  if (isThreeRandomNumbers(input) && isNotZeroInInputAndNotDoubleNum(input))
    return true;
  return false;
}

exports.isValidNum = isValidNum;
