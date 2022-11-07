const MissionUtils = require("@woowacourse/mission-utils");
const { Console, Random } = MissionUtils;

class App {
  play() { }
}

function printMessage(sentence) {
  return Console.print(sentence)
}

function generateAnswer() {
  let numsArr = [];
  while (numsArr.length < 3) {
    let num = Random.pickNumberInRange(1, 9);
    if (!numsArr.includes(num)) numsArr.push(num);
  }
  return numsArr.join('')
}

function throwError(input) {
  let inputArr = Array.from(String(input));
  if (inputArr.length !== 3) {
    throw new Error("3자리 숫자만 입력 가능합니다.")
  }
  if (input.includes(0)) {
    throw new Error("0은 포함될 수 없습니다.")
  }
  let inputSet = new Set(inputArr);
  if (inputSet.size < 3) {
    throw new Error("중복되지 않은 숫자 3개만 입력 가능합니다.")
  }
  if (input.replace(/[0-9]/g, '').length !== 0) {
    throw new Error("숫자만 입력 가능합니다.")
  }
}

class Umpire {
  constructor(num1, num2) {
    let num1Arr = Array.from(String(num1));
    let num2Arr = Array.from(String(num2));
    let unionSet = new Set(num1Arr.concat(num2Arr));
    let strikeNums = num1Arr.filter((x, i) => x === num2Arr[i]);
    let ballNums = num1Arr.filter((x, i) => x !== num2Arr[i] && num2Arr.includes(x));
    let miss = unionSet.size;
    this.strike = strikeNums.length;
    this.ball = ballNums.length;
    let decision;
    if (miss === 6) decision = '낫싱';
    if (this.strike === 3) decision = '3스트라이크';
    if (this.ball === 3) decision = '3볼';
    if (miss !== 6 && this.strike !== 3 && this.ball !== 3) decision = `${this.ball}볼 ${this.strike}스트라이크`;
    this.decision = decision;
  }
}

function winAndRestart() {
  printMessage('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
  Console.readLine('게임을 새로 시작하시려면 1, 종료하려면 2를 입력하세요.\n', (oneOrtwo) => {
    if (Number(oneOrtwo) === 1) new App().play();
    else if (Number(oneOrtwo) === 2) Console.close();
    else throw new Error('1 또는 2만 입력하세요.')
  })
}

function game(ansNum) {
  Console.readLine('숫자를 입력해주세요 : ', input => {
    throwError(input);
    let umpire = new Umpire(input, ansNum);
    let decision = umpire.decision;
    printMessage(decision);
    if (umpire.strike === 3) winAndRestart();
    else game(ansNum);
  })
}

module.exports = App;
