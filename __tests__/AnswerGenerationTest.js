const MissionUtils = require('@woowacourse/mission-utils');
const App = require('../src/App');

function answerTest() {
  const answer = App.generateAnswer();
  const isValid = App.isValidAnswerValue(answer);
  // MissionUtils.Console.print(answer.join(''));
  expect(isValid).toEqual(true);
}

describe('무작위 정답 숫자 생성 확인', () => {
  for (let i = 1; i <= 100; i += 1) {
    test(`무작위 정답 생성 ${i}`, answerTest);
  }
});
