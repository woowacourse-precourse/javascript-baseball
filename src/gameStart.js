const { Console, Random } = require('@woowacourse/mission-utils');
const { validationNumbers } = require('./validation');
const GameData = require('./GameData');

function generateRandomNumbers() {
  const generatedRandomNumbers = [];
  while (generatedRandomNumbers.length < 3) {
    const randomNumber = Random.pickNumberInRange(1, 9);
    if (!generatedRandomNumbers.includes(randomNumber)) {
      generatedRandomNumbers.push(randomNumber);
    }
  }
  return generatedRandomNumbers;
}

async function inputUserNumbers() {
  const userNumbers = await new Promise((resolve) => {
    Console.readLine('숫자를 입력해주세요 : ', (input) => {
      resolve(input);
    });
  });
  if (!validationNumbers(userNumbers.split(''))) {
    throw new Error('잘못된 값을 입력했습니다.');
  }
  return userNumbers.split('').map((userNumber) => parseInt(userNumber, 10));
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
      gameData.setThreeStrike(true);
    }
    return;
  }
  if (strike === 0) {
    Console.print(`${ball}볼`);
    return;
  }
  Console.print(`${ball}볼 ${strike}스트라이크`);
}

async function continueOrEndGame(gameData) {
  const inputNumber = await new Promise((resolve) => {
    Console.readLine(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
      (input) => {
        resolve(input);
      }
    );
  });
  if (inputNumber !== '1' && inputNumber !== '2') {
    throw new Error('잘못된 값을 입력했습니다.');
  }
  if (inputNumber === '2') {
    return gameData.setState(false);
  }
  return gameData.setThreeStrike(false);
}

async function gameStart() {
  Console.print('숫자 야구 게임을 시작합니다.');
  const gameData = new GameData();

  while (gameData.getState()) {
    const computerRandomNumbers = generateRandomNumbers();
    const userRandomNumbers = await inputUserNumbers();

    pitchAnalysis(gameData, userRandomNumbers, computerRandomNumbers);
    printPitchResult(gameData);

    if (gameData.getThreeStrike()) {
      await continueOrEndGame(gameData);
    }
  }
  Console.close();
}
exports.gameStart = gameStart;
