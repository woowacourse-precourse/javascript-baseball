/* eslint-disable max-lines-per-function */
const App = require('../src/App');
const MissionUtils = require('@woowacourse/mission-utils');

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};
function checkAnswer(number) {
  if (Number.isNaN(parseFloat(number))) {
    return false;
  }
  if (number.length !== 3) {
    return false;
  }
  const inputDigit = number.split('').map(Number);
  if (new Set(inputDigit).size !== 3 || number.includes('0')) {
    return false;
  }
  return true;
}
function answerTest() {
  const answer = App.createAnswer();
  const validAnswer = checkAnswer(answer);
  expect(validAnswer).toEqual(true);
}

describe('게임 시작 전 테스트', () => {
  for (let i = 1; i <= 50; i += 1) {
    test(`정답 생성`, answerTest);
  }
});

describe('게임 참여 단계 테스트', () => {
  test('게임 시작 문구 출력 테스트', () => {
    const logpy = getLogSpy();
    const app = new App();
    app.play();
    expect(logpy).toHaveBeenCalledWith('숫자 야구 게임을 시작합니다.');
  });
});
