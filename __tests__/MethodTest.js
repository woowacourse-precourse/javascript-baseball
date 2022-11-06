const appClass = require('../src/App');
const app = new appClass();

describe('App 클래스 메서드 테스트', () => {
  test('화면 출력 메서드', () => {
    console.log = jest.fn();
    app.print('hello');
    expect(console.log).toHaveBeenCalledWith('hello');
  });

  test('랜덤 숫자 생성 메서드', () => {
    const result = app.creatRandomNumber();
    expect(result).toHaveLength(3);
    expect([1, 2, 3, 4, 5, 6, 7, 8, 9]).toEqual(expect.arrayContaining(result));
  });
});
