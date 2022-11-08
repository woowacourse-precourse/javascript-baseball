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
    this.computerArr = [...computer]; // 배열로 바꿔야 출력 가능 // 배열 내용은 number
    console.log(`computer : ${this.computerArr}, type: ${typeof(this.computerArr[0])}`);

    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (input) => {
      // 만약 유효성 검사 만족하면 -> 
      if(true){
        // 값 있는지 확인
        this.userArr = [...input]; // userinput은 computerinput과 다르게 123 이렇게 주어짐
        this.userArr = input.split('').map(Number);
        MissionUtils.Console.print(`input: ${this.userArr}`); // this.userArr[0] 이렇게 뽑아보면 number 확인
      }
    });
  }

  // 유효성 검사
  isValid(userInput){
  }




}

module.exports = App;
