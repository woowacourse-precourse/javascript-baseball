const MissionUtils = require('@woowacourse/mission-utils');

class App {
  generateTargetNumber() {
    const target = [];

    while (target.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!target.includes(number)) target.push(number);
    }
    return target;
  }

  validateGuessedNumber(input) {
    if (input.length !== 3) {
      throw new Error('Input string length must be 3.');
    }
    if (input.split('').some((character) => Number.isNaN(Number(character)))) {
      throw new Error('Input string must be number.');
    }
  }

  convertInputStringToArray(input) {
    return input.split('').map((character) => Number(character));
  }

  judgeStrikeBall(guessed, target) {
    const strike = guessed.filter(
      (number, index) => number === target[index]
    ).length;
    const ball =
      guessed.filter((number) => target.includes(number)).length - strike;

    return { strike, ball };
  }

  scoreMessage(strike, ball) {
    if (strike === 0 && ball === 0) return '낫싱';

    const strikeMessage = strike ? `${strike}스트라이크` : '';
    const ballMessage = ball ? `${ball}볼` : '';

    return `${ballMessage} ${strikeMessage}`.trim();
  }

  guessNumber(target) {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (input) => {
      this.validateGuessedNumber(input);
      this.checkResult(this.convertInputStringToArray(input), target);
    });
  }

  checkResult(input, target) {
    const { strike, ball } = this.judgeStrikeBall(input, target);
    const message = this.scoreMessage(strike, ball);

    MissionUtils.Console.print(message);
    if (strike === 3) {
      MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
      this.inputRestartGame();
    } else {
      this.guessNumber(target);
    }
  }

  inputRestartGame() {
    MissionUtils.Console.print(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.'
    );
    MissionUtils.Console.readLine('', (input) => {
      this.validateRestartGameInput(input);
      this.restartGameByInput(input);
    });
  }

  validateRestartGameInput(input) {
    if (input !== '1' && input !== '2') {
      throw new Error('Input must be 1 or 2.');
    }
  }

  restartGameByInput(input) {
    if (input === '1') {
      this.startGame();
    }
  }

  startGame() {
    const target = this.generateTargetNumber();

    this.guessNumber(target);
  }

  play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    this.startGame();
  }
}

module.exports = App;
