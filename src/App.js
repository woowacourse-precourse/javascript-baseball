const MissionUtils = require("@woowacourse/mission-utils");
class User {
  game;
  constructor() {
    this.game = new BaseBallGame();
    this.play();
  }
  play() {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (inputAnswer) => {
      const isPlay = this.game.output(inputAnswer);
      if(isPlay){
        this.play();
      }
      this.selectRePlay();
    });
  }
  selectRePlay(){
    MissionUtils.Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n', (selectReplay) => {
      if(selectReplay === '1'){
        this.play();
      }
      if(selectReplay === '2'){
        this.finish();
      }
      this.selectRePlay();
    })
  }
  finish(){
    MissionUtils.Console.close();
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
  output(inputAnswer){
    const strikeCount = this.getStrikeCount(inputAnswer);
    const ballCount = this.getBallCount(inputAnswer) - strikeCount;

    if(strikeCount === 3){
      MissionUtils.Console.print('3스트라이크');
      MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
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

class App {
  play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    new User();
  }
}

new App().play();
module.exports = App;