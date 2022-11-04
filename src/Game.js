import MissionUtils from '@woowacourse/mission-utils';

class Game {
  message = {
    nothing: '낫싱',
    threeStrike: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
    ball: '',
    strike: '',
  };

  constructor() {
    this.isRun = true;
  }

  countBall(comAnswer, userAnswer) {
    console.log(comAnswer, userAnswer);
    this.ballNum = comAnswer.filter(comAnswerValue => {
      return (
        userAnswer.indexOf(comAnswerValue) !== -1 &&
        comAnswer.indexOf(comAnswerValue) !== userAnswer.indexOf(comAnswerValue)
      );
    }).length;
  }

  countStrike(comAnswer, userAnswer) {
    this.strikeNum = comAnswer.filter(comAnswerValue => {
      return comAnswer.indexOf(comAnswerValue) === userAnswer.indexOf(comAnswerValue);
    }).length;
  }

  printNothing() {
    MissionUtils.Console.print(this.message.nothing);
  }

  printThreeStrike() {
    this.isRun = false;
    MissionUtils.Console.print(this.message.threeStrike);
  }

  printBall() {
    MissionUtils.Console.print(`${this.ballNum}볼`);
  }

  printStrike() {
    MissionUtils.Console.print(`${this.strikeNum}스트라이크`);
  }

  printBallAndStrike() {
    MissionUtils.Console.print(`${this.ballNum}볼 ${this.strikeNum}스트라이크`);
  }

  printResultMessage() {
    if (this.ballNum === 0 && this.strikeNum === 0) {
      this.printNothing();
    } else if (this.ballNum === 0 && this.strikeNum === 3) {
      this.printThreeStrike();
    } else if (this.ballNum !== 0 && this.strikeNum === 0) {
      this.printBall();
    } else if (this.ballNum === 0 && this.strikeNum !== 0) {
      this.printStrike();
    } else if (this.ballNum !== 0 && this.strikeNum !== 0) {
      this.printBallAndStrike();
    }
  }

  checkGameRun() {
    return this.isRun;
  }
}

export default Game;
