const MissionUtils = require("@woowacourse/mission-utils");

class App {
  async play() {
    PrintGameStartPhrase();

    const computerNumber = makeComputerNumber();
    const userNumber = await getUserNumber();
    
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

// 기능 3
function getUserNumber() {
  let userNumber;

  let promise = new Promise((resolve) => {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (input) => {
      resolve(input);
    });
  });

  userNumber = promise;

  return userNumber;
}




const baseballGame = new App();
baseballGame.play();

module.exports = App;