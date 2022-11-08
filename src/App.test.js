const { Console, Random } = require("@woowacourse/mission-utils");
const App = require("./App");

const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, "print");
  logSpy.mockClear();
  return logSpy;
};

const mockQuestions = (answers) => {
  Console.readLine = jest.fn();
  answers.reduce(
    (acc, input) =>
      acc.mockImplementationOnce((question, callback) => {
        callback(input);
      }),
    Console.readLine
  );
};

const mockRandoms = (numbers) => {
  Random.pickNumberInRange = jest.fn();
  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    Random.pickNumberInRange
  );
};

describe("숫자 야구 게임", () => {
  test("게임 종료 후 2회 이상 재시작 상황을 확인하기위헤, 재시작 2회 이후 낫싱을 출력한다", () => {
    const randoms = [1, 3, 5, 5, 8, 9, 1, 3, 5, 5, 8, 9, 1, 3, 5];
    const answers = [
      "135",
      "1",
      "589",
      "1",
      "135",
      "1",
      "589",
      "1",
      "968",
      "135",
      "2",
    ];
    const logSpy = getLogSpy();
    const messages = ["3스트라이크", "낫싱"];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    app.play();

    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("getComputerNum 메서드를 실행했을 때, 0과 중복값을 포함하지 않는 3자리 랜덤값을 반환", () => {
    const randoms = [1, 3, 5, 5, 8, 9];
    mockRandoms(randoms);
    const app = new App();
    const result = app.getComputerNum();

    expect(result).toEqual("135");
    expect([...result]).not.toContain("0");
    expect(result).toHaveLength(3);
  });

  test("getUserNum 메서드를 실행하였을 때 메소드로 받아온 userNum이 0을 포함할 경우 에러 발생", () => {
    const answer = ["012"];
    const app = new App();
    mockQuestions(answer);

    expect(() => {
      app.getUserNum();
    }).toThrow("알맞은 숫자를 입력하지않아 프로그램을 종료합니다");
  });

  test("getUserNum 메서드를 실행하였을 때 메소드로 받아온 userNum의 숫자가 중복될 경우 에러 발생", () => {
    const answer = ["112"];
    const app = new App();
    mockQuestions(answer);

    expect(() => {
      app.getUserNum();
    }).toThrow("알맞은 숫자를 입력하지않아 프로그램을 종료합니다");
  });

  test("getCompareResult 메소드를 실행하였을 때, 두 입력값을 비교한 결과를 반환", () => {
    const app = new App();
    const results = [
      app.getCompareResult("135", "678"),
      app.getCompareResult("135", "329"),
      app.getCompareResult("135", "129"),
      app.getCompareResult("135", "159"),
      app.getCompareResult("135", "135"),
    ];

    const messages = [
      "낫싱",
      "1볼",
      "1스트라이크",
      "1볼 1스트라이크",
      "3스트라이크",
    ];

    results.forEach((result, index) => {
      expect(result).toEqual(messages[index]);
    });
  });

  test("initializeGame 메소드를 실행하였을 때, 게임 초기값 설정", () => {
    const randoms = [1, 3, 5, 5, 8, 9];
    mockRandoms(randoms);
    const app = new App();
    app.initializeGame();

    expect(app.checkGameEnd).toEqual(false);
    expect(app.computerNum).toEqual("135");
  });

  test("getAllScore 메소드를 실행하였을 때, 입력받은 두 값의 볼과 스트라이크를 합한 개수 반환", () => {
    const app = new App();
    const result = app.getAllScore("135", "312");
    expect(result).toEqual(2);
    expect(result).not.toEqual("2");
    expect(result).not.toEqual(3);
  });

  test("게임 종료 후 재시작시 1과 2 이외의 다른값을 입력을 할 경우 에러를 반환", () => {
    const randoms = [1, 3, 5, 5, 8, 9];
    const answers = ["246", "135", "3"];
    const messages = ["낫싱", "3스트라이크", "1 또는 2를 입력하세요"];

    mockRandoms(randoms);
    mockQuestions(answers);

    messages.forEach((output, index) => {
      if (index === 2) {
        expect(() => {
          const app = new App();
          app.play();
        }).toThrow();
      }
    });
  });

  test("checkValidRestartAnswer 메소드에 1 또는 2를 넣었을 때 true, 이외의 경우 false 를 반환", () => {
    const answers = ["1", "2", "3"];
    const expectResults = [true, true, false];
    answers.forEach((answer, index) => {
      const app = new App();
      const result = app.checkValidRestartAnswer(answer);
      expect(result).toEqual(expectResults[index]);
    });
  });
});
