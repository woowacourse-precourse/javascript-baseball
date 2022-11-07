const MissionUtils = require("@woowacourse/mission-utils");
const GAME_START = '숫자 야구 게임을 시작합니다.';
const RESTART = '숫자 야구 게임을 재시작합니다.';

class App {
  // 게임 재시작 입력 오류
  wrongInput(inputNumber) {
    if (inputNumber !== '1' && inputNumber !== '2') {
      throw new Error('숫자 1 혹은 숫자 2를 입력해 주세요.');
    }
  }

  // 게임 재시작
  restartGame() {
    MissionUtils.Console.print('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
    MissionUtils.Console.readLine('', (input) => {
      this.wrongInput(input);
      if (input === '1') {
        MissionUtils.Console.print(RESTART);
        this.startGame();
      }
      if (input === '2') MissionUtils.Console.close();
    });
  }

  // 볼, 스트라이크 출력
  compareNumber(strike, ball) {
    if (strike === 0 && ball === 0) return '낫싱';
    if (strike === 0 && ball > 0) return `${ball}볼`;
    if (strike > 0 && ball === 0) return `${strike}스트라이크`;
    return `${ball}볼 ${strike}스트라이크`;
  }

  // 볼 체크
  ballCheck(user, random) {
    let ball = 0;
    for (let i = 0; i < 3; i++) {
      if (random[i] !== user[i] && random.includes(user[i])) ball++;
    }

    return ball;
  }

  // 스트라이크 체크
  strikeCheck(user, random) {
    let strike = 0;
    for (let i = 0; i < 3; i++) {
      if (user[i] === random[i]) strike++;
    }

    return strike;
  }

  // 게임 결과
  getResult(userNumber, randomNumber) {
    const strike = this.strikeCheck(userNumber, randomNumber);
    const ball = this.ballCheck(userNumber, randomNumber)
    const resultMessage = this.compareNumber(strike, ball);

    MissionUtils.Console.print(resultMessage);
    if (strike !== 3) {
      this.generateNumber(randomNumber);
    } else {
      MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
      this.restartGame();
    }
  }

  // 사용자 입력 숫자 문제점 체크
  userInputCheck(userInputNumber) {
    this.numberLengthCheck(userInputNumber);
    this.numberCheck(userInputNumber);
    this.overlapCheck(userInputNumber);
    this.oneToNineCheck(userInputNumber);
  }

  // 입력 숫자가 세 자리가 아닐 경우
  numberLengthCheck(inputNumber) {
    if (inputNumber.length !== 3) {
      throw new Error('세 자리를 입력해주세요.');
    }
  }

  // 숫자를 입력하지 않은 경우
  numberCheck(inputNumber) {
    if (isNaN(Number(inputNumber))) {
      throw new Error('숫자만 입력해주세요.');
    }
  }

  // 중복 숫자가 있는 경우
  overlapCheck(inputNumber) {
    const numberSet = new Set(inputNumber);
    if (numberSet.size !== inputNumber.length) {
      throw new Error('숫자를 중복으로 입력하지 말아주세요.');
    }
  }

  // 1부터 9 안에 입력하지 않은 경우
  oneToNineCheck(inputNumber) {
    if (inputNumber < 1 && inputNumber > 9) {
      throw new Error('숫자 1과 9 사이로 입력해주세요.');
    }
  }

  // 사용자 입력
  userInputNumber() {
    let userAnswer = "";
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (input) => {
      this.userInputCheck(input);
      userAnswer = input;
    });

    return userAnswer;
  }
  
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
