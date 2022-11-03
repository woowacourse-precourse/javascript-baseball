const MissionUtils = require("@woowacourse/mission-utils");
const Console = MissionUtils.Console;
const Random = MissionUtils.Random;

class App {
  play() {
    gameStartMessage();
    computersNumber();

    // playerNumber();
  }
}

function gameStartMessage() {
  Console.print("숫자 야구 게임을 시작합니다.");
}

function computersNumber() {
  let correctAnswer = new Set();
  while (correctAnswer.size < 3) {
    correctAnswer.add(Random.pickNumberInRange(1, 9));
  }
  correctAnswer = Array.from(correctAnswer);
  // Console.print(correctAnswer);
  return correctAnswer;
}

// function playerNumber() {
//   Console.readLine('숫자를 입력해주세요 : ', (number) => {
//     // console.log(`닉네임: ${answer}`);
//   });
// }

const app = new App();
app.play();


module.exports = App;
