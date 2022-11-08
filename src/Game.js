const { Console } = require("@woowacourse/mission-utils");
const generateRandomNumberArray = require("./utils/game/generateRandomNumber.js");

class Game {
  constructor() {
    Console.print("숫자 야구 게임을 시작합니다.");
    this.generateNumberArrayByComputer();
  }

  generateNumberArrayByComputer() {
    this.pickedNumberArrayByComputer = generateRandomNumberArray();
  }

  start() {
    Console.readLine("숫자를 입력해주세요 : ", this.playTurn);
  }

  playTurn = (numberEnteredByUser) => {
    console.log(numberEnteredByUser);
  };
}

module.exports = Game;
