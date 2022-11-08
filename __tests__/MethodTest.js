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
    test("모두 같은자리 같은숫자일 때", () => {
        const app = new App();
        expect(app.cacluateBall("123", "123")).toEqual(0);
    });
    test("세 개의 숫자 중 하나의 숫자만 포함되고 자리가 다를 때 ", () => {
        const app = new App();
         expect(app.cacluateBall("467", "341")).toEqual(1);
    });
    test("세 개의 숫자 중 두개의 숫자가 포함되고 자리가 다를 때", () => {
        const app = new App();
        expect(app.cacluateBall("196", "621")).toEqual(2);
    });
    test("모두 다른자리 같은숫자일 때", () => {
        const app = new App();
        expect(app.cacluateBall("123", "312")).toEqual(3);
    });
    test("입력 숫자가 3자리를 넘어갈 때", () => {
        const app = new App();
        expect(() => app.exceptionThrow("1234")).toThrow(
            "예외 입력 발생, 프로그램을 종료합니다"
        );
      });
      test("입력 숫자에 0이 포함되어 있을 때", () => {
        const app = new App();
        expect(() => app.exceptionThrow("901")).toThrow(
            "예외 입력 발생, 프로그램을 종료합니다"
        );
      });
      test("숫자가 아닌 입력이 들어올 때", () => {
        const app = new App();
        expect(() => app.exceptionThrow("abac")).toThrow(
            "예외 입력 발생, 프로그램을 종료합니다"
        );
      });
    test("입력 숫자에 중복 숫자가 있을 때", () => {
        const app = new App();
        expect(() => app.exceptionThrow("112")).toThrow(
            "예외 입력 발생, 프로그램을 종료합니다"
        );
      });
    test("낫싱인 경우", () => {
        const app = new App();
        const logSpy = getLogSpy();
        app.gameResult(0, 0);
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("낫싱"));
      });
    test("스트라이크가 0이고 볼이 있는 경우", () => {
        const app = new App();
        const logSpy = getLogSpy();
        app.gameResult(0, 2);
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("2볼"));
      });
    test("볼이 0이고 스트라이크가 있는 경우", () => {
        const app = new App();
        const logSpy = getLogSpy();
        app.gameResult(2, 0);
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("2스트라이크"));
      });
    test("스트라이크, 볼이 다있는 경우", () => {
        const app = new App();
        const logSpy = getLogSpy();
        app.gameResult(2, 1);
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("1볼 2스트라이크"));
      });      
  });