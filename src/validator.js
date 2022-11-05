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
  if (!isLengthEqualsThree(str)) {
    throw new Error(
      '입력한 값이 3자리가 아니에요! 1부터 9까지 서로 다른 수로 이루어진 3자리 수를 입력해주세요!',
    );
  }
  if (!isAllDifferent(str)) {
    throw new Error(
      '서로 다른 수가 아니에요! 1부터 9까지 서로 다른 수로 이루어진 3자리 수를 입력해주세요!',
    );
  }
  if (!isNumInRange(str)) {
    throw new Error(
      '각 자리 수 중 1부터 9로 이루어지지 않은 수가 있어요! 1부터 9까지 서로 다른 수로 이루어진 3자리 수를 입력해주세요!',
    );
  }

  return true;
}

module.exports = isInputValidate;
