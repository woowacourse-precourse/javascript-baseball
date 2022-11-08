const App = require("../src/App");
const MissionUtils = require("@woowacourse/mission-utils");

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((question, callback) => {
      callback(input);
    })
  }, MissionUtils.Console.readLine);
}

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
}

describe('게임 종료 시 사용자의 재시작 응답 테스트', () => {
  test("사용자의 재시작 입력 예외 테스트", () => {
    const randoms = [2, 5, 6];
    const answers = ['256', '0'];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow('게임 시작은 1, 종료는 2를 입력하셔야 합니다.');
  });
});
