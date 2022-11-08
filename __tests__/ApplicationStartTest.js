const MissionUtils = require('@woowacourse/mission-utils');
const App = require('../src/App.js');

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

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('애플리케이션 시작 기능', () => {
  test('애플리케이션 시작 테스트', () => {
    const randoms = [1, 3, 5];
    const answers = ['135', '2'];
    const logSpy = getLogSpy();
    const messages = [
      '숫자 야구 게임을 시작합니다.',
      '3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료',
      '숫자 야구 게임을 종료합니다.',
    ];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    app.play();

    messages.forEach(output => {
      expect(logSpy).toHaveBeenCalledWith(output);
    });
  });

  test('정답 값 유효성 테스트 #1', () => {
    const randoms = [2, 4, 4];
    const answers = ['246'];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test('정답 값 유효성 테스트 #2', () => {
    const randoms = ['1', '2', '3'];
    const answers = ['246'];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test('정답 값 유효성 테스트 #3', () => {
    const randoms = [0, '2', '3'];
    const answers = ['246'];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });
});
