const { Console, Random } = require("@woowacourse/mission-utils");

const makeRandomNumber = () => {
  const randomNumber = [];
  while (randomNumber.length < 3) {
    const number = Random.pickNumberInRange(1,9);
    if (!randomNumber.includes(number)) {
      randomNumber.push(number);
    }
  }
  return randomNumber;
}

const getUsersPrediction = (randomNumber) => {
  Console.readLine('숫자를 입력해주세요 : ', (prediction) => {
    console.log(prediction);
    if (!validateThreeFigures(prediction)) {
      throw '잘못된 값을 입력했습니다!';
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
  return union.size === 6;
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
  Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.', (userInput) => {
    if (!validateNextAction(userInput)) {
      throw '잘못된 값을 입력했습니다!'
    } else if (userInput === '1') {
      const randomNumber = makeRandomNumber();
      console.log(randomNumber)
      getUsersPrediction(randomNumber);
    } else if (userInput === '2') {
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
