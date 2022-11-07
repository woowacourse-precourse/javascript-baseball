const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.computerInputNumbers = ''
    this.userInputNumbers = ''
  }

  computerInput() {
    let computer = ''
    while (computer.length < 3) {
      let number = String(MissionUtils.Random.pickNumberInRange(1, 9))
      if (!computer.includes(number)) {
        computer += number
      }
    }
    this.computerInputNumbers = computer
  }

  userInput() {
    MissionUtils.Console.readLine('숫자를 입력해주세요: ', (number) => {
      this.userInputNumbers = number
    })
  }

  gameStart() {
    this.computerInput()
    this.userInput()
  }

  play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.')
    this.gameStart()
  }
}

module.exports = App;
