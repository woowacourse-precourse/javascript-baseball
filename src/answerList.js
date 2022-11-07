const MissionUtils = require("@woowacourse/mission-utils");

module.exports = class AnswerListClass {
  constructor() {
    this.endState = false;
  }
  threeStrikeCheck(strikeCount) {
    if (strikeCount === 3) {
      MissionUtils.Console.print("3스트라이크!");
      MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      this.endState = true;
    }
    return this;
  }
  ballCheck(strikeCount, ballCount) {
    if (ballCount > 0 && ballCount < 4 && strikeCount === 0) {
      MissionUtils.Console.print(`${ballCount}볼`);
      this.endState = false;
    }
    return this;
  }
  strikeCheck(strikeCount, ballCount) {
    if (strikeCount < 3 && strikeCount > 0 && ballCount === 0) {
      MissionUtils.Console.print(`${strikeCount}스트라이크`);
      this.endState = false;
    }
    return this;
  }
  strikeBallCheck(strikeCount, ballCount) {
    if (strikeCount > 0 && ballCount > 0) {
      MissionUtils.Console.print(`${ballCount}볼 ${strikeCount}스트라이크`);
      this.endState = false;
    }
    return this;
  }
  nothingCheck(strikeCount, ballCount) {
    if (ballCount === 0 && strikeCount === 0) {
      MissionUtils.Console.print("낫싱");
      this.endState = false;
    }
    return;
  }

  choiceAnswer(strikeCount, ballCount) {
    this.threeStrikeCheck(strikeCount);
    this.nothingCheck(strikeCount, ballCount);
    this.strikeBallCheck(strikeCount, ballCount);
    this.strikeCheck(strikeCount, ballCount);
    this.ballCheck(strikeCount, ballCount);
    return this.endState;
  }
};
