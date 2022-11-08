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

describe('숫자 야구 게임 종료 후 테스트', () => {
  test('처음 게임 시작 후 종료까지', () => {
    const randoms = [1, 3, 5, 5, 8, 9];
    const answers = ['246', '135', '1', '597', '589', '2'];
    const logSpy = getLogSpy();
    const messages = [
      '숫자 야구 게임을 시작합니다.',
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

  test('게임 종료 후 재시작', () => {
    const randoms = [5, 8, 9];
    const answers = ['1', '597', '589', '2'];
    const logSpy = getLogSpy();
    const messages = ['게임 종료', '1볼 1스트라이크', '3스트라이크', '게임 종료'];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    app.gameEnd();

    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test('게임 종료 후 재시작 예외 - 1 또는 2 이외의 문자', () => {
    expect(() => {
      const app = new App();
      app.gameEndvalidation('4');
    }).toThrow();
  });
});

describe('userInput 예외 테스트', () => {
  test('예외 테스트1 - 3개이상의 숫자', () => {
    const randoms = [1, 3, 5];
    const answers = ['1234'];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test('예외 테스트2 - 음수일 경우', () => {
    const randoms = [1, 3, 5];
    const answers = ['-12'];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.userInputProcess();
    }).toThrow();
  });

  test('예외 테스트3 - 반복된 숫자', () => {
    const randoms = [1, 3, 5];
    const answers = ['114'];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.userInputProcess();
    }).toThrow();
  });

  test('예외 테스트4 - 숫자가 아닌 영어', () => {
    const randoms = [1, 3, 5];
    const answers = ['aaa'];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.userInputProcess();
    }).toThrow();
  });

  test('예외 테스트5 - 숫자가 아닌 한글', () => {
    const randoms = [1, 3, 5];
    const answers = ['삼이일'];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.userInputProcess();
    }).toThrow();
  });

  test('예외 테스트6 - 특수문자', () => {
    const randoms = [1, 3, 5];
    const answers = ['&^%'];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.userInputProcess();
    }).toThrow();
  });

  test('예외 테스트7 - 연산기호', () => {
    const randoms = [1, 3, 5];
    const answers = ['10+208'];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.userInputProcess();
    }).toThrow();
  });

  test('예외 테스트8 - 공백', () => {
    const randoms = [1, 3, 5];
    const answers = ['   '];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.userInputProcess();
    }).toThrow();
  });

  test('예외 테스트9 - 1~9사이 숫자인지', () => {
    const randoms = [1, 3, 5];
    const answers = ['074'];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.userInputProcess();
    }).toThrow();
  });

  test('예외 테스트10 - 소수인 경우', () => {
    const randoms = [1, 3, 5];
    const answers = ['1.5'];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.userInputProcess();
    }).toThrow();
  });
});

describe('결과 보여주기', () => {
  test('볼 검사', () => {
    const app = new App();
    app.randomAnswer = [1, 3, 5];
    const result = app.countBalls('541');

    expect(result).toEqual(2);
  });

  test('스트라이크 검사', () => {
    const app = new App();
    app.randomAnswer = [1, 3, 5];
    const result = app.countStrikes('134');

    expect(result).toEqual(2);
  });

  test('모두 맞힌 경우', () => {
    const app = new App();
    app.randomAnswer = [1, 3, 5];
    const result = app.countStrikes('135');

    expect(result).toEqual(3);
  });

  test('낫싱 출력', () => {
    const logSpy = getLogSpy();
    const message = '낫싱';

    const app = new App();
    app.randomAnswer = [1, 3, 5];
    app.showResult('246');

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(message));
  });

  test('볼 출력', () => {
    const logSpy = getLogSpy();
    const message = ['1볼', '2볼', '3볼'];
    const answers = ['378', '251', '351'];

    answers.forEach((answer, idx) => {
      const app = new App();
      app.randomAnswer = [1, 3, 5];
      app.showResult(answer);
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(message[idx]));
    });
  });

  test('스트라이크 출력', () => {
    const logSpy = getLogSpy();
    const message = ['1스트라이크', '2스트라이크', '3스트라이크'];
    const answers = ['126', '125', '135'];

    answers.forEach((answer, idx) => {
      const app = new App();
      app.randomAnswer = [1, 3, 5];
      app.showResult(answer);
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(message[idx]));
    });
  });

  test('볼 스트라이크 출력', () => {
    const logSpy = getLogSpy();
    const message = ['2볼 1스트라이크', '1볼 1스트라이크'];
    const answers = ['315', '152'];

    answers.forEach((answer, idx) => {
      const app = new App();
      app.randomAnswer = [1, 3, 5];
      app.showResult(answer);
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(message[idx]));
    });
  });
});
