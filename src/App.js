const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    function makeRandomNumber() {
      let random_number = "";
      for (let i = 0; i < 3; i++) {
        random_number += MissionUtils.Random.pickNumberInRange(1, 9);
      }
      return random_number;
    }

    function checkCount(random_number, user_number) {
      let strike_count = 0;
      let ball_count = 0;
      const str_user_num = user_number.toString();
      const str_random_num = random_number.toString();
      if (str_user_num.length !== 3) {
        throw new Error("세 자리 숫자를 입력해주세요.");
      }
      if (typeof user_number !== "number") {
        throw new Error("숫자를 입력해주세요.");
      }
      for (let i = 0; i < str_random_num.length; i++) {
        if (str_random_num[i] === str_user_num[i]) {
          strike_count++;
        } else if (str_user_num.indexOf(str_random_num[i]) !== -1) {
          ball_count++;
        }
      }
      if (strike_count === 0 && ball_count === 0) {
        return "낫싱";
      }
      return [strike_count, ball_count];
    }
  }
}

module.exports = App;
