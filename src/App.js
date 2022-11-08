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

function progress(input) {
  user = input;
  Console.close();
  validateInput(user);
  score = getScore(cpu, user);
}

const endGame = () => {};
const makeTargetNumber = () => {
  return Random.pickUniqueNumbersInRange(1, 9, 3);
};

const validateInput = (input) => {
  return validateNumber(input);
};
const validateNumber = (input) => {
  if (!userInputRegEx.test(input)) {
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
  if (score.strike === 3) {
    Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    gameFlag = !gameFlag;
  } else {
    Console.print(`${score.ball}볼 ${score.strike}스트라이크`);
    processGame();
  }
};
let cpu = "";
