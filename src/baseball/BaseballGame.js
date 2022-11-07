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
    Console.readline("숫자를 입력해주세요 : ", this.playing);
  };

  playing = (userInput) => {
    ValidUserNumbers.isThreeNumberInRange(userInput);

    let [strike, ball, nothing] = this.StrikeCount(
      userInput,
      this.computerNumbers
    );
    this.printResultCount(strike, ball, nothing);
    // console.log(typeof strike);
    if (strike == 3) {
      Console.readline(
        "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
        this.RestartEndDistinction
      );
      return;
    }
    this.playGame();
  };

  StrikeCount = (userInput, computerNumbers) => {
    let strike = 0;
    let ball = 0;
    let nothing = 0;
    computerNumbers.forEach((number, idx) => {
      if (!computerNumbers.includes(Number(userInput[idx]))) {
        nothing++;
        return;
      }
      if (number === Number(userInput[idx])) {
        strike++;
      }
      ball++;
    });
    return [strike, ball, nothing];
  };

  printResultCount = (strike, ball, nothing) => {
    if (nothing == 3) {
      Console.print("낫싱");
    } else if (ball > 0 && strike === 0) {
      Console.print(`${ball}볼`);
    } else if (ball == 0 && strike > 0) {
      Console.print(`${strike}strike`);
    }
    Console.print(`${ball}볼 ${strike}스트라이크`);

    if (strike === 3)
      Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
  };
}
