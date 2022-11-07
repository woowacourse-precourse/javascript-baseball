const App = require("../src/App");
const MissionUtils = require("@woowacourse/mission-utils");

expect.extend({
  toBeDistinct(received) {
    const pass = received && new Set(received).size === received.length;
    if (pass) {
      return {
        message: () => `expected ${received} string is unique`,
        pass: true,
      };
    } else {
      return {
        message: () => `expected ${received} string is not to unique`,
        pass: false,
      };
    }
  },
});

expect.extend({
  toBeThreeNumber(received) {
    const pass = received.length === 3 && !/[^1-9]/g.test(received);
    if (pass) {
      return {
        message: () => `expected ${received} string is three number`,
        pass: true,
    };
    } else {
      return {
        message: () => `expected ${received} string is not to three number`,
        pass: false,
    };
    }
  }
});

const mockQuestions = (input) => {
  MissionUtils.Console.readLine = jest.fn();
  MissionUtils.Console.readLine.mockImplementationOnce((question, callback) => {
    callback(input);
  });
};
  
const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("숫자 랜덤 생성 테스트", () => {
  test("서로 다른 세 자리 숫자 생성", () => {
    const app = new App();
    const randoms = app.getThreeRandom()

    expect(randoms).toBeThreeNumber();
    expect(randoms).toBeDistinct();
  });
});

describe("시작 문구 출력 테스트", () => {
  test("console에 시작 문구 출력", () => {
    const logSpy = getLogSpy();

    const app = new App();
    app.printStart();
      
    expect(logSpy).toHaveBeenCalled();
  });
});

describe("세 자리 숫자 입력 테스트", () => {
  test("서로 다른 세 자리 숫자 입력 1", () => {
    const logSpy = getLogSpy();
    const answer = '123';
    const input = '123';

    mockQuestions(input);

    const app = new App();
    app.inputNumbers(answer);
    
    expect(logSpy).toHaveBeenCalled();
  });

  test("서로 다른 세 자리 숫자 입력 2", () => {
    const logSpy = getLogSpy();
    const answer = '123';
    const input = '132';

    mockQuestions(input);

    const app = new App();
    app.inputNumbers(answer);
    
    expect(logSpy).toHaveBeenCalled();
  });

  test("문자 입력 시 에러 처리", () => {
    const answer = '123';
    const input = 'ddd';

    mockQuestions(input);
    
    expect(() => {
        const app = new App();
        app.inputNumbers(answer);
    }).toThrow();
  });

  test("1-9 사이의 숫자가 아닐 경우 에러 처리", () => {
    const answer = '123';
    const input = '012';

    mockQuestions(input);
    
    expect(() => {
        const app = new App();
        app.inputNumbers(answer);
    }).toThrow();
  });
});

describe("결과 출력 테스트", () => {
  test("서로 다른 세 자리 숫자 입력 시 결과 출력 1", () => {
    const logSpy = getLogSpy();
    const answer = '123';
    const input = '132';

    const app = new App();
    app.printResult(input, answer);

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('2볼 1스트라이크'));
  });

  test("서로 다른 세 자리 숫자 입력 시 결과 출력 2", () => {
    const logSpy = getLogSpy();
    const answer = '123';
    const input = '325';

    const app = new App();
    app.printResult(input, answer);

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('1볼 1스트라이크'));
  });

  test("서로 다른 세 자리 숫자 입력 시 결과 출력 3", () => {
    const logSpy = getLogSpy();
    const answer = '123';
    const input = '123';

    const app = new App();
    app.printResult(input, answer);

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('3스트라이크'));
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('게임 종료'));
  });
});

describe("한 자리 숫자 입력 테스트", () => {
  test("1을 입력해 게임 재시작", () => {
    const logSpy = getLogSpy();
    const input = '1';

    mockQuestions(input);

    const app = new App();
    app.inputRestartOrEnd();
    
    expect(logSpy).toBeCalledTimes(2);
  });

  test("2를 입력해 게임 종료", () => {
    const logSpy = getLogSpy();
    const input = '2';

    mockQuestions(input);

    const app = new App();
    app.inputRestartOrEnd();
    
    expect(logSpy).not.toBeCalledTimes(2);
  });

  test("입력 값이 1과 2가 아닐 때 에러 처리", () => {
    const input = '0';

    mockQuestions(input);
    
    expect(() => {
      const app = new App();
      app.inputRestartOrEnd();
    }).toThrow();
  });

  test("입력 값이 한 자리 수가 아닐 때 에러 처리", () => {
    const input = '11';

    mockQuestions(input);
    
    expect(() => {
      const app = new App();
      app.inputRestartOrEnd();
    }).toThrow();
  });

  test("입력값이 숫자가 아닐 때 에러 처리", () => {
    const input = 'd';

    mockQuestions(input);
    
    expect(() => {
      const app = new App();
      app.inputRestartOrEnd();
    }).toThrow();
  });
});