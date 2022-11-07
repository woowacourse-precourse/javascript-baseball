const MissionUtils = require("@woowacourse/mission-utils");
const {
  print,
  isEqual,
  throwException,
  generateRandomNumber,
} = require("./Util");

class App {
  play() {
    const GAME_START_MESSAGE = "숫자 야구 게임을 시작합니다.";
    print(GAME_START_MESSAGE);
    this.initGame();
  }
  initGame() {
    const DIGITS = 3;
    const answer = generateRandomNumber(DIGITS);
    this.playRound(answer);
  }
  playRound(answer) {
    const INPUT_MESSAGE = "숫자를 입력해주세요 : ";
    const GAME_END_MESSAGE = "3개의 숫자를 모두 맞히셨습니다! 게임 종료";
    const ERROR_MESSAGE = "Invalid Input!";
    const digits = answer.length;

    MissionUtils.Console.readLine(INPUT_MESSAGE, (userNumber) => {
      if (!this.isValidNumber(userNumber, digits))
        throwException(ERROR_MESSAGE);
      const [ballCount, strikeCount] = this.checkBaseballCount(
        answer,
        userNumber
      );
      this.printResult([ballCount, strikeCount]);
      if (this.isCorrectAnswer(strikeCount, digits)) {
        print(GAME_END_MESSAGE);
        this.selectRestartOrExit();
      }
      this.playRound(answer);
    });
  }
  selectRestartOrExit() {
    const FINAL_MESSAGE =
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n";
    const ERROR_MESSAGE = "Invalid Input!";
    const RESTART = 1,
      EXIT = 2;
    MissionUtils.Console.readLine(FINAL_MESSAGE, (command) => {
      if (!this.isValidCommand(command)) throwException(ERROR_MESSAGE);
      if (command == RESTART) this.initGame();
      if (command == EXIT) MissionUtils.Console.close();
    });
  }
  checkBaseballCount(answer, userNumber) {
    const userNumberList = userNumber.split("").map((num) => Number(num));
    const notStrikeList = [];
    let ballCount = 0;
    let strikeCount = 0;

    userNumberList.forEach((num, index) => {
      if (isEqual(num, answer[index])) strikeCount++;
      else notStrikeList.push(num);
    });
    notStrikeList.forEach((num) => {
      if (answer.includes(num)) ballCount++;
    });

    return [ballCount, strikeCount];
  }
  printResult(baseBallCounts) {
    const message = this.getResult(baseBallCounts);
    print(message);
  }
  getResult([ballCount, strikeCount]) {
    const totalCount = ballCount + strikeCount;
    let message = "";
    if (isEqual(totalCount, 0)) {
      message = "낫싱";
      return message;
    }
    if (!isEqual(ballCount, 0)) {
      message = message + `${ballCount}볼 `;
    }
    if (!isEqual(strikeCount, 0)) {
      message = message + `${strikeCount}스트라이크`;
    }
    return message;
  }
  isCorrectAnswer(strikeCount, digits) {
    return isEqual(strikeCount, digits);
  }
  isValidNumber(num, digits) {
    if (isNaN(num)) return false;

    const numList = num.split("");
    if (!isEqual(numList.length, digits)) return false;

    const numSet = numList.reduce((numSet, num) => {
      return numSet.add(num);
    }, new Set());
    if (numSet.has("0")) return false;
    if (!isEqual(numSet.size, digits)) return false;

    return true;
  }
  isValidCommand(command) {
    const commandList = ["1", "2"];
    return commandList.includes(command);
  }
}
const app = new App();
app.play();

module.exports = App;
