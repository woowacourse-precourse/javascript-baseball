const App = require("../src/App");
const MissionUtils = require("@woowacourse/mission-utils");

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((question, callback) => {
      callback(input);
    });
  }, MissionUtils.Console.readLine);
};

describe.only("플레이어 입력 테스트", () => {
  test("플레이어가 입력한 숫자를 문자열로 반환 확인", () => {
    const inputs = ["123", "231", "451", "643"];

    mockQuestions(inputs);

    const app = new App();

    inputs.forEach((input) => {
      app.readPlayerInput().then((result) => {
        expect(result).toEqual(input);
      });
    });
  });
});
