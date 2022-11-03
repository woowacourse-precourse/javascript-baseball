const {Random , Console} = require("@woowacourse/mission-utils");

class App {
  play() {}
}

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
    Console.close();
  })
  return input;
}

let computer = setComputerNumber();
let user = setUserNumber(computer);

module.exports = App;
