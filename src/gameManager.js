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
    }
  }

  async restartOrEnd() {
    await input("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n");
  }
}

module.exports = GameManager;
