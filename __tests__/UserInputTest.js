const App = require('../src/App');
const { mockQuestions } = require('../src/TestUtils');

describe('사용자 입력 검사', () => {
  test('올바른 입력 검사 1', () => {
    const userInput = ['123'];

    mockQuestions(userInput);

    expect(App.getUserInput().join('')).toEqual(userInput[0]);
  });

  test('올바른 입력 검사 2', () => {
    const userInput = ['456'];

    mockQuestions(userInput);

    expect(App.getUserInput().join('')).toEqual(userInput[0]);
  });

  test('올바른 입력 검사 3', () => {
    const userInput = ['789'];

    mockQuestions(userInput);

    expect(App.getUserInput().join('')).toEqual(userInput[0]);
  });

  test('잘못된 숫자 범위 검사 1', () => {
    const userInput = ['012'];

    mockQuestions(userInput);

    expect(() => {
      App.getUserInput();
    }).toThrow();
  });

  test('잘못된 숫자 범위 검사 2', () => {
    const userInput = ['290'];

    mockQuestions(userInput);

    expect(() => {
      App.getUserInput();
    }).toThrow();
  });

  test('잘못된 숫자 범위 검사 3', () => {
    const userInput = ['012'];

    mockQuestions(userInput);

    expect(() => {
      App.getUserInput();
    }).toThrow();
  });

  test('잘못된 입력 길이 검사 1', () => {
    const userInput = ['2'];

    mockQuestions(userInput);

    expect(() => {
      App.getUserInput();
    }).toThrow();
  });

  test('잘못된 입력 길이 검사 2', () => {
    const userInput = ['73'];

    mockQuestions(userInput);

    expect(() => {
      App.getUserInput();
    }).toThrow();
  });

  test('잘못된 입력 길이 검사 3', () => {
    const userInput = ['1987'];

    mockQuestions(userInput);

    expect(() => {
      App.getUserInput();
    }).toThrow();
  });

  test('잘못된 입력 문자 검사 1', () => {
    const userInput = ['32삼'];

    mockQuestions(userInput);

    expect(() => {
      App.getUserInput();
    }).toThrow();
  });

  test('잘못된 입력 문자 검사 2', () => {
    const userInput = ['사오육'];

    mockQuestions(userInput);

    expect(() => {
      App.getUserInput();
    }).toThrow();
  });

  test('잘못된 입력 문자 검사 3', () => {
    const userInput = ['def'];

    mockQuestions(userInput);

    expect(() => {
      App.getUserInput();
    }).toThrow();
  });

  test('중복 숫자 입력 검사 1', () => {
    const userInput = ['111'];

    mockQuestions(userInput);

    expect(() => {
      App.getUserInput();
    }).toThrow();
  });

  test('중복 숫자 입력 검사 2', () => {
    const userInput = ['989'];

    mockQuestions(userInput);

    expect(() => {
      App.getUserInput();
    }).toThrow();
  });

  test('중복 숫자 입력 검사 3', () => {
    const userInput = ['477'];

    mockQuestions(userInput);

    expect(() => {
      App.getUserInput();
    }).toThrow();
  });
});
