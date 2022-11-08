const MissionUtils = require("@woowacourse/mission-utils");
const Validation = require("./Validation");

class App {
  play(){}
  constructor() {
    this.computer_number = 0;
    this.user_number=0;
  }
  play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    game_start();
  }
}
const game_start = function startGame(){
  select_computer_num();
  user_input_number();
}
const select_computer_num = function selectComputerNumber() {
  const random_number = [];
  while (random_number.length < 3) {
    const selected_number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!random_number.includes(selected_number)) {
      random_number.push(selected_number);
    }
  }
  computer_to_array(random_number);
}
const user_input_number= function getUserInputNumber() {
  MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (input_num) => {
    user_to_array(input_num);
  });
}
const computer_to_array=function changeComputerNumberToArray(random_number){
  App.computer_number = (random_number + '').split(',');
}
const user_to_array=function changeUserNumberToArray(input_num){
  App.user_number = (input_num + '').split('');
  find_equal_num();
}

const find_equal_num= function findEqualNumber(){
  let strike=0;
  let ball=0;
  App.user_number.forEach((number,index)=>{
    if(App.computer_number[index]===number){
      strike+=1;
    }
    if(App.computer_number[index]!==number&&App.computer_number.includes(number)){
      ball+=1;
    }
  })
  game_result(strike,ball);
}
const game_result=function resultGame(strike,ball){
  if(strike==3){
    game_end();
  }
  if(strike==0&&ball!=0){
    ball_score(ball);
  }
  if(strike==0&&ball==0){
    nothing();
  }
  if(strike!=0&&ball!=0){
    stirke_and_ball(strike,ball);
  }
}
const game_end= function endGame(){
  MissionUtils.Console.print('3스트라이크\n');
  MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료\n');
  MissionUtils.Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n', (number) => {
    if(number==1){
      game_start();
    }
    if(number==2){
      MissionUtils.Console.close();
    }
  });
}
const ball_score = function resultBall(ball){
    MissionUtils.Console.print(`${ball}볼`);
    user_input_number();
}
const nothing = function resultNothing(){
  MissionUtils.Console.print('낫싱');
  user_input_number();
}
const stirke_and_ball=function resultStrikeAndBall(strike,ball){
  MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
  user_input_number();
}
const app=new App;
app.play();
module.exports = App;