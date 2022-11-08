const { getInputValue, print, consoleClose } = require("./InputOutput");
const {
  getThisTurnResult,
  checkInputIsRightInPlaying,
  checkInputIsRightInEnd,
} = require("./Check");
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
    let userInput = await getInputValue("숫자를 입력해주세요 : ");

    if (!checkInputIsRightInPlaying(userInput)) {
      print("중복되지 않은 1~9까지의 숫자 세자리를 정확히 입력해주세요");
      return;
    }

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
    let gameRestartCheck = await getInputValue(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
    );

    if (!checkInputIsRightInEnd(gameRestartCheck)) {
      print("올바른 값이 아닙니다. 다시 입력해주세요");
      return this.end();
    }
    if (gameRestartCheck == "1") {
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
