const MissionUtils = require("@woowacourse/mission-utils");
class User {
  game;
  constructor() {
    this.game = new BaseBallGame();
    this.input();
  }
  input() {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (inputAnswer) => {
      console.log(this.game.answer);
    })
  }
}

class BaseBallGame {
  answer = [];
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
  numberToArray(inputAnswer) {
    return Array.from(inputAnswer.toString(),(num)=>Number(num));
  }
  getStrikeCount(inputAnswer){
    let strikeCount = 0;
    this.numberToArray(inputAnswer).forEach((number,index) => {
      if(number === this.answer[index]){
        strikeCount = strikeCount + 1;
      }
    })
    return strikeCount;
  }
  getBallCount(inputAnswer){
    let ballCount = 0;
    this.numberToArray(inputAnswer).forEach((number) => {
      if(this.answer.includes(number)){
        ballCount = ballCount + 1;
      }
    })
    return ballCount;
  }
}

class App {
  play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    new User();
  }
}

new App().play();
module.exports = App;