const { Console, Random } = require('@woowacourse/mission-utils');

class App {
  constructor() {
    this.answer = '';
  }

  play() {
    this.gameStart().createAnswer().inputUserNumber();
  }

  gameStart() {
    this.print('숫자 야구 게임을 시작합니다.');
    return this;
  }

  createAnswer() {
    const pick = [];
    while (pick.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!pick.includes(number)) pick.push(number);
    }
    this.answer = pick;
    return this;
  }

  inputUserNumber() {
    Console.readLine('숫자를 입력해주세요 : ', (userInputValue) => {
      const userNumber = userInputValue
        .split('')
        .map((num) => parseInt(num, 10));
      this.validateUserInput(userInputValue, false);
      console.log('input', userNumber, this.answer);
      this.printResultMessage(userNumber);
      this.isGuessSuccess(userNumber);
    });
    return this;
  }

  validateUserInput(userInput, isThreeStrike) {
    // 3스트라이크가 나왔을 때
    if (isThreeStrike) {
      // 1 or 2만 입력받을 수 있음
      switch (userInput) {
        case '1':
          return true;
        case '2':
          return true;
        default:
          throw Error('1 또는 2 이외의 입력은 유효하지 않습니다.');
      }
    } else {
      // 3스트라이크가 나오지 않았을 때
      // 123같은 3자리 수만 입력 가능
      if (userInput.length === 3) return true;
      throw Error('입력값이 3자리 수가 아닙니다.');
    }
  }

  isGuessSuccess(userNumber) {
    const { strike } = this.getGameResult(userNumber, this.answer);
    if (strike === 3) this.askRestart();
    else this.inputUserNumber();
  }

  askRestart() {
    Console.readLine(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
      (answer) => {
        this.validateUserInput(answer, true);
        if (answer === '1') this.gameRestart();
        else this.gameExit();
      }
    );
  }

  gameRestart() {
    this.createAnswer();
    this.inputUserNumber();
  }

  gameExit() {
    this.print('게임 종료');
    Console.close();
  }

  countStrike(user, computer) {
    let strike = 0;
    user.forEach((number, i) => {
      if (number === computer[i]) strike += 1;
    });
    return strike;
  }

  countBall(user, computer) {
    let ball = 0;
    user.forEach((number, i) => {
      if (computer.includes(number) && computer[i] !== number) ball += 1;
    });
    return ball;
  }

  getGameResult(user, computer) {
    const strike = this.countStrike(user, computer);
    const ball = this.countBall(user, computer);

    return { strike, ball };
  }

  printResultMessage(userNumber) {
    const { strike, ball } = this.getGameResult(userNumber, this.answer);

    if (strike === 3) {
      this.print('3스트라이크');
      this.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    } else if (strike === 0 && ball === 0) this.print('낫싱');
    else if (strike === 0) this.print(`${ball}볼`);
    else if (ball === 0) this.print(`${strike}스트라이크`);
    else this.print(`${ball}볼 ${strike}스트라이크`);
  }

  print(string) {
    Console.print(string);
  }
}

const app = new App();
app.play();

module.exports = App;
