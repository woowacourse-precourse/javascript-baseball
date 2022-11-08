const { useNumberToArray } = require("../hooks/useNumberToArray");
const {
  MAX_CORRECT,
  STRIKE,
  MIN_CORRECT,
  BALL,
  NOTTHING,
} = require("../utils/Constants");
const { printMessage } = require("../utils/MissionUtils");

const countStrikeAndBall = (computers, user) => {
  const users = useNumberToArray(user);

  let countStrike = 0;
  let countBall = 0;

  users.forEach((number, index) => {
    countStrike += isStrike(number, index, computers);
    countBall += isBall(number, index, computers);
  });
  return { countStrike: countStrike, countBall: countBall };
};

const isStrike = (number, index, computers) => {
  if (number === computers[index]) {
    return 1;
  }
  return 0;
};
const isBall = (number, index, computers) => {
  if (number !== computers[index] && computers.includes(number)) {
    return 1;
  }
  return 0;
};

const isUserWin = (countStrike) => {
  let userWin = countStrike === MAX_CORRECT;
  return userWin;
};

const printGameResultMessage = (countStrike, countBall) => {
  let isUserWin = countStrike === MAX_CORRECT;
  let message = makeMessage(countStrike, countBall);
  printMessage(message);
};

const makeMessage = (countStrike, countBall) => {
  if (countStrike === MAX_CORRECT) {
    return countStrike + STRIKE;
  }

  let message = "";
  if (countBall > MIN_CORRECT) {
    message += countBall + BALL + " ";
  }
  if (countStrike > MIN_CORRECT) {
    message += countStrike + STRIKE;
  }
  if (countStrike === MIN_CORRECT && countBall === MIN_CORRECT) {
    message = NOTTHING;
  }

  return message.trim();
};

module.exports = { countStrikeAndBall, isUserWin, printGameResultMessage };
