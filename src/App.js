const MISSIONUTILS_IO = require("@woowacourse/mission-utils");

const TEXTS = Object.freeze({
  START_TEXT: "숫자 야구 게임을 시작합니다.",
  INPUT_TEXT: "숫자를 입력해주세요 : ",
  END_TEXT: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
  RESELECT_TEXT: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
});

class Game {
  constructor(){
    this.utilsIo = MISSIONUTILS_IO.Console;
    this.utilsRandom = MISSIONUTILS_IO.Random;
    this.utilsIo.print(TEXTS.START_TEXT);
    
    this.userNumberArray = [];
    this.compareNumberArray = [];
  }

  inputUserNumber(text, callback) {
    this.utilsIo.readLine(text, callback.bind(this));
  }

  startGame(){
    this.makeComputerNumer();
    this.inputGame(TEXTS.INPUT_TEXT, this.onGame);
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

