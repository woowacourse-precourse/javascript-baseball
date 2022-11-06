const MissionUtils = require("@woowacourse/mission-utils");
const { Console, Random } = MissionUtils;
import {
  isNumber,
  isOneToNine,
  isThree,
  isAllDifferent,
} from "./utils/inputCheck.js";
import { isCompare } from "./utils/compareNumber.js";
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
        Console.print("잘못된 숫자를 입력하였습니다.");
      this.#userNumber = [...input];
    });
    this.getScore = isCompare(this.#computerNumber, this.#userNumber); // 숫자 비교
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
  // 결과 출력
  printResult() {
    const { ball, strike } = this.getScore;

    const ballMessage = `${ball ? `${ball}볼 ` : ""}`;
    const strikeMessage = `${strike ? `${strike}스트라이크 ` : ""}`;
    const nothingMessage = `${!strike && !ball ? "낫싱" : ""}`;

    Console.print(ballMessage + strikeMessage + nothingMessage);
    if (strike === 3)
      Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    else this.getUserInput();
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

const app = new App();
app.play();
module.exports = App;
