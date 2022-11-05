const Exception = require('../src/Exception');
const Player = require('../src/Player');
const { EXCEPTION } = require('../src/static/constants');

const checkValidateNumbers = (input) => () => Player.validateNumbers([...input]);

describe('Player', () => {
  test('정상적인 세 자리 숫자 입출력', () => {
    const input = '123';
    const player = new Player();
    player.setNumbers(input);
    const result = player.getNumbers();

    expect(result).toContainEqual(1, 2, 3);
  });
  test('비정상적인 세 자리 숫자 입출력', () => {
    const input = '12a';
    const player = new Player();
    const result = () => player.setNumbers(input);

    expect(result).toThrow(EXCEPTION.notNumbers);
  });
  test('입력이 숫자가 아닌 글자를 포함하는 경우 예외 발생', () => {
    const input = 'ab3';
    const result = checkValidateNumbers(input);

    expect(result).toThrow(Exception);
    expect(result).toThrow(EXCEPTION.notNumbers);
  });

  test('입력이 세 자리 수가 아닌 경우 예외 발생', () => {
    const input = '1234';
    const result = checkValidateNumbers(input);

    expect(result).toThrow(Exception);
    expect(result).toThrow(EXCEPTION.invalidLength);
  });

  test('입력이 0을 포함하는 경우 예외 발생', () => {
    const input = '102';
    const result = checkValidateNumbers(input);

    expect(result).toThrow(Exception);
    expect(result).toThrow(EXCEPTION.includeZero);
  });

  test('입력이 세 자리 수이지만 중복이 포함하는 경우 예외 발생', () => {
    const input = '112';
    const result = checkValidateNumbers(input);

    expect(result).toThrow(Exception);
    expect(result).toThrow(EXCEPTION.duplicated);
  });
});
