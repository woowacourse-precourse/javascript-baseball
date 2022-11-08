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

    function exitGame() {
      compareCount();
      if (countStrike === 3) {
        Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
      }
    }

    function newgameOrQuit() {
      if (this.exitGame()) {
        const userNewgameOrQuit = Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.', (newOrQuit) => { 
          newOrQuit = newOrquit;
        });
      }
      if (newOrQuit === 2) {
        Console.close();
      } return play();
    }

    function exception() {
      if (userNum.length < 3 || typeof(userNum[0] || userNum[1] || userNum[2]) !== "number" || (userNum[0] !== userNum[1] && userNum[1] !== userNum[2] && userNum[2] !== userNum[0])) {
        throw new Error("잘못된 값 입력") && Console.close();
      } 
    }
  }
}

module.exports = App;
