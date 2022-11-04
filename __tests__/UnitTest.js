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
}, {
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
  
const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("숫자 랜덤 생성 테스트", () => {
  test("case1", () => {
    const app = new App();
    const randoms = app.getThreeRandom()

    expect(randoms).toBeThreeNumber();
    expect(randoms).toBeDistinct();
  });
});

describe("시작 문구 출력 테스트", () => {
  test("case1", () => {
    const logSpy = getLogSpy();

    const app = new App();
    app.printStart();
      
    expect(logSpy).toHaveBeenCalled();
  });
});