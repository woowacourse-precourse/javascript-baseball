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
  const userNumArr = String(userNum).split('');
  const computerNumArr = computerNum.map(String);
}

function getResult(count, computerNum) {
  const { strike, ball } = count;

  if (strike >= 2) {
    MissionUtils.Console.print(`${strike}스트라이크`);
    if (strike === 3) {
      askRestart();
    }
  } else if (strike === 1) {
    if (ball === 0) {
      MissionUtils.Console.print(`${strike}스트라이크`);
    } else {
      MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
    }
  } else if (strike === 0) {
    if (ball === 0) {
      MissionUtils.Console.print('낫싱');
    } else {
      MissionUtils.Console.print(`${ball}볼`);
    }
  }

  getUserInputNumber(computerNum);
}

module.exports = App;
