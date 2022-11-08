const App = require("../src/App");

describe("숫자 야구 게임 기능 테스트", () => {
  const app = new App();
  describe("[ballCnt, strikeCnt]에 따라 문자열 반환하는 getBallStrikeResult", () => {
    test("[0, 0]을 입력 받으면 '낫싱' 출력", () => {
      const input = [0, 0];
      expect(app.getBallStrikeResult(input)).toEqual("낫싱");
    });
    test("[1, 2]을 입력 받으면 '1볼 2스트라이크' 출력", () => {
      const input = [1, 2];
      expect(app.getBallStrikeResult(input)).toEqual("1볼 2스트라이크");
    });
    test("[0, 3]을 입력 받으면 '3스트라이크' 출력", () => {
      const input = [0, 3];
      expect(app.getBallStrikeResult(input)).toEqual("3스트라이크");
    });
  });
});
