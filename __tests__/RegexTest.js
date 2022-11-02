// const VALID_INPUT_REGEX = /^[1-9]{3}$|^[1-2]{1}$/;
const VALID_INPUT_REGEX = /^[1-9]{3}$/;

describe('정규식 테스트', () => {
  describe('올바른 입력값인 경우 true 반환', () => {
    test('세 자리 숫자인 경우', () => {
      const input = '123';
      const result = VALID_INPUT_REGEX.test(input);

      expect(result).toEqual(true);
    });

    // test('1 또는 2인 경우', () => {
    //   const inputValues = ['1', '2'];
    //   const result = inputValues.map(inputValue =>
    //     VALID_INPUT_REGEX.test(inputValue),
    //   );

    //   expect(result).toEqual([true, true]);
    // });
  });

  describe('올바르지 않은 입력값인 경우 false 반환', () => {
    test('세 자리 숫자가 아닌 경우', () => {
      const inputValues = ['1234', '12', '3'];
      const result = inputValues.map(inputValue =>
        VALID_INPUT_REGEX.test(inputValue),
      );

      expect(result).toEqual([false, false, false]);
    });

    test('숫자가 아닌 경우', () => {
      const input = 'asdf';
      const result = VALID_INPUT_REGEX.test(input);

      expect(result).toEqual(false);
    });
  });
});
