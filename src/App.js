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
}

module.exports = App;
