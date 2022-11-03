const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.randomValue=''
    this.userValue=''
  }

  play() {
    makeRandomValue()
    // inputUserValue()
    console.log(this.randomValue)

  }

  setRandomValue(number) {
    this.randomValue=number
  }

  setUserValue(number) {
    this.userValue=number
  }

}

const app=new App()
app.play()

// 랜덤값 생성 함수
function makeRandomValue() {
  let randomValue=new Set();
  while (randomValue.size<3) {
    randomValue.add(MissionUtils.Random.pickNumberInRange(1, 9));
  }
  app.setRandomValue([...randomValue].join(''))
}

// 사용자의 숫자 입력받기
function inputUserValue() {
  MissionUtils.Console.readLine('숫자를 입력해주세요 : ',(answer)=> {
    isValidValue(answer)
  })
}

//사용자의 입력값이 유효값인지 검사
function isValidValue(number) {
  let isUnique=(new Set(number)).size
  if (!number.match(/[1-9]{3}/) || isUnique!==3) {
    throw ("잘못된 형식을 입력하였습니다. 서로 다른 숫자 3가지를 입력하세요")
  }
  app.setUserValue(number)
}

// MissionUtils.Console.close()
// MissionUtils.Console.print(randomValue);

// module.exports = App;

