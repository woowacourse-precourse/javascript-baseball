const appClass = require('../src/App');
const app = new appClass();

describe('App 클래스 메서드 테스트', () => {
  test('화면 출력 메서드', () => {
    console.log = jest.fn();
    app.print('hello');
    expect(console.log).toHaveBeenCalledWith('hello');
  });
});
