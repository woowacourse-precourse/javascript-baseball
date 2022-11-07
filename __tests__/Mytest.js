const Utils = require("../src/utils/utils.js");

expect.extend({
  toBeDistinct(received) {
    const pass =
      Array.isArray(received) && new Set(received).size === received.length;
    if (pass) {
      return {
        message: () => `expected [${received}] array is unique`,
        pass: true,
      };
    } else {
      return {
        message: () => `expected [${received}] array is not to unique`,
        pass: false,
      };
    }
  },
});

describe("Utils.checkNumberisOk", () => {
  test("문자가 섞여있으면 예외가 발생해야 한다", () => {
    //given
    const mixNumStr = "1e3";
    //when
    //then
    expect(() => Utils.checkNumberisOk(mixNumStr)).toThrow(
      new Error("숫자를 입력하세요!")
    );
  });

  test("문자형이면서 3자리 숫자가 아니면 예외가 발생해야 한다.", () => {
    //given
    const over3Length = "1234";
    //when
    //then
    expect(() => Utils.checkNumberisOk(over3Length)).toThrow(
      new Error("입력의 길이와 숫자인지 확인하세요!")
    );
  });

  test("입력이 문자이면 예외가 발생해야 한다.", () => {
    //given
    const stringNumber = "456";
    //when
    //then
    expect(() => Utils.checkNumberisOk(stringNumber)).toThrow(
      new Error("숫자를 입력하세요!")
    );
  });

  test("중복된 숫자가 있으면 예외가 발생해야 한다.", () => {
    //given
    const duplicatedNumber = 113;
    //when
    //then
    expect(() => Utils.checkNumberisOk(duplicatedNumber)).toThrow(
      new Error("중복된 숫자를 입력하였습니다!")
    );
  });

  test("0이 있으면 예외가 발생해야 한다.", () => {
    //given
    const containZero = 105;
    //when
    //then
    expect(() => Utils.checkNumberisOk(containZero)).toThrow(
      new Error("0을 입력하였습니다!")
    );
  });
});

describe("Utils.setComputerNumber", () => {
  //given
  //when
  const randomNumber = Utils.setComputerNumber();
  //then
  expect(randomNumber).toHaveLength(3);
  expect(randomNumber).toBeDistinct();
});
