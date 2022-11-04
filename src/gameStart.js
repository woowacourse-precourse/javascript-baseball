const { Console, Random } = require('@woowacourse/mission-utils');

function generateRandomNumbers() {
  const generatedRandomNumbers = Random.pickUniqueNumbersInRange(1, 9, 3);
  return generatedRandomNumbers;
}

function inputUserNumbers() {
  return new Promise((resolve) => {
    Console.readLine('숫자를 입력해주세요 : ', (input) => {
      resolve(input);
    });
  });
}

async function gameStart() {
  Console.print('숫자 야구 게임을 시작합니다.');
  const computerRandomNumbers = generateRandomNumbers();
  const userRandomNumbers = await inputUserNumbers();
}
exports.gameStart = gameStart;
