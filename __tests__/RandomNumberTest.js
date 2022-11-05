const App = require('../src/App');

describe('기능 구현 테스트(게임 시작 시 3자리 랜덤 숫자 생성 함수) : computer 💻', () => {
  test('✨ 서로 다른 3자리 숫자로 이루어져 있습니다.', () => {
    const app = new App();
    const numbers = app.makeRandomNumbers();
    const numbersLength = [...new Set(numbers)].length;

    expect(numbersLength).toBe(3);
  });

  test('✨ 1~9까지의 숫자로만 이루어져 있습니다.', () => {
    const app = new App();
    const numbers = app.makeRandomNumbers();
    const reg = /[1-9]{1}/;
    const fromOneToNine = (number) => reg.test(number);
    const isOneToNine = numbers.map(String).filter(fromOneToNine).length === 3;

    expect(isOneToNine).toBeTruthy();
  });
});
