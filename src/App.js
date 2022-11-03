const MissionUtils = require("@woowacourse/mission-utils")

const START_MESSAGE = '숫자 야구 게임을 시작합니다.'
const PLEASE_NUMBER = '숫자를 입력해주세요 :'
const IS_RESTART = '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.'
const CLEAR = '3개의 숫자를 모두 맞히셨습니다! 게임 종료'


class App {
  userInput = ''
  randomNumber = ''
  strike = 0
  ball = 0
  notThing = false

  play() {
    this.outputString(START_MESSAGE)

    this.getRandomNumber()

    while(this.strike < 3) {
      this.setUserInput(PLEASE_NUMBER)

      if (!this.verifyInput()) return this.throwError()

      this.JudgeInput()

      this.outputResult()
    }

    this.outputString(IS_RESTART)
    this.setUserInput('')
    if (this.userInput === '1') this.restart()
  }
  // 메시지 출력 하기
  outputString(str) {
    MissionUtils.Console.print(str)
  }
  // 사용자 입력 받기
  setUserInput(str) {
    return MissionUtils.Console.readLine(str, (answer) => {
      this.outputString(`${str} ${answer}`)
      return this.userInput = answer.toString()
    })
  }
  // 에러 표출 하기
  throwError() {
    throw ''
  }
  // 입력 닫기
  closeConsole() {
    MissionUtils.Console.close()
  }
  // 랜덤 숫자 뽑기
  getRandomNumber() {
    // 3글자 뽑기.
    const set = new Set()
    while (set.size < 3) {
      const num = MissionUtils.Random.pickNumberInRange(1, 9);
      set.add(num)
    }
    
    set.forEach(val => {
      this.randomNumber += val
    })
  }
  // 입력 검증하기
  verifyInput() {
    let res = true
    if (typeof this.userInput !== 'string' || this.userInput.length > 3 || this.userInput.length !== new Set(this.userInput).size ) res = false

    return res
  }
  // 스트라이크, 볼, 낫싱 멤버변수 초기화하기
  resetStringAndBall() {
    this.strike = 0
    this.ball = 0
    this.notThing = false
  }
  // 입력 판단하기 (스트라이크, 볼, 낫싱)
  JudgeInput() {
    this.resetStringAndBall()
    
    const inputSet = new Set()
    this.findStrike(inputSet)
    this.findBall(inputSet)

    if (this.ball === 0 && this.strike === 0) this.notThing = true
  }
  // 스트라이크 찾기
  findStrike(set) {
    let input = this.userInput.split('')

    input.forEach((val, i) => {
      set.add(val)
      if (val === this.randomNumber[i]) {
        set.delete(val)
        this.strike += 1
      }
    })
  }
  // 볼 찾기
  findBall(set) {
    set.forEach((val) => {
      if (this.randomNumber.includes(val)) this.ball += 1
    })
  }
  // 결과 출력하기
  outputResult() {
    let str = ''
    console.log("outputResult", this.strike, this.ball, this.notThing, this.randomNumber)
    if (this.notThing) str = '낫싱'
    else if (this.strike === 3) {
      str = CLEAR
    } else {
      if (this.ball > 0) str += `${this.ball}볼 `
      if (this.strike > 0) str += `${this.strike}스트라이크`
    }
    
    this.outputString(str)
  }
  resetAllMember() {
    this.notThing = false
    this.ball = 0
    this.strike = 0
    this.randomNumber = ''
    this.userInput = ''
  }
  // 게임 재시작하기
  restart() {
    this.resetStringAndBall()
    this.play()
  }
} 

module.exports = App;
