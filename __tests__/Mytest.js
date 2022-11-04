const utils = require("../src/utils/utils");

describe("기능목록 테스트", () => {
  test("숫자를 입력했는지 확인", () => {
    expect(() => utils.checkNumberisOk("1234")).toThrow(
      new Error("숫자를 입력하세요!")
    );
  });

  test("3자리 숫자를 입력했는지 확인", () => {
    expect(() => utils.checkNumberisOk(1234)).toThrow(
      new Error("숫자를 3자리 입력하세요!")
    );
  });

  test("중복된 숫자를 입력했는지 확인", () => {
    expect(() => utils.checkNumberisOk(113)).toThrow(
      new Error("중복된 숫자를 입력하였습니다!")
    );
  });
  test("0을 입력했는지 확인", () => {
    expect(() => utils.checkNumberisOk(105)).toThrow(
      new Error("0을 입력하였습니다!")
    );
  });
});
