const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor(answer) {
    this.answer = answer;
    this.isDone = false;
  }

  startGame() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
  }

  createRandom() {
    const numbers = [];
    while (numbers.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!numbers.includes(number)) {
        numbers.push(number);
      }
    }
    this.answer = numbers;
  }

  getUserInput(currentAnswer) {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (answer) => {
      this.createHint(answer, currentAnswer);
    });
  }

  addScore(obj, position) {
    obj[position] += 1;
  }

  checkInputIsCorrect(userInput, currentAnswer) {
    const score = {
      strike: 0,
      ball: 0,
    };
    for (let i = 0; i < 3; i++) {
      if (Number(userInput[i]) === currentAnswer[i]) {
        this.addScore(score, "strike");
      } else if (currentAnswer.includes(Number(userInput[i]))) {
        this.addScore(score, "ball");
      }
    }
    return score;
  }

  printHint(hint) {
    MissionUtils.Console.print(hint);
  }

  createHint(input, currentAnswer) {
    const score = this.checkInputIsCorrect(input, currentAnswer);
    let hint;

    switch (score.strike === 0) {
      case true:
        score.ball === 0 ? (hint = "낫싱") : (hint = `${score.ball}볼`);
        break;
      case false:
        score.ball === 0
          ? (hint = `${score.strike}스트라이크`)
          : (hint = `${score.ball}볼 ${score.strike}스트라이크`);
    }
    this.printHint(hint);
    if (hint === "3스트라이크") {
      this.printGameOver();
      return;
    }
    this.isDone = false;
  }

  printGameOver() {
    MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    this.printAskRetry();
    this.isDone = true;
  }

  printAskRetry() {
    MissionUtils.Console.print(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
    );
  }

  play() {
    this.startGame();
    this.createRandom();
    this.getUserInput(this.answer);
  }
}

module.exports = App;
