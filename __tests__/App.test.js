const App = require('../src/App');

describe('숫자 야구 입력 테스트', () => {
  test('공백 입력', () => {
    const app = new App();
    expect(() => {
      app.checkInputNumber([' ']);
    }).toThrow('입력값이 잘못되었습니다.');
  });

  test('특수문자 입력', () => {
    const app = new App();
    expect(() => {
      app.checkInputNumber(['!', '2', '9']);
    }).toThrow('입력값이 잘못되었습니다.');
  });

  test('0 입력', () => {
    const app = new App();
    expect(() => {
      app.checkInputNumber(['0', '1', '2']);
    }).toThrow('입력값이 잘못되었습니다.');
  });
});
