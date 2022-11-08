const MissionUtils = require("@woowacourse/mission-utils");
const App = require("../src/App");

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
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

describe("입력값 유효 체크 테스트", () => {
  test("입력값에 중복이 포함되어 있다면 에러를 발생시킨다.", () => {
    const randoms = [1, 2, 3];
    const answer = ["122"];

    mockRandoms(randoms);
    mockQuestions(answer);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test("입력값에 숫자가 아닌 값이 포함되어 있다면 에러를 발생시킨다.", () => {
    const randoms = [1, 2, 3];
    const answer = ["12d"];

    mockRandoms(randoms);
    mockQuestions(answer);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test("게임 종료 후 1, 2 이외의 값이 입력되면 에러를 발생시킨다.", () => {
    const randoms = [1, 3, 5, 5, 8, 9];
    const answers = ["246", "135", "1", "597", "589", "23"];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });
});
