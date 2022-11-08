const { Random, Console } = require("@woowacourse/mission-utils");

Console.print('숫자 야구 게임을 시작합니다.');

const setComputerNumber = () => {
   computerNumber = [];
  while (computerNumber.length < 3) {
    const randomNumber = Random.pickNumberInRange(1, 9);
    if (!computerNumber.includes(randomNumber)) {
      computerNumber.push(randomNumber);
    }
  }
  return computerNumber;
}

const setUserNumber = (computer) => {
  let input;
  Console.readLine('숫자를 입력해주세요 : ', (num) => {
    input = num.toString().split("").map((str) => Number(str));
    errorCheck(input);
    checkNumber(input, computer);
  })
}

const errorCheck = (input) => {
  const stringInput = input.join("");
  const numReg = /^[1-9]+$/;
  const setNumber = new Set(input);
  if(!numReg.test(stringInput)) throw "1~9까지인 숫자만 입력 가능합니다.";
  if(input.length !== 3) throw "숫자는 3자리만 입력 가능합니다";
  if(setNumber.size != input.length) throw "중복된 숫자가 있습니다";
}

const checkNumber = (input, computer) => {
  let strike = 0;
  let ball = 0;
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
    Console.print(`${ball}볼 ${strike}스트라이크`);
  } else if (strike === 0 && ball > 0) {
    Console.print(`${ball} 볼`);
  } else if (strike > 0 && ball === 0) {
    Console.print(`${strike} 스트라이크`);
  } else {
    Console.print('낫싱');
  }
}

const gameClear = () => {
  Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
  Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n', (input) => {
    if (!(input === "1" || input === "2")) throw "잘못된 입력입니다.";
    if (input === "1"){
      app.play();
    } else Console.close();
  })
}

class App {
  play() {

    let answer = setComputerNumber();

    setUserNumber(answer);

    return;
  }
}

const app = new App();
app.play();

module.exports = App;