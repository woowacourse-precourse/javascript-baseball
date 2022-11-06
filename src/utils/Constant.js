const RESTART = '1';
const REG_EXP = /^[1-9]{3}$/;
const ROUND_END = false;
const ROUND_CONTINUE = true;
const MSG = {
  START: '숫자 야구 게임을 시작합니다.',
  INPUT: '숫자를 입력해주세요 : ',
  END: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
  SELECT: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
};
const BALL_STATUS = {
  BALL: '볼',
  STRIKE: '스트라이크',
};
const NOTHING = '낫싱';

const ERROR = {
  INPUT_VALID: '1~9 사이의 3자리 숫자가 아닙니다',
};

module.exports = {
  RESTART,
  MSG,
  BALL_STATUS,
  NOTHING,
  ERROR,
  REG_EXP,
  ROUND_END,
  ROUND_CONTINUE,
};
