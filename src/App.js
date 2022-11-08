const MissionUtils = require('@woowacourse/mission-utils');

class App {
  constructor() {
    this.isPlaying = true;
    this.computerNumberList = [];
    this.userNumberList = [];
    this.ballCount = 0;
    this.strikeCount = 0;
  }

  getRandomComputerNumber() {
    this.computerNumberList = [];
    while (this.computerNumberList.length < 3) {
      const pickedNumber = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.computerNumberList.includes(pickedNumber)) {
        this.computerNumberList.push(pickedNumber);
      }
    }
  }

  getUserNumber() {
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

  getTotalBallStrike() {
    if (this.strikeCount > 0 && this.ballCount > 0) {
      return `${this.ballCount}볼 ${this.strikeCount}스트라이크`;
    }
    if (this.strikeCount > 0) return `${this.strikeCount}스트라이크`;
    if (this.ballCount > 0) return `${this.ballCount}볼`;
    return '낫싱';
  }

  inputException() {
    if (this.userNumberList.length !== 3) {
      throw new Error('잘못된 값을 입력했습니다. 게임을 종료합니다.');
    }
    if (this.userNumberList.filter((num) => Number.isNaN(num)).length > 0) {
      throw new Error('잘못된 값을 입력했습니다. 게임을 종료합니다.');
    }
  }

  continueOrFinishInputException(input) {
    try {
      if (input !== '1' || input !== '2') {
        throw new Error('1 또는 2를 입력해야 합니다. 게임을 종료합니다.');
      }
    } catch (error) {
      MissionUtils.Console.print(error.message);
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

  chooseContinueFinish(input) {
    if (input.toString() === '2') {
      MissionUtils.Console.print('게임 종료');
      this.isPlaying = false;
    } else {
      this.computerNumberList = [];
      this.getRandomComputerNumber();
    }
  }

  playGame() {
    this.getUserNumber();
    try {
      this.inputException();

      this.countStrike();
      this.countBall();
      MissionUtils.Console.print(this.getTotalBallStrike());

      if (this.strikeCount === 3) {
        const input = this.continueOrFinish();
        this.continueOrFinishInputException(input);
        this.chooseContinueFinish(input);
      }
    } catch (error) {
      MissionUtils.Console.print(error.message);
    }
  }

  play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    this.getRandomComputerNumber();
    while (this.isPlaying) {
      this.playGame();
    }
  }
}

module.exports = App;
