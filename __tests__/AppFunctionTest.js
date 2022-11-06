const App = require("../src/App");
const MissionUtils = require("@woowacourse/mission-utils");

describe("(추가)숫자 야구 게임", () => {
  test("잘못된 컴퓨터의 랜덤 숫자", () => {
    const app = new App();
    const result = app.selectNum();

    expect(result).toBeGreaterThanOrEqual(123);
    expect(result).toBeLessThan(987);
  });

  test("입력값 검증하기", () => {
    const app = new App();
    const number = ["4567", "23", "120", "778", "1", "745"];
    const isValid = [false, false, false, false, false, true];

    number.forEach((output, idx) => {
      expect(app.isValidInput(output)).toEqual(isValid[idx]);
    });
  });

  test("입력값과 컴퓨터 숫자 비교하기", () => {
    const app = new App();
    const input = [145, 789, 632, 789, 234];
    const computer = [456, 123, 973, 789, 243];

    input.forEach((output, idx) => {
      expect(app.CompareInputWithComputer(output, computer[idx]));
    });
  });

  test("게임 결과값 출력하기", () => {
    const app = new App();
    const input = [145, 789, 632, 789, 715, 234];
    const computer = [456, 123, 973, 789, 619, 243];
    const result = [
      "2볼",
      "낫싱",
      "1볼",
      "3스트라이크",
      "1스트라이크",
      "2볼 1스트라이크",
    ];

    input.forEach((output, idx) => {
      expect(
        app.printResult(app.CompareInputWithComputer(output, computer[idx]))
      );
    });
  });
});
