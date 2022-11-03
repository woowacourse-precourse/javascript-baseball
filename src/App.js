const { Random, Console } = require('@woowacourse/mission-utils');

const isValidNumber = (userInputValue) => {
  const regex = /^[1-9]{3}$/;
  if (!regex.test(userInputValue.join(''))) {
    throw Error('1~9까지의 숫자 중 세개의 숫자를 입력해주세요');
  }
};

const stringToNumbers = (string) => [...string].map((char) => +char);

const offerUserInput = async () => {
  return new Promise((resolve) => {
    Console.readLine('숫자를 입력해주세요 : ', (nums) => resolve(nums));
  });
};

class App {
  constructor() {
    this.offerComputerRandomNumbers();
    this.userInputNumbers;
  }

  offerComputerRandomNumbers() {
    this.computerNumbers = Random.pickUniqueNumbersInRange(1, 9, 3);
  }
  play() {
    this.gameStart();
  }
  gameStart() {
    Console.print('숫자 야구 게임을 시작합니다.');
    this.getUserInputNumbers();
  }
  async getUserInputNumbers() {
    const userInputValue = await offerUserInput();
    this.userInputNumbers = stringToNumbers(userInputValue);
    this.isValid();
  }
  isValid() {
    isValidNumber(this.userInputNumbers);
  }
}

const app = new App();
app.play();

module.exports = App;
