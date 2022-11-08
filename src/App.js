const MissionUtils = require("@woowacourse/mission-utils");

class App {

  checkRangeOver(input) {
    input.map((num)=> {
      if(num > 9 || num<1) {
        return true;  
      }
    })
    return false;
  }
  checkDupulicate(input) {
    const set = new Set(input);
    if(set.size !== input.length) return true;
    return false;
  }

  inputValidation(input) {
    if(input.length !== 3)  {
      throw new("입력은 세자리 숫자로 해주세요.");
    }
    if(input.some((num)=> isNaN(num))) {
      throw new("숫자만 입력 가능합니다.");
    }
    if(checkRangeOver(input)) {
      throw new("1~9사이의 숫자를 입력해주세요.")
    }
    if(checkDupulicate(input)) {
      throw new("서로 다른숫자로 입력해주세요.")
    }
    return true;
  }

  getStrikeAndBall(comNums,userNums) {
    let strikeCounter = 0;
    let ballCounter = this.getBallCounter(comNums,userNums);
    for(let i =0; i<userNums; i++) {
      if(userNums[i] === comNums[i]) {
        strikeCounter++;
      }
    }
    return [strikeCounter,ballCounter-strikeCounter];
  }
  getBallCounter(comNums,userNums) {
    let ballCounter = 0;
    for(let i =0; i<userNums; i++) {
      if(comNums.includes(userNums[i])) {
        ballCounter++;
      }
    }
    return ballCounter;
  }
  resultMessage(strikeCounter,ballCounter) {
    let message = '';
    if(strikeCounter === 3) {
      // gameOver();
    }
    if(ballCounter) {
      message.concat(`${ballCounter}볼 `);
    }
    if(strikeCounter) {
      message.concat(`${strikeCounter}스트라이크 `);
    }
    return (!ballCounter && !strikeCounter) ? "낫싱" : message;
  }

  startBaseBallGame() {
    const comNums = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
    let userNums;
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ",(answer)=> {
      userAnswer = answer.split('').map((num)=>{return Number(num)});
    });
    const [strikeCounter,ballCounter] = this.getStrikeAndBall(comNums,userNums);

  }
  
  play() {
    this.startBaseBallGame();
    
  }
}

// const app = new App();
// app.play();

module.exports = App;
