const MissionUtils = require('@woowacourse/mission-utils')
const { Console, Random } = MissionUtils

class App {
  gameOver () {
    Console.readLine('숫자를 게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n', (answer) => {
      const userAnswer = answer.trim()
      switch (userAnswer) {
        case '1': return this.initGame()
        case '2': return Console.close()
        default: this.gameOver()
      }
    })
  }

  checkOver (strike) {
    if (strike === 3) {
      return true
     } false
  }

  feedbackMessage (strike, ball) {
    if (strike === 3) {
      Console.print(`${strike}스트라이크 3개의 숫자를 모두 맞히셨습니다! 게임 종료`)
      return 
    }
  
    if (!strike+ball) {
      Console.print('낫싱')
      return 
    }
  
    if (strike > 0 && !ball) {
      Console.print(`${strike}스트라이크`)
      return 
    }
  
    if (!strike && ball > 0) {
      Console.print(`${ball}볼`)
      return 
    }
  
    if (strike > 0 && ball > 0) {
      Console.print(`${ball}볼 ${strike}스트라이크`)
      return 
    }
  }

  initCount () {
    return [0, 0]
  }

  checkCount (userAnswer, rightNumber) {
    console.log(userAnswer, rightNumber)
    let [strike, ball] = this.initCount()
  
    for (let i = 0; i < 3; i++) {
      if (rightNumber.includes(userAnswer[i])) {
        ball += 1
      }
      if (userAnswer[i] === rightNumber[i]) {
        strike += 1
        ball -= 1
      }
    }

    this.feedbackMessage(strike, ball)

    let gameOverStatus = this.checkOver(strike)
    if (!gameOverStatus) {
      this.getUserInput(rightNumber)
    }

    if (gameOverStatus) {
      this.gameOver()
    }

  }

  exception (userNumber) {
    switch (userNumber) {
      case !userNumber: return true
      case isNaN(Number(userNumber)): return true
      case userNumber.length !== 3: return true
      case userNumber < 0 : return true
      default : return false
    }
  }

  getUserInput (rightNumber) {
    Console.readLine('숫자를 입력해주세요 : ', (answer) => {
      const userAnswer = answer.trim()
      const error = this.exception(userAnswer)
      if (error) {
        throw new Error('잘못된 입력으로 종료되었습니다.')
      } else {
      this.checkCount(userAnswer,rightNumber)
      }
    })
  }

  initGame () {
    const randomNumber = Random.pickUniqueNumbersInRange(1, 9, 3)
    const rightNumber = randomNumber.join('')
    Console.print('숫자 야구 게임을 시작합니다.')
    this.getUserInput(rightNumber)
  }

  play () {
   this.initGame ()
  }
}

const app = new App
app.play()

module.exports = App;
