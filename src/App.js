const Attacker = require("./Components/Attacker/Attacker");
const AutomaticBallGenerator = require("./Components/AutomaticBallGenerator/AutomaticBallGenerator");
const Defender = require("./Components/Defender/Defender");
const ManualBallGenerator = require("./Components/ManualBallGenerator/ManualBallGenerator");
const BaseballGame = require("./Components/BaseballGame/BaseballGame");

class App {
  play() {
    const ATTACKER = new Attacker(new ManualBallGenerator());
    const DEFENDER = new Defender(new AutomaticBallGenerator());
    const BASEBALL_GAME = new BaseballGame(ATTACKER, DEFENDER);

    BASEBALL_GAME.start();
  }
}

module.exports = App;
