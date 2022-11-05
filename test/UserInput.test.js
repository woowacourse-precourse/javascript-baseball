const MissionUtils = require("@woowacourse/mission-utils");

describe("User로부터 입력받은 후 타당성 체크", () => {
  test("User로 부터 입력받기", (done) => {
    function callback() {
      MissionUtils.Console.readLine("숫자를 입력해주세요", (number) => {
        expect(number).toBe(number);
        done();
      });
    }
    callback();
  });
});
