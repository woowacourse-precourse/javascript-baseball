const MissionUtils = require("@woowacourse/mission-utils");
const Input = require("../src/Input");

const {
  GAME_CONFIG,
  ERROR_CHECK,
  INGAME_MESSAGE,
  GAME_RESULT,
  RESPONSE,
} = require("./Constant");

class App {
  play() {
    const input = new Input();
    const userNumber = input.user();
    
  }
}

module.exports = App;

const app = new App();
app.play();
