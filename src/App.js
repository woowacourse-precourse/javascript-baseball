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

  play() {}

  close() {
    Console.close()
  }
}

const app = new App()
app.play()

module.exports = App
