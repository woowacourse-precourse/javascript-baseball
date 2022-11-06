const { Console } = require("@woowacourse/mission-utils");
const { Random } = require("@woowacourse/mission-utils");

let computerNum = [];

function play() {
  Console.print("숫자 야구 게임을 시작합니다.");
  computerNum = MakeNum();
  proceedGame(computerNum);
}

function MakeNum() {
  const randomNumber = [];
  while (randomNumber.length < 3) {
    const number = Random.pickNumberInRange(1, 9);
    if (!randomNumber.includes(number.toString())) {
      randomNumber.push(number.toString());
    }
  }
  return randomNumber;
}

function isvalidation(userNum) {
  return true;
  //값에 0을 포함하는지
  //입력받은 데이터값에 문자가 포함되어있지 않은지
  //number_max가 3인지
  //중복된숫자는 없는지
}

      }
      }
  }

class App {
  start() {
    play();
  }
}

const baseBallGame = new App();
baseBallGame.start();
module.exports = App;
