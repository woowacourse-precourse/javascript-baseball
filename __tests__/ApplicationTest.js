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

describe('convert string to array', () => {
  test('길이가 3인 숫자 String을 길이가 3인 숫자 배열로 변경', () => {
    const INPUT = '153';
    const app = new App();
    const result = app.convertInputStringToArray(INPUT);

    expect(result).toEqual([1, 5, 3]);
  });
});

describe('Judge strikes and balls', () => {
  test('스트라이크와 볼 판별', () => {
    const TARGET = [1, 2, 3];
    const INPUT = [5, 2, 1];
    const app = new App();
    const { strike, ball } = app.judgeStrikeBall(TARGET, INPUT);

    expect(strike).toEqual(1);
    expect(ball).toEqual(1);
  });
});

describe('Generate score message', () => {
  test('같은 수가 전혀 없음', () => {
    const STRIKE = 0;
    const BALL = 0;
    const app = new App();
    const result = app.scoreMessage(STRIKE, BALL);

    expect(result).toEqual('낫싱');
  });

  test('볼만 있음', () => {
    const STRIKE = 0;
    const BALL = 1;
    const app = new App();
    const result = app.scoreMessage(STRIKE, BALL);

    expect(result).toEqual('1볼');
  });

  test('스트라이크만 있음', () => {
    const STRIKE = 1;
    const BALL = 0;
    const app = new App();
    const result = app.scoreMessage(STRIKE, BALL);

    expect(result).toEqual('1스트라이크');
  });

  test('볼과 스트라이크가 함께 있음', () => {
    const STRIKE = 1;
    const BALL = 1;
    const app = new App();
    const result = app.scoreMessage(STRIKE, BALL);

    expect(result).toEqual('1볼 1스트라이크');
  });
});

describe('Generate target number', () => {
  test('target number 배열의 길이는 3', () => {
    const app = new App();
    const target = app.generateTargetNumber();

    expect(target.length).toEqual(3);
  });

  test('target number 배열의 값은 1~9 사이의 숫자', () => {
    const app = new App();
    const targetNumber = app.generateTargetNumber();
    const result = targetNumber.every((number) => number >= 1 && number <= 9);

    expect(result).toBe(true);
  });

  test('target number 배열의 값은 중복되지 않음', () => {
    const app = new App();
    const targetNumber = app.generateTargetNumber();
    const result = targetNumber.every(
      (number, index) => targetNumber.indexOf(number) === index
    );

    expect(result).toBe(true);
  });
});

describe('Validate guessed number', () => {
  test('input string의 길이가 3이 아니면 오류 throw', () => {
    const TEST_STRING = '1234';
    const app = new App();

    expect(() => app.validateGuessedNumber(TEST_STRING)).toThrow();
  });

  test('input string에 숫자가 아닌 문자가 있으면 오류 throw', () => {
    const TEST_STRING = '1a4';
    const app = new App();

    expect(() => app.validateGuessedNumber(TEST_STRING)).toThrow();
  });

  test('input string이 정상적이면 진행', () => {
    const TEST_STRING = '123';
    const app = new App();

    expect(() => app.validateGuessedNumber(TEST_STRING)).not.toThrow();
  });
});

describe('Validate restart input', () => {
  test('1 또는 2가 아닌 경우 에러 throw', () => {
    const INPUT = '3';
    const app = new App();

    expect(() => {
      app.validateRestartGameInput(INPUT);
    }).toThrow();
  });

  test('1 또는 2인 경우 진행', () => {
    const INPUT = '1';
    const app = new App();

    expect(() => {
      app.validateRestartGameInput(INPUT);
    }).not.toThrow();
  });
});

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
