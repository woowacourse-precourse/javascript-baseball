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

  play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    const computer = this.getRandomNumbers();

    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (answer) => {
      const player = this.convertToNumberArray(answer);
      const { strike, ball } = this.compareNumbers(computer, player);

      this.printHintMessage(strike, ball);
    });
  }
}

const app = new App();
app.play();

module.exports = App;
