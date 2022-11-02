const MissionUtils = require('@woowacourse/mission-utils');

class BaseballController {
  constructor(baseballModel, baseballView) {
    this.baseballModel = baseballModel;
    this.baseballView = baseballView;
  }

  getUserValue() {
    MissionUtils.Console.readLine(
      '숫자 야구 게임을 시작합니다.\n숫자를 입력해주세요 : ',
      (userValue) => {
        this.baseballModel.setUserValue(userValue);
      },
    );
  }
}

module.exports = BaseballController;
