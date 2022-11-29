const BASEBALL = {
  NUMBER_START: 1,
  NUMBER_END: 9,
  NUMBER_LENGTH: 3,
  RETRY: 1,
  END: 2,
};

const MESSAGE = {
  START: '숫자 야구 게임을 시작합니다.',
  READ_USER_NUMBER: '숫자를 입력해주세요 : ',
  THREE_STRIKE: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
  COMMAND: `게임을 새로 시작하려면 ${BASEBALL.RETRY}, 종료하려면 ${BASEBALL.END}를 입력하세요.`,
};

const ERROR = {
  NAN: '[ERROR] 숫자만 입력할 수 있습니다.',
  RANGE: `[ERROR] ${BASEBALL.NUMBER_START}부터 ${BASEBALL.NUMBER_END} 사이의 숫자만 입력할 수있습니다.`,
  DUPLICATE: `[ERROR] 중복되지 않은 숫자 ${BASEBALL.NUMBER_LENGTH}개를 입력해주세요.`,
};

module.exports = { BASEBALL, MESSAGE, ERROR };
