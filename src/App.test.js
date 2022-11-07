const MissionUtils = require("@woowacourse/mission-utils");
const App = require("./App");

const getSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce(
    (acc, input) =>
      acc.mockImplementationOnce((question, callback) => callback(input)),
    MissionUtils.Console.readLine
  );
};

describe("숫자 야구 게임", () => {
  test("print 메소드로 받은값을 출력", () => {
    const Spy = getSpy();
    const app = new App();
    const input = "test";
    app.print(input);

    expect(Spy).toHaveBeenCalledWith(expect.stringContaining(input));
  });
  test("getUserNumber 메서드로 받아온 userNumber를 확인", () => {
    const correctAnswer = ["123"];

    mockQuestions(correctAnswer);

    const app = new App();
    app.play();
    const correctResult = app.userNumber;

    expect(correctResult).toEqual("123");
    expect([...correctResult]).not.toContain("0");
    expect(correctResult).toHaveLength(3);
  });

  test("getUserNumber 메서드로 받아온 userNumber 가 0을 포함할 경우 에러를 발생시킨다", () => {
    const answer = ["012"];

    mockQuestions(answer);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test("getUserNumber 메서드로 받아온 userNumber 의 숫자가 중복될 경우 에러를 발생시킨다", () => {
    const answer = ["112"];

    mockQuestions(answer);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });
  test("진행상황 확인용 테스트", () => {
    const answers = ["123"];

    mockQuestions(answers);

    const app = new App();
    app.play();
  });
});
