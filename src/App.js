const MissionUtils = require('@woowacourse/mission-utils')

class App {
  play() {
    //MissionUtils.Console.print('숫자 야구 게임을 시작합니다')
    //spyOn의 추적때문에 MissionUtils.Console은 정답에만 사용해야 함

    console.log('숫자 야구 게임을 시작합니다')

    MissionUtils.Console.readLine('숫자를 입력해 주세요', (num) => {
      const playerNum = num.split('').map(Number) //내가 입력
      let comNum=[]
      comNum.push(MissionUtils.Random.pickNumberInRange(1, 9))
      comNum.push(MissionUtils.Random.pickNumberInRange(1, 9))
      comNum.push(MissionUtils.Random.pickNumberInRange(1, 9))

      console.log(playerNum)
      console.log(comNum)

      try {
        this.vaildCheckforLength(playerNum)
      } catch (e) {
        //MissionUtils.Console.print(e)
        //spyOn의 추적때문에 MissionUtils.Console은 정답에만 사용해야 함
        console.log(e)
        MissionUtils.Console.close()
        return
      }

      try {
        this.vaildCheckforNaN(playerNum)
      } catch (e) {
        console.log(e)
        MissionUtils.Console.close()
        return
      }

      try {
        this.vaildCheckforDuplicate(playerNum)
      } catch (e) {
        console.log(e)
        MissionUtils.Console.close()
        return
      }

      let strikeCount = this.findStrike(playerNum, comNum)

      let ballCount = this.findBall(playerNum, comNum)

      const result = this.makeAnswer(strikeCount, ballCount)
      MissionUtils.Console.print(result)



      MissionUtils.Console.close()
    })
  }

  //길이가 3이 아닐 때(길이가 3 이상 , 입력값이 없을 때)
  vaildCheckforLength(playerNum) {
    if (playerNum.length !== 3) {
      //에러 throw
      throw new Error('입력값의 길이가 3 이상이거나 3보다 작습니다')
      //MissionUtils.Console.close()
    }
  }

  //숫자 형태로 입력되지 않았을 때
  vaildCheckforNaN(playerNum) {
    playerNum.map((i) => {
      if (typeof i !== 'number') {
        //에러 throw
        throw new Error('숫자 형태가 아닙니다')
        //MissionUtils.Console.close()
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
        throw new Error('중복된 값이 존재합니다')
        break
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
}

module.exports = App
