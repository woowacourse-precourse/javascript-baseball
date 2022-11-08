const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.random_numbers = ''
    this.input_numbers = ''
  }

  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.random_numbers = CreateRandomNum();
    MissionUtils.Console.print(this.random_numbers);
    this.start();

  }

  start() {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (answer) => {
      Except(answer);
      // this.input_numbers = answer;
      // MissionUtils.Console.print(this.input_numbers);

    this.start();
    });
  }
}



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


function CalStrike(str1, str2){
  let strike = 0;
  for(let index=0; index<3; index++){
    if(str1[index] == str2[index])
    strike = strike + 1;
  }
  return strike;
}

function CalBall(str1, str2){
  let ball = 0;
  for(let index=0; index<3; index++){
    if(str2.includes(str1[index]))
    ball = ball + 1;
  }
  return ball;
}

//숫자야구 게임 랜덤 숫자 생성 함수
//input : None
//output : 중복되지 않는 3개의 숫자를 문자열 형태로 반환
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

// module.exports = App;
