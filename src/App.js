const MissionUtils = require("@woowacourse/mission-utils");
const Console = MissionUtils.Console;
const Random = MissionUtils.Random;

class App {
  init() {
    this.answer = [];
    this.userInput = [];
  }

  printStartMessage() {
    Console.print("숫자 야구 게임을 시작합니다.");
  }

  makeNoutDuplicateRandomNumber() {
    const randomNumber = Random.pickNumberInRange(1, 9);
    if (!this.answer.includes(randomNumber)) {
      this.answer.push(randomNumber);
    }
  }

  makeAnswer() {
    while (this.answer.length < 3) {
      this.makeNoutDuplicateRandomNumber();
    }
  }

  isValid(userInput) {
    const NOT_THREE_NUM_ERROR = "입력은 3개까지 허용입니다.";
    const NOT_DIGIT_ERROR = "숫자만 입력해야 합니다.";
    const DUPLICATE_ERROR = "중복된 입력입니다.";
    const NOT_ALLOW_ZERO_ERROR = "1~9사이의 숫자만 입력하세요";

    if (userInput.length !== 3) throw NOT_THREE_NUM_ERROR;

    if (!isNaN(userInput)) throw NOT_DIGIT_ERROR;

    const array = [...userInput];
    const arraySet = new Set(array);
    if (arraySet.size !== array.length) throw DUPLICATE_ERROR;

    if (userInput.includes(0)) throw NOT_ALLOW_ZERO_ERROR;

    return true;
  }

  getStrikeBall() {
    const same = this.answer.filter((x) => this.userInput.includes(x));
    let nothing = -1;
    let size = same.length;
    let strike = 0;
    let ball = 0;

    if (same.length === 0) nothing++;
    while (size--) {
      if (
        this.answer.indexOf(same[size]) === this.userInput.indexOf(same[size])
      )
        strike++;
    }
    ball = same.length - strike;

    return [strike, ball, nothing];
  }

  isRepeat() {
    const INPUT_ERROR = "잘못된 입력입니다.(1, 2 이외의 입력)";
    MissionUtils.Console.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
      (input) => {
        if (input === "1") this.playBaseball();
        else if (input === "2") {
          MissionUtils.Console.print("게임 종료");
          MissionUtils.Console.close();
        } else throw INPUT_ERROR;
      }
    );
  }

  printResult() {
    let strike, ball, nothing;
    this.isValid(this.userInput);
    [strike, ball, nothing] = this.getStrikeBall();

    if (nothing === 0) MissionUtils.Console.print("낫싱");
    else if (strike === 3) {
      MissionUtils.Console.print("3스트라이크");
      MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      this.isRepeat();
    } else if (ball !== 0 && strike !== 0)
      MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
    else if (ball === 0) MissionUtils.Console.print(`${strike}스트라이크`);
    else if (strike === 0) MissionUtils.Console.print(`${strike}스트라이크`);
    this.getPlayerInput();
  }

  getPlayerInput() {
    Console.readLine("숫자를 입력해주세요: ", (input) => {
      this.userInput = input.split("").map((number) => Number(number));
      this.printResult();
    });
  }

  playBaseball() {
    this.init();
    this.makeAnswer();
    this.getPlayerInput();
  }

  play() {
    this.printStartMessage();
    this.playBaseball();
  }
}
const app = new App();
app.play();

module.exports = App;
