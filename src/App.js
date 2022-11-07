const { Random, Console } = require('@woowacourse/mission-utils')

class App {
  /**
   * @param {number=} from - 숫자를 선택할 시작 범위
   * @param {number=} to - 숫자를 선택할 끝 범위
   * @param {number=} ballCount - 야구 게임에서 정답으로 사용할 숫자의 개수
   */
  constructor(from = 1, to = 9, ballCount = 3) {
    this.from = from
    this.to = to
    this.ballCount = ballCount
    this.answer = []

    Console.print('숫자 야구 게임을 시작합니다.')
  }

  play() {
    this.answer = this.generateAnswer()
    console.log(this.answer)
    this.getInput()
  }

  generateAnswer() {
    return Random.pickUniqueNumbersInRange(this.from, this.to, this.ballCount)
  }

  getInput() {
    Console.readLine('숫자를 입력해주세요 : ', (input) => {
      if (this.isInvalidInput(input)) {
        throw new Error('잘못된 입력입니다. 프로그램을 종료합니다.')
      }

      const numbers = Array.from(input).map((digit) => parseInt(digit))
      const { strike, ball, finished } = this.determineGameResult(numbers)

      this.printGameResult({ strike, ball })

      if (!finished) {
        this.getInput()
      } else {
        // 게임 끝났으면 1, 2 선택할 수 있는 메서드 호출
      }
    })
  }

  /**
   * @typedef {Object} baseballResult
   * @property {number} strike
   * @property {number} ball
   * @property {boolean=} finished
   */

  /**
   * @param {number[]} numbers - this.ballCount와 길이가 동일한 입력값
   * @returns {baseballResult}
   */
  determineGameResult(numbers) {
    const strikes = this.answer.filter(
      (digit, index) => numbers[index] === digit
    ).length
    const balls = this.answer.filter(
      (digit, index) => numbers[index] !== digit && numbers.includes(digit)
    ).length

    return {
      strike: strikes,
      ball: balls,
      finished: strikes === this.ballCount,
    }
  }

  /**
   * @param {baseballResult} baseballResult
   */
  printGameResult({ strike, ball }) {
    if (strike === 0 && ball === 0) {
      Console.print('낫싱')
    } else {
      const result = `${ball ? `${ball}볼 ` : ' '}${
        strike ? `${strike}스트라이크` : ''
      }`

      Console.print(result.trim())
    }
  }

  /**
   * @param {string} input
   * @returns {boolean}
   */
  isInvalidInput(input) {
    const inputValidationExpression = new RegExp(`^\\d{${this.ballCount}}$`)

    return !inputValidationExpression.test(input)
  }

  close() {
    Console.close()
  }
}

module.exports = App
