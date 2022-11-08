const MissionUtils = require('@woowacourse/mission-utils')

class App {
  play() {
    //MissionUtils.Console.print('숫자 야구 게임을 시작합니다')
    //spyOn의 추적때문에 MissionUtils.Console은 정답에만 사용해야 함

    console.log('숫자 야구 게임을 시작합니다')

    MissionUtils.Console.readLine('숫자를 입력해 주세요', (num) => {
      const playerNum = num.split('').map(Number) //내가 입력
      const comNum = MissionUtils.Random.pickNumberInRange(1, 9, 3) //컴퓨터가 입력

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


      let strikeCount=this.findStrike(playerNum)


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

  findStrike(playerNum,comNum){
    let strikeCount = 0
    for (let i = 0; i < comNum.length; i++) {
      if (playerNum[i] === comNum[i]) {
        strikeCount++
      }
    }

    return strikeCount
  }




}

module.exports = App
