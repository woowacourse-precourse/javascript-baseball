const MissionUtils = require("@woowacourse/mission-utils");

let user;
let computer;
let isEndGame = true;
let result = true;
const game_start = "숫자 야구 게임을 시작합니다.";

class App {
  play() {
    MissionUtils.Console.print(game_start);
  }
}

module.exports = App;
