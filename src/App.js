const MissionUtils = require('@woowacourse/mission-utils');
class App {
  getRandomNumber() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  }

  postStartMessage() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
  }

  getUserAnswer(computer) {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', answer => {
      const user = answer.split('').map(Number);
      if (this.testAnswer(user, computer)) {
        return user;
      }
    });
  }

  testAnswer(answer, computer) {
    const testType = /[1-9]/;
    const set = new Set(answer);
    answer.forEach(number => {
      try {
        if (!testType.test(number)) {
          throw new Error('숫자를 입력하세요.');
        }
        if (answer.length !== 3) {
          throw new Error('3자리를 입력하세요.');
        }
        if (answer.length !== set.size) {
          throw new Error('중복된 수가 있습니다.');
        }
      } catch {
        this.getUserAnswer(computer);
      }
    });
    return answer;
  }

  play() {}
}

module.exports = App;
