const MissionUtils = require('@woowacourse/mission-utils')

class App {
  play() {

    MissionUtils.Console.print('숫자 야구 게임을 시작합니다')

    

    MissionUtils.Console.readLine('숫자를 입력해 주세요', (num) => {
      MissionUtils.Console.print(num.split('').map(Number))
      
      MissionUtils.Console.print(MissionUtils.Random.pickNumberInRange(1,9,3))
      MissionUtils.Console.print(MissionUtils.Random.pickNumberInRange(1,9,3))
      MissionUtils.Console.print(MissionUtils.Random.pickNumberInRange(1,9,3))
      
      
    })
  }
}

module.exports = App
