const MissionUtils = require("@woowacourse/mission-utils");

class App {

  constructor() {
    this.computer_number = 0;
    this.user_number=0;
  }
  play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    this.selectComputerNumber();
    this.startGame();
  }
  startGame() {
    this.getUserInputNumber();
  }

  selectComputerNumber() {
    const random_number = [];
    while (random_number.length < 3) {
      const selected_number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!random_number.includes(selected_number)) {
        random_number.push(selected_number);
      }
    }
    this.changeComputerNumberToArray(random_number);
  }
  getUserInputNumber() {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (input_num) => {
      this.changeUserNumberToArray(input_num);
    });
  }
  changeComputerNumberToArray(random_number){
    this.computer_number = (random_number + '').split(',');
    console.log(this.computer_number);
  }
  changeUserNumberToArray(input_num){
    this.user_number = (input_num + '').split('');
    this.findEqualNumber();
  }

  findEqualNumber(){
    let strike=0;
    let ball=0;
    this.user_number.forEach((number,index)=>{
      if(this.computer_number[index]===number){
        strike+=1;
      }
      if(this.computer_number[index]!==number&&this.computer_number.includes(number)){
        ball+=1;
      }
    })
    this.resultGame(strike,ball);
  }
  resultGame(strike,ball){
    if(strike==3){
      this.endGame();
    }
    if(strike==0&&ball!=0){
      this.resultBall(ball);
    }
    if(strike==0&&ball==0){
      this.resultNothing();
    }
    if(strike!=0&&ball!=0){
      this.resultStrikeAndBall(strike,ball);
    }
  }
  endGame(){
    MissionUtils.Console.print('3스트라이크\n'+'3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    MissionUtils.Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n', (number) => {
      if(number==1){
        this.getUserInputNumber();
      }
      if(number==2){
        MissionUtils.Console.close();
      }
    });
  }
  resultBall(ball){
      MissionUtils.Console.print(`${ball}볼`);
  }
  resultNothing(){
    MissionUtils.Console.print('낫싱');
  }
  resultStrikeAndBall(strike,ball){
    MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
  }
}
const app = new App;
app.play();
module.exports = App;