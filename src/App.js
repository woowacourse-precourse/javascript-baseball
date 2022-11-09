const { Console } = require("@woowacourse/mission-utils");

const Attacker = require("./Components/Attacker/Attacker");
const AutomaticBallGenerator = require("./Components/AutomaticBallGenerator/AutomaticBallGenerator");
const Defender = require("./Components/Defender/Defender");
const ManualBallGenerator = require("./Components/ManualBallGenerator/ManualBallGenerator");
const BaseballGame = require("./Components/BaseballGame/BaseballGame");

class App {
  play() {
    Console.print("숫자 야구 게임을 시작합니다.");

    const ATTACKER = new Attacker(new ManualBallGenerator());
    const DEFENDER = new Defender(new AutomaticBallGenerator());
    const BASEBALL_GAME = new BaseballGame(ATTACKER, DEFENDER);

    BASEBALL_GAME.start();

    Console.readLine(
      "3개의 숫자를 모두 맞히셨습니다! 게임 종료\n게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
      this.select.bind(this)
    );
  }

  select(input) {
    if (input === "1") return this.play();

    return Console.print("게임 종료");
  }
}

new App().play();

module.exports = App;
