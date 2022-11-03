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
  // test("게임이 실행되면 '숫자 야구 게임을 시작합니다.'라는 문구를 출력한다.", () => {
  //   const logSpy = getLogSpy();
  //   const app = new App();
  //   app.play();
  //   expect(logSpy).toHaveBeenCalledWith("숫자 야구 게임을 시작합니다.");
  // });
  // test("게임이 실행되면 숫자 야구 게임의 정답을 생성한다.", () => {
  //   const app = new App();
  //   const answer = app.ANSWER;
  //   expect(answer).toHaveLength(3);
  // });
  // test("게임이 실행되면 '숫자를 입력해주세요 : '라는 문구를 출력한다.", () => {
  //   const logSpy = getLogSpy();
  //   const app = new App();
  //   app.play();
  //   expect(logSpy).toHaveBeenCalledWith("숫자를 입력해주세요 : ");
  // });
  // test("게임 종료 후 재시작", () => {
  //   const randoms = [1, 3, 5, 5, 8, 9];
  //   const answers = ["246", "135", "1", "597", "589", "2"];
  //   const logSpy = getLogSpy();
  //   const messages = [
  //     "낫싱",
  //     "3스트라이크",
  //     "1볼 1스트라이크",
  //     "3스트라이크",
  //     "게임 종료",
  //   ];
  //   mockRandoms(randoms);
  //   mockQuestions(answers);
  //   const app = new App();
  //   app.play();
  //   messages.forEach((output) => {
  //     expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
  //   });
  // });
  // test("예외 테스트", () => {
  //   const randoms = [1, 3, 5];
  //   const answers = ["1234"];
  //   mockRandoms(randoms);
  //   mockQuestions(answers);
  //   expect(() => {
  //     const app = new App();
  //     app.play();
  //   }).toThrow();
  // });
});

describe("App", () => {
  test("print 메소드를 통해 원하는 메시지를 출력한다.", () => {
    const logSpy = getLogSpy();

    const MESSAGE = "메시지";
    const app = new App();

    app.print(MESSAGE, true);

    expect(logSpy).toHaveBeenCalledWith(MESSAGE);
  });

  // test("getRandomNumber 메소드를 통해 랜덤한 숫자(1~9)를 생성한다.", () => {
  //   const app = new App();

  //   const randomNumber = app.getRandomNumber();

  //   expect(randomNumber).toBeGreaterThanOrEqual(1);
  //   expect(randomNumber).toBeLessThanOrEqual(9);
  // });

  test("숫자 야구 게임의 정답을 만든다.", () => {
    const app = new App();

    const answer = app.makeBaseballGameAnswer();

    expect(answer).toHaveLength(3);
    expect(typeof answer).toBe("string");
    expect(
      Array.from(answer).every((number) => !isNaN(Number(number)))
    ).toBeTruthy();
  });
});
