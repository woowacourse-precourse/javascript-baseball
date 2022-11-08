const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.")
    return this.input();
  }

  createNumber() {
    const three_digit = [];
    while (three_digit.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!three_digit.includes(number)) {
        three_digit.push(number);
      }
    }
    return three_digit.join("")
  }
  
  input() {
    const computerNumber = this.createNumber()
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ',  (userInput) => {
      return this.validateInput(computerNumber, userInput)
      })
  }

  validateInput(computerNumber, userInput){
    let userInputList = userInput.split("").map(Number)

    if(isNaN(userInput)==true ) throw "올바른 숫자를 입력해주세요."
    if(userInputList.length!=3 ) throw "3자리 숫자를 입력해주세요."
    if(new Set(userInputList).size!= 3) throw "중복되지 않은 숫자를 입력해주세요."
    
    return this.compareNumber(computerNumber, userInputList)
  }

  compareNumber(computerNumber, userInputList){
    let result = [0,0] 
    let message = ""
    for (let i =0 ; i<3 ; i++){
      if (computerNumber[i]=== String(userInputList[i])) result[1] += 1
      else if (computerNumber.includes(String(userInputList[i]))) result[0] += 1
    }
    if (result[1]===3) {
      MissionUtils.Console.print("3스트라이크");
      MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      return this.endOption()
    } else {
      if (result[0]==0 && result[1]==0) message += "낫싱";
      if (result[0]>0) message += result[0] + "볼" + " "
      if (result[1]>0) message += result[1] + "스트라이크" 

      MissionUtils.Console.print(message);
      MissionUtils.Console.readLine('숫자를 입력해주세요 : ',  (userInput) => {
        return this.validateInput(computerNumber, userInput)
        })
    }
  }

  endOption (){
    MissionUtils.Console.print("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
    MissionUtils.Console.readLine('',  (userInput) => {
      if (userInput == "1") return this.input();
      else if (userInput == "2") {
        MissionUtils.Console.print("게임 종료");
        MissionUtils.Console.close();
      } 
      else throw new Error("올바른 값을 입력해주세요.")
      })
    }
 
}
const app = new App();
app.play()

module.exports = App;

