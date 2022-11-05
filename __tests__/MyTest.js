const MissionUtils = require("@woowacourse/mission-utils");
const BaseballGame = require("../src/BaseballGame");
const GameUtils = require("../src/GameUtils");
const Validate = require("../src/Validate");
const BaseballModel = require("../src/BaseballModel");
const myConsole = MissionUtils.Console;

beforeAll((done) => {
  done();
});
afterAll((done) => {
  done();
});

jest.mock("../src/BaseballGame");
BaseballGame.scoreSet.mockReturnValue({ strike: 0, ball: 1 });

describe("컴퓨터 넘버 테스트", () => {
  test("컴퓨터의 숫자 배열의 길이는 3 입니다.", () => {
    expect(BaseballGame.getRandomNumbers().length).toBe(3);
  });
  test("컴퓨터의 숫자 타입은 'number' 입니다.", () => {
    BaseballGame.getRandomNumbers().forEach((number) => {
      expect(typeof number).toBe("number");
    });
  });
});

describe("유저 입력 테스트", () => {
  test("유저입력은 배열을 반환합니다.", () => {
    const text = "312";
    const testArr = GameUtils.userInputToNumberArr(text);
    expect(testArr instanceof Array).toBe(true);
  });
  test("유저 입력 타입은 'number'입니다.", () => {
    const text = "312";
    const testArr = GameUtils.userInputToNumberArr(text);
    testArr.forEach((number) => {
      expect(typeof number).toBe("number");
    });
  });
  test("유저 입력의 길이는 3 입니다.", () => {
    const text = "312";
    const testArr = GameUtils.userInputToNumberArr(text);
    expect(testArr.length).toBe(3);
  });
  test("유저가 잘못 입력하면 에러를 발생시킵니다.", () => {
    const text = "d1d";
    expect(() => Validate.userGuessNumbers(text)).toThrow();
  });
});

describe.only("게임진행 테스트", () => {
  test("숫자를 입력하면 게임결과를 스트링으로 반환합니다.", () => {
    const userInput = "123";
    BaseballGame.getRandom.mockReturnValue(
      MissionUtils.Random.pickNumberInRange(1, 9)
    );
    const mokval = { strike: 0, ball: 1 };
    BaseballGame.scoreSet.mockReturnValue(mokval);
    console.log(BaseballGame.scoreSet.mock);
    console.log(BaseballGame.getRandom.mock);

    expect(typeof BaseballGame.compareComputerAndUser(userInput)).toBe(
      "string"
    );
  });
});
