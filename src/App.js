const MISSIONUTILS_IO = require("@woowacourse/mission-utils");

class Game {
  constructor(){
    this.utilsIo = MISSIONUTILS_IO.Console;
    
    this.userNumberArray = [];
  }
  inputUserNumber(text, callback) {
    this.utilsIo.readLine(text, callback.bind(this));
  }
}

class App {
  constructor() {
    this.game = new Game();
  }
  play() {
  }
}

const app = new App();
app.play();

module.exports = App;

