const MissionUtils = require("@woowacourse/mission-utils");
class App {
  static answer;
  static hint;

  play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    this.answer = this.generateComputerNumber();
    this.startGame();
  }

  generateComputerNumber() {
    const computerNumber = [];
    while (computerNumber.length < 3) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computerNumber.includes(randomNumber)) {
        computerNumber.push(randomNumber);
      }
    }
    return computerNumber;
  }

  startGame() {
    MissionUtils.Console.readline('숫자를 입력해주세요 : ', (inputNumber) => {
      this.throwError(inputNumber);
      MissionUtils.Console.print(this.hint);
      this.checkAnswer();
    })
  }

  throwError(inputNumber) {
    if (!this.checkInput(inputNumber)) throw new Error('잘못된 입력입니다.');
    this.hint = this.getHint(this.answer, inputNumber);
  }

  checkInput(inputNumber) {
    let listOfNumber = [...inputNumber];
    if (!Number(inputNumber)) return false;
    if (
      listOfNumber[0] === listOfNumber[1] ||
      listOfNumber[0] === listOfNumber[2] ||
      listOfNumber[1] === listOfNumber[2]) return false;
    if (listOfNumber.includes('0')) return false;
  }

  getHint(answer, inputNumber) {
    let strike = 0;
    let ball = 0;
    let result = '';
    let hint = '';
    for (let i = 0; i < answer.length; i++) {
      result = this.CheckStrikeBall(answer, inputNumber, i);
      if (result === 'strike') strike += 1;
      else if (result === 'ball') ball += 1;
    }
    hint = this.makeHint(strike, ball);
    return hint;

  }
}

module.exports = App;
