const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    this.printStart();
    var computerArr = this.computerRandomNumbers();
  }

  /** 1. 게임시작 안내 문구 출력*/
  printStart() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
  }

  /** 2. 컴퓨터 랜덤 숫자 세자리 추출 */
  computerRandomNumbers() {
    var computerArr = [];
    while (computerArr.length < 3) {
    var number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computerArr.includes(number)) {
        computerArr.push(number);
      }
    }
    return computerArr;
  }



}

const app = new App();
app.play();

module.exports = App;
