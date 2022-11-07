const MissionUtils = require("@woowacourse/mission-utils");
const { NUMBER_ONE_TO_NINE } = require("./RegExpress.js");

const getComputerNumber = (start, end) => {
  const computer = [];
  while (computer.length < 3) {
    const number = pickNumberRange(start, end);
    const isSelected = isSelectedNumber(number, computer);
  }
  return computer;
};

const pickNumberRange = (start, end) => {
  const number = MissionUtils.Random.pickNumberInRange(start, end);
  return number;
};

const isSelectedNumber = (number, computer) => {
  if (!computer.includes(number)) {
    computer.push(number);
  }
};

const getUserNumber = (computer, question) => {
  MissionUtils.Console.readLine(question, (userInput) => {
    validateUserNumber(userInput);
    gamePlay(computer, userInput);
  });
};

const validateUserNumber = (userInput) => {
  const isOneToNine = validateOneToNine(userInput);
  const isCorrectLength = validateLength(userInput, 3);
  const isNotOverlapped = validateOverlapped(userInput);

  if (isOneToNine && isCorrectLength && isNotOverlapped) {
    return true;
  } else {
    console.log("에러 발생 후 종료");
  }
};

const validateLength = (target, setLength) => {
  if (target.length === setLength) {
    return true;
  }

  return false;
};

const validateOverlapped = (target) => {
  const setTarget = new Set(target);
  if (target.length === setTarget.size) {
    return true;
  }
  return false;
};

const validateOneToNine = (target) => {
  return NUMBER_ONE_TO_NINE.test(target);
};

const makeNumberToArray = (target) => {
  const arrayTarget = target.split("").map((item) => Number(item));
  return arrayTarget;
};

const gamePlay = (computers, user) => {
  const users = makeNumberToArray(user);

  let countStrike = 0;
  let countBall = 0;

  users.forEach((number, index) => {
    countStrike = isStrike(number, index, computers, countStrike);
    countBall = isBall(number, index, computers, countBall);
  });
  printGameResult(countStrike, countBall);
};

const isStrike = (number, index, computers, countStrike) => {
  if (number === computers[index]) {
    countStrike += 1;
  }
  return countStrike;
};
const isBall = (number, index, computers, countBall) => {
  if (number !== computers[index] && computers.includes(number)) {
    countBall += 1;
  }
  return countBall;
};

const printMessage = (message) => {
  MissionUtils.Console.print(message);
};

module.exports = { getComputerNumber, getUserNumber };
