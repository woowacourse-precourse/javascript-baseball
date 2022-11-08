const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.randomNumber = [];
  };

  play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    this.createRandomNumber();
    this.input();
  }

  createRandomNumber() {
    this.randomNumber = [];
    while (this.randomNumber.length < 3) {
      let tempForRandom = MissionUtils.Random.pickNumberInRange(1,9);
      this.randomNumber.push(tempForRandom);
    }
    this.randomNumber.map((val) => Number(val));
  }

  input() {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (answer) => {
      answer = answer.split("").map((val) => Number(val));
      this.userInputCheck(answer);
    })
  }
  
  userInputCheck(answer) {
    if (answer.length !== 3) {
      throw new Error("입력이 잘못되었습니다.");
    }
    this.baseballGame(this.randomNumber, answer);
  }

  baseballGame(random, answer) {
    let strike = 0;
    let ball = 0;
    
    for (let i=0; i<3; i++) {
      if (random[i] === answer[i]) {
        strike += 1;
      }
      else {
        if (random.includes(answer[i])) {
          ball += 1;
        }
      }
    }
    this.checkBallStrike(strike, ball);
  }

  checkBallStrike(strike, ball) {
    if (strike === 3) {
      MissionUtils.Console.print("3스트라이크");
      MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      this.gameOrnot();
    }
    else if (strike > 0 && ball > 0) {
      MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
      this.input();
    }
    else if (strike === 0 && ball > 0) {
      MissionUtils.Console.print(`${ball}볼`);
      this.input();
    }
    else if (strike > 0 && ball === 0) {
      MissionUtils.Console.print(`${strike}스트라이크`);
      this.input();
    }
    else if (strike === 0 && ball === 0) {
      MissionUtils.Console.print(`낫싱`);
      this.input();
    }
  }

  gameOrnot() {
    MissionUtils.Console.readLine("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요\n", (answer) => {
      if (answer == 1) {
        this.createRandomNumber();
        this.input();
      }
      else {
        MissionUtils.Console.print("게임 종료");
        MissionUtils.Console.close();
      }
    })
  }



}

const app = new App();
app.play();

module.exports = App;