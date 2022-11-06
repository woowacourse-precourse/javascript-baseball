const MissionUtils = require("@woowacourse/mission-utils");


class App {
  play() {
    // 1.컴퓨터 리스트 생성
    const computerLs = new Computer();

    // 2.유저 리스트 입력
    const userLs = new User();

  }
}

class Computer extends App {
  makeComNumLs(){}
}

class User extends App {
  getUserLs(){}
}

module.exports = App;
