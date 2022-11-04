const MissionUtils = require('@woowacourse/mission-utils');

class App {
  constructor() {
    this.randomValue=''
    this.userValue=''
  }

  play() {
    makeRandomValue()
    inputUserValue()
  }

  setRandomValue(number) {
    this.randomValue=number
    // MissionUtils.Console.print(this.randomValue)
  }

  setUserValue(number) {
    this.userValue=number
  }
  
  checkcheck() {
    whatsAfter(checkAnswer(this.randomValue,this.userValue))
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
    throw '잘못된 형식을 입력하였습니다. 서로 다른 숫자 3가지를 입력하세요'
  }
  app.setUserValue(number)
  app.checkcheck()
}

// 정답 검사
function checkAnswer(computer,user) {
  const strike=countStrike(computer,user)
  const ball=countBall(computer,user)-strike
  if (strike===3) {
    return (`3스트라이크`);
  }
  if (ball===0 && strike===0) {
    return (`낫싱`);
  }
  if (ball===0 && strike!==0) {
    return (`${strike}스트라이크`);
  }
  if (ball!==0 && strike===0) {
    return (`${ball}볼`);
  }
  if (ball!==0 && strike!==0) {
    return (`${ball}볼 ${strike}스트라이크`);
  }
}

//볼 개수
function countBall(computer,user) {
  return [...computer].filter(x => user.includes(x)).length
}

//스트라이크 개수
function countStrike(computer,user) {
  return [...computer].filter((x,idx) => user[idx]===x).length
}

function whatsAfter(afterGame) {
  MissionUtils.Console.print(afterGame)
  if (afterGame === `3스트라이크`) {
    askRegame()
  }
  if (afterGame !== `3스트라이크`) {
    inputUserValue()
  }
}

function askRegame() {
  MissionUtils.Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. ',(answer)=> {
    realReGame(answer)
  })
}

function realReGame(num){
  if (num!=='1' && num!=='2') {
    throw '잘못된 형식을 입력하였습니다. 게임을 종료합니다.'
  }
  if (num==='1') {
    const app = new App();
    app.play();
  }
  if (num==='2') {
    MissionUtils.Console.print(`게임 종료`)
    MissionUtils.Console.close();
  }
}

module.exports = App;
