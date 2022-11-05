const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

    function playGame() {
      MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (user_number) => {
        function makeRandomNumber() {
          let random_number = "";
          for (let i = 0; i < 3; i++) {
            random_number += MissionUtils.Random.pickNumberInRange(1, 9);
          }
          return random_number;
        }
        const random_number = makeRandomNumber();
        checkCount(random_number, user_number);
      });
    }

    function replay(strike_count, ball_count, random_number) {
      if (strike_count !== 0 && ball_count !== 0) {
        MissionUtils.Console.print(`${ball_count}볼 ${strike_count}스트라이크`);
      }
      if (strike_count === 0 && ball_count !== 0) {
        MissionUtils.Console.print(`${ball_count}볼`);
      }
      if (strike_count !== 0 && ball_count === 0) {
        MissionUtils.Console.print(`${strike_count}스트라이크`);
      }
      if (strike_count === 0 && ball_count === 0) {
        MissionUtils.Console.print("낫싱");
      }
      if (strike_count === 3) {
        return MissionUtils.Console.readLine(
          "3개의 숫자를 모두 맞히셨습니다! 게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
          (answer) => {
            if (answer === "1") return playGame();
            return MissionUtils.Console.print("게임 종료");
          }
        );
      }
      MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (user_number) => {
        checkCount(random_number, user_number);
      });
    }

    function checkCount(random_number, user_number) {
      let strike_count = 0;
      let ball_count = 0;
      const str_user_num = user_number.toString();
      const str_random_num = random_number.toString();
      if (str_user_num.length !== 3) {
        throw new Error("세 자리 숫자를 입력해주세요.");
      }
      if (typeof Number(user_number) !== "number") {
        throw new Error("숫자를 입력해주세요.");
      }
      for (let i = 0; i < str_random_num.length; i++) {
        if (str_random_num[i] === str_user_num[i]) {
          strike_count++;
        } else if (str_user_num.indexOf(str_random_num[i]) !== -1) {
          ball_count++;
        }
      }
      replay(strike_count, ball_count, random_number);
    }

    playGame();
  }
}
module.exports = App;
