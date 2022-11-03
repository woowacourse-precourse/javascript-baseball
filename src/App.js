const MissionUtils = require("@woowacourse/mission-utils");

function gameStart() {
  MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
}

function userInput() {
  MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (number) => {
    console.log(number);
  });
}

class App {
  play() {
    gameStart();
    userInput();
  }
}

const app = new App();

app.play();

module.exports = App;
