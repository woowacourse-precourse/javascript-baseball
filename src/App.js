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

module.exports = App;
