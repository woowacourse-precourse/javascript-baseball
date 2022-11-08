const MissionUtils = require("@woowacourse/mission-utils");
const { GAME_START, RESTART } = require('./constant/constant');
const { ballCheck, strikeCheck, compareNumber } = require('./game/bowlingResult');
const numberRandom = require('./computer/randomNumber');
const userInputNumber = require('./user/userInputNumber');
const wrongInput = require('./inputError/wrongInput');

class App {
  // 게임 재시작
  restartGame() {
    MissionUtils.Console.print('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
    MissionUtils.Console.readLine('', (input) => {
      wrongInput(input);
      if (input === '1') {
        MissionUtils.Console.print(RESTART);
        this.startGame();
      }
      if (input === '2') MissionUtils.Console.close();
    });
  }

  // 게임 결과
  getResult(userNumber, randomNumber) {
    const strike = strikeCheck(userNumber, randomNumber);
    const ball = ballCheck(userNumber, randomNumber)
    const resultMessage = compareNumber(strike, ball);

    MissionUtils.Console.print(resultMessage);
    if (strike !== 3) {
      this.generateNumber(randomNumber);
    } else {
      MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
      this.restartGame();
    }
  }
  
  // 사용자 입력 숫자 생성
  generateNumber(randomNumber) {
    const userNumber = userInputNumber();

    this.getResult(userNumber, randomNumber);
  }

  // 게임 실행 (랜덤 숫자 생성)
  startGame() {
    const randomNumber = numberRandom();

    this.generateNumber(randomNumber);
  }

  play() {
    MissionUtils.Console.print(GAME_START);
    this.startGame();
  }
}

module.exports = App;
