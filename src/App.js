const MissionUtils = require('@woowacourse/mission-utils');

class App {
  constructor() {
    this.isPlaying = true;
    this.computerNumberList = [];
    this.userNumberList = [];
    this.ballCount = 0;
    this.strikeCount = 0;
  }
  // Expected 'this' to be used by class method 'play'.

  getRandomNumber() {
    while (this.computerNumberList.length < 3) {
      const pickedNumber = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.computerNumberList.includes(pickedNumber)) {
        this.computerNumberList.push(pickedNumber);
      }
    }
  }

  guessUserNumber() {
    let guessNumber;
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (x) => {
      guessNumber = x;
    });
    MissionUtils.Console.close();
    this.userNumberList = guessNumber.split('').reduce((prev, cur) => [...prev, Number(cur)], []);
  }

  countStrike() {
    this.strikeCount = this.computerNumberList.filter(
      (num, index) => num === this.userNumberList[index],
    ).length;
  }

  countBall() {
    this.ballCount = 0;
    this.computerNumberList.forEach((computerNum, index) => {
      if (this.userNumberList.includes(computerNum) && this.userNumberList[index] !== computerNum) {
        this.ballCount += 1;
      }
    });
  }

  getResult() {
    if (this.strikeCount > 0 && this.ballCount > 0) {
      return `${this.ballCount}볼 ${this.strikeCount}스트라이크`;
    }
    if (this.strikeCount > 0) return `${this.strikeCount}스트라이크`;
    if (this.ballCount > 0) return `${this.ballCount}볼`;
    return '낫싱';
  }

  inputException() {
    if (this.userNumberList.length !== 3) {
      throw new Error('예외');
    }
    if (this.userNumberList.filter((num) => Number.isNaN(num)).length > 0) {
      throw new Error('예외');
    }
  }

  continueOrFinish() {
    let input;
    MissionUtils.Console.readLine(
      '3개의 숫자를 모두 맞히셨습니다! 게임 종료\n게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
      (x) => {
        input = x;
      },
    );
    MissionUtils.Console.close();
    return input;
  }

  chooseContinueFinish() {
    const input = this.continueOrFinish();

    if (input.toString() === '2') {
      MissionUtils.Console.print('게임 종료');
      this.isPlaying = false;
    } else {
      this.computerNumberList = [];
      this.getRandomNumber();
    }
  }

  playGame() {
    this.guessUserNumber();
    try {
      this.inputException();

      this.countStrike();
      this.countBall();
      MissionUtils.Console.print(this.getResult());

      if (this.strikeCount === 3) {
        this.chooseContinueFinish();
      }
    } catch (error) {
      MissionUtils.Console.print(error.message);
    }
  }

  play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    this.getRandomNumber();
    while (this.isPlaying) {
      this.playGame();
    }
  }
}

module.exports = App;
