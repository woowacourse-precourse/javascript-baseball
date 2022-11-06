const MissionUtils = require('@woowacourse/mission-utils');

class App {
  constructor() {
    this.answer = [];
  }

  getRandomNumbers() {
    this.answer = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
  }

  userInputNumber() {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (numbers) => {
      console.log(numbers);
    });
  }

  gameStart() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    this.getRandomNumbers();
    this.userInputNumber();
  }

  play() {
    this.gameStart();
  }
}

const baseball = new App();
baseball.play();

module.exports = App;
