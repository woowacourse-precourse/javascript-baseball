const { triggerConsole, closeConsole } = require('../utils/missionUtils');
const { isValidateNumber, isValidateNumbers } = require('../utils/validator');

class BaseballGameController {
  constructor(baseballGameModel, baseballGameView) {
    this.baseballGameModel = baseballGameModel;
    this.baseballGameView = baseballGameView;
  }

  startGame() {
    this.baseballGameView.print('숫자 야구 게임을 시작합니다.');
    this.baseballGameModel.setComputerValue(this.baseballGameModel.getRandomNumbers());
    this.triggerGame();
  }

  triggerGame() {
    triggerConsole('숫자를 입력해주세요 : ', (number) => {
      if (isValidateNumbers(number)) {
        this.baseballGameModel.setUserValue(number);
        this.resultGame();
      }
    });
  }

  resultGame() {
    const strike = this.getStrike();
    const ball = this.getBall();
    if (strike !== '3스트라이크') {
      this.baseballGameView.printResultGame(strike, ball);
      this.triggerGame();
    } else if (strike === '3스트라이크') {
      this.baseballGameView.print('3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료');
      this.successGame();
    }
  }

  successGame() {
    triggerConsole('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n', (number) => {
      if (isValidateNumber(number)) {
        if (number === '1') {
          this.restartGame();
        } else if (number === '2') {
          closeConsole();
        }
      }
    });
  }

  restartGame() {
    this.baseballGameModel.setComputerValue(this.baseballGameModel.getRandomNumbers());
    this.triggerGame();
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
}

module.exports = BaseballGameController;
