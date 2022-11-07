const MissionUtils = require("@woowacourse/mission-utils");

module.exports = class AnswerListClass {
  constructor() {
    this.endState = false;
  }
  threeStrikeCheck(strikeCount) {
    if (strikeCount === 3) {
      MissionUtils.Console.print("3스트라이크!");
      MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      return (this.endState = true);
    }
    return this.endState;
  }
  ballCheck(strikeCount, ballCount) {
    if (ballCount > 0 && ballCount < 4 && strikeCount === 0) {
      MissionUtils.Console.print(`${ballCount}볼`);
      return (this.endState = false);
    }
    return this.endState;
  }
  strikeCheck(strikeCount, ballCount) {
    if (strikeCount < 3 && strikeCount > 0 && ballCount === 0) {
      MissionUtils.Console.print(`${strikeCount}스트라이크`);
    }
    return this.endState;
  }
  strikeBallCheck(strikeCount, ballCount) {
    if (strikeCount > 0 && ballCount > 0) {
      MissionUtils.Console.print(`${ballCount}볼 ${strikeCount}스트라이크`);
      return (this.endState = false);
    }
    return this.endState;
  }
  nothingCheck(strikeCount, ballCount) {
    if (ballCount === 0 && strikeCount === 0) {
      MissionUtils.Console.print("낫싱");
      return (this.endState = false);
    }
    return this.endState;
  }

  choiceAnswer(strikeCount, ballCount) {
    strikeCount === 3 && this.threeStrikeCheck(strikeCount);
    strikeCount === 0 &&
      ballCount === 0 &&
      this.nothingCheck(strikeCount, ballCount);
    strikeCount !== 0 &&
      ballCount !== 0 &&
      this.strikeBallCheck(strikeCount, ballCount);
    ballCount === 0 &&
      strikeCount !== 0 &&
      this.strikeCheck(strikeCount, ballCount);
    strikeCount === 0 &&
      ballCount !== 0 &&
      this.ballCheck(strikeCount, ballCount);
    return this.endState;
  }
};
