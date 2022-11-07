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

  stringToAnswerType(value) {
    return value.split('').map(Number);
  }

  guessAnswer() {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (input) => {
      this.isCorrectInput(input);
      input = stringToAnswer(input);
    });

  }

  play() {
    // this.printStart();

    let answer = this.makeAnswer();
    this.guessAnswer()


    // MissionUtils.Console.close();
  }
}

const app = new App();
app.play();

module.exports = App;
