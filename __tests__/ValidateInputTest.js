const App = require("../src/App");
const MissionUtils = require("@woowacourse/mission-utils");

describe.only("플레이어 입력 검증 테스트", () => {
  test("정상 입력 확인", () => {
    const inputs = ["123", "231", "451", "643"];

    const app = new App();

    inputs.forEach((input) => {
      const result = app.validateInput(input);
      expect(result).toBeFalsy();
    });
  });

  test("잘못된 입력 확인", () => {
    const inputs = [
      ["123", true],
      ["445", false],
      ["4513", false],
      ["643", true],
      ["de2", false],
    ];

    const app = new App();

    inputs.forEach(([input, answer]) => {
      const result = app.validateInput(input);
      expect(result).toEqual(answer);
    });
  });
});
