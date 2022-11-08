const MissionUtils = require('@woowacourse/mission-utils')
const { Console, Random } = MissionUtils

class App {
  gameOver () {
    Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n', (rawInput) => {
      const input = rawInput.trim()
      switch (input) {
        case '1': return this.initGame()
        case '2': return Console.close()
        default: throw new Error('올바른 값이 입력되지 않아 종료되었습니다.')
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
 
    if (!STRIKE+BALL) {
      Console.print('낫싱')
      return 
    }
  }

  initCount () {
    return [0, 0]
  }

  checkCount (input, answer) {
    let [STRIKE, BALL] = this.initCount()
  
    for (let i = 0; i < 3; i++) {
      if (answer[i] === input[i]) {
        STRIKE += 1
        continue
      }
      if (answer.includes(input[i])) {
        BALL += 1
      }
    }

    this.feedbackMessage(STRIKE, BALL)

    const gameOverStatus = this.checkOver(STRIKE)
    if (!gameOverStatus) {
      this.getUserInput(answer)
    } else {
      this.gameOver()
    }
  
  }

  checkError (input, answer) {
    const REMOVED_DUPLICATION_NUMBER = new Set(input)
    let IS_ERROR = false

    if (!input) {
      IS_ERROR = true
    }
    if (input.length !== 3) {
      IS_ERROR = true
    }
    if (REMOVED_DUPLICATION_NUMBER.size !== 3) {
      IS_ERROR = true
    }
    if (input.includes('0')) {
      IS_ERROR = true
    }

    if (IS_ERROR) {
      throw new Error('올바른 값이 입력되지 않아 종료되었습니다.')
    } else {
      this.checkCount(input, answer)
    }
  }

  getUserInput (answer) {
    Console.readLine('숫자를 입력해주세요 : ', (rawInput) => {
      const input = rawInput.trim()
      this.checkError(input, answer)
    })
  }

  initGame () {
    const answerNumbers = [];
    while (answerNumbers.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!answerNumbers.includes(number)) {
        answerNumbers.push(number);
      }
    }
    const answer = answerNumbers.join('')
    Console.print('숫자 야구 게임을 시작합니다.')
    this.getUserInput(answer)
  }

  play () {
   this.initGame()
  }
}

module.exports = App;
