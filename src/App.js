const MissionUtils = require("@woowacourse/mission-utils");


class App {
  play() {
    console.log('숫자 야구 게임을 시작합니다.')
    // 1.컴퓨터 리스트 생성
    const computerLs = new Computer();
    computerLs.makeComNumLs();
    // 2.유저 리스트 입력
    const userLs = new User();
    userLs.getUserLs();
  }
}

class Computer extends App {
  makeComNumLs(){
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
  }
}

class User extends App {
  getUserLs () {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (answer) => {
      MissionUtils.Console.close();
      return answer
    });
  }
}

module.exports = App;

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> test <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<??
const app = new App();
const computerLs = new Computer();
const userLs = new User();

userLs.getUserLs()

// console.log(computerLs.makeComNumLs());