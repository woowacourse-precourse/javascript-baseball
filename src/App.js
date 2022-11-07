const MissionUtils = require("@woowacourse/mission-utils");

class App {
  printStart() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
  }
  makeAnswer() {
    const answer = [];
    while (answer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!answer.includes(number)) {
        answer.push(number);
      }
    }
    return answer;
  }

  isCorrectInput(value) {
    const regExp = /^[1-9]{3}$/;
    if (!regExp.test(value))
      throw new Error("길이에러, 숫자가 아닌 값");

    let overlapReg = new RegExp(/(.)\1+/g);
    if (overlapReg.test(value))
      throw new Error("중복된 값");
  }

  isCorrectRestartInput(value) {
    const regExp = /^[1-2]{1}$/;
    if (!regExp.test(value))
      throw new Error("잘못된 재시작 값");
  }


  stringToAnswerType(value) {
    return value.split('').map(Number);
  }

  compare(answer, input) {
    let result = {
      strike: 0,
      ball: 0,
      nothing: 0,
    }

    for (let index = 0; index < input.length; index++) {
      if (input[index] === answer[index]) {
        result.strike += 1;
        continue;
      }
      if (answer.includes(input[index])) {
        result.ball += 1;
        continue;
      }
      result.nothing += 1;
    }
    return result;
  }

  printResult(result) {
    if (result.strike === 3) {
      MissionUtils.Console.print("3스트라이크");
      return;
    }
    if (result.nothing === 3) {
      MissionUtils.Console.print("낫싱");
      return;
    }
    MissionUtils.Console.print(`${result.ball}볼 ${result.strike}스트라이크`);
  }

  isAnswer(result) {
    return result.strike === 3;
  }

  askRestart() {
    MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    MissionUtils.Console.readLine("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.", (input) => {
      this.isCorrectRestartInput(input);
      if (input === "1") { // 재시작
        this.newGame();
      }
      if (input === "2") { // 종료
        MissionUtils.Console.close();
      }
    })
  }

  guessAnswer(answer) {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (input) => {
      this.isCorrectInput(input);
      input = this.stringToAnswerType(input);
      let result = this.compare(answer, input);
      this.printResult(result);
      this.isAnswer(result) ? this.askRestart() : this.guessAnswer(answer);

    });
  }

  newGame() {
    let answer = this.makeAnswer();
    console.log(answer);
    this.guessAnswer(answer)
  }

  play() {
    this.printStart();
    this.newGame();
  }
}

const app = new App();
app.play();

module.exports = App;
