const MissionUtils = require('@woowacourse/mission-utils');
const { Console, Random } = MissionUtils;
const RANDOM_NUMBER_LENGTH = 3;
const FIRST_NUMBER = 1;
const LAST_NUMBER = 9;
const EXCEPT_NUMBER =0;
const INPUT_RESTART = '1';
const INPUT_EXIT = '2';

class App {
  play() {
    this.printStartGame();
    this.handleInputAnswer(this.createRandomNumber());
  }

  printStartGame() {
    Console.print('숫자 야구 게임을 시작합니다.');
  }

  createRandomNumber() {
    const randomNumberList = [];

    while (randomNumberList.length < RANDOM_NUMBER_LENGTH) {
      const collectRandomNumber = Random.pickNumberInRange(
        FIRST_NUMBER,
        LAST_NUMBER
      );
      !randomNumberList.includes(collectRandomNumber) &&
        randomNumberList.push(collectRandomNumber);
    }

    return randomNumberList;
  }

  handleInputAnswer(randomNumber) {
    Console.readLine('숫자를 입력해주세요 : ', (answer) => {
      this.isRandomInputErrorCase(answer);

      if (this.isCorrectNumber(randomNumber, answer)) {
        Console.print('3스트라이크');
        Console.print(
          '3개의 숫자를 모두 맞히셨습니다! 게임 종료\n게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.'
        );
        Console.readLine('', (input) => {
          if (this.checkInputRestartExit(input)) {
            this.handleInputAnswer(this.createRandomNumber());
          } else {
            Console.print('게임 종료');
            Console.close();
          }
        });
      } else {
        Console.print(this.resultBaseballRule(randomNumber, answer));
        this.handleInputAnswer(randomNumber);
      }
    });
  }

  isRandomInputErrorCase(answer) {
    const exceptionInput = answer;

    const inputList = exceptionInput?.split('');
    const setCollection = new Set(inputList);
    const isSame = setCollection.size !== inputList?.length;

    if (
      exceptionInput?.split('').map(Number)
        .includes(EXCEPT_NUMBER)
      || exceptionInput?.split('').includes('-')
      || isNaN(exceptionInput)
      || exceptionInput?.toString().length !== RANDOM_NUMBER_LENGTH
      || isSame
    ) {
      throw new Error('잘못입력함. 종료');
    }
  }

  isCorrectNumber(randomNumber, answer) {
    return randomNumber?.join('') === answer;
  }

  resultBaseballRule(randomNumber, answer) {
    const random = randomNumber;
    const input = answer.split('').map(Number);

    let strikeCount = 0;
    let ballCount = 0;
    for (let idx = 0; idx < random?.length; idx++) {
      if (random.includes(input[idx]) && random[idx] === input[idx]) strikeCount += 1;

      if (random.includes(input[idx]) && random[idx] !== input[idx]) ballCount += 1;
    }

    const resultBaseball =
      (ballCount ? `${ballCount}볼 ` : '') +
      (strikeCount ? `${strikeCount}스트라이크` : '');
    return resultBaseball ? resultBaseball : '낫싱';
  }

  checkInputRestartExit(input) {
    if (input === INPUT_RESTART) return true;
    if (input === INPUT_EXIT) return false;
    throw new Error('잘못된 값 입력');
  }
}

const app = new App();
app.play();

module.exports = App;
