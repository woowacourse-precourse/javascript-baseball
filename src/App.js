const MissionUtils = require('@woowacourse/mission-utils');
const { Console, Random } = MissionUtils;

class App {
  play() {
    Console.print('숫자 야구 게임을 시작합니다.');
    startGame();
  }
}

const startGame = () => {
  let randomNumberArray = [];

  for (let i = 0; i < 3; i++) {
    let randomNumber = Random.pickNumberInRange(1, 9);
    if (!randomNumberArray.includes(randomNumber))
      randomNumberArray.push(randomNumber);
  }

  guessNumber(randomNumberArray);
};

const guessNumber = randomNumberArray => {
  Console.readLine('숫자를 입력해주세요 : ', userInputNumber => {
    userInputNumberArray = convertNumberToNumberArray(userInputNumber);

    if (isValidNumber(userInputNumber, userInputNumberArray)) {
      showAnswer(randomNumberArray, userInputNumberArray);
    } else {
      throw new Error(
        '1부터 9까지 서로 다른 수로 이루어진 3자리의 수를 입력해주세요.'
      );
    }
  });
};

const convertNumberToNumberArray = number => {
  let tempNumberArray = [];

  while (number > 0) {
    tempNumberArray.push(number % 10);
    number = Math.floor(number / 10);
  }

  const numberArray = [...tempNumberArray.reverse()];

  return numberArray;
};

const isValidNumber = (userInputNumber, userInputNumberArray) => {
  if (isNaN(Number(userInputNumber))) return false;
  if (userInputNumberArray.length !== 3) return false;
  if (userInputNumberArray[0] === userInputNumberArray[1]) return false;
  if (userInputNumberArray[0] === userInputNumberArray[2]) return false;
  if (userInputNumberArray[1] === userInputNumberArray[2]) return false;

  return true;
};

const showAnswer = (randomNumberArray, userInputNumberArray) => {
  if (
    randomNumberArray.every(
      (randomNumber, index) => randomNumber === userInputNumberArray[index]
    )
  ) {
    Console.print('3스트라이크');
    Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');

    restartGame();
  } else {
    showHint(randomNumberArray, userInputNumberArray);
    guessNumber(randomNumberArray);
  }
};

const showHint = (randomNumberArray, userInputNumberArray) => {
  let strikeCount = 0;
  let ballCount = 0;

  for (i = 0; i < randomNumberArray.length; i++) {
    if (randomNumberArray[i] === userInputNumberArray[i]) strikeCount++;
    else if (randomNumberArray.includes(userInputNumberArray[i])) ballCount++;
  }

  let ballHint = '';
  let strikeHint = '';

  if (ballCount > 0) ballHint = `${ballCount}볼`;
  if (strikeCount > 0) strikeHint = `${strikeCount}스트라이크`;
  if (strikeCount === 0 && ballCount === 0) {
    return Console.print('낫싱');
  } else if (ballCount > 0 && strikeCount > 0) {
    return Console.print(`${ballHint} ${strikeHint}`);
  } else {
    return Console.print(`${ballHint}${strikeHint}`);
  }
};

const restartGame = () => {
  Console.print('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');

  Console.readLine('', userChoice => {
    if (Number(userChoice) === 1) {
      return startGame();
    } else if (Number(userChoice) === 2) {
      return endGame();
    } else {
      throw new Error('유효하지 않은 입력값입니다.');
    }
  });
};

const endGame = () => {
  Console.close();
};

module.exports = App;
