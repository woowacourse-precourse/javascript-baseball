const { Console } = require("@woowacourse/mission-utils");
const { Random } = require("@woowacourse/mission-utils");

class App {
  play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    this.gameStart();
  }

  gameStart() {
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
      let [strike, ball] = this.checkStrikeAndBallInputNumber(inputNumber);
      this.printPoint(strike, ball);
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

  checkStrikeAndBallInputNumber(inputNumber) {
    let [strike, ball] = [0, 0];
    let splitInputNumber = [...inputNumber];
    splitInputNumber.forEach((number, index) => {
      const computerNumberIndex = this.computerNumber.indexOf(Number(number));
      if (computerNumberIndex === index) {
        strike += 1;
      } else if (computerNumberIndex !== -1) {
        ball += 1;
      }
    });
    return [strike, ball];
  }

  printPoint(strike, ball) {
    if (strike === 0 && ball === 0) {
      Console.print("낫싱");
      this.input();
    } else if (strike === 3) {
      Console.print(`${strike}스트라이크`);
      this.result();
    } else if (strike > 0 && ball === 0) {
      Console.print(`${strike}스트라이크`);
      this.input();
    } else if (strike === 0 && ball > 0) {
      Console.print(`${ball}볼`);
      this.input();
    } else {
      Console.print(`${ball}볼 ${strike}스트라이크`);
      this.input();
    }
  }

  result() {
    Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    Console.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
      (restartNumber) => {
        if (Number(restartNumber) === 1) {
          this.gameStart();
        } else if (Number(restartNumber) === 2) {
          Console.close();
        } else {
          throw new Error("잘못된 입력 값입니다.");
        }
      }
    );
  }
}

module.exports = App;
