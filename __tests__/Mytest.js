const Utils = require("../src/utils/utils.js");
const MissionUtils = require("@woowacourse/mission-utils");

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

const mockInput = (userInput) => {
  MissionUtils.Console.readLine = jest.fn();
  MissionUtils.Console.readLine.mockImplementationOnce((question, callback) => {
    callback(userInput);
  });
};

const getSpyLog = (name) => {
  const logSpy = jest.spyOn(MissionUtils.Console, name);
  logSpy.mockClear();
  return logSpy;
};

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

describe("Utils.returnStringResult", () => {
  test("object로 되어있는 strike, ball 개수를 string으로 변환", () => {
    //given
    const strikeBallCount = [
      {},
      { strike: 1, ball: 1 },
      { strike: 3 },
      { ball: 3 },
      { strike: 1, ball: 2 },
    ];
    const results = [
      "낫싱",
      "1볼 1스트라이크",
      "3스트라이크",
      "3볼",
      "2볼 1스트라이크",
    ];

    for (const index in strikeBallCount) {
      //when
      let strikeBall = Utils.returnStringResult(strikeBallCount[index]);
      //then
      expect(strikeBall).toEqual(results[index]);
    }
  });
});

describe("Utils.askGameAgain", () => {
  test("사용자가 1을 입력하면 게임 다시 시작", () => {
    //given
    const gameAgain = "1";
    mockInput(gameAgain);
    //when
    Utils.startGame = jest.fn();
    Utils.askGameAgain();
    //then
    expect(Utils.startGame.mock.calls.length).toBe(1);
  });

  test("사용자가 2를 입락하면 게임 종료", () => {
    //given
    const stopGame = "2";
    const spyLog = getSpyLog("print");
    mockInput(stopGame);
    //when
    Utils.askGameAgain();
    //then
    expect(spyLog).toHaveBeenCalledWith("게임 종료");
  });
});
