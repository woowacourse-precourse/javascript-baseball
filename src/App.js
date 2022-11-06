const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    getComputerNumber();
  }
}

function getComputerNumber() {
  const computerNum = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
  getUserInputNumber(computerNum);
}

function getUserInputNumber(computerNum) {
  MissionUtils.Console.readLine('숫자를 입력해주세요: ', (answer) => {
    getStrikeAndBallCount(answer, computerNum);
  });
}

function getStrikeCount(userNum, computerNum) {
  return userNum.reduce((acc, num, i) => {
    if (num === computerNum[i]) {
      acc += 1;
    }
    return acc;
  }, 0);
}

function getBallCount(userNum, computerNum) {
  return userNum.reduce((acc, num, i) => {
    if (computerNum.includes(num) === true && num !== computerNum[i]) {
      acc += 1;
    }
    return acc;
  }, 0);
}

function getCount(userNum, computerNum) {
  const userNumArr = String(userNum).split('');
  const computerNumArr = computerNum.map(String);
  const strikeCount = getStrikeCount(userNumArr, computerNumArr);
  const ballCount = getBallCount(userNumArr, computerNumArr);

  return [strikeCount, ballCount];
}

module.exports = App;
