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
});

describe('추가 테스트', () => {
  test('게임 진행 1', () => {
    const randoms = [7, 2, 6, 4, 9, 8];
    const answers = [
      '987',
      '123',
      '654',
      '159',
      '268',
      '237',
      '763',
      '823',
      '673',
      '726',
      '1',
      '123',
      '469',
      '954',
      '749',
      '486',
      '498',
      '2',
    ];

    const logSpy = getLogSpy();
    const messages = [
      '1볼',
      '1스트라이크',
      '1볼',
      '낫싱',
      '2볼',
      '2볼',
      '1볼 1스트라이크',
      '1스트라이크',
      '2볼',
      '3스트라이크',
      '게임 종료',
      '낫싱',
      '1볼 1스트라이크',
      '2볼',
      '2볼',
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
  test('게임 진행 2', () => {
    const randoms = [1, 2, 3];
    const answers = ['312', '127', '132'];

    const logSpy = getLogSpy();
    const messages = ['3볼', '2스트라이크', '2볼 1스트라이크'];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    app.play();

    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test('예외처리 테스트 1', () => {
    const randoms = [1, 2, 3];
    const answers = ['1234'];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test('예외처리 테스트 2', () => {
    const randoms = [1, 2, 3];
    const answers = ['12'];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test('예외처리 테스트 3', () => {
    const randoms = [1, 2, 3];
    const answers = ['122'];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test('예외처리 테스트 4', () => {
    const randoms = [1, 2, 3];
    const answers = ['12s'];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });
});
