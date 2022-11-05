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

test("dmd", () => {
  const answers = ["246", "135", "1", "597", "589", "2"];
  mockQuestions(answers);
  console.log(MissionUtils.Console.readLine.mock);
});
