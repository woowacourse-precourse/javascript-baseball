const MissionUtils = require('@woowacourse/mission-utils');
const exitOrRestart = require('./exitOrRestart');

const game = (userNum, computerNum) => {
  let ballCount = 0;
  let strikeCount = 0;

  for (let i = 0; i < computerNum.length; i++) {
    if (userNum.includes(computerNum[i])) {
      ballCount += 1;
    }
    if (userNum[i] === computerNum[i]) {
      strikeCount += 1;
    }
  }

  ballCount -= strikeCount;

  const ballMessage = ballCount !== 0 ? `${ballCount}볼` : '';
  const strikeMessage = strikeCount !== 0 ? `${strikeCount}스트라이크` : '';

  MissionUtils.Console.print(`${ballMessage} ${strikeMessage}`);

  if (strikeCount === 3) {
    return true;
  }
  return false;
};

module.exports = game;
