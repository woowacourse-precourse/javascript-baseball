const MissionUtils = require("@woowacourse/mission-utils");

class App{
  constructor(){
    this.uniqueNumberList =[];
  }

  
  
  getRandumNumber(){
    const randomNumber = new Set();
    while(randomNumber.size !==3){
      randomNumber.add(MissionUtils.Random.pickNumberInRange(1,9));
    }
    const uniqueNumberList = [...randomNumber]
    this.uniqueNumberList = uniqueNumberList;
    return uniqueNumberList
  }
  
  
  userInput(){
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ',(userInputValue)=>{
      this.isVaildUserInput(userInputValue);
      const InputNumber = userInputValue.split('').map((v)=>parseInt(v));
      this.getHintCount(InputNumber);
    });
  }
  
  isVaildUserInput(number){
    if(number.length !== 3){
      throw new Error("숫자 세자리 수를 입력하세요.");
    }
    const uniqueUserNum = new Set(number);
    if(uniqueUserNum.size !== number.length){
      throw new Error("중복되지 않는 숫자를 입력하세요.");
    }
  }

  getHintCount(userInput){
    let COUNT_STRIKE = 0;
    let COUNT_DUPLICATION= 0;
    let COUNT_BALL = 0;

    if(this.uniqueNumberList === userInput) COUNT_STRIKE = 3;
    
    
    for(let index = 0; index<this.uniqueNumberList.length;index++){
      if(this.uniqueNumberList[index] === userInput[index]) COUNT_STRIKE++
      if(userInput.includes(this.uniqueNumberList[index])) COUNT_DUPLICATION++
    }
    COUNT_BALL = COUNT_DUPLICATION - COUNT_STRIKE ;
    this.printResult(COUNT_STRIKE,COUNT_BALL);
  }

  printResult(countStrike,countBall){
  if(countStrike===3)
    MissionUtils.Console.print('3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료');
  if(countStrike ===0 && countBall ===0){
    MissionUtils.Console.print('낫싱');
  }
  if(countStrike > 0 && countBall >0){
    MissionUtils.Console.print(`${countBall}볼 ${countStrike}스트라이크`);
  }
  if((countStrike > 0 && countBall ===0) && countStrike !==3){
    MissionUtils.Console.print(`${countStrike}스트라이크`);
  }
  if(countStrike === 0 && countBall >0){
    MissionUtils.Console.print(`${countBall}볼`);
  }
  
}

  play(){
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    this.getRandumNumber();
    // MissionUtils.Console.print(this.uniqueNumberList);
    this.userInput();
  
  }
  
}
const app= new App();
app.play()

module.exports = App;
