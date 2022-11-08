const App = require('../src/App');
const MissionUtils = require('@woowacourse/mission-utils');

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((question, callback) => {
      callback(input);
    });
  }, MissionUtils.Console.readLine);
};

const mockRandoms = (numbers) => {
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

describe('숫자 야구 기능 테스트', () => {
  test('사용자가 입력한 값이 정상인지 확인', () => {
    const inputs = ['153', '462', '117', '1234'];
    const answers = [true, true, false, false];

    const app = new App();

    answers.forEach((answer, index) => {
      const inputNumber = app.isValid(inputs[index]);
      expect(inputNumber).toEqual(answer);
    });
  });

  test('게임 종료 후 재시작하는 경우', () => {
    const randoms = [1, 3, 5, 5, 8, 9];
    const answers = ['312', '315', '135', '1', '583', '589', '2'];
    const logSpy = getLogSpy();
    const messages = [
      '2볼',
      '2볼 1스트라이크',
      '3스트라이크',
      '2스트라이크',
      '3스트라이크',
      '게임 종료',
    ];
    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    app.play();

    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test('게임 종료 후 잘못 입력한 경우', () => {
    const randoms = [1, 3, 5];
    const answers = ['312', '315', '135', '2'];
    const logSpy = getLogSpy();
    const messages = ['2볼', '2볼 1스트라이크', '3스트라이크'];
    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    app.play();

    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });

    expect(() => {
      app = new App();
      app.endGame(3);
    }).toThrow();
  });
});
