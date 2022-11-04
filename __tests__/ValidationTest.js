const App = require('../src/App');

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
});
