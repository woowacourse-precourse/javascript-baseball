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
      const gameResult = {}

      // 게임 끝나지 않았으면 다시 getInput 호출
      // 게임 끝났으면 1, 2 선택할 수 있는 메서드 호출
    })
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

const app = new App()
app.play()

module.exports = App
