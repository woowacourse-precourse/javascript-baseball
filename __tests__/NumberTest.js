const App = require('../src/App');
const MissionUtils = require('@woowacourse/mission-utils');

const mockQuestions = answers => {
  MissionUtils.Console.readLine = jest.fn();
  MissionUtils.Console.readLine.mockImplementationOnce((question, callback) => {
    callback(answers);
  });
};

describe('숫자 야구 게임', () => {
  test('3가지 랜덤 숫자', () => {
    const app = new App();
    const threeRandomNumber = app.getRandomNumber();
    expect(threeRandomNumber.join('')).toMatch(/[1-9]{3}/g);
  });

  test('3가지 숫자 입력', () => {
    const answers = '123';
    mockQuestions(answers);
    const app = new App();
    app.getUserAnswer(answers);
    expect(answers).not.toBeNull();
  });

  test('0 포함 입력 예외 테스트', () => {
    const answers = '012';
    mockQuestions(answers);
    expect(() => {
      const app = new App();
      app.getUserAnswer(answers);
    }).toThrow();
  });

  test('알파벳 포함 입력 예외 테스트', () => {
    const answers = 'a12';
    mockQuestions(answers);
    expect(() => {
      const app = new App();
      app.getUserAnswer(answers);
    }).toThrow();
  });

  test('공백 포함 입력 예외 테스트', () => {
    const answers = '1 23';
    mockQuestions(answers);
    expect(() => {
      const app = new App();
      app.getUserAnswer(answers);
    }).toThrow();
  });

  test('특수문자 포함 입력 예외 테스트', () => {
    const answers = '!23';
    mockQuestions(answers);
    expect(() => {
      const app = new App();
      app.getUserAnswer(answers);
    }).toThrow();
  });

  test('4가지 숫자 입력 예외 테스트', () => {
    const answers = '1234';
    mockQuestions(answers);
    expect(() => {
      const app = new App();
      app.getUserAnswer(answers);
    }).toThrow();
  });
});
