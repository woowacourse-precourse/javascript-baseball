const MissionUtils = require('@woowacourse/mission-utils');
class App {
  constructor() {
    this.answer = '';
  }
  play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    this.play_number_baseball_game();
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

  play_number_baseball_game() {
    this.answer = this.computer_random_number();
    // console.log(this.answer);
    this.receive_input();
  }

  check_continue(input, answer) {
    const compare_result = this.compare_and_give_hint(input, this.answer);
    MissionUtils.Console.print(compare_result);
    if (compare_result != '3스트라이크') {
      this.receive_input();
    } else {
      MissionUtils.Console.print("'3개의 숫자를 모두 맞히셨습니다! 게임 종료'");
      this.receive_restart_input();
      // MissionUtils.Console.close();
    }
  }

  receive_input() {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', input_num => {
      const validation = this.check_input_validation(input_num);
      if (!validation) {
        throw '잘못된 형식입니다';
      }
      this.check_continue(input_num, this.answer);
    });
  }

  check_input_validation(input) {
    const num_range = /^[0-9]+$/;
    let checkNum = num_range.test(input);
    let checkLength = input.length;
    const set = new Set(input);
    let checkOverlap = set.size;

    if (checkNum && checkLength === 3 && checkOverlap === 3) return true;
    return false;
  }

  computer_random_number() {
    const number_list = [];
    while (number_list.length < 3) {
      const single_digit = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!number_list.includes(single_digit)) {
        number_list.push(single_digit);
      }
    }
    return number_list.join('');
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
}

module.exports = App;
const app = new App();
app.play();
