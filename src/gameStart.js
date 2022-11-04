const { Console, Random } = require('@woowacourse/mission-utils');
const { validationNumbers } = require('./validation');
const GameData = require('./GameData');

function generateRandomNumbers() {
  const generatedRandomNumbers = Random.pickUniqueNumbersInRange(1, 9, 3);
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
  const strike = userNumbers.filter(
    (userNumber, index) => computerNumbers[index] === userNumber
  ).length;
  const ball = 3 - strike;

  gameData.setBall(ball);
  gameData.setStrike(strike);
}

function printPitchResult(gameData) {
  const ball = gameData.getBall();
  const strike = gameData.getStrike();

  if (ball === 3) {
    Console.print('낫싱');
    return;
  }
  if (strike === 3) {
    Console.print('3스트라이크');
    Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    gameData.setState(false);
    return;
  }
  Console.print(`${ball}볼 ${strike}스트라이크`);
}

async function gameStart() {
  Console.print('숫자 야구 게임을 시작합니다.');
  const gameData = new GameData();

  while (gameData.getState()) {
    const computerRandomNumbers = generateRandomNumbers();
    const userRandomNumbers = await inputUserNumbers();
    pitchAnalysis(gameData, userRandomNumbers, computerRandomNumbers);
    printPitchResult(gameData);
  }
}
exports.gameStart = gameStart;
