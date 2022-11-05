const checkLength = (input) => {
  if (input.length === 3) return true;
  else return false;
};

const checkIsNumber = (input) => {
  if (isNaN(Number(input))) return false;
  else return true;
};

const checkDuplicate = (input) => {
  for (let i = 0; i < input.length; i++) {
    if (input.indexOf(input[i]) !== i) return false;
  }
  return true;
};

const checkInput = (input) => {
  if (!checkLength(input)) throw "3자리 숫자를 입력해주세요.";
  if (!checkIsNumber(input)) throw "숫자만 입력해주세요.";
  if (!checkDuplicate(input)) throw "서로 다른 숫자를 입력해주세요.";
};

module.exports = checkInput;
