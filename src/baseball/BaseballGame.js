const { Console } = require("@woowacourse/mission-utils");
const ComputerNumbers = require("./ComputerNumbers");
const ValidUserNumbers = require("./ValidUserInput");

class BaseballGame {
  constructor() {
    this.GameInit(true);
  }

  GameInit(FirstGame) {
    this.FirstGame = FirstGame;
    this.computerNumbers = ComputerNumbers.randomSelectComputerNumbers();
  }
  playGame = () => {
    if (this.FirstGame) {
      Console.print("숫자 야구 게임을 시작합니다.");
    }
    Console.readline("숫자를 입력해주세요 : ", this.playerNumber);
  };
}
