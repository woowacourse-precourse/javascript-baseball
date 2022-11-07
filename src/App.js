const { Random, Console } = require("@woowacourse/mission-utils");
class App {

  constructor() {
    this.computerInputNums = [];
    this.userInputNums = [];
  }
  
  computerInput(){
    this.computerInputNums = Random.pickUniqueNumbersInRange(1, 9, 3);
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

  compareInput(userInput){
    this.userInputNums = userInput;
    const subtractArr = this.computerInput.map((x,y) => x-userInput[y]);
    const zeroCount = subtractArr.reduce((count, data) => data == 0 ? count + 1 : count, 0);
    if(zeroCount == 3){
      Console.print("3스트라이크");
      Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      //return this.restartGame();
    }

    //this.getResult();

    return this.userInput();

  }


  play(){
    Console.print("숫자 야구 게임을 시작합니다.");
    this.computerInput();
    this.userInput();

  }
}

module.exports = App;
