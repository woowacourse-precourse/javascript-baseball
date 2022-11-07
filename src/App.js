const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.computerInputNumbers = ''
    this.userInputNumbers = ''
  }

  isNumeric(str) {
    if (typeof str != "string") {
      return false
    }
    return !isNaN(str) && !isNaN(parseFloat(str))
  }

  isValid(userInputNumbers) {
    let valid = true
    if (!this.isNumeric(userInputNumbers)) {
      valid = false
    }
    if (userInputNumbers.length !== 3) {
      valid = false
    }
    if (new Set(userInputNumbers).size !== 3) {
      valid = false
    }
    if (userInputNumbers.includes(0)) {
      valid = false
    }

    if (!valid) {
      throw '잘못된 입력값입니다.'
    }
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
      this.isValid(number)
      this.userInputNumbers = number
    })
  }

  countBalls(computerInputNumbers, userInputNumbers) {
    let ballCnt = 0
    for (let i = 0; i < 3; i++) {
      let user = userInputNumbers[i]
      let com = computerInputNumbers[i]
      if (parseInt(user) !== parseInt(com) && userInputNumbers.includes(com)) {
        ballCnt += 1
      }
    }
    return ballCnt
  }

  countStrikes(computerInputNumbers, userInputNumbers) {
    let strikeCnt = 0
    for (let i = 0; i < 3; i++) {
      let user = userInputNumbers[i]
      let com = computerInputNumbers[i]
      if (parseInt(user) === parseInt(com)) {
        strikeCnt += 1
      }
    }
    return strikeCnt
  }

  gameStart() {
    this.computerInput()

    while (true) {
      this.userInput()

      const balls = this.countBalls(this.computerInputNumbers, this.userInputNumbers)
      const strikes = this.countStrikes(this.computerInputNumbers, this.userInputNumbers)
    }
  }

  play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.')
    this.gameStart()
  }
}

module.exports = App;
