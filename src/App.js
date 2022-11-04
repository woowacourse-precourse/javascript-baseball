const { Random, Console } = require("@woowacourse/mission-utils");
// class App {
//   play() {}
// }
console.log('숫자 야구 게임을 시작합니다.');

const setComputerNumber = () {
  let computerNumber = [];
  while (computerNumber.length < 3) {
    const randomNumber = Random.pickNumberInRange(1, 9);
    if (!computerNumber.includes(randomNumber)) {
      computerNumber.push(randomNumber);
    }
  }
  console.log(computerNumber);
  return computerNumber;
}

const setUserNumber = (computer) => {
  let input;
  let strike = 0;
  let ball = 0;
  Console.readLine('숫자 3자리를 입력해주세요 : ', (num) => {
    input = num.toString().split("").map((str) => Number(str));
    checkNumber(input, computer);
  })
}

const checkNumber = (input, computer) => {
  for (let i = 0; i < input.length; i++) {
    if (input[i] == computer[i]) {
      strike++;
    }
    else if (input.includes(computer[i])) {
      ball++;
    }
  }
  if(strike < 3){
    printCount(strike, ball);
    setUserNumber(computer);
  }
  if(strike == 3){
    printCount(strike, ball);
    gameClear();
  }
}

const printCount = (strike, ball) => {
  if (strike > 0 && ball > 0) {
    Console.print(`${strike} 스트라이크 ${ball} 볼`);
  } else if (strike === 0 && ball > 0) {
    Console.print(`${ball} 볼`);
  } else if (strike > 0 && ball === 0) {
    Console.print(`${strike} 스트라이크`);
  } else {
    Console.print('낫싱');
  }
}

const gameClear = () => {
  Console.readLine('3개의 숫자를 모두 맞히셨습니다! 게임 종료 \n 게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. \n', (input) => {
    if(input == 1){
      reStart();
    }
    if(input == 2){
      closeGame();
    }
  })
}

const reStart = () => {

}

const closeGame = () => {
  
}

let computer = setComputerNumber();
let user = setUserNumber(computer);

// module.exports = App;
