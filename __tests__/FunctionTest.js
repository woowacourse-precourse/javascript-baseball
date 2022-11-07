const App = require("../src/App");
const MissionUtils = require("@woowacourse/mission-utils");

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

const app = new App();

describe("유저 넘버 유효성 테스트", () => {
  test("숫자가 아닌 값 테스트", () => {
    expect(app.isValidUserNumber("ab1")).toEqual(false);
    expect(app.isValidUserNumber("")).toEqual(false);
  });

  test("3자리 숫자 값 테스트", () => {
    expect(app.isValidUserNumber("1234")).toEqual(false);
    expect(app.isValidUserNumber("12")).toEqual(false);
    expect(app.isValidUserNumber("123")).toEqual(true);
  });

  test("중복 숫자 테스트", () => {
    expect(app.isValidUserNumber("111")).toEqual(false);
    expect(app.isValidUserNumber("112")).toEqual(false);
    expect(app.isValidUserNumber("123")).toEqual(true);
  });

  test("0을 포함하는지 테스트", () => {
    expect(app.isValidUserNumber("012")).toEqual(false);
    expect(app.isValidUserNumber("123")).toEqual(true);
  });
});

describe("유저 인풋 배열로 바꾸기 테스트", () => {
  test("String to Array 테스트", () => {
    expect(app.stringToNumberArray("123")).toEqual([1, 2, 3]);
  });
});

describe("컴퓨터와 유저넘버 비교 테스트", () => {
  test("모두 맞춘 경우", () => {
    const computerNumber = [1, 2, 3];
    const userNumber = [1, 2, 3];

    expect(app.compareNumber(computerNumber, userNumber))
      .toEqual({
        ball: 0,
        strike: 3,
      });
  });

  test("아무 것도 못 맞춘경우", () => {
    const computerNumber = [1, 2, 3];
    const userNumber = [4, 5, 6];

    expect(app.compareNumber(computerNumber, userNumber))
      .toEqual({
        ball: 0,
        strike: 0,
      });
  });
  
  test("1스트라이크 1볼", () => {
    const computerNumber = [1, 2, 3];
    const userNumber = [1, 3, 7];

    expect(app.compareNumber(computerNumber, userNumber))
      .toEqual({
        ball: 1,
        strike: 1,
      });
  });
});

describe("스트라이크 볼 출력 테스트", () => {
  test("스트라이크만 있을 때", () => {
    const logSpy = getLogSpy();
    const result = {
      ball: 0,
      strike: 2,
    };
    const output = "2스트라이크"
    app.printResult(result);
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
  });

  test("볼만 있을 때", () => {
    const logSpy = getLogSpy();
    const result = {
      ball: 1,
      strike: 0,
    };
    const output = "1볼"
    app.printResult(result);
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
  });

  test("스트라이크와 볼 같이 있을 때", () => {
    const logSpy = getLogSpy();
    const result = {
      ball: 1,
      strike: 2,
    };
    const output = "1볼 2스트라이크"
    app.printResult(result);
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
  });

  test("아무 것도 못 맞췄을 때", () => {
    const logSpy = getLogSpy();
    const result = {
      ball: 0,
      strike: 0,
    };
    const output = "낫싱"
    app.printResult(result);
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
  });
});
