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
    const case0 = app.decideStrikeCount("123", "456");
    const case1 = app.decideStrikeCount("123", "189");
    const case2 = app.decideStrikeCount("123", "129");
    const case3 = app.decideStrikeCount("123", "123");

    expect(case0).toEqual(0);
    expect(case1).toEqual(1);
    expect(case2).toEqual(2);
    expect(case3).toEqual(3);
  });

  test("볼 카운트를 결정하는 기능", () => {
    const app = new App();
    const case0 = app.decideBallCount("123", "456");
    const case1 = app.decideBallCount("123", "914");
    const case2 = app.decideBallCount("123", "412");
    const case3 = app.decideBallCount("123", "312");

    expect(case0).toEqual(0);
    expect(case1).toEqual(1);
    expect(case2).toEqual(2);
    expect(case3).toEqual(3);
  });

  test("사용자에게 보여줄 기능", () => {
    const app = new App();
    const case0 = app.makeCountMessage(app.decideCount("123", "456")); // 낫싱
    const case1 = app.makeCountMessage(app.decideCount("123", "156")); // 1스트라이크
    const case2 = app.makeCountMessage(app.decideCount("123", "126")); // 2스트라이크
    const case3 = app.makeCountMessage(app.decideCount("123", "123")); // 3스크라이크
    const case4 = app.makeCountMessage(app.decideCount("123", "152")); // 1볼 1스트라이크
    const case5 = app.makeCountMessage(app.decideCount("123", "132")); // 2볼 1스트라이크
    const case6 = app.makeCountMessage(app.decideCount("123", "231")); // 3볼

    expect(case0).toEqual("낫싱");
    expect(case1).toEqual("1스트라이크");
    expect(case2).toEqual("2스트라이크");
    expect(case3).toEqual("3스트라이크");
    expect(case4).toEqual("1볼 1스트라이크");
    expect(case5).toEqual("2볼 1스트라이크");
    expect(case6).toEqual("3볼");
  });
});
