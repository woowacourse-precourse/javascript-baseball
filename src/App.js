const MissionUtils = require('@woowacourse/mission-utils');

class App {
  getRandomNumbers() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
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

    if (ball > 0) message += `${ball} 볼`;

    if (strike > 0)
      message += ball === 0 ? `${strike} 스트라이크` : ` ${strike} 스트라이크`;

    return MissionUtils.Console.print(message);
  }

  askRestartGame() {
    const RESTART_CODE = '1';
    const END_CODE = '2';

    MissionUtils.Console.readLine(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
      (answer) => {
        if (answer === RESTART_CODE) {
          this.play();
        }

        if (answer === END_CODE) {
          MissionUtils.Console.close();
        }
      }
    );
  }

  playerInputsNumbers(computer) {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (answer) => {
      const player = this.convertToNumberArray(answer);
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
    console.log(computer);
    this.playerInputsNumbers(computer);
  }
}

const app = new App();
app.play();

module.exports = App;
