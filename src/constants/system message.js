const { GAME_NUMBER, REPLAY_NUMBER } = require('./game numbers');

const SYSTEM_MESSAGE = Object.freeze({
  START: '숫자 야구 게임을 시작합니다.',
  END: `${GAME_NUMBER.CORRECT}개의 숫자를 모두 맞히셨습니다! 게임 종료`,
  RESTART: `게임을 새로 시작하려면 ${REPLAY_NUMBER.KEEP_PLAY}, 종료하려면 ${REPLAY_NUMBER.EXIT}를 입력하세요\n`,
  GET_NUMBER: '숫자를 입력해주세요 : ',
});

const COUNT_MESSAGE = Object.freeze({
  NOTHING: '낫싱',
  STRIKE: '스트라이크',
  BALL: '볼',
  CORRECT: `${GAME_NUMBER.CORRECT}스트라이크`,
  EMPTY: '',
});

module.exports = { SYSTEM_MESSAGE, COUNT_MESSAGE };
