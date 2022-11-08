const App = require('../src/App');

describe('유효성 테스트', () => {
  const app = new App();

  test('한글자씩 숫자인지 판별', () => {
    expect(app.checkTypeNumber('123')).toEqual(true);
    expect(app.checkTypeNumber('')).toEqual(false);
    expect(app.checkTypeNumber('가')).toEqual(false);
  });

  test('세글자인지 판별', () => {
    expect(app.checkLength('123')).toEqual(true);
    expect(app.checkLength('1234')).toEqual(false);
  });

  test('1~9까지의 수인지 판별', () => {
    expect(app.checkRange('123')).toEqual(true);
    expect(app.checkRange('012')).toEqual(false);
    expect(app.checkRange('120')).toEqual(false);
  });

  test('각 자리의 수가 모두 다른 수인지 판별', () => {
    expect(app.checkDuplication('123')).toEqual(true);
    expect(app.checkDuplication('223')).toEqual(false);
  });

  test('모두를 합친 유효성 검사 함수 테스트', () => {
    expect(app.checkValidation('123')).toEqual(true);
    expect(app.checkValidation('')).toEqual(false);
    expect(app.checkValidation('1234')).toEqual(false);
    expect(app.checkValidation('012')).toEqual(false);
    expect(app.checkValidation('223')).toEqual(false);
  });
});
