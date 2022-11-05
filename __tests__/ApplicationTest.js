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

    app.print(MESSAGE);
    MissionUtils.Console.close();

    expect(logSpy).toHaveBeenCalledWith(MESSAGE);
  });

  test("generateAnswer 메소드를 통해 정답을 생성한다.", () => {
    const app = new App();
    const answer = app.generateAnswer();

    const checkNumber = (number) => !isNaN(number);
    const checkRange = (number) => number >= 1 && number <= 9;

    expect(Array.from(new Set(answer))).toHaveLength(3);
    expect(
      Array.from(answer)
        .map((char) => Number(char))
        .every(checkRange)
    ).toBeTruthy();
    expect(
      Array.from(answer)
        .map((char) => Number(char))
        .every(checkNumber)
    ).toBeTruthy();
  });

  test("isValidInput 메소드를 통해 사용자의 입력이 유효한 입력인지 확인한다.", () => {
    const app = new App();

    const LONGER_THEN_THREE = "1234";
    const SHORTER_THEN_THREE = "12";
    const NOT_NUMBER = "a12";
    const HAS_ZERO = "012";

    const VALID_NUMBER = "123";

    expect(() => app.isValidInput(LONGER_THEN_THREE)).toThrow(Error);
    expect(() => app.isValidInput(SHORTER_THEN_THREE)).toThrow(Error);
    expect(() => app.isValidInput(NOT_NUMBER)).toThrow(Error);
    expect(() => app.isValidInput(HAS_ZERO)).toThrow(Error);

    expect(app.isValidInput(VALID_NUMBER)).toBeTruthy();
  });

  test("isGameEnd 메소드를 통해 게임이 종료되었는지 확인한다.", () => {
    const app = new App();
    app.answer = app.generateAnswer();
    app.userInput = app.answer;

    expect(app.isGameEnd()).toBeTruthy();

    let wrongUserInput = "124";
    if (app.answer === wrongUserInput) wrongUserInput = "123";
    app.userInput = wrongUserInput;

    expect(app.isGameEnd()).toBeFalsy();
  });

  // test("getRandomNumber 메소드를 통해 랜덤한 숫자(1~9)를 생성한다.", () => {
  //   const app = new App();

  //   const randomNumber = app.getRandomNumber();

  //   expect(randomNumber).toBeGreaterThanOrEqual(1);
  //   expect(randomNumber).toBeLessThanOrEqual(9);
  // });

  // test("숫자 야구 게임의 정답을 만든다.", () => {
  //   const app = new App();

  //   const answer = app.makeBaseballGameAnswer();

  //   expect(answer).toHaveLength(3);
  //   expect(typeof answer).toBe("string");
  //   expect(
  //     Array.from(answer).every((number) => !isNaN(Number(number)))
  //   ).toBeTruthy();
  // });

  // test("유저의 input이 올바르지 않을 경우 에러를 발생시킨다.", () => {
  //   const app = new App();
  //   mocking 어떻게해?
  //   app.getPlayerInput = jest.fn(() => "1A3");

  //   const input = app.getPlayerInput();

  //   expect(result).toThrow(RangeError);
  // });

  // test("유저의 input과 정답을 비교해 결과를 출력한다.", () => {
  //   const app = new App();
  //   const logSpy = getLogSpy();

  //   const input = "123";
  //   app.ANSWER = "456";

  //   app.print(app.compareUserInputWithAnswer(input));

  //   expect(logSpy).toHaveBeenCalledWith("낫싱");
  // });
});
