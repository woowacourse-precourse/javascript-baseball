const { Console, Random } = require('@woowacourse/mission-utils');
const { validationNumbers } = require('./validation');
const GameData = require('./GameData');

function generateRandomNumbers() {
  const generatedRandomNumbers = Random.pickUniqueNumbersInRange(1, 9, 3);
  return generatedRandomNumbers;
}

async function inputUserNumbers() {
  const inputResult = await new Promise((resolve) => {
    Console.readLine('숫자를 입력해주세요 : ', (input) => {
      resolve(input);
    });
  });
  if (!validationNumbers(inputResult.split(''))) {
    throw new Error('잘못된 값을 입력했습니다.');
  }
  return inputResult;
}

async function gameStart() {
  Console.print('숫자 야구 게임을 시작합니다.');
  const gameData = new GameData();
  while (gameData.getState()) {
    const computerRandomNumbers = generateRandomNumbers();
    const userRandomNumbers = await inputUserNumbers();
  }
}
exports.gameStart = gameStart;
