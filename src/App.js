const MissionUtils = require("@woowacourse/mission-utils");
const Random = MissionUtils.Random;
const Console = MissionUtils.Console;

class App {
  constructor() {
    this.computer_random_number = [];
    this.strike = 0;
    this.ball = 0;
    this.nothing = "낫싱";
  }
  play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    // 기능 1번 구현
    this.computer_random_number = Random.pickUniqueNumbersInRange(1, 9, 3);
    // 기능 2번 구현
    this.user_input();
  }
  user_input() {
    Console.readLine("숫자를 입력해주세요 : ", (user_input) => {
      // 사용자의 입력 체크후 return 받은 값을 이용
      const user_number = this.check_user_input(user_input);
      Console.print(user_number);
      Console.print(this.computer_random_number);
    });
  }
}

module.exports = App;
