const { Random, Console } = require('@woowacourse/mission-utils')

class App {
  #minRange // 숫자를 선택할 시작 범위
  #maxRange // 숫자를 선택할 끝 범위
  #ballCount // 야구 게임에서 정답으로 사용할 숫자의 개수
  #answer

  /**
   * @param {number=} minRange
   * @param {number=} maxRange
   * @param {number=} ballCount
   */
  constructor(minRange = 1, maxRange = 9, ballCount = 3) {
    this.#minRange = minRange
    this.#maxRange = maxRange
    this.#ballCount = ballCount
    this.#answer = []

    Console.print('숫자 야구 게임을 시작합니다.')
  }

  play() {
    this.#answer = this.#generateAnswer()
    this.#takeGuess()
  }

  /**
   * @returns {number[]}
   */
  #generateAnswer() {
    const answer = new Set()

    while (answer.size !== this.#ballCount) {
      const randomNumber = Random.pickNumberInRange(
        this.#minRange,
        this.#maxRange
      )

      answer.add(randomNumber)
    }

    return [...answer]
  }

  #takeGuess() {
    Console.readLine('숫자를 입력해주세요 : ', (guess) => {
      if (this.#isInvalidGuess(guess)) {
        this.#close()

        throw new Error('잘못된 입력입니다. 프로그램을 종료합니다.')
      }

      const numbers = Array.from(guess).map(Number) // parseInt는 NaN 반환 - https://medium.com/dailyjs/parseint-mystery-7c4368ef7b21 참고
      const { strike, ball, finished } = this.#determineGameResult(numbers)
      const gameResult = this.#getGameResult({ strike, ball })
      Console.print(gameResult)

      if (!finished) {
        this.#takeGuess()

        return
      }

      Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료')
      this.#checkRestart()
    })
  }

  #checkRestart() {
    Console.readLine(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
      (input) => {
        const gameOption = input.trim()
        const gameOptionMapper = {
          RESTART: '1',
          CLOSE: '2',
        }

        if (gameOption === gameOptionMapper.RESTART) {
          this.play()
        } else if (gameOption === gameOptionMapper.CLOSE) {
          this.#close()
        } else {
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
    )
    const balls = this.#answer.filter(
      (digit, index) => numbers[index] !== digit && numbers.includes(digit)
    )

    return {
      strike: strikes.length,
      ball: balls.length,
      finished: strikes.length === this.#ballCount,
    }
  }

  /**
   * @param {baseballResult} baseballResult
   * @returns {string}
   */
  #getGameResult({ strike, ball }) {
    const counts = `${ball ? `${ball}볼 ` : ' '}${
      strike ? `${strike}스트라이크` : ''
    }`

    return strike === 0 && ball === 0 ? '낫싱' : counts.trim()
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
