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

  checkOver (STRIKE) {
    if (STRIKE === 3) {
      return true
     } false
  }

  feedbackMessage (STRIKE, BALL) {
    if (STRIKE === 3) {
      Console.print(`${STRIKE}스트라이크 3개의 숫자를 모두 맞히셨습니다! 게임 종료`)
      return 
    }
  
    if (!STRIKE+BALL) {
      Console.print('낫싱')
      return 
    }
  
    if (STRIKE > 0 && !BALL) {
      Console.print(`${STRIKE}스트라이크`)
      return 
    }
  
    if (!STRIKE && BALL > 0) {
      Console.print(`${BALL}볼`)
      return 
    }
  
    if (STRIKE > 0 && BALL > 0) {
      Console.print(`${BALL}볼 ${STRIKE}스트라이크`)
      return 
    }
  }

  initCount () {
    return [0, 0]
  }

  checkCount (userAnswer, rightNumber) {
    console.log(userAnswer, rightNumber)
    let [STRIKE, BALL] = this.initCount()
  
    for (let i = 0; i < 3; i++) {
      if (rightNumber.includes(userAnswer[i])) {
        BALL += 1
      }
      if (userAnswer[i] === rightNumber[i]) {
        STRIKE += 1
        BALL -= 1
      }
    }

    this.feedbackMessage(STRIKE, BALL)

    let gameOverStatus = this.checkOver(STRIKE)
    if (!gameOverStatus) {
      this.getUserInput(rightNumber)
    }

    if (gameOverStatus) {
      this.gameOver()
    }
  }

  checkError (userNumber, rightNumber) {
    const USER_ANSWER = userNumber
    const USER_ANSWER_LENGTH = userNumber.length
    const REMOVED_DUPLICATION_NUMBER = new Set(USER_ANSWER)
    let IS_ERROR = false

    if (!USER_ANSWER) {
      IS_ERROR = true
    }
    if (USER_ANSWER_LENGTH !== 3) {
      IS_ERROR = true
    }
    if (USER_ANSWER < 0) {
      IS_ERROR = true
    }
    if (isNaN(USER_ANSWER)) {
      IS_ERROR = true
    }
    if (USER_ANSWER_LENGTH !== REMOVED_DUPLICATION_NUMBER.size) {
      IS_ERROR = true
    }

    if (IS_ERROR) {
      throw new Error('올바른 값이 입력되지 않아 종료되었습니다.')
    } else {
      this.checkCount(userNumber,rightNumber)
    }
  }

  getUserInput (rightNumber) {
    Console.readLine('숫자를 입력해주세요 : ', (answer) => {
      const userAnswer = answer.trim()
      this.checkError(userAnswer,rightNumber)
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
