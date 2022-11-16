const { SETTING, HINT, END_INPUT } = require('./game');

const APP = Object.freeze({
  INVALID_END_INPUT: `${END_INPUT.PLAY_AGAIN}과 ${END_INPUT.CLOSE_APP} 외의 입력은 게임을 종료합니다.`,
});

const BASEBALL = Object.freeze({
  ONLY_NUMBER: '야구공은 숫자만 가능합니다.',
  LENGTH: `야구공은 ${SETTING.NUMBER_COUNT}자리입니다.`,
  DUPLICATE: '야구공은 중복된 숫자가 있으면 안됩니다.',
});

const BASEBALL_HINT = Object.freeze({
  ONLY_NUMBER: '스트라이크와 볼 갯수는 숫자여야 합니다.',
  IN_RANGE: `스트라이크와 볼은 최소 ${HINT.MIN_COUNT}개부터 최대 ${SETTING.NUMBER_COUNT}개입니다.`,
});

const USER = Object.freeze({
  INVALID_INSTANCE: 'baseballHint는 BaseballHint 객체여야 합니다.',
});

module.exports = {
  APP,
  BASEBALL,
  BASEBALL_HINT,
  USER,
};
