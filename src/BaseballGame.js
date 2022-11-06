const { Console } = require("@woowacourse/mission-utils");
const PickedNumberByComputer = require("./PickedNumberByComputer");
const ValidateUserInput = require("./ValidateUserInput");

class BaseballGame {
  constructor() {
    this.isFirstGame = true;
    this.validateUserInput = new ValidateUserInput();
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

  inputRestartOrEnd = (selectedNumber) => {
    selectedNumber = Number(selectedNumber);

    if (selectedNumber === 1) {
      this.isFirstGame = false;
      new BaseballGame().playGame(false);
    } else if (selectedNumber === 2) {
      Console.print("게임 종료");
      Console.close();
    } else throw new Error("1 또는 2만 입력해주세요.");
  };

  playGame = () => {
    let inputNumberComment = "숫자를 입력해주세요 : ";

    if (this.isFirstGame) {
      this.isFirstGame = false;
      inputNumberComment =
        "숫자 야구 게임을 시작합니다.\n" + inputNumberComment;
    }

    Console.readLine(inputNumberComment, this.playTurn);
  };

  playTurn = (pickedNumberByUser) => {
    this.validateUserInput.validate(pickedNumberByUser);

    let [strike, ball, nothing] = this.countStrikeBallNothing(
      pickedNumberByUser,
      this.pickedNumberByComputer
    );
    this.printResultsForCount(strike, ball, nothing);

    if (strike === 3) {
      Console.readLine(
        "3개의 숫자를 모두 맞히셨습니다! 게임 종료\n게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
        this.inputRestartOrEnd
      );
      return;
    }

    this.playGame();
  };
}

module.exports = BaseballGame;
