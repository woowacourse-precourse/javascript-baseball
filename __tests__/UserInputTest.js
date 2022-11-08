/* eslint-disable max-lines-per-function */
const App = require('../src/App');
const MissionUtils = require('@woowacourse/mission-utils');

const mockQuestions = answers => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((question, callback) => {
      callback(input);
    });
  }, MissionUtils.Console.readLine);
};

const mockRandoms = numbers => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

describe('사용자 입력값 평가 테스트', () => {
  test('입력값 예외 처리 테스트(문자)', () => {
    const randoms = [1, 2, 3];
    const answers = ['cba'];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow('잘못된 입력입니다.숫자를 입력해주세요. ');
  });

  test('입력값 예외 처리 테스트(길이)', () => {
    const randoms = [1, 2, 3];
    const answers = ['1234'];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow('잘못된 입력입니다. 3자리 수를 입력해주세요. ');
  });

  test('입력값 예외 처리 테스트(중복)', () => {
    const randoms = [1, 2, 3];
    const answers = ['222'];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow('잘못된 입력입니다. 1부터 9까지 서로 다른 수로 이루어진 3자리 수를 입력해주세요. ');
  });

  test('입력값 예외 처리 테스트(0포함)', () => {
    const randoms = [1, 2, 3];
    const answers = ['012'];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow('잘못된 입력입니다. 1부터 9까지 서로 다른 수로 이루어진 3자리 수를 입력해주세요. ');
  });
});
