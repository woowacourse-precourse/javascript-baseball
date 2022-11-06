const MissionUtils = require("@woowacourse/mission-utils");

class App {


  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (answer) => {
      if(!this.isValidBallNumber(answer)){
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
}

const init = new App();
init.play();

module.exports = App;
