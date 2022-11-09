const { Console } = require("@woowacourse/mission-utils");

class BaseballGame {
  constructor(attacker, defender) {
    this.attacker = attacker;
    this.defender = defender;
    this.isInstalled = true;
  }

  start() {
    if (this.isInstalled) Console.print("숫자 야구 게임을 시작합니다.");
    this.isInstalled = false;

    const { attacker, defender } = this;
    defender.ready();
    attacker.throwTo(defender, this.afterGameEndCallback.bind(this));
  }

  afterGameEndCallback() {
    Console.readLine(
      "3개의 숫자를 모두 맞히셨습니다! 게임 종료\n게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
      this.select.bind(this)
    );
  }

  select(input) {
    if (input === "1") return this.start();

    if (input === "2") {
      Console.print("게임 종료");
    }
  }
}

module.exports = BaseballGame;
