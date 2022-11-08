const {Console,Random} = require("@woowacourse/mission-utils");

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
  restartOrEnd() {
    let userCommand;
    Console.readLine("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",(input)=> {
      userCommand = input;
    });  
    switch(userCommand) {
      case '1' : this.play(); break;
      case '2' : Console.close();
      default : throw new Error("잘못된 입력입니다.");
    }
  }
  gameOver() {
    Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료\n");
    this.restartOrEnd();
    
  }
  guessGame(strikeCounter,ballCounter,comNums) {
    if(strikeCounter === 3) {
      return gameOver();
    }
    Console.print(this.resultMessage(strikeCounter,ballCounter));
    return this.userInput(comNums);
  }

  resultMessage(strikeCounter,ballCounter) {
    let message = '';
    
    if(ballCounter) {
      message.concat(`${ballCounter}볼 `);
    }
    if(strikeCounter) {
      message.concat(`${strikeCounter}스트라이크 `);
    }
    return (!ballCounter && !strikeCounter) ? "낫싱" : message;
  }
  userInput(comNums) {
    let userNums;
    Console.readLine("숫자를 입력해주세요 : ",(answer)=> {
      userNums = answer.split('').map((num)=>{return Number(num)});
    });
    const [strikeCounter,ballCounter] = this.getStrikeAndBall(comNums,userNums);
    Console.print(this.resultMessage(strikeCounter,ballCounter));
  }
  startBaseBallGame() {
    const comNums = Random.pickUniqueNumbersInRange(1, 9, 3);
    Console.print("숫자 야구 게임을 시작합니다.");
    userInput(comNums);
  }
  
  play() {
    this.startBaseBallGame();
  }
}

// const app = new App();
// app.play();

module.exports = App;
