const MissionUtils = require("@woowacourse/mission-utils");

class App {
  #playerInput;
  #strike;
  #ball;

  constructor() {
    this.#missionUtils = new MissionUtils();
    this.#answer = new Set();
  }

  #printStartMessage() {
    this.#missionUtils.Console.print("숫자 야구 게임을 시작합니다.");
  }

  #makeAnswer() {
    const randomNumber = this.#missionUtils.Random.getRandomNumber(1, 9);
    this.#answer.add(randomNumber);
    if (this.#answer.size < 3) {
      this.#makeAnswer();
    } else {
      return;
    }
  }

  #validatePlayerInput(input) {
    if (input.length !== 3) {
      throw new Error("입력값은 3자리 숫자여야 합니다.");
    }
    if (new Set(input.split("")).size !== 3) {
      throw new Error("입력값은 중복되지 않은 숫자여야 합니다.");
    }
    if (input.includes(" ")) {
      throw new Error("입력값은 공백을 포함할 수 없습니다.");
    }
    if (input.split("").some((number) => number < 1 || number > 9)) {
      throw new Error("입력값은 1부터 9까지의 숫자여야 합니다.");
    }
    return input;
  }

  #getPlayerInput() {
    const playerInput = this.#missionUtils.Console.getInput(
      "숫자를 입력해주세요: ",
      this.#validatePlayerInput
    );
    this.#playerInput = playerInput.split("").map((number) => Number(number));
    this.#missionUtils.Console.close();
  }

  #countStrikeAndBall(number, index) {
    if (number === this.#playerInput[index]) {
      this.strike++;
    } else if (this.#playerInput.includes(number)) {
      this.ball++;
    }
  }

  #compareAnswer() {
    this.#answer.forEach(this.#countStrikeAndBall);
  }

  #makeResult() {
    if (this.#strike === 3) {
      return "3스트라이크";
    } else if (this.#strike === 0 && this.#ball === 0) {
      return "낫싱";
    } else if (this.#strike === 0 && this.#ball !== 0) {
      return `${this.#ball}볼`;
    } else if (this.#strike !== 0 && this.#ball === 0) {
      return `${this.#strike}스트라이크`;
    } else {
      return `${this.#strike}스트라이크 ${this.#ball}볼`;
    }
  }

  #clearStrikeAndBall() {
    this.#strike = 0;
    this.#ball = 0;
  }

  #validateContinueInput(input) {
    if (input !== "1" && input !== "2") {
      throw new Error("입력값은 1 또는 2여야 합니다.");
    }
    return input;
  }
  #getContinueInput() {
    const continueInput = this.#missionUtils.Console.getInput(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
      this.#validateContinueInput
    );
    this.#missionUtils.Console.close();
    return continueInput;
  }

  #printEndMessage() {
    this.#missionUtils.Console.print(
      "3개의 숫자를 모두 맞히셨습니다! 게임 종료"
    );
    this.#missionUtils.Console.getInput(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
    );
    this.#missionUtils.Console.close();
  }

  #printResult() {
    const result = this.#makeResult();
    this.#missionUtils.Console.print(result);
    if (this.#strike === 3) {
      this.#printEndMessage();
    }
    this.#clearStrikeAndBall();
  }

  play() {
    this.#printStartMessage();
    this.#makeAnswer();
    this.#getPlayerInput();
    this.#compareAnswer();
    this.#printResult();
  }
}

module.exports = App;
