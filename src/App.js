const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {}

  playNewGame() {
    const randomNum = this.getRandomThreeDigitsNumber();
    this.readUserInputValue(randomNum);
  }

  readUserInputValue(randomNum){
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (value) => {
      if(this.isValidInputValueInGame(value) === false){this.throwExceptionMessage(`세 자리의 숫자를 정확히 입력해주세요 : 입력한 값 ${value}`)};
      const inputNum = Number(value);
      if(this.isSameTwoNumber(randomNum,inputNum)){
        this.printAllMatchMessage();
        this.readUserContinueAnswer();
        return;
      };
      
      const strikeCount = this.getStrikeCount(randomNum,inputNum);
      const ballCount = this.getBallCount(randomNum,inputNum);

      if(ballCount === 0 && strikeCount === 0){ this.printNothingMessage(); }
      if(ballCount > 0 || strikeCount > 0){ this.printBallAndStrikeCount(ballCount,strikeCount); }
      this.readUserInputValue(randomNum)
    });
  }

  readUserContinueAnswer(){
    MissionUtils.Console.readLine("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n", (answer) => {      
      if(answer !== '1' && answer !=='2'){this.throwExceptionMessage(`정확한 값을 입력해주세요 : 입력한 내용 ${answer}`); }
      if(answer === '1'){ this.playNewGame(); }
      if(answer === '2'){ MissionUtils.Console.close(); }
      

    })
  }

  printGameStartMessgae(){
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
  }

  printBallAndStrikeCount(ballCount,strikeCount){
    const outputMessageList = [];
    if(ballCount > 0){outputMessageList.push(`${ballCount}볼`);}
    if(strikeCount > 0){outputMessageList.push(`${strikeCount}스트라이크`);}
    MissionUtils.Console.print(outputMessageList.join(' '));
  }

  printNothingMessage(){
    MissionUtils.Console.print('낫싱');
  }


  printAllMatchMessage(){
    MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
  }

  throwExceptionMessage(message){
    throw message
  }


  getRandomThreeDigitsNumber() {
    const number = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
    return Number(number.join(""));
  }



  isValidInputValueInGame(inputValue){
    if(inputValue === undefined){return false;}
    
    const inputValueList = inputValue.toString().split('')
    if(inputValueList.length !== 3){return false;}

    const naturalRegex = /[1-9]/
    let tempNum = [];
    for( let value of inputValueList ){
      if(tempNum.includes(value)){return false;}
      if(naturalRegex.test(value) === false){return false;}
      tempNum.push(value)
    }
    return true;
  }

  isSameTwoNumber(randomNum, inputNum){

    if(randomNum !== inputNum){return false;}
    return true;
  }

  getStrikeCount(randomNum, inputNum) {
    const randomNumList = randomNum.toString().split("");
    const inputNumList = inputNum.toString().split("");

    let strike = 0;

    for (let i = 0; i < 3; i++) {
      if (randomNumList[i] === inputNumList[i]) {
        strike += 1;
      }
    }

    return strike;
  }

  getBallCount(randomNum, inputNum) {
    const randomNumList = randomNum.toString().split("");
    const inputNumList = inputNum.toString().split("");
    let ball = 0;
    for (let index = 0; index < 3; index++) {
      const matchNumberIndex = inputNumList.indexOf(randomNumList[index]);
      if (
        matchNumberIndex !== -1 && matchNumberIndex !== index
      ) {
        ball += 1;
      }
    }
    return ball;
  }
}


module.exports = App;
