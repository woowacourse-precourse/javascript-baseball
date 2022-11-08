function starGame() {
  console.log("숫자 야구 게임을 시작합니다.");
}

function makeRandomNum() {
  let ranNumArr = [];
  let ranNum = 0;
  for (let i = 0; i < 3; i++) {
    ranNumArr.push(Math.floor(Math.random()*9+1));
    if (ranNumArr[i] == ranNumArr[i-1] || ranNumArr[i] == ranNumArr[i-2]) {
      ranNumArr.pop();
      i--;
    }
  }
  ranNum = ranNumArr.map(Number).join('');
  return ranNum;
}

function isItValid(inputNum) {
  let inputNumArr = [];
  inputNumArr = inputNum.toString().trim().split('').map(Number);
  if (inputNumArr.length != 3) {
    console.log("유효한 숫자가 아닙니다. 게임을 종료합니다.");
    process.exit();
  }
  for (let i = 0; i < 3; i++) {
    if (inputNumArr[i] > 9 || inputNumArr[i] < 1) {
      console.log("유효한 숫자가 아닙니다. 게임을 종료합니다.");
      process.exit();
    }
    if (inputNumArr[i] == inputNumArr[i-1] || inputNumArr[i] == inputNumArr[i-2]) {
      console.log("유효한 숫자가 아닙니다. 게임을 종료합니다.");
      process.exit();
    }
  }
}

let count = 0;

function isItRight(computerNum, inputNum) {
  if (computerNum == inputNum) {
    console.log("3스트라이크");
    console.log("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    console.log("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요");
    count++;
  }

  let ballCount = 0;
  let strikeCount = 0;
  let information = [];
  let computerNumArr = computerNum.toString().trim().split('').map(Number);
  let inputNumArr = inputNum.toString().trim().split('').map(Number);
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (computerNumArr[i].includes(inputNumArr[j])) {
        ballCount++;
      }
    }
  }
  for (let i = 0; i < 3; i++) {
    if (computerNumArr[i].includes(inputNumArr[i])) {
      strikeCount++;
    }
  }
  if (ballCount > 0) {
    information.push(`${ballCount}볼`);
  }
  if (strikeCount > 0) {
    information.push(`${strikeCount}스트라이크`);
  }
  information = information.join(' ');
  console.log(information);
}

starGame();
let computerNum = makeRandomNum();
let inputNum = 0;
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

  rl.question("숫자를 입력해주세요 : ", (input) => {
  inputNum = input;
  isItValid(inputNum);
  isItRight(computerNum, inputNum);
  rl.close();
});

//module.exports = App;