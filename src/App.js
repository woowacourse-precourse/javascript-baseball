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
    this.input_numbers = InputNumber();
    MissionUtils.Console.print(this.input_numbers);
  }
}

//숫자 입력 함수
//
// function InputNumber(){
//   let input_numbers;
  
//   MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (input_numbers) => {
//     console.log(`숫자: ${input_numbers}`);
//   });

// //throw new Error("숫자를 입력하세요");

//   return input_numbers;
// }


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
