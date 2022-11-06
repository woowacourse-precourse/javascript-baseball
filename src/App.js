const MissionUtils = require("@woowacourse/mission-utils");
class App {

  static answer;
  static hintString;

  play() {}

  generateComputerAnswer(){
    const COMPUTER_RANDOM_NUMBER = [];
    while (COMPUTER_RANDOM_NUMBER.length < 3) {
      const RANDOM_NUMBER = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!COMPUTER_RANDOM_NUMBER.includes(RANDOM_NUMBER)) {
        COMPUTER_RANDOM_NUMBER.push(RANDOM_NUMBER);
      }
    }
    return COMPUTER_RANDOM_NUMBER;
  }

  inputPlayerNumber(){
    MissionUtils.Console.readLine('숫자를 입력해주세요:', (inputNumber)=>{
      this.getHintOrThrowError(inputNumber);
      MissionUtils.Console.print(this.hintString);
      if(this.hintString=='3스트라이크'){
        MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
        this.checkRestart();
      }
      else this.inputPlayerNumber();
    });
  }

  getHintOrThrowError(inputNumber){
    if(!this.isValidInput(inputNumber)){
      throw new Error('입력이 잘못되었습니다. 애플리케이션을 종료합니다.');
    }
    this.hintString = this.getHint(this.answer,inputNumber);
  }

  isValidInput(inputNumber){
    let numberArray = [...inputNumber];
    if(numberArray.length==0 || numberArray.length!=3)
      return false;
    numberArray.forEach(function(ele)
    {
      if(isNaN(ele)) return false;
    });
    if(numberArray.includes("0")) 
      return false; 
    if(numberArray[0]==numberArray[1]||numberArray[0]==numberArray[2]
      ||numberArray[1]==numberArray[2])
      return false;
    return true;
  }

  getHint(answer,inputNumber){
    let strike = 0;
    let ball = 0;
    let result='';
    for(let idx=0;idx<answer.length;idx++){
      result = this.judgeStrikeOrBall(answer,inputNumber,idx)
      if(result=='strike') strike+=1
      else if(result=='ball') ball+=1
    }
    let hintString='';
    hintString = this.makeHintString(strike,ball)
    return hintString;
  }

  judgeStrikeOrBall(answer,inputNumber,idx){
    const PLAYER_NUMBER_ARRAY = [...inputNumber];
    if(answer.includes(parseInt(PLAYER_NUMBER_ARRAY[idx]))){
      if (PLAYER_NUMBER_ARRAY[idx]==answer[idx]) 
        return 'strike';
      return 'ball';
    }
  }
}

module.exports = App;
