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

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

test("1 = 1", () => {
  expect(1).toBe(1);
});

test("상대방 배열 생성", () => {
  const app = new App();
  const ComputerArr = app.makeAnswer();
  expect(ComputerArr).toHaveLength(3);
});

test("입력값 제한 사항 체크", () => {
  const app = new App();
  const startText = app.inputCheck("123");
  expect(startText).toEqual([1, 2, 3]);
});

test("사용자 숫자 상대방 숫자 비교", () => {
  const userNum = [1, 2, 3];
  const Answer = [1, 2, 3];
  const app = new App();
  expect(app.compare(userNum, Answer)).toEqual("3스트라이크");
});

test("사용자 숫자 상대방 숫자 비교2", () => {
  const userNum = [4, 5, 6];
  const Answer = [1, 2, 3];
  const app = new App();
  expect(app.compare(userNum, Answer)).toEqual("낫싱");
});

test("사용자 숫자 상대방 숫자 비교3", () => {
  const userNum = [1, 2, 3];
  const Answer = [1, 3, 2];
  const app = new App();
  expect(app.compare(userNum, Answer)).toEqual("2볼 1스트라이크");
});

test("예외 테스트", () => {
  const randoms = [1, 2, 3];
  const answers = ["1234"];

  mockRandoms(randoms);
  mockQuestions(answers);

  expect(() => {
    const app = new App();
    app.play();
  }).toThrow();
});

test("사용자 숫자 상대방 숫자 비교4", () => {
  const randoms = [1, 2, 3];
  const answers = [1, 2, 3];
  const logSpy = getLogSpy();
  const messages = ["3스트라이크"];
  mockRandoms(randoms);
  const app = new App();
  app.compare(answers);
  messages.forEach((output) => {
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
  });
});

// test : git ignore test1
