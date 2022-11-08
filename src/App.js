const MissionUtils = require('@woowacourse/mission-utils');
const { Console, Random } = MissionUtils;

class App {
  constructor() {
    this.ComputerNumber=[];
  }

  //컴퓨터랜덤숫자
  RandomNumber(){
    while (this.ComputerNumber.length < 3) {
      const number = Random.pickNumberInRange(1,9);
      if (!this.ComputerNumber.includes(number)) {
        this.ComputerNumber.push(number);
      }
    }
  }

  //숫자입력
  GetUserInput(){
    Console.readLine('숫자를 입력해주세요.', (input) => {
      let userInput=input.split(' ').join('').split('').map(Number)
      const overlap = new Set(userInput);
      if(overlap.size!==userInput.length){
        throw('잘못된 값을 입력했습니다.');
      }
      for(let i=0;i<userInput.length;i++){
        if(isNaN(userInput[i])){
          throw('잘못된 값을 입력했습니다.');
        }
      }
      if (userInput.length===3) {
        this.CompareResult(userInput, this.ComputerNumber)
      }else{
        throw('잘못된 값을 입력했습니다.');
      }
    })
  }

  //게임종료 or 다시 시작
  Restart(){
    Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.', (answer) => {
      if(answer.length!==1)throw('잘못된 값을 입력했습니다.')
      answer=Number(answer)
      if(answer!==1&&answer!==2)throw('잘못된 값을 입력했습니다.')
      if(answer===1){
        this.ComputerNumber=[];
        this.RandomNumber();
        this.GetUserInput();
      }else if(answer===2){
        Console.close();
      }
    })
  }

  PrintResult(strike,ball){
    if(strike===0){
      if(ball===0)
        Console.print('낫싱')
      else{
        Console.print(`${ball}볼`)
      }
      this.GetUserInput();
    }else if(strike!==3){
      if(ball===0)
        Console.print(`${strike}스트라이크`)
      else{
        Console.print(`${ball}볼 ${strike}스트라이크`)
      }
      this.GetUserInput();
    }else if(strike===3){
      Console.print(`${strike}스트라이크`)
      Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료')
      this.Restart()
    }
  }

  CompareResult(InputNumber,ComputerNumber){
    let strike=0;
    let ball=0;
    for(let place=0;place<3;place++){
      let find = InputNumber.indexOf(ComputerNumber[place]);
      if(find>=0){
        if(find===place){
          strike++;
        }else{
          ball++;
        }
      }
    }
    this.PrintResult(strike,ball)
  }

  play() {
    Console.print('숫자 야구 게임을 시작합니다.');
    this.RandomNumber();
    this.GetUserInput();
  }
}

module.exports = App;
