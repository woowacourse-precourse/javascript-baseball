const MissionUtils = require("@woowacourse/mission-utils");
const App = require("../src/App");

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("구현 기능 목록 테스트", () => {

    test("모두 같은자리 같은숫자일 때", () => {
      const app = new App();
      expect(app.caculateStrike("123", "123")).toEqual(3);
    });
    test("두개의 자리가 같은숫자일 때", () => {
      const app = new App();
      expect(app.caculateStrike("467", "457")).toEqual(2);
    });
    test("하나의 자리가 같은숫자일 때", () => {
        const app = new App();
        expect(app.caculateStrike("196", "124")).toEqual(1);
    });
    test("모두 자리가 다른 숫자일 때", () => {
      const app = new App();
      expect(app.caculateStrike("123", "678")).toEqual(0);
    });  
    
  });