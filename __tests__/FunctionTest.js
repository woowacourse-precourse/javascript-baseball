const MissionUtils = require('@woowacourse/mission-utils')

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((question, callback) => {
      callback(input);
    });
  }, MissionUtils.Console.readLine);
};

describe("기능 목록 테스트", () => {
  const random = [1, 2, 3];

  test("상대방(컴퓨터)이 숫자를 정하는 기능", () => {
    let result = [];
    while (result.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!result.includes(number)) {
        result.push(number);
      }
    }
    expect(result.join("")).toMatch(/[1-9]{3}/);
  })

  test("사용자가 숫자(답)를 입력하는 기능", () => {
    let result;
    mockQuestions(["123"]);
    MissionUtils.Console.readLine("입력", (input) => {
      result = input;
    })
    expect(result).toBe("123");
  })

  test("사용자가 입력한 숫자에 볼이 있는지 확인하는 기능", () => {
    let ball = 0;
    let input = [1, 2, 3];
    for (let i = 0; i < random.length; i++) {
      if (input[i] !== random[i] && random.includes(input[i])) {
        ball++
      }
    }
    expect(ball).toBe(0);
  })

  test("사용자가 입력한 숫자에 스트라이크가 있는지 확인하는 기능", () => {
    let strike = 0;
    let input = [1, 2, 3];
    for (let i = 0; i < random.length; i++) {
      if (input[i] === random[i]) {
        strike++
      }
    }
    expect(strike).toBe(3);
  })

  test("사용자에게 힌트를 주는 기능", () => {
    let ball = 1;
    let strike = 1;
    let hint = "";

    if (ball > 0) {
      hint = `${ball}볼 `;
    }
    if (strike > 0) {
      hint += `${strike}스트라이크`;
    }
    if (ball < 0 && strike < 0) {
      hint = "낫싱";
    }
    expect(hint).toBe("1볼 1스트라이크");
  })
})

describe("예외처리 기능 테스트", () => {
  const random = [1, 2, 3];
  
  test("사용자가 입력한 숫자가 3자릿수가 아닐 경우 예외처리", () => {
    throwException = (input) => {
      input = input.split("").map(num => Number(num));
      if (input.length !== 3) {
        throw new Error();
      }
    }
    expect(() => throwException("1234")).toThrow();
  })

  test("사용자가 입력한 숫자에 중복이 있을 경우 예외처리", () => {
    throwException = (input) => {
      input = input.split("").map(num => Number(num));
      if ([...new Set(input)].length !== 3) {
        throw new Error();
      }
    }
    expect(() => throwException("133")).toThrow();
  })

  test("사용자가 입력한 값이 숫자 1 - 9가 아닐 경우 예외처리", () => {
    throwException = (input) => {
      input = input.split("").map(num => Number(num));
      if (input.includes(0) || input.includes(NaN)) {
        throw new Error();
      }
    }
    expect(() => throwException("103")).toThrow();
  })

  test("사용자가 입력한 값이 숫자 1 또는 2가 아닐 경우 예외처리", () => {
    throwException = (input) => {
      input = Number(input);
      if (input !== 1 || input !== 2) {
        throw new Error();
      }
    }
    expect(() => throwException("3")).toThrow();
  })
})