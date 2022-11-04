const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    PrintGameStartPhrase();

    const computerNumber = makeComputerNumber();


  }
}

// 기능 1
function PrintGameStartPhrase() {
  MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
}

// 기능 2
function makeComputerNumber() {
  const computerNumberList = [];

  while (computerNumberList.length < 3) {
    const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);

    if (!(computerNumberList.includes(randomNumber))) {
      computerNumberList.push(randomNumber);
    }
  }

  return computerNumberList.join("");
}


const baseballGame = new App();
baseballGame.play();

module.exports = App;