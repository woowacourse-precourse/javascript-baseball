const isNumber = number => {
  const regex = /^[0-9]+$/;
  let set = new Set(String(number));
  set = [...set];
  if (set.length < 3) {
    throw new Error('중복되지 않는 3자리의 숫자를 입력해주세요.');
  }
  if (!regex.test(number)) {
    throw new Error('숫자가 아닙니다.');
  }
  if (String(number).length > 3) {
    throw new Error('자릿수를 초과했습니다.');
  }
  if (String(number).includes(0)) {
    throw new Error('1 ~ 9까지의 숫자를 입력하세요.');
  }

  return true;
};

module.exports = isNumber;
