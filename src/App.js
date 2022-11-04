const MissionUtils = require('@woowacourse/mission-utils');
class App {
  constructor() {
    this.end = false;
    this.error = false;
  }
  play() {
    this.play_number_baseball_game();

    /**while(True),
     * 다 맞히면 게임 종료 후 1,2 선택 (1이면 재시작, 2면 애플리케이션을 종료)
     * 입력값 잘못되면 throw 이용한 예외처리 => 얘는 애플리케이션을 종료
     * **/
  }

  play_number_baseball_game() {
    // MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    // const answer = this.computer_random_number();
    // this.receive_input();
    // MissionUtils.Console.readLine('숫자를 입력해주세요 : ', input_num => {
    //   MissionUtils.Console.close();
    //   const compare_result = this.compare_and_give_hint(input_num, answer);
    //   if (compare_result === '3스트라이크') {
    //     MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    //   } else {
    //     MissionUtils.Console.print(compare_result);
    //   }
    // });
  }

  receive_input() {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', input_num => {
      MissionUtils.Console.close();
      const validation = this.check_input_validation(input_num);
      if (!validation) {
        throw '잘못된 형식입니다';
      }
    });
  }

  check_input_validation(input) {
    let validation;
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
    const final_random_num = number_list.join('');
    return final_random_num;
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
