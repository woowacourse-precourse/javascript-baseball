const MissionUtils = require("@woowacourse/mission-utils");

class App {
  getInputNumber() {
    let userNum;
    MissionUtils.Cosole.readLine("숫자를 입력해주세요 :", (number) => {
      userNum = String(number).split("");
    });
  }

  getComputerNumber() {
    const computerNum = [];
    while (computerNum.length < 3) { 
      let num = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computerNum.includes(num)) {
        computerNum.push(num);
      }
    }
  }

  checkStrike(computerNum, userNum) {
    let strikeScore = 0;

    for (let i = 0; i < 3; i++) {
      if (computerNum[i] == userNum[i]) {
        strikeScore += 1;
      }
      return strikeScore;
    }
  }

  checkBall(computerNum, userNum) {
    let ballScore = 0;

    const intersect = computerNum.filter(x => userNum(x));
    let countIntersect = intersect.length;
    ballScore = countIntersect - strikeScore;
  }

  restartOrFinish() {
    MissionUtils.Console.readLine(
      "재시작 => 1, 종료 => 2", (answer) => {
        if (parseInt(answer) == 1) {
          this.play();
        } 
        else if(parseInt(answer) == 2) {
          MissionUtils.Console.print("게임 종료");
          return;
        }
      }
    )
  }

  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.getComputerNumber;
    this.getInputNumber();

    if (ballScore > 0 || strikeScore > 0) {
      MissionUtils.Console.print("${ballScore}볼 ${strikeScore}스트라이크");ㄱ
    }
    else if (countIntersect == 0) {
      MissionUtils.Console.print("낫싱");
    }
    else if (strikeScore == 3) {
      MissionUtils.Console.print("3스트라이크");
      MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      return;
    }
    this.restartOrFinish();
  }
}

module.exports = App;

const app = new App();
app.play();
