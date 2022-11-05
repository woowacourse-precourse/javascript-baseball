const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    const GAME_START_MESSAGE = "숫자 야구 게임을 시작합니다.";
    this.print(GAME_START_MESSAGE);
    this.initGame();
  }
  async initGame() {
    const DIGITS = 3;
    const answer = this.generateRandomNumber(DIGITS);
    await this.playRound(answer);
    await this.selectRestartOrExit();
  }
  async playRound(answer) {
    const INPUT_MESSAGE = "숫자를 입력해주세요 : ";
    const GAME_END_MESSAGE = "3개의 숫자를 모두 맞히셨습니다! 게임 종료";
    const ERROR_MESSAGE = "Invalid Input!";
    const digits = answer.length;

    while (true) {
      const userNumber = await this.readLine(INPUT_MESSAGE);
      if (!this.isValidNumber(userNumber, digits))
        this.throwException(ERROR_MESSAGE);
      const [ballCount, strikeCount] = this.checkBaseballCount(
        answer,
        userNumber
      );
      this.printResult([ballCount, strikeCount]);
      if (this.isCorrectAnswer(strikeCount, digits)) {
        this.print(GAME_END_MESSAGE);
        break;
      }
    }
  }
  async selectRestartOrExit() {
    const FINAL_MESSAGE =
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n";
    const ERROR_MESSAGE = "Invalid Input!";
    const RESTART = 1,
      EXIT = 2;
    const command = await this.readLine(FINAL_MESSAGE);
    if (!this.isValidCommand(command)) this.throwException(ERROR_MESSAGE);
    if (command == RESTART) this.initGame();
    if (command == EXIT) MissionUtils.Console.close();
  }
  generateRandomNumber(digits) {
    const START_INCLUSIVE = 1,
      END_INCLUSIVE = 9;
    const randomNumberSet = new Set();

    while (randomNumberSet.size < digits) {
      const num = MissionUtils.Random.pickNumberInRange(
        START_INCLUSIVE,
        END_INCLUSIVE
      );
      randomNumberSet.add(num);
    }

    return [...randomNumberSet];
  }
  checkBaseballCount(answer, userNumber) {
    const userNumberList = userNumber.split("").map((num) => Number(num));
    const notStrikeList = [];
    let ballCount = 0;
    let strikeCount = 0;

    userNumberList.forEach((num, index) => {
      if (this.isEqual(num, answer[index])) strikeCount++;
      else notStrikeList.push(num);
    });
    notStrikeList.forEach((num) => {
      if (answer.includes(num)) ballCount++;
    });

    return [ballCount, strikeCount];
  }
  printResult(baseBallCounts) {
    const message = this.getResult(baseBallCounts);
    this.print(message);
  }
  getResult([ballCount, strikeCount]) {
    const totalCount = ballCount + strikeCount;
    let message = "";
    if (this.isEqual(totalCount, 0)) {
      message = "낫싱";
      return message;
    }
    if (!this.isEqual(ballCount, 0)) {
      message = message + `${ballCount}볼 `;
    }
    if (!this.isEqual(strikeCount, 0)) {
      message = message + `${strikeCount}스트라이크`;
    }
    return message;
  }
  print(message) {
    MissionUtils.Console.print(message);
  }
  isEqual(a, b) {
    return a === b;
  }
  isCorrectAnswer(strikeCount, digits) {
    return this.isEqual(strikeCount, digits);
  }
  isValidNumber(num, digits) {
    if (isNaN(num)) return false;

    const numList = num.split("");
    if (!this.isEqual(numList.length, digits)) return false;

    const numSet = numList.reduce((numSet, num) => {
      return numSet.add(num);
    }, new Set());
    if (numSet.has("0")) return false;
    if (!this.isEqual(numSet.size, digits)) return false;

    return true;
  }
  isValidCommand(command) {
    const commandList = ["1", "2"];
    return commandList.includes(command);
  }
  throwException(message) {
    MissionUtils.Console.close();
    throw new Error(message);
  }
}
const app = new App();
app.play();

module.exports = App;
