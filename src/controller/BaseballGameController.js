const { triggerConsole, closeConsole } = require('../utils/missionUtils');

class BaseballGameController {
  constructor(baseballGameModel, baseballGameView) {
    this.baseballGameModel = baseballGameModel;
    this.baseballGameView = baseballGameView;
  }

  startGame() {
    this.baseballGameView.renderPrint('숫자 야구 게임을 시작합니다.');
    this.baseballGameModel.setComputerValue(this.baseballGameModel.getRandomNumbers());
    this.triggerUserInput();
  }

  triggerUserInput() {
    triggerConsole('숫자를 입력해주세요 : ', (value) => {
      this.baseballGameModel.setUserValue(value);
      this.resultGame();
    });
  }

  getStrike() {
    let strike = 0;
    for (let index = 0; index < 3; index += 1) {
      if (this.baseballGameModel.userValue[index] === this.baseballGameModel.computerValue[index]) {
        strike += 1;
      }
    }
    return strike ? `${strike}스트라이크` : '';
  }

  getBall() {
    const strike = this.getStrike();
    let ball = 0;
    for (let index = 0; index < 3; index += 1) {
      if (this.baseballGameModel.computerValue.includes(this.baseballGameModel.userValue[index])) {
        ball += 1;
      }
    }
    if (strike) {
      ball -= Number(strike.slice(0, 1));
    }
    return ball ? `${ball}볼` : '';
  }

  resultGame() {
    const result = this.getBall() + this.getStrike();
    this.baseballGameView.renderResultRender(result);
    if (result !== '3스트라이크') {
      this.triggerUserInput();
    }
    if (result === '3스트라이크') {
      this.successGame();
    }
  }

  successGame() {
    triggerConsole(
      '3개의 숫자를 모두 맞히셨습니다! 게임 종료\n게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
      (number) => {
        if (number === '1') {
          this.restartGame();
        } else if (number === '2') {
          closeConsole();
        }
      },
    );
  }

  restartGame() {
    this.baseballGameModel.setComputerValue(this.baseballGameModel.getRandomNumbers());
    this.triggerUserInput();
  }
}

module.exports = BaseballGameController;
