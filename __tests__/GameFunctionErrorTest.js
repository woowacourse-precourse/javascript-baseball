const App = require('../src/App');

describe('사용자 입력 길이 테스트', () => {
  test('입력한 값이 3글자 일때 에러가 발생하지 않는지 체크', () => {
    const app = new App();

    expect(() => app.arrayLengthCheck([1, 2, 3])).not.toThrow();
  });

  test('입력한 값이 4글자 일때 에러가 발생하는지 체크', () => {
    const app = new App();

    expect(() => app.arrayLengthCheck([1, 2, 3, 4])).toThrow();
  });

  test('입력한 값이 4글자 일때 에러발생 문구 체크', () => {
    const app = new App();

    expect(() => app.arrayLengthCheck([1, 2, 3, 4])).toThrowError(
      '❗️ 숫자 3개를 입력하세요. ❗️'
    );
  });
});
describe('사용자 입력 유효성 테스트', () => {
  test('입력한 값에 0이 들어갈때 에러 발생하는지 체크', () => {
    const app = new App();

    expect(() => app.arrayValueRangeCheck([0, 1, 2])).toThrow();
  });

  test('입력한 값에 0이 들어갈때 에러 문구 체크', () => {
    const app = new App();

    expect(() => app.arrayValueRangeCheck([0, 1, 2])).toThrowError(
      '❗️ 1부터 9사이의 숫자를 입력하세요. ❗️'
    );
  });
});

describe('사용자 입력 중복 테스트', () => {
  test('입력한 값에 중복 숫자가 없을때 에러가 발생하지 않는지 체크', () => {
    const app = new App();

    expect(() => app.arrayValueDuplicateCheck([1, 2, 3])).not.toThrow();
  });

  test('입력한 값에 중복 숫자가 들어갈때 에러 발생하는지 체크', () => {
    const app = new App();

    expect(() => app.arrayValueDuplicateCheck([1, 1, 2])).toThrow();
  });

  test('입력한 값에 중복 숫자가 들어갈때 에러 문구 체크', () => {
    const app = new App();

    expect(() => app.arrayValueDuplicateCheck([1, 1, 2])).toThrowError(
      '❗️ 중복되지 않은 숫자를 입력하세요. ❗️'
    );
  });
});
