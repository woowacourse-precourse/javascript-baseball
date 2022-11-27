const { Random, Console } = require('@woowacourse/mission-utils');
const { GAME_MESSAGE } = require('./static/GameMessage');
const { REG_EXP } = require('./static/RegularExpression');

class App {
  play() {
    let cpu = [];
    let user = '';
    let score = { ball: 0, strike: 0 };
    startGame();
    processGame(user, cpu);
  }
}

const startGame = () => {
  Console.print(GAME_MESSAGE.start);
  cpu = makeTargetNumber();
};
const makeTargetNumber = () => {
  const targetNumber = [];

  while (targetNumber.length < 3) {
    const randomNumber = Random.pickNumberInRange(1, 9);

    if (!targetNumber.includes(randomNumber)) {
      targetNumber.push(randomNumber);
    }
  }
  return targetNumber;
};

const processGame = () => {
  Console.readLine(GAME_MESSAGE.inputValue, input => {
    progress(input);
    noticeScore();
  });
};
const progress = input => {
  user = input;
  validateInput(REG_EXP.userInputRegEx, user);
  score = getScore(cpu, user);
};
const validateInput = (regEx, input) => {
  if (new Set(input.split('')).size > 3) {
    throw new Error('3자리의 중복되지 않는 숫자로 입력해주세요');
  }
  return validateNumber(regEx, input, GAME_MESSAGE.error_invalid_input);
};
const validateNumber = (regEx, input, message) => {
  if (!regEx.test(input)) {
    throw new Error(message);
  }
  return true;
};
const getScore = (cpu, user) => {
  const userNumber = user.split('');
  const score = defineScore(cpu, userNumber);
  return score;
};
const defineScore = (targetNumbers, inputNumbers) => {
  let score = { ball: 0, strike: 0 };
  for (let index = 0; index < inputNumbers.length; index++) {
    score = getJudge(targetNumbers, Number(inputNumbers[index]), index, score);
  }
  return score;
};
const getJudge = (targetNumbers, inputNumber, inputNumberIndex, score) => {
  if (targetNumbers.indexOf(inputNumber) === inputNumberIndex) {
    return { ...score, strike: score.strike + 1 };
  } else if (targetNumbers.indexOf(inputNumber) !== -1) {
    return { ...score, ball: score.ball + 1 };
  }
  return score;
};

const noticeScore = () => {
  const ball = score.ball;
  const strike = score.strike;
  if (score.strike === 3) {
    Console.print(GAME_MESSAGE.clear);
    considerRestart();
  } else if (score.ball === 0 && score.strike === 0) {
    Console.print(`낫싱`);
    processGame();
  } else if (score.ball !== 0 && score.strike === 0) {
    Console.print(`${ball}볼`);
    processGame();
  } else if (score.ball === 0 && score.strike !== 0) {
    Console.print(`${strike}스트라이크`);
    processGame();
  } else {
    Console.print(`${ball}볼 ${strike}스트라이크`);
    processGame();
  }
};

const considerRestart = () => {
  Console.readLine(GAME_MESSAGE.restart, input => {
    defineRestartGame(Number(input));
  });
};
const defineRestartGame = flag => {
  validateNumber(
    REG_EXP.restartRegEx,
    flag,
    GAME_MESSAGE.error_invalid_restart_input,
  );
  if (flag === 1) {
    cpu = makeTargetNumber();
    processGame();
  } else {
    Console.close();
  }
};
const app = new App();
app.play();
module.exports = App;
