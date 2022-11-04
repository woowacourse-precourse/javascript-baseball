const App = require("../src/App");
const MissionUtils = require("@woowacourse/mission-utils");

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("구현 기능 목록 테스트", () => {
  test("게임 시작 메시지 출력", () => {
    const logSpy = getLogSpy();
    const app = new App();
    app.printStartMsg();
    expect(logSpy).toHaveBeenCalledWith("숫자 야구 게임을 시작합니다.");
  });
  test("컴퓨터의 세자리 수 만들기", () => {
    const app = new App();
    // amend 로 처리
    const computerNum = app.pickComputerNum();
    let answerArr = computerNum.split("");
    let duplicates = answerArr.filter((value, index) => {
      return index !== answerArr.indexOf(value);
    });
    expect(computerNum).toMatch(/^[1-9]{3}$/); // 세자리 숫자 정규표현식
    expect(duplicates.length).toBe(0);
  });
});
