const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    this.printStart();
    var computerArr = this.computerRandomNumbers();
    this.userInput(computerArr);
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

  /** 3. 숫자 입력 및 입력값 유효성 검사*/
  userInput(computerArr) {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (input) => {
      if (input.length !== 3 || isNaN(input)) {
        throw new Error('입력값이 잘못되어, 게임을 종료합니다.');
      }
      var inputArr = [];
      for (var i = 0; i < input.length; i++) {
        inputArr.push(Number(input[i]));
      }
    });
  }

}

const app = new App();
app.play();

module.exports = App;
