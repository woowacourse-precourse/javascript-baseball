const MissionUtils = require("@woowacourse/mission-utils");
class App {
  play() {
    this.printStartMessage();
  }
  printStartMessage(){
    MissionUtils.Console.print('숫자 야구게임을 시작합니다');
  }
  generateComputerRandomNumbers(){
    let ComputerRandomNumbers = new Set();

    while(ComputerRandomNumbers.size !== 3){
      ComputerRandomNumbers.add(MissionUtils.Random.pickNumberInRange(1,9));
    }
    return [...ComputerRandomNumbers].join('');
  }
}

const app = new App();
app.play();

module.exports = App;