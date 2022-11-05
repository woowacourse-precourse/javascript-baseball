const App = require("../src/App");
const MissionUtils = require("@woowacourse/mission-utils");

describe("기능 테스트", () => {
  test("게임 스타트 출력", () => {
    const app = new App();
    const logSpy = jest.spyOn(MissionUtils.Console, "print");
    app.gameStart();
    expect(logSpy).toHaveBeenCalledWith("숫자 야구 게임을 시작합니다.");
  });

  test("컴퓨터 카운트 생성", () => {
    const app = new App();
    const result = app.generateCount([1, 3, 5]);
    expect(result).toEqual("135");
  });

  test("입력 길이가 3으로 유효하면 true 반환", () => {
    const app = new App();
    const result = app.isVaildLength("123");
    expect(result).toEqual(true);
  });

  test("입력 길이가 3이 아니면 false 반환", () => {
    const app = new App();
    const result = app.isVaildLength("1213");
    expect(result).toEqual(false);
  });
});
