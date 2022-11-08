const MissionUtils = require('@woowacourse/mission-utils')

class App {
  play() {
    console.log('숫자 야구 게임을 시작합니다')

    this.wholeLogic()
  }

  wholeLogic() {
    this.getComNum()
    this.gameStart()
  }

  gameStart() {
    MissionUtils.Console.readLine('숫자를 입력해 주세요', (num) => {
      const player_num = num.split('').map(Number)

      console.log(this.com_num)
      console.log(player_num)

      this.checkAllvalidation(player_num)
      let strike_count = this.findStrike(player_num, this.com_num)
      let ball_count = this.findBall(player_num, this.com_num)
      const result = this.makeAnswer(strike_count, ball_count)
      MissionUtils.Console.print(result)

      if (strike_count === 3) {
        MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료')
        this.askTryAgain()
      } else {
        this.gameStart()
      }
    })
  }

  getComNum() {
    this.com_num = []
    this.com_num.push(MissionUtils.Random.pickNumberInRange(1, 9))
    this.com_num.push(MissionUtils.Random.pickNumberInRange(1, 9))
    this.com_num.push(MissionUtils.Random.pickNumberInRange(1, 9))
  }

  checkAllvalidation(player_num) {
    if (player_num.length !== 3) {
      //에러 throw
      throw '입력값의 길이가 3 이상이거나 3보다 작습니다'
    }

    player_num.map((i) => {
      if (typeof i !== 'number') {
        //에러 throw
        throw '숫자 형태가 아닙니다'
      }
    })

    let copiedArr = [...player_num]

    let i = 0
    while (i !== player_num.length) {
      let first_value = copiedArr.shift()

      let exist_index = copiedArr.indexOf(first_value)
      if (exist_index !== -1) {
        //존재한다면
        throw '중복된 값이 존재합니다'
      }

      i++
    }

  }

  //길이가 3이 아닐 때(길이가 3 이상 , 입력값이 없을 때)
  vaildCheckforLength(player_num) {
    if (player_num.length !== 3) {
      //에러 throw
      throw '입력값의 길이가 3 이상이거나 3보다 작습니다'
    }
  }

  //숫자 형태로 입력되지 않았을 때
  vaildCheckforNaN(player_num) {
    player_num.map((i) => {
      if (typeof i !== 'number') {
        //에러 throw
        throw '숫자 형태가 아닙니다'
      }
    })
  }

  //중복값 처리
  vaildCheckforDuplicate(player_num) {
    let copiedArr = [...player_num]

    let i = 0
    while (i !== player_num.length) {
      let first_value = copiedArr.shift()

      let exist_index = copiedArr.indexOf(first_value)
      if (exist_index !== -1) {
        //존재한다면
        throw '중복된 값이 존재합니다'
      }

      i++
    }
  }

  findStrike(player_num, com_num) {
    let strike_count = 0
    for (let i = 0; i < com_num.length; i++) {
      if (player_num[i] === com_num[i]) {
        strike_count++
      }
    }

    return strike_count
  }

  findBall(player_num, com_num) {
    let ball_count = 0
    for (let i = 0; i < player_num.length; i++) {
      let index = com_num.indexOf(player_num[i])

      if (index !== -1 && index !== i) {
        ball_count++
      }
    }

    return ball_count
  }

  makeAnswer(strike_count, ball_count) {
    console.log(strike_count, ball_count)

    let result

    if (strike_count !== 0 && ball_count !== 0) {
      result = `${ball_count}볼 ${strike_count}스트라이크`
      return result
    }

    if (strike_count !== 0 && ball_count === 0) {
      result = `${strike_count}스트라이크`
      return result
    }

    if (strike_count === 0 && ball_count !== 0) {
      result = `${ball_count}볼`
      return result
    }

    if (strike_count === 0 && ball_count === 0) {
      result = `낫싱`
      return result
    }
  }

  askTryAgain() {
    MissionUtils.Console.readLine(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
      (num) => {
        if (Number(num) === 1) {
          this.wholeLogic()
        } else {
          MissionUtils.Console.print('게임 종료')
          MissionUtils.Console.close()
        }
        //1이면 readline으로 게임하는 로직 호출
        //2면 close 호출해서 끝
      },
    )
  }
}

module.exports = App
