const ANSWER = require('./Answer');
const GAME = require('./Game');

const ERROR = {
  LENGTH: `${ANSWER.LENGTH}개로 입력해주세요.`,
  NAN: '숫자만 입력해주세요.',
  RANGE: `${ANSWER.MIN} ~ ${ANSWER.MAX}사이의 숫자만 입력해주세요.`,
  DUPLICATION: '중복된 숫자는 입력할 수 없습니다.',
  INVALID_INPUT: `올바른 입력이 아닙니다. 게임을 새로 시작하려면 ${GAME.RESTART}, 종료하려면 ${GAME.EXIT}를 입력하세요.`,
};

module.exports = ERROR;
