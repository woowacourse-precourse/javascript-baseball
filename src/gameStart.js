const { Console, Random } = require('@woowacourse/mission-utils');

function generateRandomNumbers() {
  const generatedRandomNumbers = Random.pickUniqueNumbersInRange(1, 9, 3);
  return generatedRandomNumbers;
}

function gameStart() {
  Console.print('숫자 야구 게임을 시작합니다.');
  const computerRandomNumbers = generateRandomNumbers();
}

exports.gameStart = gameStart;
