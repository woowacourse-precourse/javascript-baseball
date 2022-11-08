const GAME_STATUS = {
  RESTART: '1',
  END: '2',
};

const GAME_MESSAGE = {
  START: '숫자 야구 게임을 시작합니다.',
  INPUT_NUMBERS: '숫자를 입력해주세요 : ',
  END: '3스트라이크\n3개의 숫자롤 모두 맞히셨습니다! 게임 종료',
  RESTART: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
};

const ERROR_MESSAGE = {
  INVALID_INPUT_LENGTH:
    '올바른 입력 값이 아닙니다. 3자리 숫자가 아닙니다. 게임을 종료합니다.',
  INVALID_INPUT_DUPLICATED:
    '올바른 입력 값이 아닙니다. 중복된 숫자가 존재합니다. 게임을 종료합니다.',
  INVALID_INPUT_NAN:
    '올바른 입력 값이 아닙니다. 숫자가 아닙니다. 게임을 종료합니다.',
  INVALID_STATUS_NUMBER: '올바른 숫자가 아닙니다. 1 또는 2를 입력해주세요.',
};

module.exports = {
  GAME_STATUS,
  GAME_MESSAGE,
  ERROR_MESSAGE,
};
