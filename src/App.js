// 요구사항
// indent(인덴트, 들여쓰기) depth를 3이 넘지 않도록 구현한다. 2까지만 허용한다.
// 예를 들어 while문 안에 if문이 있으면 들여쓰기는 2이다.
// 힌트: indent(인덴트, 들여쓰기) depth를 줄이는 좋은 방법은 함수(또는 메소드)를 분리하면 된다.
// 함수(또는 메서드)가 한 가지 일만 하도록 최대한 작게 만들어라.

const MissionUtils = require("@woowacourse/mission-utils");

class App {
  computerNum() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer   
  }
  
  userNum() {
    let USER_NUM = 0
    // 숫자 READLINE
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (number) => {
      console.log(`숫자를 입력해주세요 : ${number}`)
      USER_NUM = number
      // 잘못된 값을 입력했을 땐 throw 로 ERROR 처리 할 것
    });
    return USER_NUM
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

  play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.')

    // BALL , STRIKE
    let BALL = 0
    let STRIKE  = 0
  
    // 컴퓨터의 수 가져오기
    const COMPUTER_NUM = this.computerNum()
    console.log(`computer : ${COMPUTER_NUM}`)

    // 유저가 맞출 때 까지 while문 반복
    while (true) {
      if ( STRIKE === 3) {
        break
      }
      const USER_NUM = this.userNum()
      console.log(`user : ${USER_NUM}`)

      BALL = this.checkBall(COMPUTER_NUM, USER_NUM)
      console.log('# CHECK BALL')
      console.log(BALL)
      break
    }


    // Check


  }
}

module.exports = App;
