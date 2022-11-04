import * as MissionUtils from "@woowacourse/mission-utils"

function initCount () {
  return [0, 0]
}

function getRandomNumber () {
  const randomNumber = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3)
  return randomNumber.join('')
}

function answerResult (strike, ball) {
  if (strike === 3) {
    return MissionUtils.Console.print(`${strike}스트라이크 3개의 숫자를 모두 맞히셨습니다! 게임 종료
    게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.`)
  }

  if (!strike+ball) {
    return MissionUtils.Console.print("낫싱")
  }

  if (strike > 0 && !ball) {
    return MissionUtils.Console.print(`${strike}스트라이크`)
  }

  if (!strike && ball > 0) {
    return MissionUtils.Console.print(`${ball}볼`)
  }

  if (strike > 0 && ball > 0) {
    return MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`)
  }
}

// 사용자에게 number 입력 받아 실행하는 함수
function palyBaseballGame (number) {
  if (isNaN(number)) {
    throw new Error('숫자를 입력하세요.')
  }

  const num = String(number)
  
  let [strike, ball] = initCount()

  for (let i=0; i<3; i++) {
      if(correctNum.includes(num[i])) {
          ball += 1
      }
      if(num[i] === correctNum[i]) {
          strike += 1
          ball -= 1
      }
  }

  answerResult(strike, ball)
  [strike, ball] = initCount()
  
}
class App {
  play()
}

module.exports = App;
