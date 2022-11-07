const MissionUtils = require("@woowacourse/mission-utils");
const App = require("./App");

describe("게임함수확인용", () => {
  const app = new App();

  test("makeComNum_1", () => {
    expect(app.makeComNum().length).toEqual(3);
  });

  test("checkNum_1", () => {
    expect(app.checkNum("248", [1, 8, 2])).toEqual([2, 0]);
  });

  test("checkNum_2", () => {
    expect(app.checkNum("518", [5, 1, 2])).toEqual([0, 2]);
  });

  test("checkNum_3", () => {
    expect(app.checkNum("861", [8, 6, 1])).toEqual([0, 3]);
  });

  test("answer_1", () => {
    expect(app.answer([0, 0])).toEqual("낫싱");
  });

  test("answer_2", () => {
    expect(app.answer([0, 1])).toEqual("1스트라이크");
  });

  test("answer_3", () => {
    expect(app.answer([2, 0])).toEqual("2볼");
  });

  test("answer_4", () => {
    expect(app.answer([2, 1])).toEqual("2볼 1스트라이크");
  });

  // 아래 close 를 하지않을 시 test가 끝나지 않음
  MissionUtils.Console.close();
});
