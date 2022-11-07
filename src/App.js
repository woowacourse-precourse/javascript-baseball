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
    this.resetGame();
    this.startGame();
    while (this.strike !== LENGTH) this.playGame();
    this.endGame();
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

      this.resetScore();
      this.setScore();
      this.printResult();

      if (this.strike === LENGTH) {
        MissionUtils.Console.print(
          `${LENGTH}개의 숫자를 모두 맞히셨습니다! 게임 종료`
        );
      } else {
        this.playGame();
      }
    });
  }

  setComputer() {
    this.computer = '';
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
    if (!this.ball && !this.strike) MissionUtils.Console.print('낫싱');
    else {
      MissionUtils.Console.print(
        `${this.ball ? this.ball + '볼 ' : ''}${
          this.strike ? this.strike + '스트라이크' : ''
        }`
      );
    }
  }

  resetScore() {
    this.strike = 0;
    this.ball = 0;
  }

  resetGame() {
    this.computer = '';
    this.user = '';
    this.resetScore();
  }

  endGame() {
    MissionUtils.Console.readLine(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
      (answer) => {
        MissionUtils.Console.close();
        if (+answer === 1) this.play();
        else if (+answer === 2) {
          MissionUtils.Console.print('게임 종료');
        } else {
          throw new TypeError('1 또는 2만 입력해주세요');
        }
      }
    );
  }

  get isValidAnswer() {
    return this.user.match(/[1-9]/g) && new Set([...this.user]).size === 3;
  }
}

module.exports = App;
