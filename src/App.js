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
      this.baseball_game(user_number);
    });
  }
  check_user_input(user_input) {
    // user_input의 set 변환
    const user_input_set = new Set(user_input.split(""));
    let user_num = Array.from(user_input_set);
    // user_input의 길이 체크 & 중복 체크
    if (
      user_input.length != 3 ||
      isNaN(Number(user_input)) ||
      user_input_set.size != 3 ||
      user_num.includes("0")
    ) {
      throw Error("잘못된 입력입니다.");
    }
    // user_input_set을 숫자로 바꾸어 배열로 return
    user_num.forEach((element, index) => {
      user_num[index] = Number(element);
    });
    return user_num;
  }
  baseball_game(user_number) {
    this.strike = 0;
    this.ball = 0;
    // 완전 일치하면 3스트라이트 출력후 -> 다시 게임할지 질문
    if (user_number.join("") == this.computer_random_number.join("")) {
      this.strike = 3;
      Console.print(`${this.strike}스트라이크`);
      Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    }
    user_number.forEach((element, index) => {
      if (this.computer_random_number[index] == element) {
        this.strike++;
      } else if (this.computer_random_number.includes(element)) {
        this.ball++;
      }
    });
    if (!(this.strike + this.ball)) {
      Console.print(this.nothing);
    } else if (this.strike > 0 && this.ball == 0) {
      Console.print(`${this.strike}스트라이크`);
    } else if (this.ball > 0 && this.strike == 0) {
      Console.print(`${this.ball}볼`);
    } else {
      Console.print(`${this.ball}볼 ${this.strike}스트라이크`);
    }
    this.user_input();
  }
}

module.exports = App;
