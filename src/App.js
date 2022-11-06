const MissionUtils = require('@woowacourse/mission-utils');

class App {
  constructor() {
    this.answer = [];
  }

  getRandomNumbers() {
    this.answer = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
  }

  checkInputError(numbers) {
    const newNumbers = new Set(numbers); // 중복된 숫자를 찾기위해 사용
    if (isNaN(numbers)) {
      throw '숫자 이외의 입력';
    }

    if (numbers.length !== 3) {
      throw '3자리 숫자 이외의 입력';
    }

    if (newNumbers.size !== 3) {
      throw '중복된 숫자 입력';
    }
  }

  userInputNumber() {
    try {
      MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (numbers) => {
        this.checkInputError(numbers);
        console.log(numbers);
      });
    } catch (e) {
      console.error(e);
    }
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
