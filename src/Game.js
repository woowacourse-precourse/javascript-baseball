import MissionUtils from '@woowacourse/mission-utils';

const RESTART = 1;
const ZERO = 0;

class Game {
  message = {
    nothing: '낫싱',
    threeStrike: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
    ball: '볼',
    strike: '스트라이크',
    waitAnswer: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
  };

  constructor() {
    this.setGameState(true);
  }

  setGameState(state) {
    this.isGameRun = state;
  }

  setAnswer(comAnswer, userAnswer) {
    this.comAnswer = comAnswer;
    this.userAnswer = userAnswer;
  }

  countBall() {
    this.ballNum = this.comAnswer.filter(comAnswerValue => {
      return this.isSameNumberAndDifferentPlace(comAnswerValue);
    }).length;
  }

  isSameNumberAndDifferentPlace(comAnswerValue) {
    return (
      this.userAnswer.indexOf(comAnswerValue) !== -1 &&
      this.comAnswer.indexOf(comAnswerValue) !== this.userAnswer.indexOf(comAnswerValue)
    );
  }

  countStrike() {
    this.strikeNum = this.comAnswer.filter(comAnswerValue => {
      return this.isSameNumberAndSamePlace(comAnswerValue);
    }).length;
  }

  isSameNumberAndSamePlace(comAnswerValue) {
    return this.comAnswer.indexOf(comAnswerValue) === this.userAnswer.indexOf(comAnswerValue);
  }

  printResultMessage() {
    if (this.isNothing()) {
      this.msg = this.message.nothing;
    }

    if (this.isThreeStrike()) {
      this.setGameState(false);
      this.msg = this.message.threeStrike;
    }

    if (this.isOnlyBall()) {
      this.msg = `${this.ballNum}${this.message.ball}`;
    }

    if (this.isOnlyStrike()) {
      this.msg = `${this.strikeNum}${this.message.strike}`;
    }

    if (this.isBallAndStrike()) {
      this.msg = `${this.ballNum}${this.message.ball} ${this.strikeNum}${this.message.strike}`;
    }

    this.printMessage();
  }

  isNothing() {
    return this.ballNum === ZERO && this.strikeNum === ZERO;
  }

  isThreeStrike() {
    return this.ballNum === ZERO && this.strikeNum === 3;
  }

  isOnlyBall() {
    return this.ballNum !== ZERO && this.strikeNum === ZERO;
  }

  isOnlyStrike() {
    return this.ballNum === ZERO && this.strikeNum !== ZERO;
  }

  isBallAndStrike() {
    return this.ballNum !== ZERO && this.strikeNum !== ZERO;
  }

  printMessage() {
    MissionUtils.Console.print(this.msg);
  }

  checkGameRun() {
    return this.isGameRun;
  }

  getRestartOrEndNum() {
    return new Promise(resolve => {
      MissionUtils.Console.readLine(this.message.waitAnswer, num => {
        this.restartNum = parseInt(num, 10);
        resolve();
      });
    });
  }

  checkRestartOrEndNum() {
    if (this.restartNum === RESTART) {
      this.setGameState(true);
    }

    return this.isGameRun;
  }
}

export default Game;
