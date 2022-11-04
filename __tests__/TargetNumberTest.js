const App = require('../src/App');

describe('Target number test', () => {
  test('target number 배열의 길이는 3', () => {
    const target = App.generateTargetNumber();

    expect(target.length).toEqual(3);
  });

  test('target number 배열의 값은 1~9 사이의 숫자', () => {
    const targetNumber = App.generateTargetNumber();
    const result = targetNumber.every((number) => number >= 1 && number <= 9);

    expect(result).toBe(true);
  });

  test('target number 배열의 값은 중복되지 않음', () => {
    const targetNumber = App.generateTargetNumber();
    const result = targetNumber.every(
      (number, index) => targetNumber.indexOf(number) === index
    );

    expect(result).toBe(true);
  });
});
