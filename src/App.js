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
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.')
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (number) => {
      console.log(`숫자를 입력해주세요 : ${number}`)
      USER_NUM = number
    });
    return USER_NUM
  }
  play() {
    // 컴퓨터의 수 가져오기
    const COMPUTER_NUM = this.computerNum()
    console.log(`computer : ${COMPUTER_NUM}`)
    // 유저 숫자
    const USER_NUM = this.userNum()
    console.log(`user : ${USER_NUM}`)


    // Check


  }
}

module.exports = App;
