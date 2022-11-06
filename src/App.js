const MissionUtils = require("@woowacourse/mission-utils");

class App {
  computerNum() {
    const COMPUTER = [];
    while (COMPUTER.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!COMPUTER.includes(number)) {
        COMPUTER.push(number);
      }
    }
    return COMPUTER   
  }
  
  userNum() {
    let USER_NUM = 0
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (number) => {
      console.log(`숫자를 입력해주세요 : ${number}`)
      USER_NUM = number
      // 잘못된 값을 입력했을 땐 throw 로 ERROR 처리 할 것
      this.checkError(USER_NUM)
    });
    return USER_NUM
  }

  checkError(number){
    number = number.split('')
    if (number.length !== 3){
      throw MissionUtils.Console.close()
    }

  }

  checkBall(computer, user){

    let BALL_STACK = []
    user = user.split("")

    for ( let i = 0 ; i < 3 ; i ++) {
      if (computer.includes(parseInt(user[i])) && parseInt(user[i]) !== computer[i]){
        BALL_STACK.push(user[i])
      }
    }

    return BALL_STACK.length
  }

  checkStrike(computer, user) {
    let STRIKE_COUNT = 0
    user = user.split('')

    for ( let i = 0 ; i < 3 ; i ++ ){
      if ( computer[i] === parseInt(user[i])) {
        STRIKE_COUNT += 1
      }
    }
    return STRIKE_COUNT
  }

  checkRestart(){
    MissionUtils.Console.print(`게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.`)
    MissionUtils.Console.readLine('', (number) => {
      if(number === '1') {
        return this.play()
      } else if(number === '2') {
        MissionUtils.Console.print('게임 종료')
        MissionUtils.Console.close()
      }
    });
  }
  play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.')
  
    const COMPUTER_NUM = this.computerNum()

    while (true) {
      let BALL = 0
      let STRIKE  = 0

      const USER_NUM = this.userNum()

      BALL = this.checkBall(COMPUTER_NUM, USER_NUM)
      STRIKE = this.checkStrike(COMPUTER_NUM , USER_NUM)
      
      
      // 출력 
      if (BALL === 0 && STRIKE === 0) {
        MissionUtils.Console.print(`낫싱`)
      } else if (BALL !== 0 && STRIKE === 0){
        MissionUtils.Console.print(`${BALL}볼`)
      } else if (BALL === 0 && STRIKE !== 0){
        MissionUtils.Console.print(`${STRIKE}스트라이크`)
      } else {
        MissionUtils.Console.print(`${BALL}볼 ${STRIKE}스트라이크`)
      }

      if ( STRIKE === 3) {
        break
      }

      
    }
    // Check
    MissionUtils.Console.print(`3개의 숫자를 모두 맞히셨습니다!`)
    this.checkRestart()
  }
}

module.exports = App;
