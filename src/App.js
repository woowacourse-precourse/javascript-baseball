const MissionUtils = require('@woowacourse/mission-utils');

class App {
  // play() {}
  constructor(){ // 일단 배열 초기화
    this.computerArr=[];
    this.userArr=[];
  }

  play() { // main
    // 시작 메시지 출력
    const computer = new Set(); // set은 중복값 허용x
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    while (computer.size < 3) {
      computer.add(MissionUtils.Random.pickNumberInRange(1, 9));
    }
    this.computerArr = [...computer]; // 배열로 바꿔야 출력 가능
    console.log(`computer : ${this.computerArr}`);

  }




}

module.exports = App;
