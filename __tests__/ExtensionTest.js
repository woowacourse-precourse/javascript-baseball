const App = require("../src/App");
const MissionUtils = require("@woowacourse/mission-utils");
const config = require("../src/config/config");

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((question, callback) => {
      callback(input);
    });
  }, MissionUtils.Console.readLine);
};

describe("숫자 야구 게임 기능 및 예외 테스트", () => {
  test("readNum: 문자열을 숫자형 리스트로 바꾸기", () => {
    const answers = ["123"];
    mockQuestions(answers);

    const app = new App();
    const result = app.readNum();
    expect(result).toEqual([1, 2, 3]);
  });

  test("generateNum: 서로 다른 3자리 수 생성", () => {
    const app = new App();
    app.generateNum();

    const after = app.computerNum;
    const set = new Set(after);

    expect(set.size).toEqual(config.GAME_NUM_SIZE);
  });

  test("compareNum: 컴퓨터 수와 사람이 입력한 수를 비교", () => {
    const app = new App();

    const answer = [
      { strike: 0, ball: 0 },
      { strike: 0, ball: 1 },
      { strike: 0, ball: 2 },
      { strike: 0, ball: 3 },
      { strike: 1, ball: 0 },
      { strike: 1, ball: 1 },
      { strike: 1, ball: 2 },
      { strike: 2, ball: 0 },
      { strike: 3, ball: 0 },
    ];

    const inputs = [
      [
        [1, 2, 3],
        [4, 5, 6],
      ],
      [
        [1, 2, 3],
        [3, 4, 5],
      ],
      [
        [1, 2, 3],
        [2, 3, 4],
      ],
      [
        [1, 2, 3],
        [2, 3, 1],
      ],
      [
        [1, 2, 3],
        [1, 4, 5],
      ],
      [
        [1, 2, 3],
        [1, 3, 4],
      ],
      [
        [1, 2, 3],
        [1, 3, 2],
      ],
      [
        [1, 2, 3],
        [1, 2, 4],
      ],
      [
        [1, 2, 3],
        [1, 2, 3],
      ],
    ];

    const results = [];

    inputs.forEach((input, idx) => {
      results.push(app.compareNum(input[0], input[1]));
    });

    results.forEach((result, idx) => {
      expect(result).toEqual(answer[idx]);
    });
  });
});
