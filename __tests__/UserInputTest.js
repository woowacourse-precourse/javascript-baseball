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

describe('사용자 입력 검사', () => {
  test('올바른 입력 검사 1', () => {
    const answers = ['123'];

    mockQuestions(answers);

    expect(App.getUserInput().join('')).toEqual(answers[0]);
  });

  test('올바른 입력 검사 2', () => {
    const answers = ['456'];

    mockQuestions(answers);

    expect(App.getUserInput().join('')).toEqual(answers[0]);
  });

  test('올바른 입력 검사 3', () => {
    const answers = ['789'];

    mockQuestions(answers);

    expect(App.getUserInput().join('')).toEqual(answers[0]);
  });

  test('잘못된 숫자 범위 검사 1', () => {
    const answers = ['012'];

    mockQuestions(answers);

    expect(() => {
      App.getUserInput();
    }).toThrow();
  });

  test('잘못된 숫자 범위 검사 2', () => {
    const answers = ['290'];

    mockQuestions(answers);

    expect(() => {
      App.getUserInput();
    }).toThrow();
  });

  test('잘못된 숫자 범위 검사 3', () => {
    const answers = ['012'];

    mockQuestions(answers);

    expect(() => {
      App.getUserInput();
    }).toThrow();
  });

  test('잘못된 입력 길이 검사 1', () => {
    const answers = ['2'];

    mockQuestions(answers);

    expect(() => {
      App.getUserInput();
    }).toThrow();
  });

  test('잘못된 입력 길이 검사 2', () => {
    const answers = ['73'];

    mockQuestions(answers);

    expect(() => {
      App.getUserInput();
    }).toThrow();
  });

  test('잘못된 입력 길이 검사 3', () => {
    const answers = ['1987'];

    mockQuestions(answers);

    expect(() => {
      App.getUserInput();
    }).toThrow();
  });

  test('잘못된 입력 문자 검사 1', () => {
    const answers = ['32삼'];

    mockQuestions(answers);

    expect(() => {
      App.getUserInput();
    }).toThrow();
  });

  test('잘못된 입력 문자 검사 2', () => {
    const answers = ['사오육'];

    mockQuestions(answers);

    expect(() => {
      App.getUserInput();
    }).toThrow();
  });

  test('잘못된 입력 문자 검사 3', () => {
    const answers = ['def'];

    mockQuestions(answers);

    expect(() => {
      App.getUserInput();
    }).toThrow();
  });

  test('중복 숫자 입력 검사 1', () => {
    const answers = ['111'];

    mockQuestions(answers);

    expect(() => {
      App.getUserInput();
    }).toThrow();
  });

  test('중복 숫자 입력 검사 2', () => {
    const answers = ['989'];

    mockQuestions(answers);

    expect(() => {
      App.getUserInput();
    }).toThrow();
  });

  test('중복 숫자 입력 검사 3', () => {
    const answers = ['477'];

    mockQuestions(answers);

    expect(() => {
      App.getUserInput();
    }).toThrow();
  });
});
