const { getInputValue, print, consoleClose } = require("./InputOutput");
const { getThisTurnResult } = require("./Check");
const {
  convertThreeNumStringToArray,
} = require("./utils/convertThreeNumStringToArray");
const { getRandomThreeNumbers } = require("./Random");

class App {
  #gameState;
  #randomNumber;
  async play() {
    this.#randomNumber = getRandomThreeNumbers();
    this.#gameState = true;
    print("숫자 야구 게임을 시작합니다.");
    while (this.#gameState) {
      await this.playing();
    }
    return this.end();
  }
  async playing() {
    const userInput = await getInputValue("숫자를 입력해주세요 : ");
    const userAnswer = getThisTurnResult({
      input: convertThreeNumStringToArray(userInput),
      random: this.#randomNumber,
    });
    print(userAnswer);
    if (userAnswer.strike === 3) {
      this.#gameState = false;
    }
  }
  async end() {
    print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
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
app.play();
module.exports = App;
