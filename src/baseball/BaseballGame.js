const { Console } = require('@woowacourse/mission-utils');
const PickedNumberByComputer = require('./PickedNumberByComputer');
const ValidateUserInput = require('./ValidateUserInput');

class BaseballGame {
  constructor() {
    this.init(true);
  }

  init = (isFirstGame) => {
    this.isFirstGame = isFirstGame;
    this.pickedNumberByComputer = PickedNumberByComputer.randomNumInRange();
  };

  playGame = () => {
    if (this.isFirstGame) Console.print('숫자 야구 게임을 시작합니다.');
    Console.readLine('숫자를 입력해주세요 : ', this.playTurn);
  };

  playTurn = (pickedNumberByUser) => {
    ValidateUserInput.isThreeDigitsNumberInRange(pickedNumberByUser);

    let [strike, ball, nothing] = this.countStrikeBallNothing(
      pickedNumberByUser,
      this.pickedNumberByComputer
    );
    this.printResultsForCount(strike, ball, nothing);

    if (strike === 3) {
      Console.readLine(
        '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
        this.inputRestartOrEnd
      );
      return;
    }
    this.playGame();
  };

  countStrikeBallNothing = (pickedNumberByUser, pickedNumberByComputer) => {
    let strike = 0;
    let ball = 0;
    let nothing = 0;
    pickedNumberByComputer.forEach((num, idx) => {
      // 같은 수가 없을 때
      if (!pickedNumberByComputer.includes(Number(pickedNumberByUser[idx]))) {
        nothing += 1;
        return;
      }

      // 같은 수 일 때
      if (num === Number(pickedNumberByUser[idx])) strike += 1;
      else ball += 1;
    });

    return [strike, ball, nothing];
  };

  printResultsForCount = (strike, ball, nothing) => {
    if (nothing === 3) Console.print('낫싱');
    else if (strike > 0 && ball === 0) Console.print(`${strike}스트라이크`);
    else if (ball > 0 && strike === 0) Console.print(`${ball}볼`);
    else Console.print(`${ball}볼 ${strike}스트라이크`);

    if (strike === 3) Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
  };

  inputRestartOrEnd = (selectedNumber) => {
    selectedNumber = Number(selectedNumber);
    ValidateUserInput.isRestartOrEnd(selectedNumber);

    if (selectedNumber === 1) {
      this.init(false);
      this.playGame();
    } else if (selectedNumber === 2) {
      Console.print('게임 종료');
      Console.close();
    }
  };
}

module.exports = BaseballGame;
