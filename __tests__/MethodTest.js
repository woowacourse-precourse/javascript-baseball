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

  test('strike 메서드', () => {
    const input = [1, 2, 3];
    const computer = [3, 2, 1];
    const strike = app.compareStrike(input, computer);
    expect(strike).toBe(1);
    expect(strike).not.toBe(2);
    expect(strike).not.toBe(3);
  });

  test('ball 메서드', () => {
    const input = [1, 2, 3];
    const computer = [3, 2, 1];
    const ball = app.compareBall(input, computer);
    expect(ball).toBe(2);
    expect(ball).not.toBe(3);
    expect(ball).not.toBe(1);
  });

  test('compare 메서드', () => {
    const input = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [1, 2, 3],
    ];
    const computer = [
      [1, 2, 3],
      [5, 4, 6],
      [9, 7, 8],
      [7, 8, 9],
    ];
    const messages = ['3스트라이크', '2볼 1스트라이크', '3볼', '낫싱'];
    messages.forEach((output, index) => {
      const result = app.compare(input[index], computer[index]);
      expect(result).toBe(output);
    });
  });
});
