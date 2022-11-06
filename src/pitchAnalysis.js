const { Console } = require('@woowacourse/mission-utils');

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

  printPitchResult(gameData);
}

exports.pitchAnalysis = pitchAnalysis;
