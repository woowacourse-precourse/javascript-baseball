const MissionUtils = require("@woowacourse/mission-utils");

// 클래스내에서는 안되는구나...
// 클래스에서 this로 자신 객체 전달 가능
class App {
  answer = 0;
  userAnswer = 0;
  constructor() {
    this.answer = MissionUtils.Random.pickNumberInRange(1, 9);
  }

  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    Game(this);
  }
}

function Game(user) {
  input(user.userAnswer);
}

const input = (userAnswer) => {
  MissionUtils.Console.readLine("숫자를 입력해주세요 :", (answer) => {
    userAnswer = answer;
  });
};
const endGame = () => {
  process.exit(1);
};

const app = new App();
app.play();

module.exports = App;
