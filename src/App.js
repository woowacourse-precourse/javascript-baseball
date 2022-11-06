const MissionUtils = require("@woowacourse/mission-utils");
class App {
  constructor(){
    this.computerRandomNumbers = this.generateComputerRandomNumbers();
  }
  play() {
    this.printStartMessage();
    this.startGame();
  }
  startGame() {
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
}

const app = new App();
app.play();

module.exports = App;