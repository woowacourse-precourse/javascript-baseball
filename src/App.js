const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    let restart_number;
    let random_number;
    let repeat = true;

    while (repeat) {
      random_number = this.GET_RANDOM_NUMBER();

      restart_number = this.IN_GAME(random_number);

      if (restart_number === 1) {
        continue;
      } else if (restart_number === 2) {
        repeat = false;
        MissionUtils.Console.print("게임 종료");
      }
    }
  }

  GET_RANDOM_NUMBER() {
    const RANDOM_NUMBER_LIST = [];
    RANDOM_NUMBER_LIST.push(MissionUtils.Random.pickNumberInRange());
    RANDOM_NUMBER_LIST.push(MissionUtils.Random.pickNumberInRange());
    RANDOM_NUMBER_LIST.push(MissionUtils.Random.pickNumberInRange());
    return RANDOM_NUMBER_LIST;
  }

  INPUT_NUMBER() {
    let user_input_list;
    MissionUtils.Console.readLine("숫자를 입력해주세요.", (answer) => {
      user_input_list = String(answer)
        .split("")
        .map((e) => Number(e));
    });
    return user_input_list;
  }

  VALIDATE_NUMBER(NUMBER_LIST) {
    if (NUMBER_LIST.includes(NaN)) {
      //문자열 입력
      throw "입력값은 문자열이 될 수 없습니다!";
    }
    if (NUMBER_LIST.includes(0)) {
      //0입력
      throw "입력값은 1~9사이의 숫자여야 합니다!";
    }
    if (NUMBER_LIST.length !== 3) {
      //3자리가 아닌 숫자 입력
      throw "입력값은 세 자리 숫자여야 합니다!";
    }
    if (NUMBER_LIST.length !== new Set(NUMBER_LIST).size) {
      //동일한 숫자 입력
      throw "입력값은 서로 다른 숫자여야 합니다!";
    }
  }

  IN_GAME(correct_number) {
    let correct = false;
    let user_input_number;
    let finish_number;

    while (!correct) {
      user_input_number = this.INPUT_NUMBER();

      this.VALIDATE_NUMBER(user_input_number);

      //제대로 된 값 입력
      if (
        user_input_number[0] === correct_number[0] &&
        user_input_number[1] === correct_number[1] &&
        user_input_number[2] === correct_number[2]
      ) {
        correct = true;
      } else {
        this.HINT(user_input_number, correct_number);
      }
    }
    MissionUtils.Console.print("3스트라이크");

    MissionUtils.Console.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
      (num) => {
        num = Number(num);
        if (num === 1 || num === 2) {
          finish_number = num;
        } else {
          throw "1 또는 2만 입력할 수 있습니다.";
        }
      }
    );
    return finish_number;
  }

  HINT(user, correct) {
    let strike = 0;
    let ball = 0;
    if (user[0] === correct[0]) {
      strike += 1;
    }
    if (user[1] === correct[1]) {
      strike += 1;
    }
    if (user[2] === correct[2]) {
      strike += 1;
    }
    if (user[0] !== correct[0] && correct.includes(user[0])) {
      ball += 1;
    }
    if (user[1] !== correct[1] && correct.includes(user[1])) {
      ball += 1;
    }
    if (user[2] !== correct[2] && correct.includes(user[2])) {
      ball += 1;
    }

    if (strike === 0 && ball === 0) {
      MissionUtils.Console.print("낫싱");
    } else if (strike !== 0 && ball === 0) {
      MissionUtils.Console.print(strike + "스트라이크");
    } else if (strike === 0 && ball !== 0) {
      MissionUtils.Console.print(ball + "볼");
    } else {
      MissionUtils.Console.print(ball + "볼 " + strike + "스트라이크");
    }
  }
}

module.exports = App;
