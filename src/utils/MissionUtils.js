const MissionUtils = require("@woowacourse/mission-utils");
const {
  makeNumberToArray,
  useNumberToArray,
} = require("../hooks/useNumberToArray.js");
const {
  NOTTHING,
  STRIKE,
  BALL,
  GAME_END,
  REQUIRE_NUMBER,
  RETRY_OR_END,
  RETRY_VALUE,
  END_VALUE,
  START_NUMBER,
  END_NUMBER,
  MAX_CORRECT,
  MIN_CORRECT,
} = require("./Constants.js");
const { NUMBER_ONE_TO_NINE } = require("./RegExpress.js");

const setUserInput = (inputMessage, treatUserValueFunction) => {
  MissionUtils.Console.readLine(inputMessage, (userInput) => {
    treatUserValueFunction(userInput);
  });
};

const getUserNumber = (computer, question) => {
  MissionUtils.Console.readLine(question, (userInput) => {
    validateUserNumber(userInput);
    countStrikeAndBall(computer, userInput);
  });
};

const validateUserNumber = (userInput) => {
  const isBetweenOneToNine = validateOneToNine(userInput);
  const isCorrectLength = validateLength(userInput, 3);
  const isNotOverlapped = validateOverlapped(userInput);

  if (isBetweenOneToNine && isCorrectLength && isNotOverlapped) {
    return true;
  } else {
    throw new Error("에러 발생 후 종료");
  }
};

const validateLength = (target, setLength) => {
  let validLength = target.length === setLength;
  return validLength;
};

const validateOverlapped = (target) => {
  const setTarget = new Set(target);
  let validOverlapped = target.length === setTarget.size;
  return validOverlapped;
};

const validateOneToNine = (target) => {
  return NUMBER_ONE_TO_NINE.test(target);
};

const countStrikeAndBall = (computers, user) => {
  const users = useNumberToArray(user);

  let countStrike = 0;
  let countBall = 0;

  users.forEach((number, index) => {
    countStrike += isStrike(number, index, computers);
    countBall += isBall(number, index, computers);
  });
  console.log(countStrike, countBall);
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
  let userWin = countStrike === 3;
  return userWin;
};

const printMessage = (message) => {
  MissionUtils.Console.print(message);
};

const printGameResultMessage = (countStrike, countBall) => {
  let isUserWin = countStrike === MAX_CORRECT;
  let message = makeMessage(countStrike, countBall);
  printMessage(message);
};

const makeMessage = (countStrike, countBall) => {
  if (countStrike === 3) {
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
const playAgain = () => {
  const computerNumbers = createComputerNumber(START_NUMBER, END_NUMBER);
  getUserNumber(computerNumbers, REQUIRE_NUMBER);
};

const retryOrEnd = () => {
  MissionUtils.Console.readLine("", (userInput) => {
    if (userInput === RETRY_VALUE) {
      playAgain();
    } else if (userInput === END_VALUE) {
      MissionUtils.Console.close();
    } else {
      throw new Error("게임 종료");
    }
  });
};

module.exports = {
  getUserNumber,
  setUserInput,
  validateUserNumber,
  countStrikeAndBall,
  isUserWin,
  printGameResultMessage,
  printMessage,
};
