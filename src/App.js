const { Console } = require("@woowacourse/mission-utils");
const { Random } = require("@woowacourse/mission-utils");

class App {
  play() {
    this.gameStart();
  }

  gameStart() {
    Console.print("숫자 야구 게임을 시작합니다.");
    this.computerNumber = this.pickRandomNumber();
    this.input();
  }

  pickRandomNumber() {
    let randomNumber = [];
    while (randomNumber.length !== 3) {
      const pickNumber = Random.pickNumberInRange(1, 9);
      if (!randomNumber.includes(pickNumber)) {
        randomNumber.push(pickNumber);
      }
    }
    return randomNumber;
  }

  input() {
    Console.readLine("숫자를 입력해주세요 : ", (inputNumber) => {
      this.checkErrorInputNumber(inputNumber);
      this.checkStrikeInputNumber(inputNumber);
    });
  }

  checkErrorInputNumber(inputNumber) {
    const isDuplicateNumber =
      inputNumber[0] === inputNumber[1] ||
      inputNumber[1] === inputNumber[2] ||
      inputNumber[0] === inputNumber[2];

    //잘못된 입력 찾기
    if (
      Number.isNaN(inputNumber) ||
      inputNumber.length !== 3 ||
      isDuplicateNumber
    ) {
      throw new Error("잘못된 입력 값입니다.");
    }
  }

  checkStrikeInputNumber(inputNumber) {
    let strike = 0;
    let splitInputNumber = [...inputNumber];
    splitInputNumber.forEach((ball) => {
      if (this.computerNumber.includes(Number(ball))) {
        strike += 1;
      }
    });
  }
}

module.exports = App;
