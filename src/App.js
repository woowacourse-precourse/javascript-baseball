const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    this.startGame();
  }

  startGame() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.creatComputerAnswer;

    const playerAnswer = [];
    do {
      MissionUtils.Console.readLine("숫자를 입력해주세요.", (answer) => {
        playerAnswer.push(answer.split("").map(Number));
        this.verifyPlayerAnswer(playerAnswer);
        this.compareAnswer(playerAnswer);
      });
    } while (
      JSON.stringify(this.creatComputerAnswer()) ===
      JSON.stringify(playerAnswer)
    );
  }

  creatComputerAnswer() {
    const computerAnswer = [];
    while (computerAnswer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computerAnswer.includes(number)) {
        computerAnswer.push(number);
      }
    }
    return computerAnswer;
  }

  verifyPlayerAnswer(playerAnswer) {
    if (Number.isNaN(playerAnswer)) {
      throw new Error("숫자가 아닙니다.");
    }
    if (playerAnswer.length === 3) {
      throw new Error("3자리 숫자가 아닙니다.");
    }
    if (
      playerAnswer.some(
        (playerAnswerElement) =>
          1 <= playerAnswerElement && playerAnswerElement <= 9
      )
    ) {
      throw new Error("1~9 사이의 숫자가 아닙니다.");
    }
    if (playerAnswer.some((num, index, arr) => arr.indexOf(num) !== index)) {
      throw new Error("중복된 숫자가 있습니다.");
    }
  }

  compareAnswer(playerAnswer) {
    //const computerNum = this.creatComputerAnswer();
    if (this.ball()) {
      MissionUtils.Console.print(ballArray + "볼");
    }
    if (this.strike()) {
      MissionUtils.Console.print(strikeArray.length + "스트라이크");
    }
    if (
      !this.creatComputerAnswer().every((number) =>
        playerAnswer.includes(number)
      )
    ) {
      MissionUtils.Console.print("낫싱");
    }
    if (
      JSON.stringify(this.creatComputerAnswer()) ===
      JSON.stringify(playerAnswer)
    ) {
      const gameEndString = `3 스트라이크
    3개의 숫자를 모두 맞히셨습니다! 게임 종료`;
      MissionUtils.Console.print(gameEndString);
      this.endGame();
    }
  }

  ball() {
    const ballArray = [];
    for (let i = 0; i < this.creatComputerAnswer.length; i++) {
      if (
        this.creatComputerAnswer[i] !== playerAnswer[i] &&
        this.creatComputerAnswer.includes(playerAnswer[i])
      ) {
        ballArray.push(i);
      }
    }
    return ballArray.length > 0 === true;
  }

  strike() {
    const strikeArray = [];
    for (let i = 0; i < this.creatComputerAnswer.length; i++) {
      if (this.creatComputerAnswer[i] === playerAnswer[i]) {
        strikeArray.push(i);
      }
    }
    return (
      strikeArray.length > 0 &&
      strikeArray.length > this.creatComputerAnswer === true
    );
  }

  endGame() {
    MissionUtils.Console.Console.readLine(
      "게임을 다시 시작하려면 1, 종료하려면 2를 입력하세요.",
      (num) => {
        reStartOrEnd(num);
      }
    );
  }

  reStartOrEnd(num) {
    switch (num) {
      case 1:
        App.play();

      case 2:
        MissionUtils.Console.print("게임 종료");
        MissionUtils.Console.close();

      default:
        throw new Error("잘못된 값을 입력했습니다.");
    }
  }
}

const app = new App();
app.play();

module.exports = App;
