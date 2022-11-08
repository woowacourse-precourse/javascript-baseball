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
      const playerNum = num.split('').map(Number)

      console.log(this.comNum)
      console.log(playerNum)

      this.checkAllvalidation(playerNum)
      let strikeCount = this.findStrike(playerNum, this.comNum)
      let ballCount = this.findBall(playerNum, this.comNum)
      const result = this.makeAnswer(strikeCount, ballCount)
      MissionUtils.Console.print(result)

      if (strikeCount === 3) {
        MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료')
        this.askTryAgain()
      } else {
        this.gameStart()
      }
    })
  }

  getComNum() {
    this.comNum = []
    this.comNum.push(MissionUtils.Random.pickNumberInRange(1, 9))
    this.comNum.push(MissionUtils.Random.pickNumberInRange(1, 9))
    this.comNum.push(MissionUtils.Random.pickNumberInRange(1, 9))
  }

  checkAllvalidation(playerNum) {
    if (playerNum.length !== 3) {
      //에러 throw
      throw '입력값의 길이가 3 이상이거나 3보다 작습니다'
    }

    playerNum.map((i) => {
      if (typeof i !== 'number') {
        //에러 throw
        throw '숫자 형태가 아닙니다'
      }
    })

    let copiedArr = [...playerNum]

    let i = 0
    while (i !== playerNum.length) {
      let firstValue = copiedArr.shift()

      let existIndex = copiedArr.indexOf(firstValue)
      if (existIndex !== -1) {
        //존재한다면
        throw '중복된 값이 존재합니다'
      }

      i++
    }

    // try {
    //   this.vaildCheckforLength(playerNum)
    // } catch (e) {
    //   //MissionUtils.Console.print(e)
    //   //spyOn의 추적때문에 MissionUtils.Console은 정답에만 사용해야 함
    //   console.log(e)
    //   return
    // }

    // try {
    //   this.vaildCheckforNaN(playerNum)
    // } catch (e) {
    //   console.log(e)
    //   return
    // }

    // try {
    //   this.vaildCheckforDuplicate(playerNum)
    // } catch (e) {
    //   console.log(e)
    //   return
    // }
  }

  //길이가 3이 아닐 때(길이가 3 이상 , 입력값이 없을 때)
  vaildCheckforLength(playerNum) {
    if (playerNum.length !== 3) {
      //에러 throw
      throw '입력값의 길이가 3 이상이거나 3보다 작습니다'
    }
  }

  //숫자 형태로 입력되지 않았을 때
  vaildCheckforNaN(playerNum) {
    playerNum.map((i) => {
      if (typeof i !== 'number') {
        //에러 throw
        throw '숫자 형태가 아닙니다'
      }
    })
  }

  //중복값 처리
  vaildCheckforDuplicate(playerNum) {
    let copiedArr = [...playerNum]

    let i = 0
    while (i !== playerNum.length) {
      let firstValue = copiedArr.shift()

      let existIndex = copiedArr.indexOf(firstValue)
      if (existIndex !== -1) {
        //존재한다면
        throw '중복된 값이 존재합니다'
      }

      i++
    }
  }

  findStrike(playerNum, comNum) {
    let strikeCount = 0
    for (let i = 0; i < comNum.length; i++) {
      if (playerNum[i] === comNum[i]) {
        strikeCount++
      }
    }

    return strikeCount
  }

  findBall(playerNum, comNum) {
    let ballCount = 0
    for (let i = 0; i < playerNum.length; i++) {
      let index = comNum.indexOf(playerNum[i])

      if (index !== -1 && index !== i) {
        ballCount++
      }
    }

    return ballCount
  }

  makeAnswer(strikeCount, ballCount) {
    console.log(strikeCount, ballCount)

    let result

    if (strikeCount !== 0 && ballCount !== 0) {
      result = `${ballCount}볼 ${strikeCount}스트라이크`
      return result
    }

    if (strikeCount !== 0 && ballCount === 0) {
      result = `${strikeCount}스트라이크`
      return result
    }

    if (strikeCount === 0 && ballCount !== 0) {
      result = `${ballCount}볼`
      return result
    }

    if (strikeCount === 0 && ballCount === 0) {
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
//전역변수...?
