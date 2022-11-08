const getComputerRandNum = require("./getComputerRandNum.js");
const Validator = require("./validator.js");
const MissionUtils = require("@woowacourse/mission-utils");
const { getSumOfBallAndStrike, getStrikeCnt } = require("./getCntOfBallOrStrike.js");

class App {
  play() {
    const computerNum = getComputerRandNum();
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.startGame(computerNum);
  }

  startGame(computerNum) {
    MissionUtils.Console.readLine(
      "각 자리 숫자가 1에서 9 사이인 서로 다른 세자리 숫자를 입력해주세요 : ",
      (userInput) => {
        const userNum = userInput.split("").map((numStr) => parseInt(numStr));
        const validator = new Validator(userNum);
        if (!validator.isValidInput()) {
          throw new Error("입력값을 확인하세요.");
        }
        const ballAndStrikeCnt = getSumOfBallAndStrike(computerNum, userNum);
        const strikeCnt = getStrikeCnt(computerNum, userNum);
        this.judgeGameResult(ballAndStrikeCnt, strikeCnt, computerNum);
      }
    );
  }

  judgeGameResult(ballAndStrikeCnt, strikeCnt, computerNum) {
    if (strikeCnt === 3) {
      this.clearGame();
    } else {
      this.notClearGame(ballAndStrikeCnt, strikeCnt, computerNum);
    }
  }

  clearGame() {
    MissionUtils.Console.print("3스트라이크");
    MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    MissionUtils.Console.print("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
    this.startNewGameOrQuit();
  }

  notClearGame(ballAndStrikeCnt, strikeCnt, computerNum) {
    const ballCnt = ballAndStrikeCnt - strikeCnt;
    if (ballAndStrikeCnt === 0) MissionUtils.Console.print("낫싱");
    else if (ballCnt === 0) MissionUtils.Console.print(`${strikeCnt}스트라이크`);
    else MissionUtils.Console.print(`${ballCnt}볼 ${strikeCnt}스트라이크`);
    this.startGame(computerNum);
  }

  startNewGameOrQuit() {
    MissionUtils.Console.readLine("", (restartOrQuit) => {
      if (parseInt(restartOrQuit) === 1) {
        const computerNum = getComputerRandNum();
        this.startGame(computerNum);
      } else if (parseInt(restartOrQuit) === 2) {
        MissionUtils.Console.print("게임 종료");
        MissionUtils.Console.close();
      } else throw new Error("입력값이 잘못되었습니다.");
    });
  }
}

const app = new App();
app.play();

module.exports = App;
