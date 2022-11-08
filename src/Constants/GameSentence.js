const ANSWER = require('./Answer');
const GAME = require('./Game');

const GAME_SENTENCE = {
  OPENING: '숫자 야구 게임을 시작합니다.',
  INPUT: '숫자를 입력해주세요 : ',
  CORRECT: `${ANSWER.LENGTH}개의 숫자를 모두 맞히셨습니다! 게임 종료`,
  ASK_MORE: `게임을 새로 시작하려면 ${GAME.RESTART}, 종료하려면 ${GAME.EXIT}를 입력하세요.`,
};

module.exports = GAME_SENTENCE;
