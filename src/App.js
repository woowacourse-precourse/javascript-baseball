class App {

  constructor() {
    this.answer = [];
  }

  play() {
    console.log("숫자 야구 게임을 시작합니다.");
    this.generateAnswer();
    const MissionUtils = require("@woowacourse/mission-utils");
    MissionUtils.Console.readLine("숫자를 입력해 주세요: ", (num) => {
      this.determineResult(num);
  });
  }

  generateAnswer() {
    const MissionUtils = require("@woowacourse/mission-utils");
    while (this.answer.length < 3) {
      let randomNum = MissionUtils.Random.pickNumberInRange(1, 9);
      if (this.answer.indexOf(randomNum) === -1) this.answer.push(randomNum);
    }
  }

  determineResult(num) {
    const MissionUtils = require("@woowacourse/mission-utils");
    const guess = num.toString().split("").map(element => Number(element));

    if (guess.length !== 3 || guess.includes(NaN)) {
      throw Error();
    }
    
    if (guess.length === 3 && !guess.includes(NaN)) {
      let countStrike = 0;
      let countBall = 0;
      let i = 0;

      while (i < 3 && guess.length === 3) {
        if (this.answer[i] === guess[i]) {
          countStrike++;
        }
        if (this.answer[i] !== guess[i] && guess.includes(this.answer[i])) {
          countBall++;
        }
        i++;
    }

    
  }
}

const app = new App;
app.play();

module.exports = App;
