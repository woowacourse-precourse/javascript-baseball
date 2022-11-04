const MissionUtils = require('@woowacourse/mission-utils');

const GAME_START_MSG = '숫자 야구 게임을 시작합니다.';
const NUM_INPUT_MSG = '숫자를 입력해주세요 : ';

class App {
  play() {
    MissionUtils.Console.print(GAME_START_MSG);
    this.getPlayerInput();
  }

  getPlayerInput() {
    MissionUtils.Console.readLine(NUM_INPUT_MSG, (line) => {
      return line;
    });
  }

  generateAnswer() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
  }

  constructor() {
    this.answer = this.generateAnswer();
  }
}

module.exports = App;

const app = new App();
app.play();
