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

test("예외 테스트, 길이 초과", () => {
  const randoms = [1, 3, 5];
  const answers = ["1234"];

  mockRandoms(randoms);
  mockQuestions(answers);

  expect(() => {
    const app = new App();
    app.play();
  }).toThrow();
});

test("예외 테스트, 길이 미달", () => {
  const randoms = [1, 3, 5];
  const answers = ["12"];

  mockRandoms(randoms);
  mockQuestions(answers);

  expect(() => {
    const app = new App();
    app.play();
  }).toThrow();
});

test("예외 테스트, 0 포함", () => {
  const randoms = [1, 3, 5];
  const answers = ["012"];

  mockRandoms(randoms);
  mockQuestions(answers);

  expect(() => {
    const app = new App();
    app.play();
  }).toThrow();
});

test("예외 테스트, 숫자 중복", () => {
  const randoms = [1, 3, 5];
  const answers = ["111"];

  mockRandoms(randoms);
  mockQuestions(answers);

  expect(() => {
    const app = new App();
    app.play();
  }).toThrow();
});

test("예외 테스트, 중복 & 미달", () => {
  const randoms = [1, 3, 5];
  const answers = ["99"];

  mockRandoms(randoms);
  mockQuestions(answers);

  expect(() => {
    const app = new App();
    app.play();
  }).toThrow();
});

test("예외 테스트, 숫자 이외의 문자", () => {
  const randoms = [1, 3, 5];
  const answers = ["asdf"];

  mockRandoms(randoms);
  mockQuestions(answers);

  expect(() => {
    const app = new App();
    app.play();
  }).toThrow();
});

test("예외 테스트, 숫자와 문자 혼용", () => {
  const randoms = [1, 3, 5];
  const answers = ["d12"];

  mockRandoms(randoms);
  mockQuestions(answers);

  expect(() => {
    const app = new App();
    app.play();
  }).toThrow();
});

test("예외 테스트, 게임 종료 후 재시작 시 1,2 이외의 입력", () => {
  const randoms = [1, 3, 5];
  const answers = ["135", "3"];

  mockRandoms(randoms);
  mockQuestions(answers);

  expect(() => {
    const app = new App();
    app.play();
  }).toThrow();
});
