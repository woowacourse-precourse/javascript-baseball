const MissionUtils = require("@woowacourse/mission-utils");
const { Console, Random } = MissionUtils;
import {
  isNumber,
  isOneToNine,
  isThree,
  isAllDifferent,
} from "./utils/inputCheck.js";
class App {
  #userNumber;
  #computerNumber;
  // 생성자
  constructor() {
    this.#userNumber = "";
    this.#computerNumber = "";
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
        Console.print("잘못된 숫자를 입력하였습니다.");
      this.#userNumber = [...input];
    });
  }
  // 컴퓨터 랜덤 숫자 생성
  makeComputerRandomNumbers() {
    this.#computerNumber = [...this.#computerNumber];
    while (this.#randomNumber.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!this.#randomNumber.includes(number))
        this.#randomNumber += `${number}`;
    }
    this.#randomNumber = [...this.#randomNumber];
  }

  // 게임 플레이
  play() {
    this.printStart();
  }
}

const app = new App();
app.play();
module.exports = App;
