const MissionUtils = require('@woowacourse/mission-utils');

class App {
  constructor() {
    this.isPlaying = true;
    this.computerNumber = [];
  }
  // Expected 'this' to be used by class method 'play'.

  getRandomNumber() {
    while (this.computerNumber.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.computerNumber.includes(number)) this.computerNumber.push(number);
    }
  }

  guessUserNumber() {
    let guessNumber;
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (x) => {
      guessNumber = x;
    });
    MissionUtils.Console.close();
    return guessNumber.split('');
  }

  countStrike(guessNumber) {
    const strike = this.computerNumber.filter(
      (num, index) => num.toString() === guessNumber[index],
    ).length;
    return strike;
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

  countBall(guessNumber) {
    let ball = 0;
    this.computerNumber.forEach((computerNum, index) => {
      const num = computerNum.toString();
      if (guessNumber.includes(num) && guessNumber[index] !== num) {
        ball += 1;
      }
    });
    return ball;
  }

  getResult(strike, ball) {
    if (strike > 0 && ball > 0) return `${ball}볼 ${strike}스트라이크`;
    if (strike > 0) return `${strike}스트라이크`;
    if (ball > 0) return `${ball}볼`;
    return '낫싱';
  }

  inputException(guessNumber) {
    if (guessNumber.length !== 3) {
      throw new Error('예외');
    }
    if (guessNumber.filter((num) => Number.isNaN(num)).length > 0) {
      throw new Error('예외');
    }
  }

  chooseContinueFinish() {
    const input = this.continueOrFinish();

    if (input.toString() === '2') {
      MissionUtils.Console.print('게임 종료');
      this.isPlaying = false;
    } else {
      this.computerNumber = [];
      this.getRandomNumber();
    }
  }

  playGame() {
    // const IS_PLAYING = true;

    const guessNumber = this.guessUserNumber();
    try {
      this.inputException(guessNumber);

      const strike = this.countStrike(guessNumber);
      const ball = this.countBall(guessNumber);
      MissionUtils.Console.print(this.getResult(strike, ball));

      if (strike === 3) {
        this.chooseContinueFinish();
      }
      // inputException(this.guessNumber);
    } catch (e) {
      // IS_PLAYING = false;
      // break;
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
