const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    const baseBallGame = new BaseBallPlay();
    baseBallGame.start();
    baseBallGame.repeatContext();
  }
}

class RandomNumber {
  getNumber() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }

    return computer;
  }
}

class BaseBallPlay {
  constructor() {
    this.victoryCheck = false;
  }

  start() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
  }

  strike(computer, user) {
    let count = 0;
    computer.forEach((num, i) => {
      if (num === +user[i]) {
        count += 1;
      }
    });

    return count;
  }

  ball(computer, user) {
    let count = 0;
    computer.forEach((num, i) => {
      if (num === +user[i]) {
        count += 1;
      }
    });

    return count;
  }

  judgement(computer, user) {
    let strike = this.strike(computer, user);
    let ball = this.ball(computer, user);

    if (strike === 3) {
      this.victoryCheck = true;
      return `3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료`;
    }
    if (strike === 0 && ball === 0) return `낫싱`;
    if (strike === 0) return `${strike}스트라이크`;
    if (ball === 0) return `${ball}볼`;

    return `${ball}볼 ${strike}스트라이크`;
  }

  userInputHandler(computer) {
    MissionUtils.Console.readLine("숫자를 입력해주세요 :", (input) => {
      MissionUtils.Console.print(this.judgement(computer, input));

      if(this.victoryCheck) return this.reset();
      if(!this.victoryCheck) return this.userInputHandler(computer);
    });
  }

  repeatContext() {
    const computerAnswer = new RandomNumber();
    const computer = computerAnswer.getNumber();
    this.userInputHandler(computer);
  }

  reset() {
    MissionUtils.Console.readLine("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.", (input) => {
      if(input === '1') {
        this.victoryCheck = false;
        return this.repeatContext();
      }

      if(input === '2') {
        return MissionUtils.Console.close();
      }
    })

  }
}

module.exports = App;
