const MissonUtils = require("@woowacourse/mission-utils");

function checkBallAndStrike(computerInputNumbers, userInputNumbers) {
  let ball = 0;
  let strike = 0;

  for (let i = 0; i < 3; i++) {
    const pitching = computerInputNumbers.indexOf(userInputNumbers[i]);

    if (pitching == i) {
      strike += 1;
    } else if (pitching !== -1) {
      ball += 1;
    }
  }

  if (strike === 3) {
    MissonUtils.Console.print(`${strike}스트라이크`);
    MissonUtils.Console.print(`${strike}개의 숫자를 모두 맞히셨습니다! 게임 종료`);
    return true;
  } else if (strike !== 0 && ball !== 0) {
    MissonUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
    return false;
  } else if (strike !== 0) {
    MissonUtils.Console.print(`${strike}스트라이크`);
    return false;
  } else if (ball !== 0) {
    MissonUtils.Console.print(`${ball}볼`);
    return false;
  } else if (strike === 0 && ball === 0) {
    MissonUtils.Console.print('낫싱');
    return false;
  }
}

module.exports = checkBallAndStrike;
