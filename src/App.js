const MissionUtils = require('@woowacourse/mission-utils');

class App {
  play() {
    this.startGame();
    this.playBaseballGame();
  }

  startGame() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다');
  }

  playBaseballGame() {
    const computerInputNumbers = this.getComputerNumber();
    this.getUserNumbers();
  }

  getComputerNumber() {
    const computerNumbers = [];

    while (computerNumbers.length < 3) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);

      if (!computerNumbers.includes(randomNumber)) {
        computerNumbers.push(randomNumber);
      }
    }
    return computerNumbers.join('');
  }

  getUserNumbers() {
    MissionUtils.Console.readLine('숫자를 입력해주세요 :', (userAnswer) => {
      this.isValidUserNumbers(userAnswer);
    });
  }

  isValidUserNumbers(userAnswer) {
    const userNumbers = userAnswer.split('').map((number) => parseInt(number, 10));
    isScopeUserNumber(userNumbers);
    isScopeLength(userNumbers);
  }

  isScopeUserNumber(userNumbers) {
    const isScope = userNumbers.every((number) => (number >= 1 && number <= 9 ? true : false));

    if (!isScope) {
      throw new Error('1 ~ 9까지의 숫자만 입력하세요');
    }
  }
}

const app = new App();
app.play();

module.exports = App;
