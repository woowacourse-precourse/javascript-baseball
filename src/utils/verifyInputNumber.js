const { ANSWER_LENGTH } = require('../constants/constants');

const verifyInputNumber = (input) => {
  if (isNaN(Number(input))) return false; // 숫자 아닌 수 입력 시
  if (input.length !== ANSWER_LENGTH) return false; // 입력값이 3자리수가 아닌 경우
  if (new Set(input).size !== input.length) return false; // 중복된 숫자가 있을 경우

  return true; // 위 3가지 조건 해당사항 없을 시 검증완료
};

module.exports = verifyInputNumber;
