const { triggerConsole, closeConsole } = require('../utils/missionUtils');

class BaseballController {
  constructor(baseballModel, baseballView) {
    this.baseballModel = baseballModel;
    this.baseballView = baseballView;
  }

  triggerUserInput() {
    triggerConsole('숫자 야구 게임을 시작합니다.\n숫자를 입력해주세요 : ', (userValue) => {
      this.baseballModel.setUserValue(userValue);
      this.resultGame();
    });
  }

  getStrike() {
    let strike = 0;
    for (let index = 0; index < 3; index += 1) {
      if (this.baseballModel.userValue[index] === this.baseballModel.computerValue[index]) {
        strike += 1;
      }
    }
    return strike ? `${strike}스트라이크` : '';
  }

  getBall() {
    const strike = this.getStrike();
    let ball = 0;
    for (let index = 0; index < 3; index += 1) {
      if (this.baseballModel.computerValue.includes(this.baseballModel.userValue[index])) {
        ball += 1;
      }
    }
    if (strike) {
      ball -= Number(strike.slice(0, 1));
    }
    return ball ? `${ball}볼` : '';
  }

  resultGame() {
    let result = this.getBall() + this.getStrike();
    if (!result) {
      result = '낫싱';
    }
    this.baseballView.renderPrint(result);
    if (result === '3스트라이크') {
      this.successGame();
    }
  }

  successGame() {
    triggerConsole(
      '3개의 숫자를 모두 맞히셨습니다! 게임 종료\n게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
      (number) => {
        if (number === '1') {
          console.log(1);
        } else if (number === '2') {
          closeConsole();
        }
      },
    );
  }
}

module.exports = BaseballController;
