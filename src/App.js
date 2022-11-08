const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    this.startMessage();
    const COMPUTER = this.computerExtrackNumber();
    this.userNumber(COMPUTER);
  }
  startMessage() {
    return MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
  }

  computerExtrackNumber() {
    const COMPUTER_NUMBER = [];
    for (var int = 0; COMPUTER_NUMBER.length < 3; int++) {
      const computerNumber = MissionUtils.Random.pickNumberInRange(1, 9);
      if (COMPUTER_NUMBER[int - 1] !== computerNumber) {
        COMPUTER_NUMBER.push(computerNumber);
      }
    }
    return COMPUTER_NUMBER;
  }

  userNumber(computer) {
    MissionUtils.Console.readLine("숫자를 입력해주세요.", (answer) => {
      let userNumber = answer.split("").map((element) => parseInt(element));
      this.checkUserNumber(userNumber);
      this.processNumber(computer, userNumber);
    });
  }
  checkUserNumber(array) {
    if (array.length != 3) {
      throw "잘못된 값을 입력하셨습니다. 게임을 종료합니다.";
    }
  }
  processNumber(computer, user) {
    let ballCount = 0;
    let strikeCount = 0;
    let count = 0;
    computer.forEach((number, int) => {
      if (number === user[int]) {
        strikeCount += 1;
        count += 1;
      } else if (user.includes(number)) {
        ballCount += 1;
      }
    });

    if (ballCount === 0 && strikeCount === 0) {
      MissionUtils.Console.print("낫싱");
    } else if (ballCount !== 0 && strikeCount === 0) {
      MissionUtils.Console.print(ballCount + "볼");
    } else if (ballCount === 0 && strikeCount !== 0) {
      MissionUtils.Console.print(strikeCount + "스트라이크");
    } else {
      MissionUtils.Console.print(
        ballCount + "볼, " + strikeCount + "스트라이크"
      );
    }

    if (strikeCount === 3) {
      MissionUtils.Console.print("3스트라이크");
      MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      this.askReplayGame();
    } else if (strikeCount !== 3) {
      this.userNumber(computer);
    }
  }

  askReplayGame() {
    MissionUtils.Console.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
      (askAnswer) => {
        if (askAnswer === "1") {
          this.play();
        } else if (askAnswer === "2") {
          MissionUtils.Console.print("게임 종료");
          MissionUtils.Console.close();
        }
      }
    );
  }
}
const app = new App();
app.play();
module.exports = App;
