const { Console } = require("@woowacourse/mission-utils");
const input = require("./util/input");

class GameManager {
  startGame() {
    Console.print("숫자 야구 게임을 시작합니다.");
  }

  async restartOrEnd() {
    await input("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n");
  }
}

module.exports = GameManager;
