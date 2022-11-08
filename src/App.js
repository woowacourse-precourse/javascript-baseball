const MissionUtils = require('@woowacourse/mission-utils');

const FIXED_LEN = 3; // 숫자야구 고정 이이

class App {
  /**
   * @param computer : computer가제시한숫자
   * @param user : user가입력한숫자
   *
   * @return result : Array
   * result[0] : ball number
   * result[1] : strike number
   */
  match(computer, user) {
    const userArr = user.toString().split('');
    // result[0] : ball
    // result[1] : strike
    const result = [0, 0];

    computer.toString().split('').forEach((c, index) => {
      let ball = 0;
      let strike = 0;
      if (userArr.includes(c)) {
        ball += 1;
      }

      if (c === userArr[index]) {
        strike += 1;
        ball -= 1;
      }
      result[0] += ball;
      result[1] += strike;
    });

    return result;
  }

  /**
   * computer또는 user가 입력한 숫자 값의 validation check
   * @param number : validationCheckNumber
   *
   * @return
   * valid return true ( length === 3 && 1~9 )
   * invalid return false
   */
  validationCheck(number) {
    let result = true;

    const numberString = number.toString();
    // 3자리가 아니면 return false
    if (numberString.length !== FIXED_LEN) {
      return false;
    }

    // 1 ~ 9 가 아니면 return false
    numberString.split('').forEach((n) => {
      if (!(n.charCodeAt(0) >= 49 && n.charCodeAt(0) <= 57)) {
        result = false;
      }
    });

    return result;
  }

  /**
   * @return Random한 숫자 배열 return
   * */
  generateComputerNumber() {
    // 서로다른 자릿수이어야 한다.
    const result = new Set();
    while (result.size < FIXED_LEN) {
      result.add(MissionUtils.Random.pickNumberInRange(1, 9));
    }
    return Array.from(result);
  }

  replay() {
    let result = 0;
    MissionUtils.Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n', (input) => result = input);
    if (result !== '1' && result !== '2') {
      throw new Error();
    }
    return result;
  }

  play() {
    let computer = this.generateComputerNumber();
    computer = computer.join('');

    // start;
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    let user = null;
    let result = [];

    while (true) {
      // depth 1
      MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (input) => {
        // depth 2
        user = input;
      });

      // depth 1
      if (!this.validationCheck(user)) {
        // depth 2
        throw new Error();
      }
      result = this.match(computer, user);
      // depth 1
      if (result[0] > 0 && result[1] > 0) {
        // depth 2
        MissionUtils.Console.print(`${result[0]}볼 ${result[1]}스트라이크`);
      } else if (result[0] > 0 && result[1] === 0) { // depth 1
        // depth2
        MissionUtils.Console.print(`${result[0]}볼`);
      } else if (result[0] === 0 && result[1] > 0 && result[1] !== FIXED_LEN) {
        // depth 2
        MissionUtils.Console.print(`${result[1]}스트라이크`);
      } else if (result[0] === 0 && result[1] > 0 && result[1] === FIXED_LEN) {
        // depth 2
        MissionUtils.Console.print(`${FIXED_LEN}스트라이크\n${FIXED_LEN}개의 숫자를 모두 맞히셨습니다! 게임 종료`);
        result[0] = 0;
        result[1] = 0;
        if (this.replay() === '2') break;

        // 컴퓨터 제시 숫자 재설정
        computer = this.generateComputerNumber();
        computer = computer.join('');
      } else {
        MissionUtils.Console.print('낫싱');
      }
    }
    MissionUtils.Console.close();
  }
}

module.exports = App;
