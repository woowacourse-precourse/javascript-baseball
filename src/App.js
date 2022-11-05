const LENGTH = 3;
const MissionUtils = require('@woowacourse/mission-utils');
class App {
  constructor() {
    this.computer = '';
    this.user = '';
    this.strike = 0;
    this.ball = 0;
  }

  play() {
    this.startGame();
    while (this.strike !== LENGTH) this.playGame();
  }

  startGame() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    this.setComputer();
  }

  playGame() {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (answer) => {
      MissionUtils.Console.close();
      this.user = answer;

      if (!this.isValidAnswer) {
        this.user = '';
        throw new TypeError();
      }

      this.setScore();
      this.printResult();
      this.resetScore();

      if (this.strike === LENGTH) {
        MissionUtils.Console.print(
          `${LENGTH}개의 숫자를 모두 맞히셨습니다! 게임 종료`
        );
        this.endGame();
      } else {
        this.playGame();
      }
    });
  }

  setComputer() {
    while (this.computer.length < LENGTH) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9) + '';
      if (!this.computer.includes(number)) {
        this.computer += number;
      }
    }
  }

  setScore() {
    [...this.user].forEach((num, i) => {
      if (num === this.computer[i]) this.strike += 1;
      else if (this.computer.includes(num)) this.ball += 1;
    });
  }

  printResult() {
    // to be implemented
  }

  resetScore() {
    this.strike = 0;
    this.ball = 0;
  }

  endGame() {
    // to be implemented
  }

  get isValidAnswer() {
    return this.user.match(/[1-9]/g) && new Set([...this.user]).size === 3;
  }
}

module.exports = App;
