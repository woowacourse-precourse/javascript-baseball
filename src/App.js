const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
  };

  input(text) {
    let result = 0;
    MissionUtils.Console.readLine('입력', (answer) => {
      MissionUtils.Console.print(`${text}${answer}`);
      result = answer;
    });
    return result;
  }

  checklength(text, input) {
    if (text === '숫자를 입력해주세요 : ') {
      if (input.length === 3)
        return true;
    }
    else if (text === '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n') {
      if (input.length === 1)
        return true;
    }
    return false;
  }

  createRandom() {
    let randomNumber = [];
    let tempForRandom;
    
    while (randomNumber.length < 3) {
      tempForRandom = MissionUtils.Random.pickNumberInRange(1,9);
      randomNumber.push(tempForRandom);
    } 
    return randomNumber;
  }

  check3Strike(strike, ball) {
    if (strike === 3) {
      MissionUtils.Console.print(`${strike}스트라이크`);
      MissionUtils.Console.print(`3개의 숫자를 모두 맞히셨습니다! 게임 종료`);
      let result = this.success();
      return result;
    }
    else if (strike > 0 && ball > 0) {
      MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
      return ['not a 3 strike'];
    }
    else if (strike > 0 && ball <= 0) {
      MissionUtils.Console.print(`${strike}스트라이크`);
      return ['not a 3 strike'];
    }
    else if (strike <= 0 && ball > 0) {
      MissionUtils.Console.print(`${ball}볼`);
      return ['not a 3 strike'];
    }
    else {
      MissionUtils.Console.print(`낫싱`);
      return ['not a 3 strike'];
    }
  }

  success() {
    let userInput;
    let verification;
    let str = '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n';
   
    userInput = this.input(str);
    verification = this.checklength(str, userInput);
  
    if (verification === true) {
        userInput = Number(userInput);
        if (userInput === 1) {
            let randomNumber = [];
            randomNumber = this.createRandom();
            return ['restart', randomNumber];
        }
        else if (userInput === 2) {
            MissionUtils.Console.print('게임 종료');
            return ['break'];
        }
    }
  }

  checkUserInput() {
    let userInput;
    let verification;
    let str = '숫자를 입력해주세요 : ';
  
    userInput = this.input(str);
    verification = this.checklength(str, userInput);
  
    if (verification === false) {
      return [false, undefined];
    }
    let userInputStr = userInput.split("");
    userInput = userInputStr.map((val) => Number(val));
    return [true, userInput];
  }

  baseballGame(randomNumber, userInput) {
    let strike = 0;
    let ball = 0;
    
    for (let val of userInput) {
      if (randomNumber.indexOf(val) === -1)
        continue;
      else if (randomNumber.indexOf(val) === userInput.indexOf(val) && randomNumber.indexOf(val) !== -1)
        strike += 1;
      else if (randomNumber.indexOf(val) !== userInput.indexOf(val) && randomNumber.indexOf(val) !== -1)
        ball += 1;
    }
    return [strike, ball];
  }

  play() {
    let randomNumber = [];
    let userInput;
    let maxplay = 0;

    randomNumber = this.createRandom();
    
    while (true) {
      let strike = 0;
      let ball = 0;

      if (maxplay > 20) {
        break;
      }
      let inputresult = this.checkUserInput();
      if (inputresult[0] === false) {
        throw new Error("입력이 잘못되었습니다.");
      }
      else if (inputresult[0] === true)
        userInput = inputresult[1];
    
      let strikeAndBall = this.baseballGame(randomNumber, userInput);
      strike = strikeAndBall[0];
      ball = strikeAndBall[1];

      let result = this.check3Strike(strike, ball);
      if (result[0] === 'break')
        break;
      else if (result[0] === 'restart')
        randomNumber = result[1];

      maxplay += 1;
    }
  }
}

const app = new App();
app.play();

module.exports = App;