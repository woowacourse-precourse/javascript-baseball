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

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('시작 문구 테스트', () => {
  test('처음 게임 시작 문구를 출력 테스트', () => {
    const logSpy = getLogSpy();
    const app = new App();
    app.play();

    expect(logSpy).toHaveBeenCalledWith('숫자 야구 게임을 시작합니다.');
  });

  test('재시작은 시작 문구가 출력 되지 않아야 한다', () => {
    const answers = ['1'];
    const logSpy = getLogSpy();
    mockQuestions(answers);
    const app = new App();
    app.askRestartOrExit();

    expect(logSpy).not.toHaveBeenCalledWith('숫자 야구 게임을 시작합니다.');
  });
});

describe('숫자 야구 게임 실행 테스트', () => {
  test('실행 예시 1', () => {
    const randoms = [4, 2, 5];
    const answers = ['123', '456', '789', '425', '2'];
    const logSpy = getLogSpy();
    const messages = [
      '1스트라이크',
      '1볼 1스트라이크',
      '낫싱',
      '3스트라이크',
      '게임 종료',
    ];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    app.play();

    messages.forEach(output => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test('실행 예시 2', () => {
    const randoms = [7, 1, 3];
    const answers = ['123', '145', '671', '216', '713', '2'];
    const logSpy = getLogSpy();
    const messages = [
      '1볼 1스트라이크',
      '1볼',
      '2볼',
      '1스트라이크',
      '3스트라이크',
      '게임 종료',
    ];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    app.play();

    messages.forEach(output => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
});

describe('입력값 예외 테스트', () => {
  test('중복 숫자가 있는지 테스트', () => {
    const randoms = [1, 3, 5];
    const answers = ['223'];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test('빈칸이 포함된 경우 테스트', () => {
    const randoms = [1, 3, 5];
    const answers = [''];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test('한글자만 입력한 경우 테스트', () => {
    const randoms = [1, 3, 5];
    const answers = ['1'];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test('특수문자를 입력 했을 경우 테스트', () => {
    const randoms = [1, 3, 5];
    const answers = ['*@/'];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test('한글을 입력했을 경우 테스트', () => {
    const randoms = [1, 3, 5];
    const answers = ['가나다'];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test('숫자 0이 들어간 경우 테스트', () => {
    const randoms = [1, 3, 5];
    const answers = ['012'];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });
});
