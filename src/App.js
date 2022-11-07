const MissionUtils = require('@woowacourse/mission-utils');
class App {
  getRandomNumber() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) computer.push(number);
    }
    return computer;
  }

  postStartMessage() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
  }

  postEndMessage() {
    MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    MissionUtils.Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n ', (answer) => {
        if (this.testEndAnswer(answer)) this.endGameSystem(answer);
      },
    );
  }

  testEndAnswer(answer) {
    const testType = /[1-2]/;
    if (!testType.test(answer)) throw new Error('1, 2 중 입력하세요.');
    return answer;
  }

  endGameSystem(answer) {
    if (answer == 1) this.play();
    else MissionUtils.Console.close();
  }

  getUserAnswer(computer) {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (answer) => {
      const user = answer.split('').map(Number);
      if (this.testAnswer(user, computer)) this.gameSystem(computer, user);
    });
  }

  testAnswer(answer) {
    const testType = /[1-9]/;
    const set = new Set(answer);
    answer.forEach(number => {
      if (!testType.test(number)) throw new Error('1~9사이 숫자만 입력하세요.');
      if (answer.length !== 3) throw new Error('3자리를 입력하세요.');
      if (answer.length !== set.size) throw new Error('중복된 수가 있습니다.');
    });
    return answer;
  }

  gameSystem(computer, user) {
    let strikeCount = 0;
    let ballCount = 0;
    user.forEach((number, index) => {
      if (number === computer[index]) strikeCount++;
      else if (computer.includes(number)) ballCount++;
    });
    return this.postGameMessage(computer, strikeCount, ballCount);
  }

  postGameMessage(computer, strikeCount, ballCount) {
    let message;
    if (strikeCount > 0 && ballCount > 0) message = `${ballCount}볼 ${strikeCount}스트라이크`;
    else if (strikeCount > 0) message = `${strikeCount}스트라이크`;
    else if (ballCount > 0) message = `${ballCount}볼`;
    else message = `낫싱`;

    MissionUtils.Console.print(message);
    if (strikeCount === 3) this.postEndMessage();
    else this.getUserAnswer(computer);
  }

  play() {
    const computer = this.getRandomNumber();
    this.postStartMessage();
    this.getUserAnswer(computer);
  }
}
const app = new App();
app.play();

module.exports = App;
