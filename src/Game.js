import MissionUtils from '@woowacourse/mission-utils';

class Game {
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

  printMessage() {
    MissionUtils.Console.print(this.msg);
  }

  isNothing() {
    return this.ballNum === 0 && this.strikeNum === 0;
  }

  isThreeStrike() {
    return this.ballNum === 0 && this.strikeNum === 3;
  }

  isOnlyBall() {
    return this.ballNum !== 0 && this.strikeNum === 0;
  }

  isOnlyStrike() {
    return this.ballNum === 0 && this.strikeNum !== 0;
  }

  isBallAndStrike() {
    return this.ballNum !== 0 && this.strikeNum !== 0;
  }

  printResultMessage() {
    this.msg = '';

    if (this.isNothing()) {
      this.msg = '낫싱';
    }

    if (this.isThreeStrike()) {
      this.isRun = false;
      this.msg = '3개의 숫자를 모두 맞히셨습니다! 게임 종료';
    }

    if (this.isOnlyBall()) {
      this.msg = `${this.ballNum}볼`;
    }

    if (this.isOnlyStrike()) {
      this.msg = `${this.strikeNum}스트라이크`;
    }

    if (this.isBallAndStrike()) {
      this.msg = `${this.ballNum}볼 ${this.strikeNum}스트라이크`;
    }

    this.printMessage();
  }

  checkGameRun() {
    return this.isRun;
  }

  printRestart() {
    MissionUtils.Console.print('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
  }

  checkRestart() {
    this.printRestart();
  }
}

export default Game;
