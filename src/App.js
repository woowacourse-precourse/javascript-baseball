const MissionUtils = require('@woowacourse/mission-utils');

class App {
  #randomNumber = [];

  play() {
    this.#randomNumber = App.generateRandomNumber();
    this.askUserInput();
  }

  // 컴퓨터가 사용할 랜덤한 숫자를 구하는 기능
  static generateRandomNumber() {
    const randomSet = new Set();
    while (randomSet.size < 3) {
      randomSet.add(MissionUtils.Random.pickNumberInRange(1, 9));
    }
    return [...randomSet];
  }

  // 사용자의 입력을 받는 기능
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
    this.getComputerOutput(userInput);
  }

  // 사용자가 입력한 값이 적절한지 검증하는 기능
  static isValidUserInput(input) {
    const REGEX = /^[1-9]{3}$/;
    if (REGEX.test(input) && new Set(input).size === 3) {
      return true;
    }
    return false;
  }

  // 사용자가 입력한 값을 판단하여 결과를 출력하는 기능
  getComputerOutput(userInput) {
    const [balls, strikes] = this.countBallsAndStrikes(userInput);
    let result = '';
    if (!balls && !strikes) {
      result = '낫싱';
    }
    if (balls || strikes) {
      if (balls) {
        result = `${balls}볼`;
      }
      if (strikes) {
        result = `${strikes}스트라이크`;
      }
    }
    if (balls && strikes) {
      result = `${balls}볼 ${strikes}스트라이크`;
    }
    MissionUtils.Console.print(result);
  }

  // 사용자가 입력한 값을 볼, 스트라이크로 판단하는 기능
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
}

const app = new App();
app.play();

module.exports = App;
