const App = require('../src/App');

describe('Error 테스트', () => {
  const app = new App();
  test('중복된 숫자 에러', () => {
    expect(() => app.checkError('111')).toThrow();
  });
  test('숫자 범위 에러', () => {
    expect(() => app.checkError('120')).toThrow();
  });
  test('숫자 개수 에러', () => {
    expect(() => app.checkError('1234')).toThrow();
  });
  test('숫자 외 입력 에러', () => {
    expect(() => app.checkError('12a')).toThrow();
  });
});
