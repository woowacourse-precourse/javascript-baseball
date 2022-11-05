const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor(){
    this.computer = [];
  }

  computerInput() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
        this.computer = computer;
      }
    }
    return computer;
  }

  checkIsvaild(num) {
    // console.log(num)
    if(num === '') throw new Error('입력해주세요.');
    if((/[^0-9]/g).match === null) throw new Error('숫자를 입력해주세요.');
    if(num.length !== 3) throw new Error('숫자 3개가 입력되지 않았습니다.');
    if([...new Set(num.split(""))].length !== 3) throw new Error('중복된 숫자가 있습니다.');
    if((/[^1-9]/g).test(num)) throw new Error('1~9 사이의 숫자만 입력할 수 있습니다.');
  }

  userInput() {
    MissionUtils.Console.readLine('숫자를 입력해주세요: ', (number) => {
      console.log(number)
      this.checkIsvaild(number);
      const userNum = number.split('').map(Number);
      this.checkAnswer(userNum);
    });
  }
  
  checkAnswer(num){
    let STRIKE = 0;
    let BALL = 0;
    let result = '';

    if(num === this.computer) result = '3스트라이크';
    // console.log(this.computer)
    // console.log(num)
    for(let i=0; i<num.length; i++){
      if(num[i] === this.computer[i]) STRIKE ++;
      else if(num.includes(this.computer[i])) BALL ++;
    }
    if(BALL !== 0 && STRIKE !== 0) {
      result=`${BALL}볼 ${STRIKE}스트라이크`;
    } else if(BALL !== 0 && STRIKE === 0){
      result=`${BALL}볼`;
    } else if(BALL === 0 && STRIKE !== 0){
      result=`${STRIKE}스트라이크`;
    } else result = '낫싱'
    MissionUtils.Console.print(`${result}`);
    this.findAnswer(result);
  }

  findAnswer(res) {
    if(res !== '3스트라이크'){
      this.userInput();
    } else if(res === '3스트라이크'){
      MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임종료");
      MissionUtils.Console.print("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
      MissionUtils.Console.readLine("", (num) => {
        this.reStart(num);
      });
    }
  }

  reStart(num){
    if (Number(num) === 1) {
      this.computerInput();
      this.userInput();
    } 
    if (Number(num) === 2) {
      MissionUtils.Console.print("게임 종료");
    }
  }

  play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    this.computerInput();
    this.userInput();
  }
}

module.exports = App;