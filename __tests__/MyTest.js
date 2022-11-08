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

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("숫자 야구 게임", () => {
  test("정답을 맞춘 후 게임 종료", () => {
    const randoms = [1, 3, 5, 5, 8, 9];
    const answers = ["246", "135", "2"];
    const logSpy = getLogSpy();
    const messages = ["낫싱", "3스트라이크", "게임 종료"];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    app.play();

    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
});

describe("숫자 야구 게임", () => {
  test("정답을 맞춘 후 재시작", () => {
    const randoms = [7, 8, 2, 4, 6, 8];
    const answers = [
      "135",
      "138",
      "283",
      "278",
      "132",
      "785",
      "782",
      "1",
      "478",
      "648",
      "468",
      "2",
    ];
    const logSpy = getLogSpy();
    const messages = [
      "낫싱",
      "1볼",
      "2볼",
      "3볼",
      "1스트라이크",
      "2스트라이크",
      "3스트라이크",
      "1볼 1스트라이크",
      "2볼 1스트라이크",
      "3스트라이크",
      "게임 종료",
    ];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    app.play();

    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
});

test("사용자 입력 값 예외 테스트 - 길이가 3이 아닌 경우", () => {
  const randoms = [1, 3, 5];
  const answers = ["1234"];

  mockRandoms(randoms);
  mockQuestions(answers);

  expect(() => {
    const app = new App();
    app.play();
  }).toThrow();
});

test("사용자 입력 값 예외 테스트 - 숫자로만 이루어지지 않은 경우", () => {
  const randoms = [1, 3, 5];
  const answers = ["12a"];

  mockRandoms(randoms);
  mockQuestions(answers);

  expect(() => {
    const app = new App();
    app.play();
  }).toThrow();
});

test("사용자 입력 값 예외 테스트 - 중복된 숫자를 입력한 경우", () => {
  const randoms = [1, 3, 5];
  const answers = ["114"];

  mockRandoms(randoms);
  mockQuestions(answers);

  expect(() => {
    const app = new App();
    app.play();
  }).toThrow();
});
