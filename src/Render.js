const MissionUtils = require("@woowacourse/mission-utils");

class Render {
  constructor() {}

  startment() {
    MissionUtils.Console.print("게임을 시작합니다!⚾️");
  }

  getUser() {
    return new Promise((resolve, reject) => {
      MissionUtils.Console.readLine("숫자를 입력해주세요", (number) => {
        resolve(number);
      });
    });
  }

  result({ ballCount, strikeCount }) {
    if (strikeCount !== 3) {
      MissionUtils.Console.print(`${ballCount}볼 ${strikeCount}스트라이크`);
    }
    if (strikeCount === 3) {
      MissionUtils.Console.print(`3스트라이크
3개의 숫자를 모두 맞히셨습니다! 게임 종료`);
    }

    if (ballCount === 0 && strikeCount === 0) {
      MissionUtils.Console.print(`낫싱`);
    }
  }

  replayQnA() {
    return new Promise((resolve, reject) => {
      MissionUtils.Console.readLine(
        "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
        (number) => {
          resolve(number);
        }
      );
    });
  }
}
module.exports = Render;
