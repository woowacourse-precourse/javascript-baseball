const App = require("../src/App");
const validateInput = require("../src/ValidateInput");
const MissionUtils = require("@woowacourse/mission-utils");

const mockQuestion = (answer) => {
  MissionUtils.Console.readLine = jest.fn();
  MissionUtils.Console.readLine.mockImplementationOnce((question, callback) => {
    callback(answer);
  });
};

describe("플레이어 입력 검증 테스트", () => {
  afterEach(() => {
    MissionUtils.Console.close();
  });

  test("입력 검증 함수 정상 입력", () => {
    const inputs = ["123", "231", "451", "643"];

    inputs.forEach((input) => {
      const result = validateInput(input);
      expect(result).toBeTruthy();
    });
  });

  test("입력 검증 함수 잘못된 입력", () => {
    const inputsAndReturns = [
      ["123", true],
      ["445", false],
      ["4513", false],
      ["643", true],
      ["de2", false],
    ];

    inputsAndReturns.forEach(([input, answer]) => {
      const result = validateInput(input);
      expect(result).toEqual(answer);
    });
  });

  test("잘못된 입력시 throw 예외 처리", () => {
    const input = "1234";

    mockQuestion(input);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });
});
