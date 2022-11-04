const { Console } = require("@woowacourse/mission-utils");
const input = require("./util/input");
const BaseballGame = require("./BaseballGame");

class GameManager {
  constructor() {
    this.game = new BaseballGame();
    this.restart = true;
  }

  async startGame() {
    Console.print("숫자 야구 게임을 시작합니다.");
    while (this.restart) {
      await this.game.playGame();
      await this.inputRestartOrEnd();
    }
  }

  async inputRestartOrEnd() {
    const SELECTEDNUMBER = Number(
      await input("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n")
    );

    if (SELECTEDNUMBER === 1) this.game = new BaseballGame();
    else if (SELECTEDNUMBER === 2) {
      this.restart = false;
      Console.close();
    } else throw new Error("1 또는 2만 입력해주세요.");
  }
}

module.exports = GameManager;
