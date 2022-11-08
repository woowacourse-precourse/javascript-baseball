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
}

module.exports = App;
