const MissionUtils = require('@woowacourse/mission-utils');

class BaseballGameController {
  constructor(baseballGameModel, baseballGameView) {
    this.baseballGameModel = baseballGameModel;
    this.baseballGameView = baseballGameView;
  }

  getUserValue() {
    MissionUtils.Console.readLine(
      '숫자 야구 게임을 시작합니다.\n숫자를 입력해주세요 : ',
      (userValue) => {
        this.baseballGameModel.setUserValue(userValue);
      },
    );
  }
}

module.exports = BaseballGameController;
