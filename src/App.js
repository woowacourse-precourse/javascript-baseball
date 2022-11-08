const MISSIONUTILS_IO = require("@woowacourse/mission-utils");

class Game {
  constructor(){
    this.utilsIo = MISSIONUTILS_IO.Console;
    this.utilsRandom = MISSIONUTILS_IO.Random;

    this.userNumberArray = [];
    this.compareNumberArray = [];
  }

  inputUserNumber(text, callback) {
    this.utilsIo.readLine(text, callback.bind(this));
  }
  
  makeComputerNumer(){
    const computer = [];
    while (computer.length < 3) {
      const number = this.utilsRandom.pickNumberInRange(1, 9);
      if (!computer.includes(number)) computer.push(number);
    }
    this.compareNumberArray = computer;
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

