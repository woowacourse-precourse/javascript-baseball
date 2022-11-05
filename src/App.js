const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    this.showMessage();
    this.userInput();
    this.computerRandomNumber();
    // this.compareNumbers()
    // this.closeConsole();
  }
  showMessage() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
  }
  userInput() {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (userNumber) => {this.checkUserInputValue(userNumber)});
  }
  checkUserInputValue(userNumber){
    let regex=/[^1-9]/g
    const userNumberLen=userNumber.length
    if(regex.test(userNumber) || userNumberLen!==3){
      throw "1~9 사이의 숫자 3개만 입력해주세요 프로그램이 종료됩니다."
    }
    let stringUserNumber=userNumber.split('')
    let userNumberArray=[]
    stringUserNumber.forEach((element)=>userNumberArray.push(Number(element)))
    this.compareNumbers(userNumberArray)
  }
  computerRandomNumber() {
    const COMPUTER = [];
    while (COMPUTER.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!COMPUTER.includes(number)) {
        COMPUTER.push(number);
      }
    }
    return COMPUTER
  }
  compareNumbers(userNumberArray){
    let computerNumber=this.computerRandomNumber()
    console.log('사용자 :',userNumberArray);
    console.log('컴퓨터: ',computerNumber);
    let strike=0
    let ball=0
    for(let idx=0;idx<userNumberArray.length;idx++){
      let findIndex=computerNumber.indexOf(userNumberArray[idx])
      console.log(findIndex);
      if(findIndex>-1){
        if(findIndex===idx){
          strike++
        }
        else{
          ball++
        }
      }
      console.log(strike,ball);
    }
    if(strike!==3){
      this.userInput()
    }
  }
  closeConsole(){
    MissionUtils.Console.close();
  }
  gameReplay() {
    MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    MissionUtils.Console.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
      (gameSetNumber) => {
        try {
          if (gameSetNumber === 1) {
            this.userInput();
          } else if (gameSetNumber === 2) {
            throw "";
          } else {
            throw "1,2가 아닌 값을 입력하셨습니다. 프로그램이 종료됩니다.";
          }
        } catch (e) {
          console.log(e);
        }
      }
    );
  }
}

const app = new App();
app.play();
module.exports = App;
