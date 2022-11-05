const START_MESSAGE = '숫자 야구 게임을 시작합니다.';
const INPUT_MESSGAE = '숫자를 입력해주세요 : ';
const GAMEOVER_MESSAGE = '3개의 숫자를 모두 맞히셨습니다! 게임 종료';
const END_MESSAGE = '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.';

const INVALID_NUMERIC_ERROR_MESSAGE = '올바르지 않은 값이 포함되어 있습니다. (0 또는 숫자가 아님) 게임 종료';
const DUPLICATE_NUMERIC_ERROR_MESSAGE = '중복된 숫자가 포함되어 있습니다. 게임 종료';
const RANGE_ERROR_MESSAGE = '입력 값의 길이가 올바르지 않습니다. (3자리 숫자가 아님)게임 종료';

module.exports = {
  START_MESSAGE,
  END_MESSAGE,
  GAMEOVER_MESSAGE,
  INPUT_MESSGAE,
  INVALID_NUMERIC_ERROR_MESSAGE,
  DUPLICATE_NUMERIC_ERROR_MESSAGE,
  RANGE_ERROR_MESSAGE,
};
