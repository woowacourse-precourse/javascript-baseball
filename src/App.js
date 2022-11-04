const MissionUtils = require('@woowacourse/mission-utils');
class App {
  constructor() {
    this.end = false;
    this.error = false;
  }
  play() {
    // this.play_number_baseball_game();
    /**while(True),
     * 다 맞히면 게임 종료 후 1,2 선택 (1이면 재시작, 2면 애플리케이션을 종료)
     * 입력값 잘못되면 throw 이용한 예외처리 => 얘는 애플리케이션을 종료
     * **/
  }

  // play_number_baseball_game() {

  // }

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
    else if (strike === 3) return true;
    return `${ball}볼 ${strike}스트라이크`;
  }
}

module.exports = App;
const app = new App();
app.play();
