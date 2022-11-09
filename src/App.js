const MissionUtils = require("@woowacourse/mission-utils");
const Console = MissionUtils.Console;
const Random = MissionUtils.Random;

class App {
  endGame(e) {
    Console.close();
  }

  answerException(answer) {
    if (answer !== '1' && answer !== '2') {
      throw '입력 값이 1혹은 2가 아닙니다. 게임을 종료합니다.';
      this.endGame();
    }
    if (answer === '2') this.endGame();
    if (answer === '1') this.play('restart');
  }

  askingRestart() {
    Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n', (answer) => {
      this.answerException(answer);
    });
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

    answer.split('').map(Number).forEach((answer_number, idx) => {
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
    let answer_list = answer.split('').map(Number);
    const temp_set = new Set(answer_list);
    answer_list = [...temp_set];

    if (String(Number(answer)) === 'NaN') {
      throw '입력 값이 숫자가 아닙니다. 게임을 종료합니다.';
      this.endGame();
    }
    else if (answer.length !== 3) {
      throw '입력 값이 세 자리가 아닙니다. 게임을 종료합니다.';
      this.endGame();
    }
    else if (answer_list.length !== 3) {
      throw '입력 값에 중복된 수가 있습니다. 게임을 종료합니다.';
      this.endGame();
    }
  }

  inputNumber(answer, CORRECT_LIST) {
    let end_state = false;
    
    this.valueExceptionHandling(answer)

    if (end_state) return false;

    let result_score = this.checkScore(answer, CORRECT_LIST);
    let result_text = this.checkCount(result_score);

    Console.print(this.printResult(result_text));

    if (result_score.strike !== 3) return true;

    this.askingRestart();
  }

  startGame(CORRECT_LIST) {
    Console.readLine('숫자를 입력해주세요 : ', (answer) => {
      if (this.inputNumber(answer, CORRECT_LIST)) this.startGame(CORRECT_LIST)
    });
  }

  createRandomValue() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  }

  openingOutput() {
    Console.print('숫자 야구 게임을 시작합니다.');
  }

  play(state) {
    if (!state) this.openingOutput();
    const CORRECT_LIST = this.createRandomValue();
    this.startGame(CORRECT_LIST);
  }
}
const app = new App;
app.play();

module.exports = App;
