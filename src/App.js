const MissionUtils = require('@woowacourse/mission-utils');

class App {
  getRandomNumbers() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  }

  convertToNumberArray(numbers) {
    return numbers.split('').map(Number);
  }

  compareNumbers(computerNumbers, playerNumbers) {
    let [strike, ball] = [0, 0];

    for (let i = 0; i < computerNumbers.length; i++) {
      if (!computerNumbers.includes(playerNumbers[i])) continue;

      if (computerNumbers[i] === playerNumbers[i]) {
        strike += 1;
        continue;
      }

      ball += 1;
    }

    return { strike, ball };
  }

  printHintMessage(strike, ball) {
    let message = '';

    if (strike === 0 && ball === 0) {
      message = '낫싱';
    }

    if (ball > 0) message += `${ball}볼`;

    if (strike > 0)
      message += ball === 0 ? `${strike}스트라이크` : ` ${strike}스트라이크`;

    return MissionUtils.Console.print(message);
  }

  askRestartGame() {
    const RESTART_CODE = '1';
    const END_CODE = '2';

    MissionUtils.Console.readLine(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
      (answer) => {
        if (answer !== RESTART_CODE && answer !== END_CODE) {
          throw new Error('유효하지 않은 입력 값입니다.');
        }

        if (answer === RESTART_CODE) {
          this.play();
        }

        if (answer === END_CODE) {
          MissionUtils.Console.close();
        }
      }
    );
  }

  checkValidNumbers(inputs) {
    const VALID_LENGTH = 3;

    if (inputs.includes(NaN)) {
      throw new Error('숫자만 입력해주세요.');
    }

    if (inputs.includes(0)) {
      throw new Error('1~9 사이의 숫자를 입력해주세요');
    }

    if (inputs.length !== VALID_LENGTH) {
      throw new Error('3자리의 숫자를 입력해주세요.');
    }

    if (new Set(inputs).size !== VALID_LENGTH) {
      throw new Error('서로 다른 3자리의 숫자를 입력해주세요.');
    }
  }

  playerInputsNumbers(computer) {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (answer) => {
      const player = this.convertToNumberArray(answer);

      this.checkValidNumbers(player);

      const { strike, ball } = this.compareNumbers(computer, player);

      this.printHintMessage(strike, ball);

      if (strike === 3) {
        MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
        return this.askRestartGame();
      }

      this.playerInputsNumbers(computer);
    });
  }

  play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    const computer = this.getRandomNumbers();

    this.playerInputsNumbers(computer);
  }
}

module.exports = App;
