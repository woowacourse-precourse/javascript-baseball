const MissionUtils = require("@woowacourse/mission-utils");

class App {
  #playerInput;

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
    this.#playerInput = playerInput.split("");
    this.#missionUtils.Console.close();
  }

  #countStrikeAndBall(number, index) {
    let strike = 0;
    let ball = 0;
    if (this.#answer.has(number) && this.#answer[index] === number) {
      strike++;
    } else if (this.#answer.has(number)) {
      ball++;
    }
    return { strike, ball };
  }

  #compareAnswer() {
    let strike = 0;
    let ball = 0;
    this.#answer.forEach(
      (number, index) =>
        ({ strike, ball } = this.#countStrikeAndBall(number, index))
    );
    return { strike, ball };
  }

  play() {
    this.#printStartMessage();
    this.#makeAnswer();
    this.#getPlayerInput();
  }
}

module.exports = App;
