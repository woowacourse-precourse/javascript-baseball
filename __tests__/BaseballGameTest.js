const App = require("../src/App");
const MissionUtils = require("@woowacourse/mission-utils");

const mockQuestions = (answers) => {
    //jest.fn() : 가짜 함수 생성
    MissionUtils.Console.readLine = jest.fn();
    answers.reduce((acc, input) => {
      // mockImplementationsOnce
      return acc.mockImplementationOnce((question, callback) => {
        callback(input);
      });
    }, MissionUtils.Console.readLine);
  };
  
  const mockRandoms = (numbers) => {
    MissionUtils.Random.pickNumberInRange = jest.fn();
    numbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
    }, MissionUtils.Random.pickNumberInRange);
  };

test("사용자 입력받기 예외 테스트 5가지", () => {
    const randoms = [1, 3, 5];
    const answers = ["","a12","112","102","1234"];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });