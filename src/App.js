const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.random_numbers = ''
    this.input_numbers = ''
  }

  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.random_numbers = CreateRandomNum();
    this.start();
  }

  start() {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (input) => {
      this.input_numbers = input;
      Except(this.input_numbers);

      let strike = CalStrike(this.random_numbers, this.input_numbers);
      let ball = CalBall(this.random_numbers, this.input_numbers);
      PrintScore(strike, ball);
      
      if(strike == 3){
        MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        this.restart();
      }
      else
        this.start();
    });
  }
  
  restart(){
    MissionUtils.Console.print("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
    MissionUtils.Console.readLine("", (input) => {
      if(input === "1")
        this.play();
      else if(input === "2"){
        MissionUtils.Console.print("게임을 종료합니다.");
        MissionUtils.Console.close();
      }
      else 
        throw "1또는 2값을 입력해주세요"
    });
  }
}

//볼, 스트라이크 갯수 출력 함수
function PrintScore(strike, ball){
  if(strike == 0 && ball == 0)
    MissionUtils.Console.print('낫싱');
  else if(strike == 0)
    MissionUtils.Console.print(ball.toString() + "볼");
  else if(ball == 0)
    MissionUtils.Console.print(strike.toString() + "스트라이크");
  else
    MissionUtils.Console.print(ball.toString() + "볼" + " "+ strike.toString() + "스트라이크");
}

//1~9까지의 세개의 서로 다른수가 아닐시 예외처리
function Except(input){

  for(let i=0; i<input.length; i++){
    code = input[i].charCodeAt(0);
    code1 = '1'.charCodeAt(0);
    code9 = '9'.charCodeAt(0);
    if(code1 > code || code > code9)
      throw "1~9범위의 숫자만 입력해주세요";
  }

  if(input.length != 3)
    throw "3가지 숫자를 입력해주세요";
  
  if(input[0] == input[1] || input[1] == input[2] || input[0] == input[2])
    throw "서로 다른 숫자를 입력해주세요";
}

//숫자야구 게임 스트라이크 판정 함수, 두개의 문자열을 받아 스트라이크 갯수를 반환 
function CalStrike(str1, str2){
  let strike = 0;
  for(let index=0; index<3; index++){
    if(str1[index] == str2[index])
    strike = strike + 1;
  }
  return strike;
}

//숫자야구 게임 볼 판정 함수, 두개의 문자열을 받아 볼 갯수를 반환 
function CalBall(str1, str2){
  let ball = 0;
  for(let index=0; index<3; index++){
    if(str2.includes(str1[index]) && str1[index] != str2[index]) 
      ball = ball + 1;
  }
  return ball;
}

//숫자야구 게임 랜덤 숫자 생성 함수
function CreateRandomNum(){
  let randstr = "";
  while(randstr.length < 3){
    let randnum_each = MissionUtils.Random.pickNumberInRange(1, 9);
    randnum_each = randnum_each.toString();
    if(!randstr.includes(randnum_each))
      randstr = randstr + randnum_each;
  }
  return randstr;
}

const app = new App();
app.play();

module.exports = App;
