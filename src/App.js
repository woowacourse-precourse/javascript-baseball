const { getInputValue, print, consoleClose } = require("./InputOutput");
const { getThisTurnResult } = require("./Check");
const { getRandomThreeNumbers } = require("./Random");

class App {
  gameState;
  randomNumber;
  constructor() {
    this.play();
  }
  async play() {
    this.randomNumber = getRandomThreeNumbers();
    this.gameState = true;
    print("숫자 야구 게임을 시작합니다.");
    while (this.gameState) {
      this.playing();
    }
    return this.end();
  }
  playing() {
    print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    this.gameState = false;
  }
  async end() {
    let gameRestartCheck = Number(
      await getInputValue(
        "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
      )
    );
    if (!(gameRestartCheck === 1 || gameRestartCheck === 2)) {
      print("올바른 값이 아닙니다. 다시 입력해주세요");
      return this.end();
    }

    if (gameRestartCheck === 1) {
      return this.play();
    } else {
      print("게임을 종료합니다.");
      consoleClose();
    }
  }
}

const app = new App();
module.exports = App;
