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

    if (countStrike === 0 && countBall === 0) {
      MissionUtils.Console.print("낫싱");
    }
    if (countStrike === 0 && countBall !== 0) {
      MissionUtils.Console.print(countBall + "볼");
    }
    if (countBall === 0 && countStrike !== 3 && countStrike !== 0) {
      MissionUtils.Console.print(countStrike + "스트라이크");
    }
    if (countStrike !== 0 && countBall !== 0) {
      MissionUtils.Console.print(countBall + "볼 " 
      + countStrike + "스트라이크");
    }
      

    if (countStrike !== 3) {
      MissionUtils.Console.readLine("숫자를 입력해 주세요: ", (num) => {
        this.determineResult(num);
    });
    }
    if (countStrike === 3) {
      MissionUtils.Console.print("3스트라이크 3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      MissionUtils.Console.readLine("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. ", (response) => {
        if (response == 1) {
          const app2 = new App;
          app2.play();
        }
        if (response === 2) {
         server.close();
         throw new Error;
        }
      });
    } 
    }    
  }
}

const app = new App;
app.play();

module.exports = App;
