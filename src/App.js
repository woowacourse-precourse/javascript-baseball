const MissionUtils = require("@woowacourse/mission-utils");
const Console = MissionUtils.Console;
const Random = MissionUtils.Random;

class App {
  inputNumber(answer) {
    // 입력한 값에 대한 처리 필요
  }

  startGame(CORRECT_LIST) {
    Console.readLine('숫자를 입력해주세요 : ', (answer) => {this.inputNumber(answer)});
  }

  createRandomValue() {
    const TEMP_LIST = Random.pickUniqueNumbersInRange(1, 9, 3)
    return TEMP_LIST;
  }

  openingOutput() {
    Console.print('숫자 야구 게임을 시작합니다.');
    Console.close();
  }

  play() {
    this.openingOutput();
    const CORRECT_LIST = this.createRandomValue();
    this.startGame(CORRECT_LIST);
  }
}

module.exports = App;
