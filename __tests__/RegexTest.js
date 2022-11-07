const {
  DUPLICATE_CHARACTER_REGEX,
  GAME_MENU_CODE_REGEX,
  THREE_DIGIT_NUMBER_REGEX,
} = require('../src/lib/constants/validation');

describe('정규식 테스트', () => {
  describe('1에서 9까지의 수로 이루어진 세 자리 수에 대한 정규식 테스트', () => {
    test('세 자리 숫자인 경우 true를 반환해야 한다.', () => {
      const inputValues = ['123', '456', '1234'];
      const result = inputValues.map(inputValue =>
        THREE_DIGIT_NUMBER_REGEX.test(inputValue),
      );

      expect(result).toEqual([true, true, false]);
    });

    test('0이 포함된 경우 false를 반환해야 한다.', () => {
      const inputValues = ['012', '123'];
      const result = inputValues.map(inputValue =>
        THREE_DIGIT_NUMBER_REGEX.test(inputValue),
      );

      expect(result).toEqual([false, true]);
    });

    test('숫자가 아닌 문자가 포함된 경우 false를 반환해야 한다.', () => {
      const inputValues = ['asdf', 'asd120', 'a1b2c3', '123'];
      const result = inputValues.map(inputValue =>
        THREE_DIGIT_NUMBER_REGEX.test(inputValue),
      );

      expect(result).toEqual([false, false, false, true]);
    });

    test('세 자리 숫자가 아닌 경우 false를 반환해야 한다.', () => {
      const inputValues = ['1234', '12', '3', '123'];
      const result = inputValues.map(inputValue =>
        THREE_DIGIT_NUMBER_REGEX.test(inputValue),
      );

      expect(result).toEqual([false, false, false, true]);
    });
  });

  describe('1 또는 2의 숫자에 대한 정규식 테스트', () => {
    test('1 또는 2인 경우 true를 반환해야 한다.', () => {
      const inputValues = ['1', '2', '3'];
      const result = inputValues.map(inputValue =>
        GAME_MENU_CODE_REGEX.test(inputValue),
      );

      expect(result).toEqual([true, true, false]);
    });
  });

  describe('중복된 숫자를 포함하는지에 대한 정규식 테스트', () => {
    test('중복된 숫자가 존재하는 경우 true를 반환해야 한다.', () => {
      const inputValues = ['122', '455', '699', '333', '123'];
      const result = inputValues.map(inputValue =>
        DUPLICATE_CHARACTER_REGEX.test(inputValue),
      );

      expect(result).toEqual([true, true, true, true, false]);
    });
  });
});
