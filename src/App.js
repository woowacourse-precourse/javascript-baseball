const { Random, Console } = require('@woowacourse/mission-utils')

class App {
  #from // 숫자를 선택할 시작 범위
  #to // 숫자를 선택할 끝 범위
  #ballCount // 야구 게임에서 정답으로 사용할 숫자의 개수
  #answer

  /**
   * @param {number=} from
   * @param {number=} to
   * @param {number=} ballCount
   */
  constructor(from = 1, to = 9, ballCount = 3) {
    this.#from = from
    this.#to = to
    this.#ballCount = ballCount
    this.#answer = []

    Console.print('숫자 야구 게임을 시작합니다.')
  }

  play() {
    this.#answer = this.#generateAnswer()
    this.#takeGuess()
  }

  #generateAnswer() {
    return Random.pickUniqueNumbersInRange(
      this.#from,
      this.#to,
      this.#ballCount
    )
  }

  #takeGuess() {
    Console.readLine('숫자를 입력해주세요 : ', (guess) => {
      if (this.#isInvalidGuess(guess)) {
        this.#close()

        throw new Error('잘못된 입력입니다. 프로그램을 종료합니다.')
      }

      const numbers = Array.from(guess).map((digit) => parseInt(digit))
      const { strike, ball, finished } = this.#determineGameResult(numbers)

      this.#printGameResult({ strike, ball })

      if (!finished) {
        this.#takeGuess()
      } else {
        Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료')

        this.#checkRestart()
      }
    })
  }

  #checkRestart() {
    Console.readLine(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
      (input) => {
        switch (input.trim()) {
          case '1':
            this.play()
            break
          case '2':
            this.#close()
            break
          default:
            this.#checkRestart()
        }
      }
    )
  }

  /**
   * @typedef {Object} baseballResult
   * @property {number} strike
   * @property {number} ball
   * @property {boolean=} finished
   */

  /**
   * @param {number[]} numbers - this.#ballCount와 길이가 동일한 입력값
   * @returns {baseballResult}
   */
  #determineGameResult(numbers) {
    const strikes = this.#answer.filter(
      (digit, index) => numbers[index] === digit
    ).length
    const balls = this.#answer.filter(
      (digit, index) => numbers[index] !== digit && numbers.includes(digit)
    ).length

    return {
      strike: strikes,
      ball: balls,
      finished: strikes === this.#ballCount,
    }
  }

  /**
   * @param {baseballResult} baseballResult
   */
  #printGameResult({ strike, ball }) {
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
   * @param {string} guess
   * @returns {boolean}
   */
  #isInvalidGuess(guess) {
    const inputValidationExpression = new RegExp(`^[1-9]{${this.#ballCount}}$`)
    const areDifferentCharacters = new Set(guess).size === guess.length

    return !inputValidationExpression.test(guess) || !areDifferentCharacters
  }

  #close() {
    Console.close()
  }
}

module.exports = App
