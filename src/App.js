const MissionUtils = require("@woowacourse/mission-utils");

const mConsole = MissionUtils.Console;
const mRandom = MissionUtils.Random;
const GAME_NUMBER_LENGTH = 3;

class App {
  computerInputNumber = [];

  play() {
    this.startGame();
    this.getInput();
  }

  startGame() {
    mConsole.print("숫자 야구 게임을 시작합니다.");
    this.computerInputNumber = this.getComputerNumber();
  }

  getInput() {
    mConsole.readLine("숫자를 입력해주세요 : ", (pickedNumber) => {
      if (this.checkInputNumber(pickedNumber)) {
        const checkedUser = pickedNumber.split("").map(Number);
        const countResultArr = this.countInput(
          this.computerInputNumber,
          checkedUser
        );
        this.printResult(countResultArr);
      }
    });
  }

  checkScope(input) {
    if (input.includes(0)) throw "0이 아닌 1~9 사이 숫자를 입력해주세요.";
  }

  checkType(input) {
    if (isNaN(input)) throw "숫자를 입력해주세요.";
  }

  checkLength(input) {
    if (input.length !== GAME_NUMBER_LENGTH)
      throw `${GAME_NUMBER_LENGTH}개의 숫자를 입력해주세요.`;
  }

  checkDuplicatedInput(input) {
    if (input.length !== new Set(input).size)
      throw "서로 다른 숫자를 입력해주세요.";
  }

  checkInputNumber(input) {
    this.checkScope(input);
    this.checkType(input);
    this.checkLength(input);
    this.checkDuplicatedInput(input);

    return true;
  }

  getComputerNumber() {
    const computerNumber = new Set();
    while (computerNumber.size < GAME_NUMBER_LENGTH) {
      const newNumber = mRandom.pickNumberInRange(1, 9);
      if (!computerNumber.has(newNumber)) {
        computerNumber.add(newNumber);
      }
    }
    return [...computerNumber];
  }

  countInput(computerInput, userInput) {
    let BALLS = 0;
    let STRIKES = 0;
    for (let idx = 0; idx < GAME_NUMBER_LENGTH; idx++) {
      if (computerInput[idx] === userInput[idx]) STRIKES++;
      else if (computerInput.includes(userInput[idx])) BALLS++;
    }

    let countArr = [BALLS, STRIKES];
    return countArr;
  }

  printResult(count) {
    if (count[1] === GAME_NUMBER_LENGTH) {
      mConsole.print(
        `${GAME_NUMBER_LENGTH}스트라이크\n${GAME_NUMBER_LENGTH}개의 숫자를 모두 맞히셨습니다! 게임 종료`
      );
    } else {
      if (count[0] === 0 && count[1] === 0) mConsole.print("낫싱");
      else
        mConsole.print(
          `${count[0] > 0 ? count[0] + "볼 " : ""}${
            count[1] > 0 ? count[1] + "스트라이크" : ""
          }`.trim()
        );
    }
  }
}

const app = new App();
app.play();

module.exports = App;
