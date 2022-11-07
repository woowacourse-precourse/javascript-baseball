const START_NUMBER = 1;
const END_NUMBER = 9;
const ANSWER_LENGTH = 3;

const LENGTH_ERROR = `정답은 ${ANSWER_LENGTH}글자여야 합니다.`;
const CHARACTER_ERROR = '1~9 사이의 숫자만 입력해야합니다.';
const SAME_ERROR = '서로 다른 숫자를 입력해야합니다.';

module.exports = {
  START_NUMBER,
  END_NUMBER,
  ANSWER_LENGTH,
  LENGTH_ERROR,
  CHARACTER_ERROR,
  SAME_ERROR,
};
