const MissionUtils = require("@woowacourse/mission-utils");
const { Console, Random } = MissionUtils;
import {
  isNumber,
  isOneToNine,
  isThree,
  isAllDifferent,
} from "./utils/inputCheck.js";
class App {
  #userInput;
  #computerNumber;
  // 생성자
  constructor() {
    this.#userInput = "";
    this.#computerNumber = "";
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
      this.#userInput = input;
    });
  }
  play() {}
}

const app = new App();
app.play();
module.exports = App;
