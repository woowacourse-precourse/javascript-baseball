// Array.equals(compare:Array) : boolean
Array.prototype.equals = function (compare) {
  const MAX_LENGTH = Math.max(this.length, compare.length);
  for (let i = 0; i < MAX_LENGTH; i++) {
    if (this[i] !== compare[i]) break;
    if (i === MAX_LENGTH - 1) {
      return true;
    }
  }
  return false;
};

// import mission-utils
const MU = require("@woowacourse/mission-utils");

// 콘솔 메시지 목록
const messages = {
  START: "숫자 야구 게임을 시작합니다.",
  INPUT_NUMBER: "숫자를 입력해주세요 :",
  CLEAR: "3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료",
  EXIT_QUESTION: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
  STRIKE: "스트라이크",
  BALL: "볼",
  NOTHING: "낫싱",
};

class App {
  constructor() {
    let cleared = false; // 게임 클리어 여부
    console.log(messages.START);
  }

  play() {
    let computer = this.setComputerNumber();
    let player = this.inputPlayerNumber();

    while (this.cleared !== true) {
      this.getResult(computer, player);
      player = this.inputPlayerNumber();
    }
  }

  setComputerNumber() {
    const computer = [];

    while (computer.length < 3) {
      const number = MU.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }

    return computer;
  }

  inputPlayerNumber() {
    let input = "";
    MU.Console.readLine(messages.INPUT_NUMBER, (i) => {
      input = i;
      MU.Console.close();
    });

    if (this.validateInput(input)) {
      return input.split("").map((el) => +el);
    } else this.exit();
  }

  validateInput(input) {
    const NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    if (input.length !== 3) return false;

    input = [...new Set(input.split(""))].map((el) => +el);
    if (input.length !== 3) return false;

    input = input.filter((el) => NUMBERS.includes(el));
    if (input.length !== 3) return false;

    return true;
  }

  getResult(computer, player) {
    const intersection = player.filter((num) => computer.includes(num));
    let strike = 0;
    let ball = 0;

    if (computer.equals(player)) {
      this.cleared = true;
      this.exit();
    } else {
      if (intersection.length === 0) MU.Console.print(messages.NOTHING);
      else {
        intersection.forEach((el) => {
          computer.indexOf(el) === player.indexOf(el)
            ? (strike += 1)
            : (ball += 1);
        });
        MU.Console.print(
          `${ball !== 0 ? ball + messages.BALL + " " : ""}${
            strike !== 0 ? strike + messages.STRIKE : ""
          }`
        );
      }
    }
  }

  exit() {
    if (this.cleared) {
      MU.Console.print(messages.CLEAR);
      MU.Console.readLine(messages.EXIT_QUESTION, (input) => {
        if (input === "1") {
          this.cleared = false;
          this.play();
        }
      });
    } else throw new Error("입력의 형태가 잘못되었습니다.");
  }
}

module.exports = App;
