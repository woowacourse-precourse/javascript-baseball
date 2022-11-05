// import * as MissionUtils from "@woowacourse/mission-utils"
const MissionUtils = require('@woowacourse/mission-utils')
const { Console, Random } = MissionUtils


class App {
  initGame () {
    const randomNumber = Random.pickUniqueNumbersInRange(1, 9, 3)
    const rightnumber = randomNumber.join('')
    Console.print(announcement('start'))
    palyBaseballGame(rightnumber)
  }

  playHandler = {
    start : '숫자 야구 게임을 시작합니다.',
    requestAndAnswer :
      Console.readLine('숫자를 입력해주세요 : ',
        (answer) => {
          return `${answer}`
        }),
    requestRestart :
      Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
        (answer) => {
          selectEndOption(answer)
        })
    }
  
  initCount () {
    return [0, 0]
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

  selectEndOption(option) {
    switch (option) {
      case '1': return initGame() // 게임 재실행 함수
      case '2': return Console.close() // 게임 종료 
      default: 
        Console.print(`올바른 입력을 해주세요`)
        announcement.requestRestart() // 다시 물어보기
    }
  }

  exception (value) {
    switch (value) {
      case isNaN(Number(value)): return true
      case value < 1: return true
      case value.length > 3: return true
      default: false
    }
  }
  
  // 사용자에게 number 입력 받아 실행하는 함수
  palyBaseballGame (rightNumber) {
    let inputNumber = this.playHandler.requestAndAnswer()
    
    if (exception(inputNumber)) {
      throw new Error('값이 잘못되었습니다.\n 어플리케이션을 종료합니다.')
    }
  
    let [strike, ball] = this.initCount()
  
    for (let i = 0; i < 3; i++) {
      if (rightNumber.includes(inputNumber[i])) {
        ball += 1
      }
      if (inputNumber[i] === rightNumber[i]) {
        strike += 1
        ball -= 1
      }
    }
  
    Console.print(this.feedbackMessage(strike, ball))
    if (start === 3) {
      this.playHandler.requestRestart()
    }

    palyBaseballGame()
  }

  play() {
    this.initGame()
  }
}

const app = new App
app.play()

module.exports = App;
