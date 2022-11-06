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

  test("입력이 1부터 9까지로 이루어진 유효하면 true 반환", () => {
    const app = new App();
    const result = app.isVaildNumberFormat("123");
    expect(result).toEqual(true);
  });

  test("입력이 1부터 9까지로 이루어진 유효하지 않으면 false 반환", () => {
    const app = new App();
    const case1 = app.isVaildNumberFormat("a123");
    const case2 = app.isVaildNumberFormat("123a");
    const case3 = app.isVaildNumberFormat("12");
    const case4 = app.isVaildNumberFormat("1234");
    const case5 = app.isVaildNumberFormat(" 123 ");

    expect(case1).toEqual(false);
    expect(case2).toEqual(false);
    expect(case3).toEqual(false);
    expect(case4).toEqual(false);
    expect(case5).toEqual(false);
  });

  test("중복된 숫자를 입력하면 true 반환", () => {
    const app = new App();
    const case1 = app.isDuplicate("111");
    const case2 = app.isDuplicate("112");
    const case3 = app.isDuplicate("211");

    expect(case1).toEqual(true);
    expect(case2).toEqual(true);
    expect(case3).toEqual(true);
  });

  test("중복되지 않은 숫자를 입력하면 false 반환", () => {
    const app = new App();
    const case1 = app.isDuplicate("123");

    expect(case1).toEqual(false);
  });

  test("유효한 입력일 경우 에러 반환없이 통과", () => {
    const app = new App();
    const case1 = app.vaildInput("123");

    expect(case1).toEqual("123");
  });

  test("유효하지 않은 입력일 경우 에러를 반환", () => {
    try {
      const app = new App();
      app.vaildInput("a1234");
    } catch (err) {
      expect(err).toEqual(new Error("형식이 잘못되었습니다."));
    }
  });

  test("중복된 입력일 경우 에러를 반환", () => {
    try {
      const app = new App();
      app.vaildInput("122");
    } catch (err) {
      expect(err).toEqual(new Error("중복된 숫자가 존재합니다."));
    }
  });

  test("스트라이크 카운트를 결정하는 기능", () => {
    const app = new App();
    const case1 = app.decideStrikeCount("123", "189");
    const case2 = app.decideStrikeCount("123", "129");
    const case3 = app.decideStrikeCount("123", "123");

    expect(case1).toEqual(1);
    expect(case2).toEqual(2);
    expect(case3).toEqual(3);
  });
});
