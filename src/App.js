const MissionUtils = require("@woowacourse/mission-utils");
class App {
  answer = "";
  isValid = null;
  constructor() {
    this.answer = MissionUtils.Random.pickNumberInRange(123, 987);
  }
  isValid = (number) => {
    let regex = new RegExp(/^[1-9]{3}&/);
    let overlap = new RegExp(/([1-9])\1/);

    return regex.test(String(number))
      ? overlap.test(String(number))
        ? true
        : false
      : false;
  };
  play() {
    MissionUtils.Console.readLine("닉네임을 입력해주세요.", (inputNum) => {
      if (this.isValid(inputNum)) {
      } else {
        throw "유효하지 않는 값";
      }
    });
  }
}

module.exports = App;
