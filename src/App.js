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

  play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    const computer = this.getRandomNumbers();

    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (answer) => {
      const player = this.convertToNumberArray(answer);
      const { strike, ball } = this.compareNumbers(computer, player);

      if ((strike === 0, ball === 0)) {
        MissionUtils.Console.print('낫싱');
      }
    });
  }
}

const app = new App();
app.play();

module.exports = App;
