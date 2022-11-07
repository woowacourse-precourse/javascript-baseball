const App = require('../src/App');
const MissionUtils = require('@woowacourse/mission-utils');
const TEXT = require('../src/constants/constants');
const validation = require('../src/validation/validation');

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
    }).toThrow(TEXT.ERROR_MESSAGE);
  });
});

describe('validation 함수 테스트', () => {
  test('validation', () => {
    expect(validation('123')).toBeTruthy();
    expect(validation('456')).toBeTruthy();
    expect(validation('112')).not.toBeTruthy();
    expect(validation('120')).not.toBeTruthy();
    expect(validation('sdf')).not.toBeTruthy();
    expect(validation('1234')).not.toBeTruthy();
    expect(validation(' ')).not.toBeTruthy();
    expect(validation('[]')).not.toBeTruthy();
    expect(validation('')).not.toBeTruthy();
  });
});

describe('App 클래스 메서드 테스트', () => {
  test('화면 출력 메서드', () => {
    const app = new App();

    console.log = jest.fn();
    app.print('hello');
    expect(console.log).toHaveBeenCalledWith('hello');
  });

  test('strike 메서드', () => {
    const app = new App();
    const input = [1, 2, 3];
    const computer = [3, 2, 1];
    const strike = app.compareStrike(input, computer);
    expect(strike).toBe(1);
    expect(strike).not.toBe(2);
    expect(strike).not.toBe(3);
  });

  test('ball 메서드', () => {
    const app = new App();
    const input = [1, 2, 3];
    const computer = [3, 2, 1];
    const ball = app.compareBall(input, computer);
    expect(ball).toBe(2);
    expect(ball).not.toBe(3);
    expect(ball).not.toBe(1);
  });

  test('compare 메서드', () => {
    const app = new App();
    const input = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [1, 2, 3],
    ];
    const computer = [
      [1, 2, 3],
      [5, 4, 6],
      [9, 7, 8],
      [7, 8, 9],
    ];
    const messages = ['3스트라이크', '2볼 1스트라이크', '3볼', '낫싱'];
    messages.forEach((output, index) => {
      const result = app.compare(input[index], computer[index]);
      expect(result).toBe(output);
    });
  });
});
