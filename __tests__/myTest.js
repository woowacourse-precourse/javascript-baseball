const MissionUtils = require("@woowacourse/mission-utils");

const getLogSpy = () => {
    const logSpy = jest.spyOn(MissionUtils.Console, "print");
    logSpy.mockClear();
    return logSpy;
  };

describe("printAndDecide", () => {
    const App = require("../src/App");
    const app = new App();
    const logSpy = getLogSpy();
    
    it("스트라이크와 볼 입력에 따른 출력 테스트", () => {
        app.printAndDecide(123, 3, 0)
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("3스트라이크"));
        app.printAndDecide(123, 2, 1)
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("1볼 2스트라이크"));
        app.printAndDecide(123, 0, 0)
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("낫싱"));
    });
   
    it("숫자가 세자리가 아닐때를 판단하는 테스트", () => {
        expect(app.checkThreeLength(1)).toBe(false);
        expect(app.checkThreeLength(12)).toBe(false);
        expect(app.checkThreeLength(123)).toBe(true);
        expect(app.checkThreeLength(1234)).toBe(false);
    });
    
    it("숫자가 1~9로만 이루어져있는지 판단하는 테스트", () => {
        expect(app.checkComposeOneToNine("012")).toBe(false);
        expect(app.checkComposeOneToNine("aba")).toBe(false);
        expect(app.checkComposeOneToNine("123")).toBe(true);
    });

    it("다른 자리의 숫자와 같은 수가 없는지 판단하는 테스트", () => {
        expect(app.checkUniqueNumber("111")).toBe(false);
        expect(app.checkUniqueNumber("122")).toBe(false);
        expect(app.checkUniqueNumber("123")).toBe(true);
    });
    
   it("제대로 시작됐는지 확인하는 테스트", () => {
    app.play();
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("숫자 야구 게임을 시작합니다."));
   });

   it("세개 모두 맞춘 경우의 함수가 잘 작동하는지 확인하는 테스트", () => {
    app.whenThreeStrike();
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("3개의 스트라이크를 모두 맞히셨습니다! 게임 종료"));
   })
    
  });