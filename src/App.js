const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    let computer = [];
    computer = computer_randomnumber();

    let strike = 0;
    while(strike != 3){
      let user = ""
      user = user_inputnumber();

      if(user == 1){
        throw "is not three numbers";
      }

      if(user == 2){
        throw "is not number";
      }

      if(user == 3){
        throw "is not a number from 1 to 9";
      }

      let ball_strike_result = [0, 0];
      for(let i = 0; i < 3; i++){
        ball_strike_result[0] += ball_and_strike(computer, to_array(user), i)[0];
        ball_strike_result[1] += ball_and_strike(computer, to_array(user), i)[1];
      }

      strike = notthing(ball_strike_result);
    }
  }
}

function computer_randomnumber(){
  const COMPUTER_NUMBER = [];
  while(COMPUTER_NUMBER.length < 3) {
    //컴퓨터 숫자 범위 지정 (1 ~ 9)
    //MissionUtils.Random.pickNumberInRange 호출 할 때마다 ApplicationTest.js에서 randoms 배열의 값 하나씩 가져오기
    const COMPUTER_RANDOMNUMBER = MissionUtils.Random.pickNumberInRange(1, 9);
    if(!COMPUTER_NUMBER.includes(COMPUTER_RANDOMNUMBER)) {
      COMPUTER_NUMBER.push(COMPUTER_RANDOMNUMBER);
    }
  }
  return COMPUTER_NUMBER;
}

function user_inputnumber(){
  let userNumber;
  MissionUtils.Console.readLine("숫자를 입력해주세요 : ",(inputNumber) => {
    userNumber = inputNumber;
  })
  
  if(userNumber.length != 3) {
    return 1;
  }
  if(userNumber == String){
    return 2;
  }
  if(userNumber <= 0){
    return 3;
  }
  return userNumber;
}

function to_array(user_array){
  return user_array.split("");
}

function ball_and_strike(computer, to_array, number_of_digits){
  let ball_strike_count = [0, 0];

  for(let i = 0; i < to_array.length; i++){
    if(computer[number_of_digits] == to_array[i]){
      ball_strike_count = ball_strike_check(i, number_of_digits);
    }
  }
  return ball_strike_count;
}

function ball_strike_check(i, number_of_digits){
  ball = 0;
  strike = 0;

  if(i == number_of_digits) {
    strike++;
  } else {
    ball++;
  }
  return [ball, strike];
}

function notthing(ball_strike_result){
  if(ball_strike_result[0] == 0 && ball_strike_result[1] == 0) {
    MissionUtils.Console.print("낫싱");
    return ball_strike_result[1];
  }
  MissionUtils.Console.print(`${ball_strike_result[0]}볼 ${ball_strike_result[1]}스트라이크`);
  return ball_strike_result[1];;
}

module.exports = App;
