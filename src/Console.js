const MissionUtils = require("@woowacourse/mission-utils");

class Console {
  static START = "숫자 야구 게임을 시작합니다.";
  static REQUEST_NUMBER = "숫자를 입력해주세요 : ";
  static END = "3개의 숫자를 모두 맞히셨습니다! 게임 종료";
  static AGAIN_OR_END =
    "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n";

  static readLine(message, callback) {
    MissionUtils.Console.readLine(message, callback);
  }

  static print(message) {
    MissionUtils.Console.print(message);
  }

  static close() {
    MissionUtils.Console.close();
  }
}

module.exports = Console;
