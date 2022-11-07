const MissionUtils = require("@woowacourse/mission-utils");

class App{
  constructor(){
    this.uniqueNumberList = [];
  }

  
  
  getRandumNumber(){
    const randomNumber = new Set();
    while(randomNumber.size !==3){
      randomNumber.add(MissionUtils.Random.pickNumberInRange(1,9));
    }
    const uniqueNumberList = [...randomNumber]
    return uniqueNumberList
  }
  
  userInput(){
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ',(userInputValue)=>{
      const InputNumber = userInputValue.split('').map((v)=>parseInt(v))
      this.userInput();
    });
  }
  
  
  isVaildUserInput(userInput){
    if(userInput.length === 0){
      throw new Error("숫자를 입력하세요")
    }
    
  }
  play(){
    this.getRandumNumber();
    this.userInput();
  }
  
}
const app= new App();
console.log(app.play())

module.exports = App;
