const App = require('../src/App');
const { Console, Random } = require('@woowacourse/mission-utils');

const mockQuestions = (answers) => {
  Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((question, callback) => {
      callback(input);
    });
  }, Console.readLine);
};

const mockRandoms = (numbers) => {
  Random.pickNumberInRange = jest.fn();

  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, Random.pickNumberInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, 'print');
  logSpy.mockClear();
  
  return logSpy;
};

describe("예외 상황 발생 케이스들", () => {
  test("정답을 맞춘 후 이상한 값 투입 후 종료", () => {
    const randoms = [1, 3, 5, 5, 8, 9];
    const answers = ["246", "135", "abc", "2"];
    const logSpy = getLogSpy();
    const messages = ["낫싱", "3스트라이크", "잘못된 입력 값 입니다. 값을 확인 후 제대로 입력해주세요.", "게임 종료"];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    app.play();

    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("정답을 맞춘 후 이상한 값 투입 후 재시작 후 종료", () => {
    const randoms = [1, 3, 5, 5, 8, 9];
    const answers = ["246", "135", "abc", "1", "589", "2"];
    const logSpy = getLogSpy();
    const messages = [
      "낫싱", 
      "3스트라이크", 
      "잘못된 입력 값 입니다. 값을 확인 후 제대로 입력해주세요.", 
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

  test("초기 입력 값 예외 처리 01 - 입력값 길이 에러", () => {
    const randoms = [1, 3, 5];
    const answers = ["1234!56"];
  
    mockRandoms(randoms);
    mockQuestions(answers);
  
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });
  
  test("초기 입력 값 예외 처리 02 - 입력 값이 숫자가 아닌 NaN 에러", () => {
    const randoms = [1, 3, 5];
    const answers = ["!@a"];
  
    mockRandoms(randoms);
    mockQuestions(answers);
  
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });
  
  test("초기 입력 값 예외 처리 03 - 입력 값 중복 에러", () => {
    const randoms = [1, 3, 5];
    const answers = ["114"];
  
    mockRandoms(randoms);
    mockQuestions(answers);
  
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });
});

describe("여러 다른 케이스들 테스트", () => {
  test("정답 이후 바로 게임 종료.", () => {
    const randoms = [2, 3, 4, 5, 6, 7];
    const answers = ["156", "234", "2"];
    const logSpy = getLogSpy();
  
    const messages = [
      "낫싱",
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

test("정답 이후 게임 재시작 후 종료.", () => {
  const randoms = [1, 8, 4, 4, 5, 6];
  const answers = [
    "235",
    "516",
    "428",
    "418",
    "132",
    "984",
    "184",
    "1",
    "467",
    "465",
    "564",
    "456",
    "2",
  ];
  const logSpy = getLogSpy();
  const messages = [
    "낫싱",
    "1볼",
    "2볼",
    "3볼",
    "1스트라이크",
    "2스트라이크",
    "3스트라이크",
    "1볼 1스트라이크",
    "2볼 1스트라이크",
    "3볼",
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