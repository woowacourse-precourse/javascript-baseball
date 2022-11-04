const MissionUtils = require('@woowacourse/mission-utils');
const App = require('../src/App');

const mockQuestion = answer => {
  MissionUtils.Console.readLine = jest.fn();
  MissionUtils.Console.readLine.mockImplementation((question, callback) => {
    callback(answer);
  });
};

describe('입력값 유효성 검증 테스트', () => {
  test('validateUserInput 메서드로 입력값이 적절한지 검증(case1)', () => {
    const RESULT = App.validateUserInput('123');
    expect(RESULT).toBe(true);
  });

  test('validateUserInput 메서드로 입력값이 적절한지 검증(case2)', () => {
    const RESULT = App.validateUserInput('111');
    expect(RESULT).toBe(false);
  });

  test('validateUserInput 메서드로 입력값이 적절한지 검증(case3)', () => {
    const RESULT = App.validateUserInput('abc');
    expect(RESULT).toBe(false);
  });

  test('입력 값이 적절하지 않을 때 예외 발생 테스트', () => {
    mockQuestion('1234');
    expect(() => {
      const app = new App();
      app.setUserInput();
    }).toThrow();
  });
});
