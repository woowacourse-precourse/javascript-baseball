const MissionUtils = require("@woowacourse/mission-utils");
class App {
  constructor(){
    this.computerRandomNumbers = this.generateComputerRandomNumbers();
  }
  play() {
    this.printStartMessage();
    this.getUserInput();
  }
  startGame() {
    this.ballStrikeCount();
  }
  printStartMessage() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
  }
  generateComputerRandomNumbers() {
    let ComputerRandomNumbers = new Set();

    while(ComputerRandomNumbers.size !== 3){
      ComputerRandomNumbers.add(MissionUtils.Random.pickNumberInRange(1,9));
    }
    return [...ComputerRandomNumbers].join('');
  }
  isValidInputNumbers(number){
    let noDuplication = new Set([...number])

    if(number < 100 || number >= 1000){
      return false; 
    }
    else if((number+'').includes('0')){
      return false;
    }
    else if(noDuplication.size !== number.length){
      return false;
    }
    else
      return true;
  }
  getUserInput(){
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (input) => {
      if(this.isValidInputNumbers(input)){
        this.userInput = input;
        this.startGame();
      }
      else{
        throw new Error('조건에 맞는 수를 입력하세요!')
      }
    });
  }
  ballStrikeCount(computerInput, userInput){
    let ballCount = 0;
    let strikeCount = 0;

    for(let i = 0; i < computerInput.length; i++){
      if(computerInput[i] === userInput[i]){
        strikeCount++;
      }
    }
    for(let number of computerInput){
      if(userInput.includes(number)){
        ballCount++;
      }
    }
    return [strikeCount, ballCount];
  }
}

const app = new App();
app.play();

module.exports = App;