const MissionUtils = require('@woowacourse/mission-utils');

class App {
  play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    let answer = createAnswer();
    inputNumber(answer);
  }
}

function createAnswer() {
  let answer = [];
  while (answer.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!answer.includes(number)) {
      answer.push(number);
    }
  }
  return answer;
}

function inputNumber(answer) {
  MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (input) => {
    const inputNum = input.split('').map(Number);
    const validInput = validNumber(inputNum);
    const answercheck = answerCheck(validInput, answer);
    MissionUtils.Console.print(answercheck);
    scoreCheck(answercheck, answer);
  });
}

function validNumber(inputNum) {
  if (inputNum.includes('0')) throw new Error('0을 제외한 숫자를 입력해주세요.');
  if (new Set(inputNum).size !== 3) throw new Error('중복되지 않게 입력해주세요.');
  if (inputNum.map(Number).includes(NaN)) throw new Error('숫자만 입력해주세요.');
  if (inputNum.length !== 3) throw new Error('3자리 숫자를 입력해주세요.');

  return inputNum;
}

function checkBall(inputNum, answer) {
  let cnt = 0;
  answer.forEach((num) => {
    if (inputNum.includes(num)) {
      cnt++;
    }
  });

  return cnt;
}

function checkStrike(inputNum, answer) {
  let cnt = 0;
  answer.forEach((num, i) => {
    if (inputNum[i] === num) {
      cnt++;
    }
  });

  return cnt;
}

function answerCheck(inputNum, answer) {
  const strike = checkStrike(inputNum, answer);
  const ball = checkBall(inputNum, answer) - strike;

  if (strike + ball === 0) return '낫싱';
  if (strike === 3) return '3스트라이크';
  if (strike === 0) return `${ball}볼`;
  if (ball === 0) return `${strike}스트라이크`;
  if (true) return `${ball}볼 ${strike}스트라이크`;
}

function scoreCheck(answercheck, answer) {
  if (answercheck === '3스트라이크') {
    MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    restartGame();
  } else {
    inputNumber(answer);
  }
}

function restartGame() {
  MissionUtils.Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n', (input) => gameStartState(input));
}

function gameStartState(input) {
  if (input === '1') {
    let answer = createAnswer();
    inputNumber(answer);
  } else if (input === '2') {
    MissionUtils.Console.close();
  } else {
    throw new Error('1 또는 2를 입력해주세요.');
  }
}

module.exports = App;

const test = new App();
test.play();
