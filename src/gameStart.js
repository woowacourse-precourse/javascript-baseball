const { Console, Random } = require('@woowacourse/mission-utils');
const { validationNumbers } = require('./validation');

function generateRandomNumbers(gameData) {
  const generatedRandomNumbers = [];
  while (generatedRandomNumbers.length < 3) {
    const randomNumber = Random.pickNumberInRange(1, 9);
    if (!generatedRandomNumbers.includes(randomNumber)) {
      generatedRandomNumbers.push(randomNumber);
    }
  }
  gameData.setComputerRandomNumbers(generatedRandomNumbers);
  return gameData;
}

function pitchAnalysis(gameData, userNumbers, computerNumbers) {
  const notStrikeNumbers = userNumbers.filter(
    (userNumber, index) => computerNumbers[index] !== userNumber
  );
  const ballNumbers = notStrikeNumbers.filter((notStrikeNumber) =>
    computerNumbers.includes(notStrikeNumber)
  );
  const strike = 3 - notStrikeNumbers.length;
  const ball = ballNumbers.length;

  gameData.setBall(ball);
  gameData.setStrike(strike);
}

function printPitchResult(gameData) {
  const ball = gameData.getBall();
  const strike = gameData.getStrike();

  if (ball === 0 && strike === 0) {
    Console.print('낫싱');
    return;
  }
  if (ball === 0) {
    Console.print(`${strike}스트라이크`);
    if (strike === 3) {
      Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
      gameData.setThreeStrikeState(true);
    }
    return;
  }
  if (strike === 0) {
    Console.print(`${ball}볼`);
    return;
  }
  Console.print(`${ball}볼 ${strike}스트라이크`);
}

function gameStart(gameData) {
  Console.readLine('숫자를 입력해주세요 : ', (inputNumber) => {
    const computerRandomNumbers = gameData.getComputerRandomNumbers();
    const userRandomNumbers = inputNumber
      .split('')
      .map((userNumber) => parseInt(userNumber, 10));
    if (!validationNumbers(userRandomNumbers)) {
      throw new Error('잘못된 값을 입력했습니다.');
    }

    pitchAnalysis(gameData, userRandomNumbers, computerRandomNumbers);
    printPitchResult(gameData);
    if (!gameData.getThreeStrikeState()) {
      return gameStart(gameData);
    }

    Console.readLine(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
      (commandNumber) => {
        if (!(commandNumber === '1' || commandNumber === '2')) {
          throw new Error('잘못된 값을 입력했습니다.');
        }
        if (commandNumber === '1') {
          gameData.setThreeStrikeState(false);
          return gameStart(generateRandomNumbers(gameData));
        }
        Console.close();
      }
    );
  });
}

exports.generateRandomNumbers = generateRandomNumbers;
exports.gameStart = gameStart;
