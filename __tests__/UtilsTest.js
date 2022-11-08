const { getRandomUniqueNumbers, isInRange, isNumber } = require("../src/utils");

describe("유틸 함수 테스트", () => {
  describe("getRandomUniqueNumbers 테스트", () => {
    test("기본적으로 세 자리의 수를 반환해야 한다.", () => {
      // given
      const numbers = getRandomUniqueNumbers();

      // when, then
      expect(numbers.length).toBe(3);
    });

    test("기본적으로 반환된 배열의 모든 수가 1~9 사이에 존재해야 한다.", () => {
      // given
      const numbers = getRandomUniqueNumbers();

      // when, then
      expect(numbers.every((number) => isInRange(number, 1, 9))).toBe(true);
    });

    test("반환된 배열의 모든 수가 서로 다른 수여야 한다.", () => {
      // given
      const numbers = getRandomUniqueNumbers();

      // when, then
      expect(new Set(numbers).size).toBe(3);
    });

    test("숫자의 범위를 지정할 수 있어야 한다.", () => {
      // given
      const numbers = getRandomUniqueNumbers(1, 6);

      // when, then
      expect(numbers.every((number) => isInRange(number, 1, 6))).toBe(true);
    });

    test("반환될 숫자의 개수를 지정할 수 있어야 한다.", () => {
      // given
      const numbers = getRandomUniqueNumbers(1, 9, 5);

      // when, then
      expect(numbers.length).toBe(5);
    });

    test("시작 범위가 마지막 범위보다 작아야 한다.", () => {
      // given
      const startInclusive = 9;
      const endInclusive = 1;
      const result = () => getRandomUniqueNumbers(startInclusive, endInclusive);

      // when, then
      expect(result).toThrow(
        `startInclusive ${startInclusive} cannot be greater than endInclusive ${endInclusive}.`,
      );
    });

    test("매개변수의 타입이 number가 아니라면 에러를 발생 시킨다.", () => {
      // given
      const params = [["string"], [1, "string"], [1, 9, "string"]];

      params.forEach((param) => {
        // when
        const result = () => getRandomUniqueNumbers(...param);

        // then
        expect(result).toThrow("arguments must be numbers");
      });
    });
  });

  describe("isInRange 테스트", () => {
    test("입력받은 수가 지정한 범위 내에 있다면 true를 반환해야 한다.", () => {
      // given
      const result = isInRange(4, 1, 9);

      // when, then
      expect(result).toBe(true);
    });

    test("입력받은 수가 지정한 범위를 벗어나면 false를 반환해야 한다.", () => {
      // given
      const result = isInRange(0, 1, 9);

      // when, then
      expect(result).toBe(false);
    });

    test("매개변수의 타입이 number가 아니라면 에러를 발생 시킨다.", () => {
      // given
      const params = [["string"], [1, "string"], [1, 9, "string"]];

      params.forEach((param) => {
        // when
        const result = () => getRandomUniqueNumbers(...param);

        // then
        expect(result).toThrow("arguments must be numbers");
      });
    });
  });

  describe("isNumber 테스트", () => {
    test("입력값의 타입이 number라면 true를 반환해야 한다.", () => {
      // given
      const numbers = [4, 1, 9, 15, 0, 1.5, -2];

      // when, then
      numbers.forEach((number) => {
        expect(isNumber(number)).toBe(true);
      });
    });

    test("입력값의 타입이 number가 아니라면 false를 반환해야 한다.", () => {
      // given
      const notNumbers = [null, undefined, "string", true, false];

      // when, then
      notNumbers.forEach((notNumber) => {
        expect(isNumber(notNumber)).toBe(false);
      });
    });
  });
});
