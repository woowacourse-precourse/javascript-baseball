const App = require("../src/App");
const MissionUtils = require("@woowacourse/mission-utils");
const Error = require("../src/utils/error");
const Input = require("../src/utils/input");

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

describe("입력값 테스트", () => {
  test("에러 처리", () => {
    expect(() => {
      const message = "잘못된 입력값입니다.";
      Error.throw(message);
    }).toThrow();
  });

  test("중복 검사", () => {
    const inputs = ["122", "213"];
    const expects = [
      [false, true, true],
      [false, false, false],
    ];

    for (let i = 0; i < inputs.length; i++) {
      for (let j = 0; j < inputs[i].length; j++) {
        expect(Error.isDuplicated(inputs[i], inputs[i][j])).toEqual(
          expects[i][j]
        );
      }
    }
  });

  test("유효성 검사", () => {
    const wrongs = ["121", "122", "333", "0", "1", "1234"];
    expect(() => {
      wrongs.forEach((wrong) => Error.validate(wrong));
    }).toThrow();
  });
});

describe("입력값 테스트", () => {
  const input = new Input();

  test("값 저장 테스트", () => {
    input.save("123");
    expect(input.value).toEqual([1, 2, 3]);
  });

  test("값 초기화 테스트", () => {
    input.clear();
    expect(input.value).toEqual([]);
  });

  test("배열 테스트", () => {
    expect(input.makeNumberArray("123")).toEqual([1, 2, 3]);
  });
});
