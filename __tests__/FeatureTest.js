const App = require("../src/App");

describe("숫자 야구 게임 기능 테스트", () => {
  const app = new App();
  describe("[ballCnt, strikeCnt]에 따라 문자열 반환하는 getBallStrikeResult", () => {
    test("[0, 0]을 입력 받으면 '낫싱' 출력", () => {
      const input = [0, 0];
      expect(app.getBallStrikeResult(input)).toEqual("낫싱");
    });
    test("[1, 2]을 입력 받으면 '1볼 2스트라이크' 출력", () => {
      const input = [1, 2];
      expect(app.getBallStrikeResult(input)).toEqual("1볼 2스트라이크");
    });
    test("[0, 3]을 입력 받으면 '3스트라이크' 출력", () => {
      const input = [0, 3];
      expect(app.getBallStrikeResult(input)).toEqual("3스트라이크");
    });
  });
  describe("길이 3인 array 요소가 서로 다른지 확인하는 checkUnique", () => {
    test("[1, 2, 3]을 입력 받으면 true 출력", () => {
      const correctInput = [1, 2, 3];
      expect(app.checkUnique(correctInput)).toBeTruthy();
    });
    test("[2, 2, 3]을 입력 받으면 false 출력", () => {
      const wrongInput = [2, 2, 3];
      expect(app.checkUnique(wrongInput)).toBeFalsy();
    });
  });
  describe("사용자 입력 배열 유효성 검사하는 checkUserNumbersInputValidity", () => {
    test("[a, 2, 3]을 입력 받으면 throw", () => {
      const wrongInput = ["a", 2, 3];
      expect(() => app.checkUserNumbersInputValidity(wrongInput)).toThrow();
    });
    test("[0, 2, 3]을 입력 받으면 throw", () => {
      const wrongInput = [0, 2, 3];
      expect(() => app.checkUserNumbersInputValidity(wrongInput)).toThrow();
    });
    test("[2, 3]을 입력 받으면 throw", () => {
      const wrongInput = [2, 3];
      expect(() => app.checkUserNumbersInputValidity(wrongInput)).toThrow();
    });
    test("[2, 3, 3]을 입력 받으면 throw", () => {
      const wrongInput = [2, 3, 3];
      expect(() => app.checkUserNumbersInputValidity(wrongInput)).toThrow();
    });
    test("[2, 3, 6]을 입력 받으면 not throw", () => {
      const wrongInput = [2, 3, 6];
      expect(() => app.checkUserNumbersInputValidity(wrongInput)).not.toThrow();
    });
  });
  describe("길이가 3인 두 배열을 비교하는 compareEachNumbers, [ballCnt, strikeCnt] 반환", () => {
    test("[1, 2, 3], [1, 2, 3]을 입력 받으면 [0, 3]", () => {
      const computerNumbers = [1, 2, 3];
      const userNumbers = [1, 2, 3];
      const expected = [0, 3];
      const result = app.compareEachNumbers(computerNumbers, userNumbers);
      expect(result).toEqual(expect.arrayContaining(expected));
      expect(result.length).toEqual(expected.length);
    });
    test("[1, 2, 3], [4, 2, 3]을 입력 받으면 [0, 2]", () => {
      const computerNumbers = [1, 2, 3];
      const userNumbers = [4, 2, 3];
      const expected = [0, 2];
      const result = app.compareEachNumbers(computerNumbers, userNumbers);
      expect(result).toEqual(expect.arrayContaining(expected));
      expect(result.length).toEqual(expected.length);
    });
    test("[1, 2, 3], [3, 2, 1]을 입력 받으면 [2, 1]", () => {
      const computerNumbers = [1, 2, 3];
      const userNumbers = [3, 2, 1];
      const expected = [2, 1];
      const result = app.compareEachNumbers(computerNumbers, userNumbers);
      expect(result).toEqual(expect.arrayContaining(expected));
      expect(result.length).toEqual(expected.length);
    });
    test("[1, 2, 3], [4, 5, 6]을 입력 받으면 [0, 0]", () => {
      const computerNumbers = [1, 2, 3];
      const userNumbers = [4, 5, 6];
      const expected = [0, 0];
      const result = app.compareEachNumbers(computerNumbers, userNumbers);
      expect(result).toEqual(expect.arrayContaining(expected));
      expect(result.length).toEqual(expected.length);
    });
    test("[1, 2, 3], [3, 1, 7]을 입력 받으면 [2, 0]", () => {
      const computerNumbers = [1, 2, 3];
      const userNumbers = [3, 1, 7];
      const expected = [2, 0];
      const result = app.compareEachNumbers(computerNumbers, userNumbers);
      expect(result).toEqual(expect.arrayContaining(expected));
      expect(result.length).toEqual(expected.length);
    });
  });
});
