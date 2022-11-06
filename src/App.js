const MissionUtils = require("@woowacourse/mission-utils");

class App {


  play() {
    const computerAnswer = this.generateRandomBallNumber();
    // MissionUtils.Console.print(computerAnswer)
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (userAnswer) => {
      if(!this.isValidBallNumber(userAnswer)){
        throw new Error();
      }
    });
  }

  generateRandomBallNumber(){
    const computerAnswer = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
    return computerAnswer.join('');
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

  

}

const init = new App();
init.play();

module.exports = App;
