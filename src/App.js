const MissionUtils = require("@woowacourse/mission-utils");
// import { init } from './game/init';
const init = require('./game/init');

class App {

  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    init();
  }

}

const baseballGame = new App();
baseballGame.play();

module.exports = App;
