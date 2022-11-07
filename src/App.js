const MissionUtils = require("@woowacourse/mission-utils");
const GAME_START = '숫자 야구 게임을 시작합니다.';
const RESTART = '숫자 야구 게임을 재시작합니다.';

class App {
  // 사용자 입력 숫자 생성
  generateNumber(randomNumber) {
    const userNumber = this.userInputNumber();

    this.getResult(userNumber, randomNumber);
  }

  // 랜덤 숫자 발생
  numberRandom() {
    const computer = [];
    while (computer.length < 3) {
        const number = MissionUtils.Random.pickNumberInRange(1, 9);
        if (!computer.includes(number)) {
            computer.push(number);
        }
    }
    return computer.join("");
  }

  // 게임 실행 (랜덤 숫자 생성)
  startGame() {
    const randomNumber = this.numberRandom();

    this.generateNumber(randomNumber);
  }

  play() {
    MissionUtils.Console.print(GAME_START);
    this.startGame();
  }
}

module.exports = App;
