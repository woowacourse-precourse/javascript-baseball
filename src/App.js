const MissionUtils = require("@woowacourse/mission-utils");
const Console = MissionUtils.Console;
const Random = MissionUtils.Random;

class App {
  play() {
    Console.print('숫자 야구 게임을 시작합니다.');
        
    function randomNum() {
      let randomNum = Random.pickUniqueNumbersInRange(1, 10, 3);
    }

    function userNum() {
      let userNum = 
      Console.readLine("숫자를 입력해주세요 : ", (userNum) => {
        userNum = [...String(userNum)];
        exception();
      });
    }

    function compareCount() {
      this.generateNum.randomNum = randomNum;
      this.userNum.userNum = userNum;
      let countStrike = 0;
      let countBall = 0;
      for (let i=0; i<3; i++) {
        if (randomNum[i] === userNum[i]) {
          countStrike++;
        }
        if (randomNum[i] !== userNum[i] && randomNum[i] in userNum) {
          countBall++;
        }
        if (randomNum[i] !== userNum[i] && !(randomNum[i] in userNum)) {
          Console.print('낫싱');
        }
      }
    }

    function showStatus() {
      this.compareCount.countStrike = countStrike;
      this.compareCount.countBall = countBall;
      if (countStrike === true && countBall === true) {
        Console.print(`${countBall}볼 ${countStrike}스트라이크` );
      }
      if (countStrike === false && countBall === true) {
        Console.print(`${countBall}볼`);
      }
    }

  }
}

module.exports = App;
