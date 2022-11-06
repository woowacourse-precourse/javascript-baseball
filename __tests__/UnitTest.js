const MissionUtils = require("@woowacourse/mission-utils");
const calculateScore = require("../src/CalculateScore");
const scoreToJudgeMessageMap = require("../src/ScoreToJudgeMessageMap");
const validation = require("../src/Validation");
const utils = require("../src/Utils");

describe("Calculate Score Test", () => {
  test("1 strike test", () => {
    const nbrOfComputer = [1, 2, 3];
    const nbrOfTryGuess = [1, 5, 4];
    const score = { strikeCount: 1, ballCount: 0, isNothing: false };

    expect(calculateScore(nbrOfComputer, nbrOfTryGuess)).toEqual(score);
  });
  test("3 strike test", () => {
    const nbrOfComputer = [1, 2, 3];
    const nbrOfTryGuess = [1, 2, 3];
    const score = { strikeCount: 3, ballCount: 0, isNothing: false };

    expect(calculateScore(nbrOfComputer, nbrOfTryGuess)).toEqual(score);
  });
  test("3 ball test", () => {
    const nbrOfComputer = [1, 2, 3];
    const nbrOfTryGuess = [3, 1, 2];
    const score = { strikeCount: 0, ballCount: 3, isNothing: false };

    expect(calculateScore(nbrOfComputer, nbrOfTryGuess)).toEqual(score);
  });
  test("nothing test", () => {
    const nbrOfComputer = [1, 2, 3];
    const nbrOfTryGuess = [4, 5, 6];
    const score = { strikeCount: 0, ballCount: 0, isNothing: true };

    expect(calculateScore(nbrOfComputer, nbrOfTryGuess)).toEqual(score);
  });
  test("2 ball & 1 strike test", () => {
    const nbrOfComputer = [1, 2, 3];
    const nbrOfTryGuess = [1, 3, 2];
    const score = { strikeCount: 1, ballCount: 2, isNothing: false };

    expect(calculateScore(nbrOfComputer, nbrOfTryGuess)).toEqual(score);
  });
});

describe("Score To Message Map Test", () => {
  test("set property test", () => {
    const score = { strikeCount: 1, ballCount: 2, isNothing: false };

    scoreToJudgeMessageMap.setProperty({ ...score });

    expect(scoreToJudgeMessageMap).toHaveProperty("strikeCount", 1);
    expect(scoreToJudgeMessageMap).toHaveProperty("ballCount", 2);
    expect(scoreToJudgeMessageMap).toHaveProperty("isNothing", false);
  });

  test("get judge message test 1", () => {
    const score = { strikeCount: 1, ballCount: 2, isNothing: false };

    scoreToJudgeMessageMap.setProperty({ ...score });

    const getJudgeMessage = jest.fn(() => "2볼 1스트라이크");

    getJudgeMessage();

    expect(getJudgeMessage).toHaveReturnedWith(
      scoreToJudgeMessageMap.getJudgeMessage(),
    );
  });

  test("get judge message test 2", () => {
    const score = { strikeCount: 0, ballCount: 0, isNothing: true };

    scoreToJudgeMessageMap.setProperty({ ...score });

    const getJudgeMessage = jest.fn(() => "낫싱");

    getJudgeMessage();

    expect(getJudgeMessage).toHaveReturnedWith(
      scoreToJudgeMessageMap.getJudgeMessage(),
    );
  });

  test("get judge message test 3", () => {
    const score = { strikeCount: 3, ballCount: 0, isNothing: false };

    scoreToJudgeMessageMap.setProperty({ ...score });

    const getJudgeMessage = jest.fn(() => "3스트라이크");

    getJudgeMessage();

    expect(getJudgeMessage).toHaveReturnedWith(
      scoreToJudgeMessageMap.getJudgeMessage(),
    );
  });
});

describe("Validation Test", () => {
  test("check guess input test (only number)", () => {
    expect(() => {
      validation.checkGuessInput("12a");
    }).toThrow("only number");
  });
  test("check guess input test 1 (only three number)", () => {
    expect(() => {
      validation.checkGuessInput("12");
    }).toThrow("only three number");
  });
  test("check guess input test 2 (only three number)", () => {
    expect(() => {
      validation.checkGuessInput("1234");
    }).toThrow("only three number");
  });
  test("check guess input test 2 (only different number)", () => {
    expect(() => {
      validation.checkGuessInput("121");
    }).toThrow("only different number");
  });
  test("check guess input test 2 (not to throw)", () => {
    expect(() => {
      validation.checkGuessInput("123");
    }).not.toThrow();
  });
  test("check restart or quit input test 11 (only 1 or 2)", () => {
    expect(() => {
      validation.checkRestartOrQuitInput("11");
    }).toThrow("only 1 or 2");
  });
  test("check restart or quit input test 1 (not to throw)", () => {
    expect(() => {
      validation.checkRestartOrQuitInput("1");
    }).not.toThrow();
  });
  test("check restart or quit input test 2 (not to throw)", () => {
    expect(() => {
      validation.checkRestartOrQuitInput("2");
    }).not.toThrow();
  });
});

describe("Utils Test", () => {
  test("print test", () => {
    const printSpy = jest.spyOn(MissionUtils.Console, "print");
    utils.print("출력 테스트");
    expect(printSpy).toHaveBeenCalledWith("출력 테스트");
  });

  test("readLine test", () => {
    const readLineSpy = jest.spyOn(MissionUtils.Console, "readLine");
    const testCallback = (answer) => answer;
    utils.readLine("테스트", testCallback);
    expect(readLineSpy).toHaveBeenCalledWith("테스트", testCallback);
  });

  test("close test", () => {
    const closeSpy = jest.spyOn(MissionUtils.Console, "close");
    utils.close();
    expect(closeSpy).toHaveBeenCalled();
  });

  test("pickNumberInRange test", () => {
    const pickNumberInRangeSpy = jest.spyOn(
      MissionUtils.Random,
      "pickNumberInRange",
    );
    utils.pickNumberInRange(1, 9);
    expect(pickNumberInRangeSpy).toHaveBeenCalledWith(1, 9);
  });
});
