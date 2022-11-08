const {Console,Random} = require("@woowacourse/mission-utils");

class App {

  checkRangeOver(input) {
    let checkBool = false;
    input.map((num)=> {
      if(num > 9 || num<1) {
        checkBool = true;  
      }
    })
    return checkBool;
  }
  checkDupulicate(input) {
    const set = new Set(input);
    if(set.size !== input.length) return true;
    return false;
  }

  inputValidation(input) {
    let testInput = input.split('').map((num)=> Number(num));
    if(testInput.length !== 3)  {
      throw new("입력은 세자리 숫자로 해주세요.");
    }
    if(testInput.some((num)=> isNaN(num))) {
      throw new("숫자만 입력 가능합니다.");
    }
    console.log("트루안나옴?",this.checkRangeOver(testInput));
    if(this.checkRangeOver(testInput)) {
      throw new("1~9사이의 숫자를 입력해주세요.")
    }
    if(this.checkDupulicate(testInput)) {
      throw new("서로 다른숫자로 입력해주세요.")
    }
    return true;
  }

  getStrikeAndBall(comNums,userNums) {
    let strikeCounter = 0;
    let ballCounter = this.getBallCounter(comNums,userNums);
    for(let i =0; i<userNums.length; i++) {
      if(userNums[i] === comNums[i]) {
        strikeCounter++;
      }
    }
    return [strikeCounter,ballCounter-strikeCounter];
  }
  getBallCounter(comNums,userNums) {
    let ballCounter = 0;
    for(let i =0; i<userNums.length; i++) {
      if(comNums.includes(userNums[i])) {
        ballCounter++;
      }
    }
    return ballCounter;
  }
  restartOrEnd() {
    Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    Console.readLine("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",(input)=> {
      if (input !== '1' && input !== '2') {
        throw new Error("1또는 2를 선택해야합니다.");
      }
      if(input === '1') {
        return this.play();
      }
      Console.print("게임이 종료되었습니다.");
      Console.close();
    });  
  }
  
  guessGame(comNums,userNums) {
    const [strikeCounter,ballCounter] = this.getStrikeAndBall(comNums,userNums);
    Console.print(this.resultMessage(strikeCounter,ballCounter));
    if(strikeCounter !== 3) {
      return this.userInput(comNums);
    }
    restartOrEnd();
  }

  resultMessage(strikeCounter,ballCounter) {
    let message = '';
    if(ballCounter) {
      message+=`${ballCounter}볼 `;
    }
    if(strikeCounter) {
      message+=`${strikeCounter}스트라이크 `;
    }
    return (!ballCounter && !strikeCounter) ? "낫싱" : message;
  }
  userInput(comNums) {
    Console.readLine("숫자를 입력해주세요 : ",(input)=> {
      this.inputValidation(input);
      this.guessGame(comNums,input.split('').map((num)=> Number(num)));
    });
  }

  play() {
    const comNums = Random.pickUniqueNumbersInRange(1, 9, 3);
    Console.print("숫자 야구 게임을 시작합니다.");
    this.userInput(comNums);
  }
}

module.exports = App;