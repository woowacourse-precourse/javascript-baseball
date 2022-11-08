import MissionUtils from '@woowacourse/mission-utils';
import { jest } from '@jest/globals';
import App from '../src/App.js';

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

describe('게임 진행 기능', () => {
  test('사용자 입력 값 유효성 테스트 #1', () => {
    const randoms = [1, 3, 5];
    const answers = ['1234'];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test('사용자 입력 값 유효성 테스트 #2', () => {
    const randoms = [1, 3, 5];
    const answers = [''];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test('사용자 입력 값 유효성 테스트 #3', () => {
    const randoms = [1, 3, 5];
    const answers = ['a'];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test('사용자 입력 값 유효성 테스트 #4', () => {
    const randoms = [1, 3, 5];
    const answers = [NaN];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test('사용자 입력 값 유효성 테스트 #5', () => {
    const randoms = [1, 3, 5];
    const answers = [undefined];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test('사용자 입력 값 유효성 테스트 #6', () => {
    const randoms = [1, 3, 5];
    const answers = [null];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test('사용자 입력 값 유효성 테스트 #7', () => {
    const randoms = [1, 3, 5];
    const answers = [false];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test('사용자 입력 값 유효성 테스트 #8', () => {
    const randoms = [1, 3, 5];
    const answers = [true];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test('사용자 입력 값 유효성 테스트 #9', () => {
    const randoms = [1, 3, 5];
    const answers = [123];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test('사용자 입력 값 유효성 테스트 #10', () => {
    const randoms = [1, 3, 5];
    const answers = [1];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test('사용자 입력 값 유효성 테스트 #11', () => {
    const randoms = [1, 3, 5, 5, 8, 9, 9, 8, 7];
    const answers = ['246', '135', '1', '597', '589', '1', '976', '98'];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test('사용자 입력 값 유효성 테스트 #12', () => {
    const randoms = [1, 3, 5, 5, 8, 9, 9, 8, 7];
    const answers = ['246', '135', '1', '597', '589', '1', '976', ''];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test('사용자 입력 값 유효성 테스트 #11', () => {
    const randoms = [1, 3, 5, 5, 8, 9, 9, 8, 7];
    const answers = ['246', '135', '1', '597', '589', '3'];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test('게임 종료 후 재시작 #1', () => {
    const randoms = [1, 3, 5, 5, 8, 9];
    const answers = ['246', '135', '1', '597', '589', '2'];
    const logSpy = getLogSpy();
    const messages = [
      '숫자 야구 게임을 시작합니다.',
      '낫싱',
      '3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료',
      '1볼 1스트라이크',
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

  test('게임 종료 후 재시작 #2', () => {
    const randoms = [1, 3, 5, 5, 8, 9, 9, 8, 7];
    const answers = ['246', '135', '1', '597', '589', '1', '976', '987', '2'];
    const logSpy = getLogSpy();
    const messages = [
      '숫자 야구 게임을 시작합니다.',
      '낫싱',
      '3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료',
      '1볼 1스트라이크',
      '3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료',
      '1볼 1스트라이크',
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
});
