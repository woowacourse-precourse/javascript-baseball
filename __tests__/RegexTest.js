const VALID_INPUT_REGEX = /^[1-9]{3}$/;
const GAME_MENU_CODE_REGEX = /^[1-2]{1}$/;
const DUPLICATE_CHARACTER_REGEX = /(.)\1{1,}/;

describe('숫자 야구 게임을 위한 정규식 테스트', () => {
  describe('올바른 입력값인 경우 true를 반환해야 한다.', () => {
    test('중복이 없는 세 자리 숫자인 경우', () => {
      const inputValues = ['123', '456'];
      const result = inputValues.map(inputValue =>
        VALID_INPUT_REGEX.test(inputValue),
      );

      expect(result).toEqual([true, true]);
    });

    test('1 또는 2인 경우', () => {
      const inputValues = ['1', '2'];
      const result = inputValues.map(inputValue =>
        GAME_MENU_CODE_REGEX.test(inputValue),
      );

      expect(result).toEqual([true, true]);
    });
  });

  describe('올바르지 않은 입력값인 경우 false를 반환해야 한다.', () => {
    test('숫자가 아닌 문자가 포함된 경우', () => {
      const inputValues = ['asdf', 'asd120', 'a1b2c3'];
      const result = inputValues.map(inputValue =>
        VALID_INPUT_REGEX.test(inputValue),
      );

      expect(result).toEqual([false, false, false]);
    });

    test('세 자리 숫자가 아닌 경우', () => {
      const inputValues = ['1234', '12', '3'];
      const result = inputValues.map(inputValue =>
        VALID_INPUT_REGEX.test(inputValue),
      );

      expect(result).toEqual([false, false, false]);
    });

    test('중복된 숫자가 존재하는 경우', () => {
      const inputValues = ['122', '455', '699', '333'];
      const result = inputValues.map(
        inputValue => !DUPLICATE_CHARACTER_REGEX.test(inputValue),
      );

      expect(result).toEqual([false, false, false, false]);
    });
  });
});
