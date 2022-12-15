const { deepFreeze } = require('../utils/deepFreeze');

const GAME_MESSAGE = deepFreeze({
  game_start: '자동차 경주 게임을 시작합니다.',
  input_car_name: '\n자동차 이름을 5자 이하 콤마로 구분하여 입력해주세요.',
  input_game_trial: '\n시도할 횟수를 입력해주세요.',
  game_result: '실행 결과',
  game_winner: '최종 우승자:',
});

const ERROR_MESSAGE = deepFreeze({
  abstract_class: '추상 클래스로 인스턴스를 생성하였습니다.',
  interface_class: '메서드 구현이 필요합니다',
});

const VALIDATION_MESSAGE = deepFreeze({
  car: {
    multiple: '차는 여러 대여야 합니다.',
    name_length: '차 이름은 5글자 이내여야 합니다.',
  },
});

const RESULT = {
  game_result: '실행 결과\n',
  game_winner: '최종 우승자:',
  move_forward: '-',
};

module.exports = {
  GAME_MESSAGE,
  ERROR_MESSAGE,
  VALIDATION_MESSAGE,
  RESULT,
};
