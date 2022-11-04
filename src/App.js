import * as MissionUtils from "@woowacourse/mission-utils"

function announcement (status) {
  switch (status) {
    case 'start':
      Console.print('숫자 야구 게임을 시작합니다.')
      break
    case 'requestAndAnswer':
      // 숫자 3개 인풋을 받아서 결과 출력
      Console.readLine('숫자를 입력해주세요', (answer) => {
        console.log(`닉네임: ${answer}`);
      })
      break
    case 'success':
      Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료')
      break
    case 'requestRestart':
      Console.print('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.')
      break
  }
}

function initCount () {
  return [0, 0]
}

function getRandomNumber () {
  let randomNumber = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3)
  return randomNumber.join('')
}

// 사용자에게 number 입력 받아 실행하는 함수
function game (number) {
  if (!isNaN(number)) {
    throw new Error('숫자를 입력하세요.')
  }

  const correctNum = getRandomNumber() // 랜덤 숫자 부분을 class constructor로 빼야할 것 같음
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

  if (strike === 3) {
    MissionUtils.Console.print(`${strike}스트라이크
    3개의 숫자를 모두 맞히셨습니다! 게임 종료
    게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.`)

    [strike, ball] = initCount()
    return 
  }

  if (!strike+ball) {
    MissionUtils.Console.print("낫싱")

    [strike, ball] = initCount()
    return
  }

  if (strike > 0 && !ball) {
    MissionUtils.Console.print(`${strike}스트라이크`)

    [strike, ball] = initCount()
    return 
  }

  if (!strike && ball > 0) {
    MissionUtils.Console.print(`${ball}볼`)

    [strike, ball] = initCount()
    return 
  }

  if (strike > 0 && ball > 0) {
    MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`)

    [strike, ball] = initCount()
    return 
  }
}
class App {
  play() {}
}

module.exports = App;
