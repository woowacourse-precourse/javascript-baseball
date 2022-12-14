const { deepFreeze } = require('../utils/deepFreeze');

const GAME_MESSAGE = deepFreeze({
  game_start: '숫자 야구 게임을 시작합니다.',
  input_number: '숫자를 입력해주세요 : ',
  ask_to_restart:
    '3개의 숫자를 모두 맞히셨습니다! 게임 종료\n게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
});

const ERROR_MESSAGE = deepFreeze({
  abstract_class: '추상 클래스로 인스턴스를 생성하였습니다.',
  interface_class: '메서드 구현이 필요합니다',
});

const RESULT = {
  ball: '볼',
  strike: '스트라이크',
  nothing: '낫싱',
};

const REGEX = deepFreeze({
  GUESS: /^[1-9]{3}$/,
  CHOICE: /^[12]$/,
});

const CHOICE = deepFreeze({
  PLAY_AGAIN: '1',
  EXIT: '2',
});

module.exports = {
  GAME_MESSAGE,
  ERROR_MESSAGE,
  RESULT,
  REGEX,
  CHOICE,
};
