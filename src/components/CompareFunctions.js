const gameConstant = require('./GameConstant');
const handleCorrectAnswer = require('./HandleCorrect');
const printAnswer = require('./GameResult');

const limitSize = gameConstant.LIMIT_NUMBER_SIZE;

const isCorrect = (answer, playerInput) => {
  return answer === playerInput;
};

const countStrikes = (number, index, answer) => {
  let strike = 0;
  if (number === answer[index]) {
    strike += 1;
  }
  return strike;
};

const getStrikes = (answer, inputArray) => {
  let strike = 0;
  inputArray.forEach((number, index) => {
    strike += countStrikes(number, index, answer);
  });
  return strike;
};

const createBallArray = (size, answer) => {
  const ballArray = new Array(size).fill(false);
  answer.split('').forEach(number => {
    ballArray[number] = true;
  });
  return ballArray;
};

const countBalls = (number, index, answer, ballArray) => {
  let ball = 0;
  if (number !== answer[index] && !!ballArray[number]) {
    ball += 1;
  }
  return ball;
};

const getBalls = (answer, inputArray) => {
  let ball = 0;
  const ballArray = createBallArray(limitSize, answer);
  inputArray.forEach((number, index) => {
    ball += countBalls(number, index, answer, ballArray);
  });
  return ball;
};

const getResult = (answer, playerInput) => {
  const inputArray = playerInput.split('');
  const strikes = getStrikes(answer, inputArray);
  const balls = getBalls(answer, inputArray);
  const result = { strike: +strikes, ball: +balls };
  return result;
};

const compareNumber = (answer, playerInput) => {
  if (isCorrect(answer, playerInput)) {
    handleCorrectAnswer(answer, playerInput);
    return;
  }
  const result = getResult(answer, playerInput);
  printAnswer(answer, result);
};

module.exports = compareNumber;
