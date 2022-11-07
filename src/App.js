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
      this.isVaildUserInput(userInputValue);
      const InputNumber = userInputValue.split('').map((v)=>parseInt(v))
      
    });
  }
  
  
  isVaildUserInput(userInputValue){
    if(userInputValue.length <= 0 || userInputValue.length >3){
      throw new Error("숫자 세자리 수를 입력하세요.");
    }
    const uniqueUserNum = new Set(userInputValue);
    if(uniqueUserNum.size !== userInputValue.length){
      throw new Error("중복되지 않는 숫자를 입력하세요.");
    }
  }



  play(){
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    this.getRandumNumber();
    this.userInput();
  
  }
  
}
const app= new App();
app.play()

module.exports = App;
