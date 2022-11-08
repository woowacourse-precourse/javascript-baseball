const MissionUtils = require('@woowacourse/mission-utils');
const { Console, Random } = MissionUtils;

class App {
  constructor() {
    this.ComputerNumber=[];
  }

  //컴퓨터랜덤숫자
  static RandomNumber(){
    while (this.ComputerNumber.length < 3) {
      const number = Random.pickNumberInRange(1,9);
      if (!this.ComputerNumber.includes(number)) {
        this.ComputerNumber.push(number);
      }
    }
  }

  //숫자입력
  static getUserInput(){
    Console.readLine('숫자를 입력해주세요.', (input) => {
      let userInput=input.split(' ').join('').split('').map(Number)
      const overlap = new Set(userInput);
      if(overlap.size!==userInput.length){
        throw('잘못된 값을 입력했습니다.')
      }
      for(let i=0;i<userInput.length;i++){
        if(isNaN(userInput[i])){
          throw('잘못된 값을 입력했습니다.')
        }
      }
      if (userInput.length===3) {
        this.CompareNumber(userInput, this.Computer_Number)
      }else{
        throw('잘못된 값을 입력했습니다.')
      }
    })
}
  play() {
    Console.print('숫자 야구 게임을 시작합니다.');
    this.RandomNumber();
    this.getUserInput();
  }
}

module.exports = App;
