const isNumber = require("../src/utils/isNumber.js");
const isCompare = require("../src/utils/isCompare.js");
const isOneToNine = require("../src/utils/isOneToNine.js");
const isThree = require("../src/utils/isThree.js");
const isAllDifferent = require("../src/utils/isAllDifferent.js");
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

describe("숫자 야구 게임", () => {
  test("입력값 검증 테스트 - 정수 판별", () => {
    expect(isNumber("123")).toBe(true);
    expect(isNumber("312")).toBe(true);
    expect(isNumber("1a23")).toBe(false);
    expect(isNumber("a13")).toBe(false);
    expect(isNumber("952")).toBe(true);
  });

  test("입력값 검증 테스트 - 1~9 판별", () => {
    expect(isOneToNine("123")).toBe(true);
    expect(isOneToNine("892")).toBe(true);
    expect(isOneToNine("012")).toBe(false);
  });

  test("입력값 검증 테스트 - 3개 인지 판별", () => {
    expect(isThree("123")).toBe(true);
    expect(isThree("892")).toBe(true);
    expect(isThree("2456")).toBe(false);
    expect(isThree("56")).toBe(false);
  });

  test("입력값 검증 테스트 - 서로 다른 숫자인지 판별", () => {
    expect(isAllDifferent("123")).toBe(true);
    expect(isAllDifferent("892")).toBe(true);
    expect(isAllDifferent("244")).toBe(false);
    expect(isAllDifferent("566")).toBe(false);
  });

  test("볼 스트라이크 출력 함수 테스트", () => {
    expect(isCompare([1, 2, 3], [2, 3, 1])).toEqual([0, 3]);
    expect(isCompare([4, 5, 6], [7, 8, 9])).toEqual([0, 0]);
    expect(isCompare([3, 4, 5], [3, 4, 5])).toEqual([3, 0]);
    expect(isCompare([6, 7, 3], [3, 5, 9])).toEqual([0, 1]);
  });
});
