const Error = require("../src/components/Error");
const Count = require("../src/components/Count");
const Result = require("../src/components/Result");

describe("숫자 야구 게임 테스트", () => {
  const error = new Error();
  const count = new Count();
  const result = new Result();

  test("세자리 숫자인지 테스트", () => {
    expect(() => error.checkLength(12)).toThrow();
    expect(() => error.checkLength(1234)).toThrow();

  });

  test("숫자인지 아닌지 테스트", () => {
    expect(() => error.checIsNum('abc')).toThrow();
  });

  test("중복인지 아닌지 테스트", () => {
    expect(() => error.checkDuplicate(331)).toThrow();
  })

  test("입력 여부 테스트", () => {
    expect(() => error.checkEmpty('')).toThrow();
  })

  test("볼과 스트라이크 개수 테스트", () => {
    expect(count.get(123, [1, 2, 3])).toEqual([3, 0]); // 3스트라이크
    expect(count.get(124, [1, 2, 3])).toEqual([2, 0]); // 2스트라이크 0볼
    expect(count.get(123, [1, 3, 2])).toEqual([1, 2]); // 1스크라이크 2볼
    expect(count.get(142, [1, 2, 3])).toEqual([1, 1]); // 1스트라이크 1볼
    expect(count.get(123, [1, 4, 5])).toEqual([1, 0]); // 1스트라이크 0볼
    expect(count.get(123, [3, 1, 2])).toEqual([0, 3]); // 0스트라이크 3볼
    expect(count.get(123, [3, 1, 4])).toEqual([0, 2]); // 0스트라이크 2볼
    expect(count.get(123, [4, 5, 1])).toEqual([0, 1]); // 0스트라이크 1볼
    expect(count.get(123, [4, 5, 6])).toEqual([0, 0]); // 낫싱
  });

  test("볼과 스트라이크 개수에 따른 결과 테스트", () => {
    expect(result.get(3, 0)).toBe('answer');
    expect(result.get(0, 0)).toBe('nothing');
    expect(result.get(0, 2)).toBe(`2볼`);
    expect(result.get(1, 0)).toBe(`1스트라이크`);
    expect(result.get(1, 1)).toBe(`1볼 1스트라이크`);
  });
});