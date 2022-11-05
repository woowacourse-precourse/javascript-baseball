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

  postEndMessage() {
    MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    MissionUtils.Console.readLine(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요',
      answer => {
        return answer;
      },
    );
  }

  getUserAnswer(computer) {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', answer => {
      const user = answer.split('').map(Number);
      if (this.testAnswer(user, computer)) {
        this.gameSystem(computer, user);
      }
    });
  }

  testAnswer(answer) {
    const testType = /[1-9]/;
    const set = new Set(answer);
    answer.forEach(number => {
      if (!testType.test(number)) throw new Error('숫자를 입력하세요.');
      if (answer.length !== 3) throw new Error('3자리를 입력하세요.');
      if (answer.length !== set.size) throw new Error('중복된 수가 있습니다.');
    });
    return answer;
  }

  gameSystem(computer, user) {
    let strike = 0;
    let ball = 0;
    user.forEach((number, index) => {
      if (number === computer[index]) strike++;
      else if (computer.includes(number)) ball++;
    });
    return this.postGameMessage(computer, strike, ball);
  }

  postGameMessage(computer, strike, ball) {
    let message;
    if (strike && ball) message = `${ball}볼 ${strike}스트라이크`;
    else if (strike) message = `${strike}스트라이크`;
    else if (ball) message = `${ball}스트라이크`;
    else message = `낫싱`;

    MissionUtils.Console.print(message);
    if (strike === 3) this.postEndMessage();
    else this.getUserAnswer(computer);
  }

  play() {
    const computer = this.getRandomNumber();
    this.postStartMessage();
    this.getUserAnswer(computer);
  }
}

module.exports = App;
