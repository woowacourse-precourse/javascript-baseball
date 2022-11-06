const MissionUtils = require('@woowacourse/mission-utils');
const App = require('../src/App');

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
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe('사용자 입력 검사', () => {
  test('올바른 입력 검사 1', () => {
    const randoms = [1, 3, 5];
    const answers = ['123'];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(App.getUserInput().join('')).toEqual(answers[0]);
  });

  test('올바른 입력 검사 2', () => {
    const randoms = [1, 3, 5];
    const answers = ['456'];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(App.getUserInput().join('')).toEqual(answers[0]);
  });

  test('올바른 입력 검사 3', () => {
    const randoms = [1, 3, 5];
    const answers = ['789'];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(App.getUserInput().join('')).toEqual(answers[0]);
  });

  test('잘못된 숫자 범위 검사 1', () => {
    const randoms = [1, 3, 5];
    const answers = ['012'];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      App.getUserInput();
    }).toThrow();
  });

  test('잘못된 숫자 범위 검사 2', () => {
    const randoms = [1, 3, 5];
    const answers = ['290'];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      App.getUserInput();
    }).toThrow();
  });

  test('잘못된 숫자 범위 검사 3', () => {
    const randoms = [1, 3, 5];
    const answers = ['012'];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      App.getUserInput();
    }).toThrow();
  });

  test('잘못된 입력 길이 검사 1', () => {
    const randoms = [1, 3, 5];
    const answers = ['2'];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      App.getUserInput();
    }).toThrow();
  });

  test('잘못된 입력 길이 검사 2', () => {
    const randoms = [1, 3, 5];
    const answers = ['73'];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      App.getUserInput();
    }).toThrow();
  });

  test('잘못된 입력 길이 검사 3', () => {
    const randoms = [1, 3, 5];
    const answers = ['1987'];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      App.getUserInput();
    }).toThrow();
  });

  test('잘못된 입력 문자 검사 1', () => {
    const randoms = [1, 3, 5];
    const answers = ['32삼'];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      App.getUserInput();
    }).toThrow();
  });

  test('잘못된 입력 문자 검사 2', () => {
    const randoms = [1, 3, 5];
    const answers = ['사오육'];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      App.getUserInput();
    }).toThrow();
  });

  test('잘못된 입력 문자 검사 3', () => {
    const randoms = [1, 3, 5];
    const answers = ['def'];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      App.getUserInput();
    }).toThrow();
  });

  test('중복 숫자 입력 검사 1', () => {
    const randoms = [1, 3, 5];
    const answers = ['111'];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      App.getUserInput();
    }).toThrow();
  });

  test('중복 숫자 입력 검사 2', () => {
    const randoms = [1, 3, 5];
    const answers = ['989'];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      App.getUserInput();
    }).toThrow();
  });

  test('중복 숫자 입력 검사 3', () => {
    const randoms = [1, 3, 5];
    const answers = ['477'];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      App.getUserInput();
    }).toThrow();
  });
});
