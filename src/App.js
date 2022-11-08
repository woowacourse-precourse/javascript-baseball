import * as MissionUtils from "@woowacourse/mission-utils";

class App {
  play() {}
  startGame() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
  }

  generateNum() {
    var num = [];

    while (num.length < 3) {
      var randomNum = MissionUtils.Random.pickNumberInRange(1, 9);
      if (num.includes(randomNum) == false) {
        num.push(randomNum);
      }
    }

    return num;
  }

  checkNum(userNum) {
    const regex = /[^1-9]/;
    if (regex.test(userNum)) {
      throw new Error("숫자만 입력 바랍니다.");
    } else if (userNum.length !== 3) {
      throw new Error("3자리의 숫자를 입력 바랍니다.");
    } else if ([...new Set(str)].length !== 3) {
      throw new Error("숫자의 중복은 허용되지 않습니다. 바른 입력 바랍니다.");
    }
  }

  inputNum() {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (inputNumber) => {
      this.checkNum(inputNumber);
      // 숫자 야구 실행 후 결과 출력
      // 만약 스트라이크인 경우 재시작/종료 여부 입력받기
      // 아니면 숫자 재입력
    });
  }

  restartOrExit() {
    MissionUtils.Console.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
      (input) => {
        if (input === "1") {
          this.play();
        } else if (input === "2") {
          MissionUtils.Console.close();
        } else {
          throw new Error(
            "잘못된 입력입니다. 1(재시작)이나 2(종료) 중 하나를 입력 바랍니다."
          );
        }
      }
    );
  }
}

module.exports = App;
