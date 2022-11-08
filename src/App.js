const MissionUtils = require("@woowacourse/mission-utils");
const Input = require("../src/Input");
const GameLogic = require("../src/GameLogic");

const { INGAME_MESSAGE } = require("./Constant");

class App {
  play() {
    MissionUtils.Console.print(INGAME_MESSAGE.START);

    const input = new Input();
    const gameLogic = new GameLogic();
    const computerNumber = input.computer();

    gameLogic.implement(computerNumber);
  }
}

module.exports = App;

const app = new App();
app.play();
