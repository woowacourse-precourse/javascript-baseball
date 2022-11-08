const MissionUtils = require('@woowacourse/mission-utils');
const isNumber = require("../src/IsNumber")
const checkStrike = require('../src/CountStrike')
const checkBall = require('../src/CountBall')

class App {
  
  play() {
    const computer = this.computerRandomNumber();
    // MissionUtils.Console.print('숫자 야구 게임을 시작합니다.')
    this.getUserInput(computer)
  }

  computerRandomNumber() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }

    return computer;
  }

  getUserInput(computer) {
    MissionUtils.Console.readLine(`숫자를 입력해주세요 : `, number => {
      if(isNumber(number)) {
        const strike = checkStrike(computer, number)
        const ball = checkBall(computer, number)
        this.announceCurrectNumber(computer, strike, ball)
      }
    });
  }

  announceCurrectNumber(computer, strike, ball) {
    if (strike === 3) {
      MissionUtils.Console.print('3스트라이크\n');
      MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
      return MissionUtils.Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입려하세요.\n', answer => {
        if (answer === "1") {
          this.play()
        }
        if (answer === "2"){
          MissionUtils.Console.close()
        }
      })
    }

    if (strike > 0 && ball > 0) {
      MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
      this.getUserInput(computer)
    }
    if (strike > 0 && ball === 0) {
      MissionUtils.Console.print(`${strike}스트라이크`);
      this.getUserInput(computer)
    }
    if (strike === 0 && ball > 0) {
      MissionUtils.Console.print(`${ball}볼`);
      this.getUserInput(computer)
    }
    if (strike === 0 && ball === 0) {
      MissionUtils.Console.print('낫싱');
      this.getUserInput(computer)
    }
  };
}

const app = new App()
app.play()

module.exports = App;
