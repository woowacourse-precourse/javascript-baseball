const MissionUtils = require("@woowacourse/mission-utils");
const Console = MissionUtils.Console;
const Random = MissionUtils.Random;

class App {
  endGame(e) {
    if (e) console.error(e);
    Console.close();
  }

  answerException(answer) {
    if (answer !== '1' && answer !== '2') throw '입력 값이 1혹은 2가 아닙니다. 게임을 종료합니다.';
    if (answer === '2') this.endGame();
    return true;
  }

  askingRestart() {
    let answer_of_restart;

    Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    Console.readLine('숫자를 입력해주세요 : ', (answer) => { try { this.answerException(answer) } catch (e) { this.endGame(e) }; });
  }

  printResult(result_text) {
    if (result_text === ``) return '낫싱'
    return result_text;
  }

  checkCount(result_score) {
    let temp_output_string = ``;

    if (result_score.ball !== 0) temp_output_string += `${result_score.ball}볼`;
    if (result_score.strike !== 0 && temp_output_string === ``) temp_output_string += `${result_score.strike}스트라이크`;
    else if (result_score.strike !== 0) temp_output_string += ` ${result_score.strike}스트라이크`;

    return temp_output_string;
  }

  checkAnswer(answer, number, index, scoreCount) {
    let ball_count = 0;
    let strike_count = 0;
    let temp_score_count = { ...scoreCount };

    answer.split('').forEach((answer_number, idx) => {
      if (number === answer_number && idx === index) return strike_count++;
      if (number === answer_number) return ball_count++;
    })
    temp_score_count = { ball: temp_score_count.ball + ball_count, strike: temp_score_count.strike + strike_count };
    return temp_score_count;
  }

  checkScore(answer, CORRECT_LIST) {
    let scoreCount = { ball: 0, strike: 0 };
    CORRECT_LIST.forEach((number, index) => { scoreCount = this.checkAnswer(answer, number, index, scoreCount) });

    return scoreCount;
  }

  valueExceptionHandling(answer) {
    let answer_list = answer.split('');
    const temp_set = new Set(answer_list);
    answer_list = [...temp_set];

    if (String(Number(answer)) === 'NaN') throw '입력 값이 숫자가 아닙니다. 게임을 종료합니다.';
    else if (answer.length !== 3) throw '입력 값이 세 자리가 아닙니다. 게임을 종료합니다.';
    else if (answer_list.length !== 3) throw '입력 값에 중복된 수가 있습니다. 게임을 종료합니다.';
  }

  inputNumber(answer, CORRECT_LIST) {
    try { this.valueExceptionHandling(answer) } catch (e) { this.endGame(e) };
    let result_score = this.checkScore(answer, CORRECT_LIST);
    let result_text = this.checkCount(result_score);

    Console.print(this.printResult(result_text));

    this.askingRestart();
  }

  startGame(CORRECT_LIST) {
    Console.readLine('숫자를 입력해주세요 : ', (answer) => { this.inputNumber(answer, CORRECT_LIST) });
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
const app = new App;
app.inputNumber('123', ['1', '2', '3']);

module.exports = App;
