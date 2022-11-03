const { triggerReadLine } = require('../utils/missionUtils');

class BaseballController {
  constructor(baseballModel, baseballView) {
    this.baseballModel = baseballModel;
    this.baseballView = baseballView;
  }

  triggerUserInput() {
    triggerReadLine('숫자 야구 게임을 시작합니다.\n숫자를 입력해주세요 : ', (userValue) => {
      this.baseballModel.setUserValue(userValue);
      this.gameResult();
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

  gameResult() {
    let result = this.getBall() + this.getStrike();
    if (!result) {
      result = '낫싱';
    } else if (result === '3스트라이크') {
      // ...
    }
    this.baseballView.renderPrint(result);
  }
}

module.exports = BaseballController;
