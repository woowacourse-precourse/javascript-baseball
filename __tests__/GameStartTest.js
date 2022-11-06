const App = require("../src/App");
const MissionUtils = require("@woowacourse/mission-utils");

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

const app = new App();

afterAll(()=>{
  MissionUtils.Console.close();
})

describe("게임 시작 테스트", () => {
  test("게임 시작 문구 체크", () => {
    const testStr = "숫자 야구 게임을 시작합니다.";
    const logSpy = getLogSpy();
    app.gameStart();
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(testStr));
  });

  test("게임 초기 조건 세팅", () => {
    app.gameStart();
    const result = app.gameSet;
    const gameSet = app.gameSetting();

    expect(result).toEqual(gameSet);
  });
});