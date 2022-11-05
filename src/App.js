const MissionUtils = require('@woowacourse/mission-utils');
class App {
  constructor() {
    this.firstEnter = true;
  }

  getRandomNumbers() {
    const Numbers = [];
    while (Numbers.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!Numbers.includes(number)) {
        Numbers.push(number);
      }
    }

    return Numbers;
  }

  guessAnswer() {
    MissionUtils.Console.readLine('숫자를 입력하세요 : ', answer => {
      this.guessAnswerValidate(answer);
      if (this.outputResult(answer) === '3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료') {
        MissionUtils.Console.print(this.outputResult(answer));
        this.restartEndGameAnswer();
        return;
      }
      MissionUtils.Console.print(this.outputResult(answer));
      return this.guessAnswer();
    });
  }

  guessAnswerValidate(answer) {
    const duplicate = new Set(answer);
    if (answer.length !== 3) {
      throw '서로다른 3자리 숫자를 입력해주세요';
    }
    if (answer.length !== duplicate.size) {
      throw '서로다른 3자리 숫자를 입력해주세요';
    }
    if (!answer.split('').every(number => number.charCodeAt() >= 49 && number.charCodeAt() <= 57)) {
      throw '범위에 벗어난 숫자입니다';
    }
  }

  restartEndGameAnswer() {
    MissionUtils.Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요\n', answer => {
      this.restartEndGameAnswerValidator(answer);
      if (answer === '1') {
        this.play();
        return;
      }
      MissionUtils.Console.close();
      return;
    });
  }

  restartEndGameAnswerValidator(answer) {
    if (answer.length !== 1) {
      throw '한 개의 숫자만 입력해주세요';
    }
    if (!(answer.charCodeAt() >= 49 && answer.charCodeAt() <= 50)) {
      throw '범위에 벗어난 숫자입니다';
    }
  }

  outputResult(answer) {
    let strike = 0;
    let ball = 0;

    for (let number = 0; number < answer.length; number++) {
      if (String(this.computer[number]) === answer[number]) {
        strike += 1;
      }
      if (String(this.computer[number]) !== answer[number] && String(this.computer).includes(answer[number])) {
        ball += 1;
      }
    }

    return this.scoreConversion(strike, ball);
  }

  scoreConversion(strike, ball) {
    if (strike === 0 && ball === 0) {
      return '낫싱';
    }
    if (strike === 3) {
      return '3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료';
    }

    return `${ball}볼 ${strike}스트라이크`;
  }

  play() {
    if (this.firstEnter === true) {
      MissionUtils.Console.print('게임을 시작합니다');
      this.firstEnter = false;
    }
    this.computer = this.getRandomNumbers();
    this.guessAnswer();
  }
}

module.exports = App;
