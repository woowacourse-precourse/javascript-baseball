const { Random, Console } = require("@woowacourse/mission-utils");
class App {

  constructor() {
    this.computerInput = [];
    this.userInput = [];
  }
  
  computerInput(){
    this.computerNumbers = Random.pickUniqueNumbersInRange(1, 9, 3);
  }

  checkUserInput(userInput){
    const isValidArr = userInput.map(e => e=Number.isNaN(e));
    if(userInput.length!==3) return false;
    if(isValidArr.includes(true)) return false;
    if(new Set(userInput).size!==3) return false;
    if(userInput.includes(0)) return false;
  }

  userInput(){
    return Console.readLine('숫자를 입력해주세요 : ',(input) => {
      this.checkUserInput(input);
      this.compareInputNum(input);
      Console.close();
      })
  }


  play(){
    Console.print("숫자 야구 게임을 시작합니다.");
    this.computerInput();
    this.userInput();

  }
}

module.exports = App;
