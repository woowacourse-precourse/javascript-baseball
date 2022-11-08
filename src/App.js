const REG_EXP = { userInputRegEx: /^[1-9]{3,3}$/ };
class App {
  play() {}
}

module.exports = App;
const startGame = () => {
  cpu = makeTargetNumber();
};
const processGame = () => {
  Console.readLine("숫자를 입력해주세요 : ", (input) => {
    progress(input);
    noticeScore();
  });
};
const startGame = () => {
  Console.print("숫자 야구 게임을 시작합니다.");
  cpu = makeTargetNumber();
};
const progress = (input) => {
  user = input;
  validateInput(REG_EXP.userInputRegEx, user);
  score = getScore(cpu, user);
}

const endGame = () => {};
const makeTargetNumber = () => {
  return Random.pickUniqueNumbersInRange(1, 9, 3);
};

const validateInput = (regEx, input) => {
  return validateNumber(regEx, input);
};
const validateNumber = (regEx, input) => {
  if (!regEx.test(input)) {
    throw new Error("3자리의 중복되지 않는 숫자로 입력해주세요");
  }
  if (new Set(input.split("")).size > 3) {
    throw new Error("3자리의 중복되지 않는 숫자로 입력해주세요");
  }
  return true;
};
const getScore = (cpu, user) => {
  const userNumber = user.split("");
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
    Console.print("3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료");
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
let cpu = "";
const considerRestart = () => {
  Console.readLine(
    "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
    (input) => {
      defineRestartGame(Number(input));
    }
  );
};
const defineRestartGame = (flag) => {
  if (flag === 1) {
    cpu = makeTargetNumber();
    processGame();
  } else {
    Console.close();
  }
};
