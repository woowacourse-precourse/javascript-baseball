const MissionUtils = require("@woowacourse/mission-utils");
const { numberToArray } = require("./util");

class BaseBallGame {
  answer;
  constructor() {
    this.getRandomNumber();
  }
  getRandomNumber() {
    const answerSet = new Set();
    while(answerSet.size < 3){
      answerSet.add(MissionUtils.Random.pickNumberInRange(1, 9));
    }
    this.answer = [...answerSet]
  }
  getStrikeCount(inputAnswer) {
    let strikeCount = 0;
    numberToArray(inputAnswer).forEach((number,index) => {
      if(number === this.answer[index]){
        strikeCount = strikeCount + 1;
      }
    })
    return strikeCount;
  }
  getBallCount(inputAnswer) {
    let ballCount = 0;
    numberToArray(inputAnswer).forEach((number) => {
      if(this.answer.includes(number)){
        ballCount = ballCount + 1;
      }
    })
    return ballCount;
  }
  output(inputAnswer) {
    const strikeCount = this.getStrikeCount(inputAnswer);
    const ballCount = this.getBallCount(inputAnswer) - strikeCount;

    if(strikeCount === 3){
      MissionUtils.Console.print('3스트라이크');
      return false;
    }
    if(strikeCount === 0 && ballCount === 0){
      MissionUtils.Console.print('낫싱');
      return true;
    }
    if(strikeCount === 0 || ballCount === 0){
      MissionUtils.Console.print(strikeCount ? `${strikeCount}스트라이크` : `${ballCount}볼`);
      return true;
    }

    MissionUtils.Console.print(`${ballCount}볼 ${strikeCount}스트라이크`);
    return true;
  }
}

module.exports = BaseBallGame;
