const Judge = require("./Judge");
const Opponent = require("./Opponent");
const MissionUtils = require("@woowacourse/mission-utils");
const { Console } = MissionUtils;

class App {
  play() {
    const opponent = new Opponent();
    const judge = new Judge();
    opponent.setAnswer();
    const opponentString = opponent.getAnswer();
    Console.print("숫자 야구 게임을 시작합니다.");
    judge.performOneGame(opponentString);
  }
}

module.exports = App;


const app = new App();

app.play();