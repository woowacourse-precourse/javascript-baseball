const computerUtils = require('../src/utils/computerUtils');
const COMPUTER = require('../src/constants/COMPUTER');

describe('서로 다른 임의의 수 3개 생성 테스트', () => {
  const randomNumbers = computerUtils.getRandomNumber();

  test('중복 숫자 포함 확인', () => {
    expect([...new Set(randomNumbers)]).toHaveLength(COMPUTER.ANSWER_LENGTH);
  });

  test('배열 안에 포함된 값은 1이상 9이하', () => {
    const sortedRandomNumbers = randomNumbers.sort((value1, value2) => value1 - value2);

    expect(sortedRandomNumbers[0]).toBeGreaterThanOrEqual(COMPUTER.START_NUMBER);
    expect(sortedRandomNumbers[2]).toBeLessThanOrEqual(COMPUTER.END_NUMBER);
  });
});

describe('유저의 입력에 따른 힌트 테스트', () => {
  const answer = [1, 2, 3];

  test('아무 것도 일치하지 않는 경우', () => {
    const userInput = [4, 5, 6];
    expect(computerUtils.generateHint(userInput, answer)).toBe('낫싱');
  });

  test('1볼 1스트라이크', () => {
    const userInput = [2, 7, 3];
    expect(computerUtils.generateHint(userInput, answer)).toBe('1볼 1스트라이크');
  });

  test('3볼', () => {
    const userInput = [3, 1, 2];
    expect(computerUtils.generateHint(userInput, answer)).toBe('3볼');
  });

  test('3스트라이크', () => {
    const userInput = [1, 2, 3];
    expect(computerUtils.generateHint(userInput, answer)).toBe('3스트라이크');
  });
});

describe('입력값 검증 테스트', () => {
  test('입력값의 자릿수가 잘못된 경우', () => {
    const userInput = '1234';
    const lengthError = new Error(COMPUTER.LENGTH_ERROR);

    expect(() => computerUtils.validateInput(userInput)).toThrowError(lengthError);
  });

  test('숫자를 제외한 문자를 입력한 경우', () => {
    const userInput = '12a';
    const characterError = new Error(COMPUTER.CHARACTER_ERROR);

    expect(() => computerUtils.validateInput(userInput)).toThrowError(characterError);
  });

  test('같은 숫자를 입력한 경우', () => {
    const userInput = '112';
    const sameNumberError = new Error(COMPUTER.SAME_ERROR);

    expect(() => computerUtils.validateInput(userInput)).toThrowError(sameNumberError);
  });

  test('정상 통과', () => {
    const userInput = '123';

    expect(computerUtils.validateInput(userInput)).toBeUndefined();
  });
});
