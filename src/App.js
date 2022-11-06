const MissionUtils = require("@woowacourse/mission-utils");
const { Console, Random } = MissionUtils;

const isNumber = (input) => {
  return Number.isInteger(Number(input)) ? true : false;
};
const isOneToNine = (input) => {
  for (let i = 0; i < input.length; i++) {
    if (Number(input[i]) > 0 && Number(input[i]) < 10) return true;
  }
  return false;
};
const isThree = (input) => {
  return input.length === 3 ? true : false;
};
const isAllDifferent = (input) => {
  const unique = new Set(input);
  return unique.size === input.length ? true : false;
};

const isCompare = (computerNumber, playerNumber) => {
  let score = [0, 0]; // [스트라이크, 볼]
  for (let i = 0; i < 3; i++) {
    if (computerNumber[i] === playerNumber[i]) {
      score[0] += 1;
    } else if (computerNumber.includes(playerNumber[i])) {
      score[1] += 1;
    }
  }
  return score;
};

class App {
  #userNumber;
  #computerNumber;
  // 생성자
  constructor() {
    this.#userNumber = "";
    this.#computerNumber = "";
    this.getScore = [];
  }

  // 게임 시작 출력
  printStart() {
    Console.print("숫자 야구 게임을 시작합니다.");
  }

  // 플레이어 3개의 숫자 입력
  getUserInput() {
    Console.readLine("숫자를 입력해주세요 : ", (input) => {
      if (
        !isNumber(input) ||
        !isOneToNine(input) ||
        !isThree(input) ||
        !isAllDifferent(input)
      )
        throw new Error("잘못된 숫자를 입력하였습니다.");
      this.#userNumber = [...input];
      this.getScore = [];
      this.getScore = isCompare(this.#computerNumber, this.#userNumber); // 숫자 비교
      this.printResult();
    });
  }

  // 컴퓨터 랜덤 숫자 생성
  makeComputerRandomNumbers() {
    while (this.#computerNumber.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!this.#computerNumber.includes(number))
        this.#computerNumber += `${number}`;
    }
    this.#computerNumber = [...this.#computerNumber];
  }

  // 결과 출력
  printResult() {
    const [strike, ball] = this.getScore;

    const ballMessage = `${ball ? `${ball}볼 ` : ""}`;
    const strikeMessage = `${strike ? `${strike}스트라이크 ` : ""}`;
    const nothingMessage = `${!strike && !ball ? "낫싱" : ""}`;

    Console.print(ballMessage + strikeMessage + nothingMessage);
    // Console.print(this.#computerNumber);
    if (strike === 3) {
      Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      this.restart();
    } else this.getUserInput();
  }

  // 재시작
  restart() {
    Console.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
      (input) => {
        if (input === "1") {
          this.#computerNumber = "";
          this.gameStart();
          return;
        }
        if (input === "2") {
          Console.print("게임 종료");
          return;
        }
        throw new Error("잘못된 값을 입력하셨습니다.");
      }
    );
  }

  // 게임 시작 - 랜덤 숫자 생성, 플레이어 숫자 입력
  gameStart() {
    this.makeComputerRandomNumbers();
    this.getUserInput();
  }

  // 플레이 - 시작문 출력, 게임 시작
  play() {
    this.printStart();
    this.gameStart();
  }
}

module.exports = App;
