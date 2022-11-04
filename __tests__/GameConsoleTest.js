const MissionUtils = require("@woowacourse/mission-utils");
const {
  gameResultOutput,
  gameStartPhrase,
  gameProgressQuestion,
  gameRestartQuestion,
} = require("../src/gameFunctions");

const getReadLineSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "readLine");
  logSpy.mockClear();
  return logSpy;
};

describe("볼,스트라이크 개수가 주어졌을 때 올바르게 출력되는 지 체크", () => {
  test("볼 0개 ,스트라이크 0개", () => {
    console.log = jest.fn();
    gameResultOutput(0, 0);
    expect(console.log).toHaveBeenCalledWith("낫싱");
  });
  test("볼 1개 ,스트라이크 0개", () => {
    console.log = jest.fn();
    gameResultOutput(0, 1);
    expect(console.log).toHaveBeenCalledWith("1볼");
  });
  test("볼 2개 ,스트라이크 0개", () => {
    console.log = jest.fn();
    gameResultOutput(0, 2);
    expect(console.log).toHaveBeenCalledWith("2볼");
  });
  test("볼 1개 ,스트라이크 1개", () => {
    console.log = jest.fn();
    gameResultOutput(1, 1);
    expect(console.log).toHaveBeenCalledWith("1볼 1스트라이크");
  });
  test("볼 0개 ,스트라이크 1개", () => {
    console.log = jest.fn();
    gameResultOutput(1, 0);
    expect(console.log).toHaveBeenCalledWith("1스트라이크");
  });
  test("볼 2개 ,스트라이크 1개", () => {
    console.log = jest.fn();
    gameResultOutput(1, 2);
    expect(console.log).toHaveBeenCalledWith("2볼 1스트라이크");
  });
  test("스트라이크 3개", () => {
    console.log = jest.fn();
    gameResultOutput(3, 0);
    expect(console.log).toHaveBeenCalledWith(
      `3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료`
    );
  });
});

describe("시작 문구 출력 정상적으로 나오는 지 테스트", () => {
  test("볼 0개 ,스트라이크 0개", () => {
    console.log = jest.fn();
    gameStartPhrase();
    expect(console.log).toHaveBeenCalledWith("숫자 야구 게임을 시작합니다.");
  });
});

describe("게임 숫자 입력 문구 출력 정상적으로 나오는 지 테스트", () => {
  test("게임 시작하여 숫자 질문 출력", () => {
    const logSpy = getReadLineSpy();
    gameProgressQuestion([1, 2, 3]);
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining("숫자를 입력해주세요 : "),
      expect.any(Function)
    );
  });
});

describe("게임 재시작 입력 문구 출력 정상적으로 나오는 지 테스트", () => {
  test("게임 재시작 질문 출력", () => {
    const logSpy = getReadLineSpy();
    gameRestartQuestion();
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining(
        "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
      ),
      expect.any(Function)
    );
  });
});
