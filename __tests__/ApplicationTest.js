const App = require("../src/App");
const MissionUtils = require("@woowacourse/mission-utils");

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((question, callback) => {
      callback(input);
    });
  }, MissionUtils.Console.readLine);
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

function getCompNumArray(compNumArr) {
  while (compNumArr.length < 3) {
    const number = Math.floor(Math.random() * 9) + 1;
    if (!compNumArr.includes(number)) {
      compNumArr.push(number);
    }
  }
}

function printBeginGame() {
  MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
}

function checkDuplicates(array) {
  return new Set(array).size !== array.length;
}

function getUserGuess(userNumArr, userInput) {
  for (let i = 0; i < userInput.length; i += 1) {
    if (
      userInput.length !== 3 ||
      checkDuplicates(userInput) ||
      userInput.includes("0")
    ) {
      throw new Error("입력값은 중복이 없는 1-9 사이 3개의 숫자여야 합니다.");
    } else {
      userNumArr.push(parseInt(userInput[i], 10));
    }
  }
}

function compareUserGuessToCompNum(userNumArr, compNumArr) {
  let strike = 0;
  let ball = 0;
  for (let i = 0; i < userNumArr.length; i += 1) {
    if (userNumArr[i] === compNumArr[i]) {
      strike += 1;
    } else if (compNumArr.includes(userNumArr[i])) {
      ball += 1;
    }
  }
  if (strike === 3) {
    MissionUtils.Console.print(
      "3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료"
    );
  } else if (ball === 0 && strike === 0) {
    MissionUtils.Console.print("낫싱");
  } else {
    MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
  }
}

function getUserReplayOrFinish(userInput) {
  if (userInput === "1") {
    MissionUtils.Console.print("replay the game!");
  } else if (userInput === "2") {
    MissionUtils.Console.print("finish the game!");
  } else {
    throw new Error("재시작은 1, 종료는 2를 입력해주세요."); // error
  }
}

describe("숫자 야구 게임", () => {
  test("게임 종료 후 재시작", () => {
    const randoms = [1, 3, 5, 5, 8, 9];
    const answers = ["246", "135", "1", "597", "589", "2"];
    const logSpy = getLogSpy();
    const messages = [
      "낫싱",
      "3스트라이크",
      "1볼 1스트라이크",
      "3스트라이크",
      "게임 종료",
    ];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    app.play();

    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("예외 테스트", () => {
    const randoms = [1, 3, 5];
    const answers = ["1234"];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test("추가테스트1-1: getCompNumArray <check length === 3>", () => {
    const compNumArr = [];
    getCompNumArray(compNumArr);
    expect(compNumArr).toHaveLength(3);
  });

  test("추가테스트1-2: getCompNumArray", () => {
    const compNumArr = [];
    getCompNumArray(compNumArr);
    expect(checkDuplicates(compNumArr)).toBeFalsy();
  });

  test("추가테스트1-3: getCompNumArray", () => {
    const compNumArr = [];
    getCompNumArray(compNumArr);
    expect([1, 2, 3, 4, 5, 6, 7, 8, 9]).toEqual(
      expect.arrayContaining(compNumArr)
    );
  });

  test("추가테스트2: printBeginGame", () => {
    const logSpy = getLogSpy();
    printBeginGame();
    expect(logSpy).toHaveBeenCalledWith("숫자 야구 게임을 시작합니다.");
  });

  test("추가테스트3-1: checkDuplicates", () => {
    const testArr = [1, 2, 2];
    expect(checkDuplicates(testArr)).toBeTruthy();
  });

  test("추가테스트3-2: checkDuplicates", () => {
    const testArr = [1, 2, 3];
    expect(checkDuplicates(testArr)).toBeFalsy();
  });

  test("추가테스트4-1: getUserGuess", () => {
    const userNumArr = [];
    const userInput = "122";
    expect(() => {
      getUserGuess(userNumArr, userInput);
    }).toThrow();
  });

  test("추가테스트4-2: getUserGuess", () => {
    const userNumArr = [];
    const userInput = "120";
    expect(() => {
      getUserGuess(userNumArr, userInput);
    }).toThrow();
  });
});
