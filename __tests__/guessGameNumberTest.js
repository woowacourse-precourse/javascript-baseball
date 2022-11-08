const MissionUtils = require("@woowacourse/mission-utils");
const {
  throwGuessException,
  convertToNumberArray,
  isNothing,
  findStrike,
  findBall,
  App,
  throwReplayOrQuitException,
} = require("../src/App");

describe("추측 숫자를 문자열로 입력받으면 숫자배열로 변환해주는 기능", () => {
  test("case1", () => {
    expect(convertToNumberArray("123")).toStrictEqual([1, 2, 3]);
  });
});

describe("추측 숫자 입력받고 형식이 잘못됐을 때 예외처리하고 종료", () => {
  test("case1", () => {
    expect(() => throwGuessException("12")).toThrow("3자리를 입력해주세요");
  });
  test("case2", () => {
    expect(() => throwGuessException("asd")).toThrow("숫자형식을 입력해주세요");
  });
  test("case3", () => {
    expect(() => throwGuessException("102")).toThrow("0은 포함되지 않습니다");
  });
});

describe("포함된 숫자 유무 판별", () => {
  const gameNumber = [1, 2, 3];
  test("case1", () => {
    expect(isNothing(gameNumber, [3, 4, 5])).toBe(false);
  });
  test("case2", () => {
    expect(isNothing(gameNumber, [1, 2, 3])).toBe(false);
  });
  test("case3", () => {
    expect(isNothing(gameNumber, [6, 8, 4])).toBe(true);
  });
});

describe("포함된 숫자가 있다면 인덱스가 일치하는지 찾아 스트라이크 수 반환", () => {
  const gameNumber = [1, 2, 3];
  test("case1", () => {
    expect(findStrike(gameNumber, [1, 3, 2])).toBe(1);
  });
  test("case2", () => {
    expect(findStrike(gameNumber, [5, 4, 9])).toBe(0);
  });
  test("case3", () => {
    expect(findStrike(gameNumber, [7, 1, 3])).toBe(1);
  });
  test("case4", () => {
    expect(findStrike(gameNumber, [1, 2, 3])).toBe(3);
  });
});

describe("숫자는 포함하고 인덱스가 다른지 찾아 볼 수 반환", () => {
  const gameNumber = [1, 2, 3];
  test("case1", () => {
    expect(findBall(gameNumber, [1, 3, 2])).toBe(2);
  });
  test("case2", () => {
    expect(findBall(gameNumber, [5, 4, 9])).toBe(0);
  });
  test("case3", () => {
    expect(findBall(gameNumber, [7, 1, 3])).toBe(1);
  });
  test("case4", () => {
    expect(findBall(gameNumber, [1, 2, 3])).toBe(0);
  });
});

describe("추측한 숫자와 게임 숫자 대조하고 결과 반환", () => {
  const app = new App();
  const gameNumber = [1, 2, 3];
  test("case1", () => {
    expect(app.compareGuessAndGameNumber(gameNumber, [1, 3, 2])).toBe("2볼 1스트라이크");
  });
  test("case2", () => {
    expect(app.compareGuessAndGameNumber(gameNumber, [5, 4, 9])).toBe("낫싱");
  });
  test("case3", () => {
    expect(app.compareGuessAndGameNumber(gameNumber, [7, 1, 3])).toBe("1볼 1스트라이크");
  });
  test("case4", () => {
    expect(app.compareGuessAndGameNumber(gameNumber, [1, 2, 3])).toBe("3스트라이크");
  });
});

describe("재시작 선택 입력 형식이 잘못됐을 때 예외처리하고 종료", () => {
  test("case1", () => {
    expect(() => throwReplayOrQuitException("3")).toThrow("1 또는 2를 입력하세요");
  });
});

describe("게임 숫자를 맞추면 해당 게임 종료하고 게임을 재시작할지 완전히 종료할 지 결정", () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  const app = new App();
  app.replayOrQuit();
  test("case1", () => {
    expect(logSpy).toHaveBeenCalledWith("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
  });
});
