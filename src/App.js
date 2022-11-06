const MissionUtils = require('@woowacourse/mission-utils');

class App {
  #randomNumber = [];

  play() {
    this.#randomNumber = App.generateRandomNumber();
    this.askUserInput();
  }

  static generateRandomNumber() {
    const randomSet = new Set();
    while (randomSet.size < 3) {
      randomSet.add(MissionUtils.Random.pickNumberInRange(1, 9));
    }
    return [...randomSet];
  }

  askUserInput() {
    MissionUtils.Console.readLine(
      '숫자를 입력해주세요 : ',
      this.handleUserInput.bind(this),
    );
  }

  handleUserInput(answer) {
    if (!App.isValidUserInput(answer)) {
      throw new Error('잘못된 값을 입력하였습니다!');
    }
    const userInput = [...answer].map(number => +number);
    const didUserWin = this.computeResult(userInput);
    if (didUserWin) {
      MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
      this.askRestartOrEnd();
      return;
    }
    this.askUserInput();
  }

  static isValidUserInput(input) {
    const REGEX = /^[1-9]{3}$/;
    if (REGEX.test(input) && new Set(input).size === 3) {
      return true;
    }
    return false;
  }

  computeResult(userInput) {
    const [balls, strikes] = this.countBallsAndStrikes(userInput);
    const result = App.createResultText(balls, strikes);
    MissionUtils.Console.print(result);
    return strikes === 3;
  }

  countBallsAndStrikes(userInput) {
    return userInput.reduce(
      (acc, number, idx) => {
        const [balls, strikes] = acc;
        const isIncluded = this.#randomNumber.includes(number);
        const targetIndex = this.#randomNumber.indexOf(number);
        if (isIncluded && idx !== targetIndex) {
          return [balls + 1, strikes];
        }
        if (isIncluded && idx === targetIndex) {
          return [balls, strikes + 1];
        }
        return [balls, strikes];
      },
      [0, 0],
    );
  }

  static createResultText(balls, strikes) {
    if (!balls && !strikes) return '낫싱';
    if (balls && strikes) return `${balls}볼 ${strikes}스트라이크`;
    if (balls) return `${balls}볼`;
    return `${strikes}스트라이크`;
  }

  askRestartOrEnd() {
    MissionUtils.Console.readLine(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
      this.handleMenuInput.bind(this),
    );
  }

  handleMenuInput(answer) {
    if (!App.isValidMenuInput(answer)) {
      throw new Error('잘못된 값을 입력하였습니다!');
    }
    if (answer === '1') {
      this.play();
      return;
    }
    MissionUtils.Console.close();
  }

  static isValidMenuInput(input) {
    if (input === '1' || input === '2') {
      return true;
    }
    return false;
  }
}

const app = new App();
app.play();

module.exports = App;
