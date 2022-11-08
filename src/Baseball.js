const { Console } = require("@woowacourse/mission-utils");
const Computer = require("./Computer");

class Baseball {
  constructor() {
    Console.print("숫자 야구 게임을 시작합니다.");
    this.computerNumberSet = new Computer().pickRandomNumberSet();
  }
  getScore(computerNumberSet, userNumberSet) {
    let strike = 0;
    let ball = 0;

    userNumberSet.forEach((number, idx) => {
      if (number === computerNumberSet[idx]) strike++;
      else if (
        number !== computerNumberSet[idx] &&
        computerNumberSet.includes(number)
      )
        ball++;
    });
    return [strike, ball];
  }

  printResult(strike, ball) {
    if (strike && !ball) return Console.print(`${strike}스트라이크`);
    if (!strike && ball) return Console.print(`${ball}볼`);
    if (strike && ball) return Console.print(`${ball}볼 ${strike}스트라이크`);
    return Console.print("낫싱");
  }

  restartGame() {
    this.computerNumberSet = new Computer().pickRandomNumberSet();
    this.playGame();
    return;
  }
  endGame() {
    Console.close();
    return;
  }

  getUserChoice() {
    Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    Console.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
      (input) => {
        if (input === "1") return this.restartGame();
        if (input === "2") return this.endGame();
        pickedWrongChoice();
      }
    );
  }

  playGame() {
    Console.readLine("숫자를 입력해주세요 : ", (userNumber) => {
      exception(userNumber);
      userNumber = new User().getUserArray(userNumber);

      const [strike, ball] = this.getScore(this.computerNumberSet, userNumber);
      this.printResult(strike, ball);

      if (strike !== 3) this.playGame();
      if (strike === 3) this.getUserChoice();
    });
  }
}

module.exports = Baseball;
