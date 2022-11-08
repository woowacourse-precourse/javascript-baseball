const MissionUtils = require('@woowacourse/mission-utils')

class App {
  play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다')

    MissionUtils.Console.readLine('숫자를 입력해 주세요', (num) => {
      const playerNum = num.split('').map(Number) //내가 입력
      const comNum = MissionUtils.Random.pickNumberInRange(1, 9, 3) //컴퓨터가 입력
    })
  }
}

module.exports = App
