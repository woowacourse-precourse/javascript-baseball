const App = require("../src/App");
const MissionUtils = require("@woowacourse/mission-utils");
const checkInputAvailable = require("../src/checkInputAvailable");
const createRandomNumbers = require("../src/createRandomNumbers");
const checkStrike = require("../src/checkStrike");
const checkBall = require("../src/checkBall");
const getResult = require("../src/getResult");

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

describe("1. 서로 다른 세자리의 숫자의 배열을 생성하는 기능", () => {
  test("case1. 서로 다른 세자리 숫자인 경우", () => {
    const result = createRandomNumbers();
    const REG_EXP = /[0-9]/g;

    const uniqueResult = new Set(result);

    expect([...uniqueResult].length).toEqual(3);
    expect(result.every((number) => number.match(REG_EXP))).toEqual(true);
    expect(result.length).toEqual(3);
  });
});

describe("2. 유효한 입력인지 판별하는 기능", () => {
  test("case1. 서로 다른 세자리 숫자가 아닌 경우", () => {
    const input = ["1", "1", "2"];
    const result = checkInputAvailable(input);

    expect(result).toEqual(false);
  });
  test("case2. 숫자가 아닌 문자를 입력한 경우", () => {
    const input = ["a", "b", "c"];
    const result = checkInputAvailable(input);

    expect(result).toEqual(false);
  });
  test("case3. 아무것도 입력하지 않은 경우", () => {
    const input = [];
    const result = checkInputAvailable(input);

    expect(result).toEqual(false);
  });
  test("case4. 입력한 숫자의 개수가 3개가 아닌 경우", () => {
    const input = ["1", "2"];
    const result = checkInputAvailable(input);

    expect(result).toEqual(false);
  });
});

describe("3. 입력에서 '스트라이크' 개수를 반환하는 기능", () => {
  test("case1. 입력에서 '스트라이크' 개수를 반환", () => {
    const solution = ["1", "3", "2"];
    const answer = ["1", "4", "3"];
    const result = checkStrike(solution, answer);

    expect(result).toEqual(1);
  });
});

describe("4. 입력에서 '볼' 개수를 반환하는 기능", () => {
  test("case1. 입력에서 '볼' 개수를 반환", () => {
    const solution = ["1", "3", "2"];
    const answer = ["1", "4", "3"];
    const result = checkBall(solution, answer);

    expect(result).toEqual(1);
  });
});

describe("5. 입력에 따른 출력값을 반환하는 기능", () => {
  test("case1. 스트라이크만 존재하는 경우", () => {
    const solution = ["1", "3", "2"];
    const answer = ["1", "4", "5"];
    const result = getResult(solution, answer);

    expect(result).toEqual("1스트라이크");
  });
  test("case2. 볼만 존재하는 경우", () => {
    const solution = ["6", "3", "2"];
    const answer = ["7", "4", "3"];
    const result = getResult(solution, answer);

    expect(result).toEqual("1볼");
  });
  test("case3. 스트라이크와 볼, 둘 다 존재하는 경우", () => {
    const solution = ["1", "3", "2"];
    const answer = ["1", "4", "3"];
    const result = getResult(solution, answer);

    expect(result).toEqual("1볼 1스트라이크");
  });
  test("case4. 낫싱인 경우", () => {
    const solution = ["1", "3", "2"];
    const answer = ["4", "6", "7"];
    const result = getResult(solution, answer);

    expect(result).toEqual("낫싱");
  });
});

describe("6. 입력과 출력의 사이클을 반복하는 기능", () => {
  test("case1. 유효한 입력만 들어와서 정상적으로 게임이 종료되는 경우", () => {
    const randoms = [1, 3, 5];
    const answers = ["467", "136", "135"];
    const logSpy = getLogSpy();
    const messages = ["낫싱", "2스트라이크", "3스트라이크"];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    app.play();

    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
});

describe("7. 유효하지 않은 입력일떄 예외를 발생시키는 기능", () => {
  test("case2. 유효하지 않은 값의 예외가 발생하여 애플리케이션이 종료되는 경우", () => {
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

describe("8. 입력에 따라 게임을 재시작 혹은 완전히 종료시키는 기능", () => {
  test("case1. 게임 재시작 후 완전히 종료", () => {
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
});
