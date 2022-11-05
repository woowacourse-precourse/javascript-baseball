function isNumInRange(str) {
  const regExp = /[1-9]/g;
  const matchArr = str.match(regExp);
  return matchArr.length === str.length;
}

function isLengthEqualsThree(str) {
  return str.length === 3;
}

function isAllDifferent(str) {
  const inputNumSet = new Set(str.split(''));
  return inputNumSet.size === str.length;
}

function isInputValidate(str) {
  if (!isLengthEqualsThree(str) || !isAllDifferent(str) || !isNumInRange(str)) {
    throw new Error('1부터 9까지 서로 다른 수로 이루어진 3자리 수를 입력해주세요!');
  }
  return true;
}

module.exports = isInputValidate;
