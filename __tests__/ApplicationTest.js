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
  test('feat#0, feat#1: 게임 시작 문구 출력', () => {
    const logSpy = getLogSpy();
    const app = new App();
    app.play();
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining('숫자 야구 게임을 시작합니다.'),
    );
  });
  
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

  test('feat#2, feat#3: 예외 테스트-길이', () => {
    const randoms = [1, 3, 5];
    const answers = ['1234'];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test('feat#2, feat#3: 예외 테스트-중복', () => {
    const randoms = [1, 3, 5];
    const answers = ['111'];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test('feat#2, feat#3: 예외 테스트-0값', () => {
    const randoms = [1, 3, 5];
    const answers = ['105'];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test('feat#4: 결과 출력하기', () => {
    const randoms = [1, 3, 5];
    const answers = ['124'];
    const logSpy = getLogSpy();

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    app.play();
    
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("1스트라이크"));
  });

  test('feat#5: 종료조건', () => {
    const randoms = [1, 3, 5];
    const answers = ['135'];
    const logSpy = getLogSpy();
    const messages = [
      '3스트라이크',
      '게임 종료',
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.'
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
