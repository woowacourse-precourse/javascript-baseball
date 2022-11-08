const { Console, Random } = require('@woowacourse/mission-utils');

function randomNumber() {
  const COMPUTER = [];
  while (COMPUTER.length < 3) {
    const NUMBER = Random.pickNumberInRange(1, 9);
    if (!COMPUTER.includes(NUMBER)) {
      COMPUTER.push(NUMBER);
    }
  }
  return COMPUTER;
}

function inputVerification(USER_INPUT) {
  const ORGANIZED_DATA = USER_INPUT.filter(
    (data, index) => USER_INPUT.indexOf(data) === index
  );
  if (USER_INPUT.includes(0)) {
    throw new Error('1-9');
  }
  if (USER_INPUT.length !== 3) {
    throw new Error('3자리 입력');
  }
  if (USER_INPUT.includes(NaN)) {
    throw new Error('숫자만 입력');
  }
  if (ORGANIZED_DATA.length !== 3) {
    throw new Error('중복 ㄴㄴ');
  }
  return USER_INPUT;
}

function countStrike(USER_INPUT, computerAnswer) {
  let count = 0;
  computerAnswer.forEach((data, index) => {
    if (data === USER_INPUT[index]) {
      count += 1;
    }
  });
  return count;
}

function countBall(USER_INPUT, computerAnswer) {
  let count = 0;
  computerAnswer.forEach((data) => {
    if (USER_INPUT.includes(data)) {
      count += 1;
    }
  });
  return count;
}

function answerToInput(USER_INPUT, computerAnswer) {
  const STRIKE = countStrike(USER_INPUT, computerAnswer);
  const BALL = countBall(USER_INPUT, computerAnswer) - STRIKE;
  if (BALL === 0 && STRIKE === 0) {
    return '낫싱';
  }

  if (STRIKE === 0) {
    return `${BALL}볼`;
  }

  if (BALL === 0) {
    return `${STRIKE}스트라이크`;
  }

  if (STRIKE === 3) {
    return '3스트라이크';
  }

  return `${BALL}볼 ${STRIKE}스트라이크`;
}

function endGameJudgment(ANSWER_CHECK, computerAnswer) {
  if (ANSWER_CHECK === '3스트라이크') {
    Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    restartGame();
  } else {
    inputReadLine(computerAnswer);
  }
}

function inputReadLine(computerAnswer) {
  Console.readLine(`숫자를 입력해주세요 : `, (input) => {
    const USER_INPUT = input.split('').map((data) => data * 1);
    const INPUT_CHECK = inputVerification(USER_INPUT);
    const ANSWER_CHECK = answerToInput(INPUT_CHECK, computerAnswer);
    Console.print(ANSWER_CHECK);
    endGameJudgment(ANSWER_CHECK, computerAnswer);
  });
}

function restartGame() {
  Console.print('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요');
  Console.readLine('', (input) => restartCondition(input));
  /* 
    
  } */
}

function restartCondition(input) {
  if (input === '1') {
    const computerAnswer = randomNumber();
    inputReadLine(computerAnswer);
  }
  if (input === '2') {
    Console.print('게임 종료');
    Console.close();
  }
  if (input !== '1' && input !== '2') {
    throw new Error('1-2');
  }
}

class App {
  play() {
    Console.print('숫자 야구 게임을 시작합니다.');
    const computerAnswer = randomNumber();
    inputReadLine(computerAnswer);
  }
}

const test = new App();
test.play();

module.exports = App;
