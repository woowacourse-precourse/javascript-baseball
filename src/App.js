const {Random , Console} = require("@woowacourse/mission-utils");
// class App {
//   play() {}
// }
console.log('숫자 야구 게임을 시작합니다.');

function setComputerNumber() {
  let computerNumber = [];
  while (computerNumber.length < 3) {
    const randomNumber = Random.pickNumberInRange(1,9);
    if(!computerNumber.includes(randomNumber)){
      computerNumber.push(randomNumber);
    }
  }
  console.log(computerNumber);
  return computerNumber;
}

function setUserNumber(computer) {
  let input;
  let strike = 0;
  let ball = 0;
  Console.readLine('숫자 3자리를 입력해주세요 : ', (num) => {
    input = num.toString().split("").map((str) => Number(str));
    for(let i = 0; i < input.length; i++){
      if(input[i] == computer[i]){
        strike++;
      }
      else if(input.includes(computer[i])){
        ball++;
      }
    }
    if(strike > 0 && ball > 0){
      console.log(`${strike} 스트라이크 ${ball} 볼`);
      Console.close();
      return false;
    } else if(strike == 0 && ball > 0){
      console.log(`${ball} 볼`);
      Console.close();
      return false;
    } else if(strike > 0 && ball == 0){
      console.log(`${strike} 스트라이크`);
      Console.close();
      return false;
    }  else if(strike == 3) {
      console.log('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
      Console.close();
      return true;
    } else {
      console.log('낫싱');
      Console.close();
      return false;
    }
  })
}

let computer = setComputerNumber();
let user = setUserNumber(computer);

// module.exports = App;
