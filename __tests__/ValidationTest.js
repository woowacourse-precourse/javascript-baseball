const Validator = require('../src/Validator');

describe('유효성 검증 테스트', () => {
  test('numberInputValidator 메서드로 서로 다른 3자리의 숫자인지 검증(case1)', () => {
    const RESULT = Validator.numberInputValidator('123');
    expect(RESULT).toBe(true);
  });

  test('numberInputValidator 메서드로 서로 다른 3자리의 숫자인지 검증(case2)', () => {
    const RESULT = Validator.numberInputValidator('111');
    expect(RESULT).toBe(false);
  });

  test('menuInputValidator 메서드로 1과 2 중 하나의 숫자인지 검증(case1)', () => {
    const RESULT = Validator.menuInputValidator('1');
    expect(RESULT).toBe(true);
  });

  test('menuInputValidator 메서드로 1과 2 중 하나의 숫자인지 검증(case2)', () => {
    const RESULT = Validator.menuInputValidator('3');
    expect(RESULT).toBe(false);
  });

  test('서로 다른 3자리의 숫자가 아니면 예외 발생', () => {
    expect(() => {
      Validator.validate('112', Validator.numberInputValidator);
    }).toThrow();
  });

  test('1과 2중 하나의 숫자가 아니면 예외 발생', () => {
    expect(() => {
      Validator.validate('3', Validator.menuInputValidator);
    }).toThrow();
  });
});
