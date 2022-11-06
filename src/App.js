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
