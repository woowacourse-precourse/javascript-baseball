const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.randomValue=makeRandomValue()
    this.userValue=''
  }

  play() {
    MissionUtils.Console.print(this.randomValue)
    inputUserValue()
  }

  setUserValue(number) {
    this.userValue=number
  }
  
  checkcheck() {
    checkAnswer(this.randomValue,this.userValue)
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
  return [...randomValue].join('')
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
  // return answer
  app.setUserValue(number)
  app.checkcheck()
}

function here() {
  console.log('55555555555')
}

// 정답 검사
function checkAnswer(computer,user) {
  const ball=countBall(computer,user)
  const strike=countScrike(computer,user)
  if (strike===3) {
    // 재시작 여부 묻는 함수 실행하기
    here()
  }
  if (ball===0 && strike===0) {
    MissionUtils.Console.print(`낫싱`);
    // inputUserValue()
  }
  if (ball===0 && strike!==0) {
    MissionUtils.Console.print(`${strike}스트라이크`);
    // inputUserValue()
  }
  if (ball!==0 && strike===0) {
    MissionUtils.Console.print(`${ball}볼`);
    // inputUserValue()
  }
  if (ball!==0 && strike!==0) {
    MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
    // inputUserValue()
  }
  
}

//볼 개수
const countBall = (computer,user) => {
  return [...computer].filter(x => user.includes(x)).length
}

//스트라이크 개수
const countScrike = (computer,user) => {
  return [...computer].filter((x,idx) => user[idx]===x).length
}

// MissionUtils.Console.close()
// MissionUtils.Console.print(randomValue);

// module.exports = App;

