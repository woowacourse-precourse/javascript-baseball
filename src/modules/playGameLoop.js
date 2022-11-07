const { Console, Random } = require("@woowacourse/mission-utils");
const { MESSAGE, GAME } = require("./constants");

const makeRandomNumber = () => {
  const randomNumber = [];
  while (randomNumber.length < GAME.LENGTH) {
    const number = Random.pickNumberInRange(GAME.START, GAME.LAST);
    if (!randomNumber.includes(number)) {
      randomNumber.push(number);
    }
  }
  return randomNumber;
}

const getUsersPrediction = (randomNumber) => {
  Console.readLine(MESSAGE.GAME_QUESTION, (prediction) => {
    console.log(prediction);
    if (!validateThreeFigures(prediction)) {
      throw MESSAGE.INPUT_INVALID;
    }
    const convertedNumber = prediction.split('').map(Number);
    console.log(convertedNumber);
    if (isRightAnswer(randomNumber, convertedNumber)) {
      showCorrectMessage();
      getUsersNextAction();
    } else if (isNothing(randomNumber, convertedNumber)) {
      showNothingMessage();
      getUsersPrediction(randomNumber);
    } else {
      const [ballCount, strikeCount] = calculateCount(randomNumber, convertedNumber);
      showCountMessage(ballCount, strikeCount);
      getUsersPrediction(randomNumber);
    }
  })
}

const isRightAnswer = (randomNumber, userInput) => {
  return randomNumber.join('') === userInput.join('');
}

const isNothing = (randomNumber, userInput) => {
  const union = new Set([...randomNumber, ...userInput]);
  return union.size === 2 * GAME.LENGTH;
}

const calculateCount = (randomNumber, userInput) => {
  let ballCount = 0;
  let strikeCount = 0;
  randomNumber.forEach((number, index) => {
    if (userInput.includes(number) && index !== userInput.indexOf(number)) {
      ballCount++;
    } else if(userInput[index] === number) {
      strikeCount++;
    }
  });
  return [ballCount, strikeCount];
}

const getUsersNextAction = () => {
  Console.readLine(MESSAGE.END_QUESTION, (userInput) => {
    if (!validateNextAction(userInput)) {
      throw MESSAGE.INPUT_INVALID
    } else if (userInput === GAME.RESTART) {
      const randomNumber = makeRandomNumber();
      console.log(randomNumber)
      getUsersPrediction(randomNumber);
    } else if (userInput === GAME.QUIT) {
      Console.close();
    }
  })
}

module.exports = {
  makeRandomNumber,
  getUsersPrediction,
  isRightAnswer,
  isNothing,
  calculateCount,
  getUsersNextAction
};

const { validateThreeFigures, validateNextAction } = require("./validation");
const { showCountMessage, showCorrectMessage, showNothingMessage } = require("./showMessage");
