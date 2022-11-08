const App = require('../src/App');
const MissionUtils = require('@woowacourse/mission-utils');
const handleGameException = require('../src/handleException');

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

describe('숫자 야구 게임', () => {
  test('게임 종료 후 재시작', () => {
    const randoms = [1, 3, 5, 5, 8, 9];
    const answers = ['246', '135', '1', '597', '589', '2'];
    const logSpy = getLogSpy();
    const messages = [
      '낫싱',
      '3스트라이크',
      '1볼 1스트라이크',
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

  test('예외 테스트', () => {
    const randoms = [1, 3, 5];
    const answers = ['1234'];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test('사용자 입력 1-9 사이의 정수 예외 테스트(문자 포함)', () => {
    const input = 'a34';

    expect(() => handleGameException(input)).toThrow();
  });

  test('사용자 입력 1-9 사이의 정수 예외 테스트(범위 벗어난 숫자)', () => {
    const input = '904';

    expect(() => handleGameException(input)).toThrow();
  });

  test('사용자 입력 서로 다른 수 예외 테스트', () => {
    const input = '994';

    expect(() => handleGameException(input)).toThrow();
  });

  test('사용자 입력 길이 예외 테스트', () => {
    const input = '12';

    expect(() => handleGameException(input)).toThrow();
  });
});
