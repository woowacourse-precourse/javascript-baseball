const App = require("../src/App");
const MissionUtils = require("@woowacourse/mission-utils");

const NUMBERS = {
  MIN: 1,
  MAX: 9,
};
const NUMBERS_LIST_LENGTH = 3;

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

const getReadLineSpy = () => {
  const readLineSpy = jest.spyOn(MissionUtils.Console, "readLine");
  readLineSpy.mockClear();

  return readLineSpy;
};

const getRandomSpy = () => {
  const randomSpy = jest.spyOn(MissionUtils.Random, "pickNumberInRange");
  randomSpy.mockClear();

  return randomSpy;
};

const isRightRangeNumber = (array) =>
  array.every(
    (el) => typeof el === "number" && el >= NUMBERS.MIN && el <= NUMBERS.MAX
  );

describe("숫자 야구 게임", () => {
  test("게임 시작 문구를 화면에 출력한다.", () => {
    const logSpy = getLogSpy();

    const app = new App();
    app.play();

    expect(logSpy).toBeCalledWith("숫자 야구 게임을 시작합니다.");
  });

  test("게임에 사용할 3자리 수를 생성한다.", () => {
    const randomSpy = getRandomSpy();

    const app = new App();
    app.play();

    expect(app.gameNumber).toHaveLength(NUMBERS_LIST_LENGTH);
    expect(isRightRangeNumber(app.gameNumber)).toBe(true);
    expect(randomSpy).toHaveBeenCalled();
    expect(randomSpy.mock.calls.length).toBeGreaterThanOrEqual(
      NUMBERS_LIST_LENGTH
    );
  });

  test.only("사용자의 숫자를 MissionUtils.Console.readLine 함수를 이용하여 입력받는다.", () => {
    const readLineSpy = getReadLineSpy();

    const app = new App();
    app.play();

    expect(readLineSpy).toHaveBeenCalled();
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
