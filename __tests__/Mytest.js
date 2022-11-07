const Utils = require("../src/utils/utils.js");
const MissionUtils = require("@woowacourse/mission-utils");

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

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
  test("중복된 숫자가 없고 길이가 3인 숫자배열을 만들어야 한다.", () => {
    //given
    //when
    const randomNumber = Utils.setComputerNumber();
    //then
    expect(randomNumber).toHaveLength(3);
    expect(randomNumber).toBeDistinct();
  });
});

describe("Utils.compareNumbers", () => {
  test("컴퓨터 랜덤숫자와 사용자 입력숫자를 비교한다.", () => {
    //given
    const randomNumbers = [
      [2, 4, 6],
      [4, 6, 5],
      [1, 3, 2],
      [5, 9, 8],
      [3, 7, 5],
    ];
    const userInput = ["157", "457", "132", "859", "357"];
    const results = [
      {},
      { strike: 1, ball: 1 },
      { strike: 3 },
      { ball: 3 },
      { strike: 1, ball: 2 },
    ];

    for (const index in userInput) {
      //when
      let strikeBall = Utils.compareNumbers(
        randomNumbers[index],
        userInput[index]
      );
      //then
      expect(strikeBall).toStrictEqual(results[index]);
    }
  });
});
