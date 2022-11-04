const App = require('../src/App');

describe('Validate guessed number test', () => {
  test('input string의 길이가 3이 아니면 오류 throw', () => {
    const TEST_STRING = '1234';

    expect(() => App.validateGuessedNumber(TEST_STRING)).toThrow();
  });

  test('input string에 숫자가 아닌 문자가 있으면 오류 throw', () => {
    const TEST_STRING = '1a4';

    expect(() => App.validateGuessedNumber(TEST_STRING)).toThrow();
  });

  test('input string이 정상적이면 진행', () => {
    const TEST_STRING = '123';

    expect(() => App.validateGuessedNumber(TEST_STRING)).not.toThrow();
  });
});
