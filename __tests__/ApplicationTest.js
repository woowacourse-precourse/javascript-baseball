const App = require("../src/App");
const Input = require("../src/Input");
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
  test("게임 종료 후 재시작", () => {
    const randoms = [1, 3, 5, 5, 8, 9];
    const answers = ["246", "135", "1", "597", "589", "2"];
    const logSpy = getLogSpy();
    const messages = [
      "낫싱",
      "3스트라이크",
      "1볼 1스트라이크",
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

  test("예외 테스트", () => {
    const randoms = [1, 3, 5];
    const answers = ["1234"];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });
});

describe("컴퓨터가 정답 만들기 유닛 테스트", () => {
  test("기존 정답이 존재하지 않을 때, 컴퓨터가 정답을 새로 생성한다.", () => {
    const randoms = [1, 5, 5, 8, 8, 9];

    mockRandoms(randoms);

    const app = new App();
    app.makeAnswer();

    expect(app.answer).toBe("158");
  });

  test("기존 정답이 존재할 때, 컴퓨터가 정답을 새로 생성한다.", () => {
    const app = new App();
    app.answer = "123";
    const randoms = [1, 5, 5, 8, 8, 9];

    mockRandoms(randoms);
    app.makeAnswer();

    expect(app.answer).toBe("158");
  });
});

describe("사용자 입력에 대한 예외 처리 테스트", () => {
  test("적절한 입력에 대해서는 true를 리턴한다.", () => {
    const input = ["123", "234", "345"];
    input.forEach((num) => {
      expect(Input.isValidInput(num)).toBe(true);
    });
  });

  test("3자리 숫자를 입력하지 않았을 때는 예외를 발생시킨다.", () => {
    const input = ["12", "23", "34567"];
    input.forEach((num) => {
      expect(() => Input.isValidInput(num)).toThrow(Error);
    });
  });
  test("숫자가 아닌 값을 입력했을 때는 예외를 발생시킨다.", () => {
    const input = ["12ba", "23a", "345ㅁ"];
    input.forEach((num) => {
      expect(() => Input.isValidInput(num)).toThrow(Error);
    });
  });
  test("1 ~ 9 사이의 숫자가 아닌 값을 입력했을 때는 예외를 발생시킨다.", () => {
    const input = ["103", "203", "305"];
    input.forEach((num) => {
      expect(() => Input.isValidInput(num)).toThrow(Error);
    });
  });
  test("중복되는 숫자를 입력했을 때는 예외를 발생시킨다.", () => {
    const input = ["122", "223", "355"];
    input.forEach((num) => {
      expect(() => Input.isValidInput(num)).toThrow(Error);
    });
  });
});
