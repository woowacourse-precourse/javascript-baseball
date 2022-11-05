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

function getStrikeAndBallCount(userNum, computerNum) {
  const count = {
    strike: 0,
    ball: 0,
  };
  const userNumArr = String(userNum).split('');
  const computerNumArr = computerNum.map(String);

  userNumArr.forEach((ele) => {
    if (computerNumArr.includes(ele) === true) {
      if (computerNumArr.indexOf(ele) === userNumArr.indexOf(ele)) {
        count.strike += 1;
      } else {
        count.ball += 1;
      }
    }
  });

  getResult(count, computerNum);
}

module.exports = App;
