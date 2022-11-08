const Console = require("./utils/Console");
const Random = require("./utils/Random");
const Utils = require("./utils/utils");
class App {
  play() {
    let randomComputerNumber = Utils.setComputerNumber();
    Console.print("숫자 야구 게임을 시작합니다.");
    Utils.startGame(randomComputerNumber);
  }
}

module.exports = App;
