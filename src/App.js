const MissionUtils = require("@woowacourse/mission-utils");
const Console = MissionUtils.Console;
const Random = MissionUtils.Random;

class App {
  endGame(e) {
    console.error(e);
    Console.close();
  }

  valueExceptionHandling(answer) {
    let answer_list = answer.split('');
    const temp_set = new Set(answer_list);
    answer_list = [...temp_set];

    if (String(Number(answer)) === 'NaN') throw '입력 값이 숫자가 아닙니다. 게임을 종료합니다.';
    else if (answer.length !== 3) throw '입력 값이 세 자리가 아닙니다. 게임을 종료합니다.';
    else if (answer_list.length !== 3) throw '입력 값에 중복된 수가 있습니다. 게임을 종료합니다.';
  }

  inputNumber(answer) {
    try { this.valueExceptionHandling(answer) } catch (e) { this.endGame(e) };
  }

  startGame(CORRECT_LIST) {
    Console.readLine('숫자를 입력해주세요 : ', (answer) => { this.inputNumber(answer) });
  }

  createRandomValue() {
    const TEMP_LIST = Random.pickUniqueNumbersInRange(1, 9, 3);
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
