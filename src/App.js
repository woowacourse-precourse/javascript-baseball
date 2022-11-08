const MissionUtils = require("@woowacourse/mission-utils");
const { Console, Random } = MissionUtils;

class App {
  play() {
    this.printStartGame();
    this.requireInputRandomNumber(this.createRandomNumber());
  }

  printStartGame() {
    Console.print("숫자 야구 게임을 시작합니다.");
  }

  createRandomNumber() {
    const randomNumberList = [];

    while (randomNumberList.length < 3) {
      const collectRandomNumber = Random.pickNumberInRange(1, 9);
      !randomNumberList.includes(collectRandomNumber) &&
        randomNumberList.push(collectRandomNumber);
    }

    return randomNumberList;
  }

  requireInputRandomNumber(randomNumber) {
    Console.print("숫자를 입력해주세요 : ");
    Console.readLine(" ", (answer) => {
      this.isRandomInputErrorCase(answer);

      if (this.isCorrectNumber(randomNumber, answer)) {
        Console.print("3스트라이크");
        Console.print(
          "3개의 숫자를 모두 맞히셨습니다! 게임 종료\n게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
        );
        Console.readLine(
          " ",
          (input) => {
            if (this.checkInputRestartExit(input)) {
              this.requireInputRandomNumber(this.createRandomNumber());
            } else {
              Console.print("게임 종료");
              Console.close();
            }
          }
        );
      } else {
        Console.print(this.resultBaseballRule(randomNumber, answer));
        this.requireInputRandomNumber(randomNumber);
      }
    });
  }

  isRandomInputErrorCase(answer) {
    const exceptionInput = answer;

    const inputList = exceptionInput?.split("");
    const setCollection = new Set(inputList);
    const isSame = setCollection.size !== inputList?.length;

    if (
      exceptionInput?.split("").map(Number).includes(0) ||
      exceptionInput?.split("").includes("-") ||
      isNaN(exceptionInput) ||
      exceptionInput?.toString().length !== 3 ||
      isSame
    ) {
      throw new Error("잘못입력함. 종료");
    }
  }

  isCorrectNumber(randomNumber, answer) {
    return randomNumber?.join("") === answer;
  }

  resultBaseballRule(randomNumber, answer) {
    const random = randomNumber;
    const input = answer.split("").map(Number);

    let strikeCount = 0;
    let ballCount = 0;
    for (let i = 0; i < random?.length; i++) {
      random.includes(input[i]) && random[i] === input[i] && strikeCount++;

      random.includes(input[i]) && random[i] !== input[i] && ballCount++;
    }

    const resultBaseball =
      (ballCount ? `${ballCount}볼 ` : "") +
      (strikeCount ? `${strikeCount}스트라이크` : "");
    return resultBaseball ? resultBaseball : "낫싱";
  }

  checkInputRestartExit(input) {
    if (input === "1") {
      return true;
    } else if (input === "2") {
      return false;
    } else {
      throw new Error("잘못된 값 입력");
    }
  }
}

const app = new App();
app.play();

module.exports = App;
