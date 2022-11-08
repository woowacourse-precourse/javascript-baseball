const MissionUtils = require("@woowacourse/mission-utils");
const App = require("../src/App");
const Validation = require("../src/Validation");

const { INGAME_MESSAGE, RESPONSE } = require("./Constant");

class GameLogic {
  judge(userInput, computerInput) {
    const ballStrike = [0, 0];

    userInput.forEach((el, index) => {
      if (el === computerInput[index]) {
        ballStrike[1] += 1;
      } else if (computerInput.includes(Number(el))) {
        ballStrike[0] += 1;
      }
    });

    return ballStrike;
  }

  result(ballStrike) {
    if (ballStrike[1] === 3) {
      MissionUtils.Console.print(INGAME_MESSAGE.END);
      return true;
    } else if (ballStrike[0] === 0 && ballStrike[1] === 0) {
      MissionUtils.Console.print(INGAME_MESSAGE.NOTHING);
      return false;
    } else if (ballStrike[0] === 0) {
      MissionUtils.Console.print(ballStrike[1] + INGAME_MESSAGE.STRIKE);
      return false;
    } else if (ballStrike[1] === 0) {
      MissionUtils.Console.print(ballStrike[0] + INGAME_MESSAGE.BALL);
      return false;
    } else {
      MissionUtils.Console.print(
        ballStrike[0] +
          INGAME_MESSAGE.BALL +
          " " +
          ballStrike[1] +
          INGAME_MESSAGE.STRIKE
      );
      return false;
    }
  }

  select() {
    MissionUtils.Console.readLine(INGAME_MESSAGE.ASK, (input) => {
      if (input === RESPONSE.RESTART) {
        const app = new App();
        app.play();
      } else if (input === RESPONSE.FINISH) {
        MissionUtils.Console.close();
      }
    });
  }

  implement(computerNumber) {
    MissionUtils.Console.readLine(INGAME_MESSAGE.INPUT_NUMBER, (string) => {
      const validation = new Validation();

      const userNumber = string.split("").map((el) => Number(el));

      ////////////////////////////////////////////////////////////////
      //   if (validation.checkAll(userNumber)) { //체크 후 안넘어가는 문제
      const ballStrikeResult = this.judge(userNumber, computerNumber);

      const result = this.result(ballStrikeResult);

      if (result) {
        this.select();
      } else {
        this.implement(computerNumber);
      }
      //   }
    });
  }
}

module.exports = GameLogic;
