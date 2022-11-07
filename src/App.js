const MissionUtils = require("@woowacourse/mission-utils");
class User {
  game;
  constructor() {
    this.game = new BaseBallGame();
    this.input();
  }
  input() {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (inputAnswer) => {
      this.game.getStrikeCount(inputAnswer);
    })
  }
}

class BaseBallGame {
  answer;
  constructor() {
    this.init();
  }
  init() {
    this.answer = Array.from(Array(3),() => MissionUtils.Random.pickNumberInRange(1, 9));
  }
  numberToArray(inputAnswer) {
    return Array.from(inputAnswer.toString(),(num)=>Number(num));
  }
  getStrikeCount(inputAnswer){
    const inputAnswerArray = this.numberToArray(inputAnswer);
    const strikeCount = 0;
    inputAnswerArray.forEach((number,index) => {
      if(number === this.answer[index]){
        strikeCount = strikeCount + 1;
      }
    })
    return strikeCount;
  }
}

class App {
  play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    new User();
  }
}

module.exports = App;