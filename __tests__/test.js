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

test("문자를 입력한 경우", () => {
  const randoms = [1, 3, 5];
  const answers = ["가나다"];

  mockRandoms(randoms);
  mockQuestions(answers);

  expect(() => {
    const app = new App();
    app.play();
  }).toThrow();
});
test("문자와 숫자를 같이 입력한 경우", () => {
  const randoms = [1, 3, 5];
  const answers = ["1나다"];

  mockRandoms(randoms);
  mockQuestions(answers);

  expect(() => {
    const app = new App();
    app.play();
  }).toThrow();
});
test("문자와 숫자를 같이 입력한 경우", () => {
  const randoms = [1, 3, 5];
  const answers = ["123나다"];

  mockRandoms(randoms);
  mockQuestions(answers);

  expect(() => {
    const app = new App();
    app.play();
  }).toThrow();
});
test("중복된 경우", () => {
  const randoms = [1, 3, 5];
  const answers = ["445"];

  mockRandoms(randoms);
  mockQuestions(answers);

  expect(() => {
    const app = new App();
    app.play();
  }).toThrow();
});

test("숫자가 세자리가 안될 경우", () => {
  const randoms = [1, 3, 5];
  const answers = ["12"];

  mockRandoms(randoms);
  mockQuestions(answers);

  expect(() => {
    const app = new App();
    app.play();
  }).toThrow();
});
