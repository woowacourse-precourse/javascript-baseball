const App = require("../src/App");
const MissionUtils = require("@woowacourse/mission-utils");

const GAMEFLAG_CONTINUE = 0;
const GAMEFLAG_START = 1;
const GAMEFLAG_END = 2;

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((question, callback) => {
      callback(input);
    });
  }, MissionUtils.Console.readLine);
};

describe("구현 기능 목록 테스트", () => {
  test("게임 시작 메시지 출력", () => {
    const logSpy = getLogSpy();
    const app = new App();
    app.printStartMsg();
    expect(logSpy).toHaveBeenCalledWith("숫자 야구 게임을 시작합니다.");
  });
  test("컴퓨터의 세자리 수 만들기", () => {
    const app = new App();
    const computerNum = app.pickComputerNum();
    let answerArr = computerNum.split("");
    let duplicates = answerArr.filter((value, index) => {
      return index !== answerArr.indexOf(value);
    });
    expect(computerNum).toMatch(/^[1-9]{3}$/); // 세자리 숫자 정규표현식
    expect(duplicates.length).toBe(0);
  });
  test("입력 기능 A: 사용자에게 3 자리 숫자 받기", () => {
    const answers = ["246"];
    const app = new App();
    mockQuestions(answers);

    expect(app.getUserNum()).toMatch(/^[1-9]{3}$/);
  });
  test("입력 기능 B: 게임 재시작/종료 구분 숫자 받기(1 or 2)", () => {
    const answers = ["1", "2"];
    const app = new App();
    mockQuestions(answers);

    expect(app.getUserGameFlag()).toBe(1);
    expect(app.getUserGameFlag()).toBe(2);
  });
  test("출력 기능: 입력 기능 A의 숫자에 대한 결과 판단 로직", () => {
    const app = new App();
    // 스트라이크 / 볼  판단
    expect(app.compareNums("123", "123")).toEqual({ strike: 3, ball: 0 });
    expect(app.compareNums("485", "821")).toEqual({ strike: 0, ball: 1 });
    expect(app.compareNums("754", "291")).toEqual({ strike: 0, ball: 0 });

    // 결과 출력
    expect(app.printResult(3, 0)).toBe("3스트라이크");
    expect(app.printResult(1, 2)).toBe("2볼 1스트라이크");
    expect(app.printResult(0, 0)).toBe("낫싱");
    expect(app.printResult(0, 1)).toBe("1볼 ");

    // 게임 계속, 재시작, 종료 판단하기
    expect(app.updateGameFlag("1스트라이크")).toBe(GAMEFLAG_CONTINUE);
    expect(app.updateGameFlag("2볼 1스트라이크")).toBe(GAMEFLAG_CONTINUE);
    expect(app.updateGameFlag("낫싱")).toBe(GAMEFLAG_CONTINUE);

    const answers = ["1", "2"];
    mockQuestions(answers);
    expect(app.updateGameFlag("3스트라이크")).toBe(GAMEFLAG_START);
    expect(app.updateGameFlag("3스트라이크")).toBe(GAMEFLAG_END);
  });
  test("사용자가 잘못된 값을 입력한 경우 throw 문으로 예외 처리", () => {
    // ExceptioinFnTest.js에 별도로 테스트
  });
});
