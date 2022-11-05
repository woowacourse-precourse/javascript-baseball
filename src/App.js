const MissionUtils = require('@woowacourse/mission-utils');
class App {
  constructor() {
    this.answer = '';
  }

  play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    this.play_number_baseball_game();
  }

  play_number_baseball_game() {
    this.answer = this.computer_random_number();
    this.receive_input();
  }

  computer_random_number() {
    const NUMBER_LIST = [];
    while (NUMBER_LIST.length < 3) {
      const SINGLE_DIGIT = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!NUMBER_LIST.includes(SINGLE_DIGIT)) {
        NUMBER_LIST.push(SINGLE_DIGIT);
      }
    }
    return NUMBER_LIST.join('');
  }

  receive_guess_input() {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', input_num => {
      const VALIDATION = this.check_input_validation(input_num);
      if (!VALIDATION) {
        throw '잘못된 형식입니다';
      }
      this.check_continue(input_num);
    });
  }

  check_input_validation(input) {
    const NUM_RANGE = /^[0-9]+$/;
    let checkNum = NUM_RANGE.test(input);
    let checkLength = input.length;
    const SET = new Set(input);
    let checkOverlap = SET.size;
    if (checkNum && checkLength === 3 && checkOverlap === 3) return true;
    return false;
  }

  check_continue(input) {
    const COMPARE_RESULT = this.compare_and_give_hint(input, this.answer);
    MissionUtils.Console.print(COMPARE_RESULT);
    if (COMPARE_RESULT != '3스트라이크') {
      this.receive_input();
    } else {
      MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
      this.receive_restart_input();
    }
  }

  compare_and_give_hint(input, answer) {
    let strike = 0;
    let ball = 0;
    for (let i = 0; i < 3; i++) {
      if (input[i] === answer[i]) strike += 1;
      else if (answer.indexOf(input[i]) > -1 && answer.indexOf(input[i]) < 3) {
        ball += 1;
      }
    }
    if (ball === 0 && strike === 0) return '낫싱';
    else if (strike === 3) return '3스트라이크';
    else if (strike === 0) return `${ball}볼`;
    else if (ball === 0) return `${strike}스트라이크`;
    return `${ball}볼 ${strike}스트라이크`;
  }

  receive_restart_input() {
    MissionUtils.Console.readLine(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. : ',
      input_num => {
        if (input_num == 1) {
          const app = new App();
          app.play_number_baseball_game();
        } else if (input_num == 2) {
          MissionUtils.Console.close();
        } else throw '잘못된 형식입니다';
      },
    );
  }
}

module.exports = App;
const app = new App();
app.play();
