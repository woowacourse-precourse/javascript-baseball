const Message = require("../src/Message");

const mockRequestInput = (answers) => {
  Message.requestInput = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((callback) => {
      callback(input);
    });
  }, Message.requestInput);
};

const mockRequesRestart = (answers) => {
  Message.requestRestart = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((callback) => {
      callback(input);
    });
  }, Message.requestRestart);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(console, "log");
  logSpy.mockClear();
  return logSpy;
};

describe("Message 테스트", () => {
  test("Message.printStart() 메서드는 게임 시작 문구를 콘솔에 출력해야 합니다.", () => {
    const logSpy = jest.spyOn(console, "log");

    Message.printStart();

    expect(logSpy).toHaveBeenCalledWith("숫자 야구 게임을 시작합니다.");
  });

  test("Message.printEnd() 메서드는 게임 종료 문구를 콘솔에 출력해야 합니다.", () => {
    const logSpy = jest.spyOn(console, "log");

    Message.printEnd();

    expect(logSpy).toHaveBeenCalledWith("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
  });

  test("Message.throwError() 메서드는 예외를 발생시키고 애플리케이션을 종료해야 합니다.", () => {
    expect(() => {
      Message.throwError();
    }).toThrow();
  });

  test("Message.printResult() 메서드는 볼의 개수와 스트라이크의 개수를 인수로 받아서 결과를 콘솔에 출력해야 합니다.", () => {
    const logSpy = jest.spyOn(console, "log");

    Message.printResult(0, 0);

    expect(logSpy).toHaveBeenCalledWith("낫싱");
  });

  test("Message.printResult() 메서드는 볼의 개수와 스트라이크의 개수를 인수로 받아서 결과를 콘솔에 출력해야 합니다.", () => {
    const logSpy = jest.spyOn(console, "log");

    Message.printResult(1, 0);

    expect(logSpy).toHaveBeenCalledWith("1볼");
  });

  test("Message.printResult() 메서드는 볼의 개수와 스트라이크의 개수를 인수로 받아서 결과를 콘솔에 출력해야 합니다.", () => {
    const logSpy = jest.spyOn(console, "log");

    Message.printResult(0, 3);

    expect(logSpy).toHaveBeenCalledWith("3스트라이크");
  });

  test("Message.printResult() 메서드는 볼의 개수와 스트라이크의 개수를 인수로 받아서 결과를 콘솔에 출력해야 합니다.", () => {
    const logSpy = jest.spyOn(console, "log");

    Message.printResult(2, 1);

    expect(logSpy).toHaveBeenCalledWith("2볼 1스트라이크");
  });

  test("Message.requestInput() 메서드는 사용자가 숫자를 입력할 때까지 기다린 다음 입력된 숫자를 인수로 전달하는 콜백 함수를 호출해야 합니다.", () => {
    const answers = ["246"];
    const logSpy = getLogSpy();
    const messages = [
      "입력값: 246",
    ];

    mockRequestInput(answers);

    Message.requestInput((input) => {
      console.log(`입력값: ${input}`);
    });

    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("Message.requestRestart() 메서드는 사용자가 숫자를 입력할 때까지 기다린 다음 입력된 숫자를 인수로 전달하는 콜백 함수를 호출해야 합니다.", () => {
    const answers = ["1"];
    const logSpy = getLogSpy();
    const messages = [
      "입력값: 1",
    ];

    mockRequesRestart(answers);

    Message.requestRestart((input) => {
      console.log(`입력값: ${input}`);
    });

    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
});
