const MissionUtils = require("@woowacourse/mission-utils");

class App {


  play() {
    const computerNumber = this.generateRandomBallNumber();
    // MissionUtils.Console.print(computerNumber)
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (userNumber) => {
      if(!this.isValidBallNumber(userNumber)){
        throw new Error();
      }

    });
  }

  isValidBallNumber(answer) {
    if (answer.length !== 3) {
      return false
    }
    if (answer[0] === answer[1] || answer[1] === answer[2] || answer[2] === answer[0]) {
      return false
    }
    if (isNaN(Number(answer))) {
      return false
    }
    return true
  }

  generateRandomBallNumber(){
    const computerAnswer = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
    return computerAnswer.join('');
  }

}

const init = new App();
init.play();

module.exports = App;
