const { Console } = require("@woowacourse/mission-utils");
const PickedNumberByComputer = require("./PickedNumberByComputer");

class BaseballGame {
  constructor() {
    this.isFirstGame = true;
    this.pickedNumberByComputer =
      new PickedNumberByComputer().randomNumInRange();
  }

  countStrikeBallNothing = (pickedNumberByUser, pickedNumberByComputer) => {
    let strike = 0;
    let ball = 0;
    let nothing = 0;
    pickedNumberByComputer.forEach((num, idx) => {
      // 같은 수이고,
      if (pickedNumberByComputer.includes(Number(pickedNumberByUser[idx]))) {
        // 같은 자리일 때
        if (num === Number(pickedNumberByUser[idx])) strike += 1;
        // 다른 자리일 때
        else ball += 1;
        // 같은 수가 없을 때
      } else nothing += 1;
    });

    return [strike, ball, nothing];
  };

  printResultsForCount = (strike, ball, nothing) => {
    if (nothing === 3) Console.print("낫싱");
    else if (strike > 0 && ball === 0) Console.print(`${strike}스트라이크`);
    else if (ball > 0 && strike === 0) Console.print(`${ball}볼`);
    else Console.print(`${ball}볼 ${strike}스트라이크`);
  };

  playTurn = (pickedNumberByUser) => {
    let [strike, ball, nothing] = this.countStrikeBallNothing(
      pickedNumberByUser,
      this.pickedNumberByComputer
    );
    this.printResultsForCount(strike, ball, nothing);

    this.playGame(strike === 3);
  };

  playGame = () => {
    if (this.isFirstGame) {
      this.isFirstGame = false;
      Console.readLine(
        "숫자 야구 게임을 시작합니다.\n숫자를 입력해주세요 : ",
        this.playTurn
      );
    }
  };
}

module.exports = BaseballGame;
