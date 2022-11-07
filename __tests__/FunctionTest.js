const App = require("../src/App");
const MissionUtils = require("@woowacourse/mission-utils");

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("기능 테스트", () => {
  test("기능 1, 게임 시작 문구 출력하기", () => {
    const logSpy = getLogSpy();

    const app = new App();
    app.PrintGameStartPhrase();

    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining('숫자 야구 게임을 시작합니다.')
    );
  });

  // 볼과 스트라이크 모두 0인 경우: "nothing" 리턴
  test("기능 5, 결과 분석하기 - nothing", () => {
    const computerNumber = "123";
    const userNumber = "456";

    const app = new App();
       
    expect(app.countBallAndStrike(computerNumber, userNumber)).toEqual("nothing");
  });

  // 볼 또는 스트라이크가 존재하는 경우: [ball, strike] 리턴
  test("기능 5, 결과 분석하기 - [ball, strike] (1)", () => {
    const computerNumber = "123";
    const userNumber = "138";

    const app = new App();
          
    expect(app.countBallAndStrike(computerNumber, userNumber)).toEqual([1, 1]);
  });

  test("기능 5, 결과 분석하기 - [ball, strike] (2)", () => {
    const computerNumber = "159";
    const userNumber = "195";

    const app = new App();
          
    expect(app.countBallAndStrike(computerNumber, userNumber)).toEqual([2, 1]);
  });

  test("기능 6, 결과 출력하기 - 낫싱", () => {
    const logSpy = getLogSpy();
    const checkResult = "nothing";

    const app = new App();
    app.printResult(checkResult);

    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining('낫싱')
    );
  });
});