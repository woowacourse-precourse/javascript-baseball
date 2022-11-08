const MissionUtils = require("@woowacourse/mission-utils");

class App {
  // 기능 목록
  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
  }
  // 컴퓨터가 랜덤으로 3개의 숫자 생성
  makeRandomNum() {
    let baseballNums = new Set();

    while (baseballNums.size < 3) {
      baseballNums = add(MissionUtils.Random.pickNumberInRange(1, 9));
    }
    this.baseballNum = [...baseballNums].join("");
  }
  
  // 유저가 숫자 입력
  userInputNum(){
    MissionUtils.Console.readline("숫자를 입력해주세요. : ", (userNum) => {
        this.stirup(userNum);
    })
  }

  // 입력 숫자 유효한 값인지 확인
  checkValidNum(userNum) {
    if(this.isValidNum(userNum)) {
      this.gradeInput(userNum);
    }
  }
  // 스트라이크(같은 자리, 같은 숫자) 제거
  // 볼 (다른 자리, 같은 숫자)제거
  play() {
    console.log("숫자 야구 게임을 시작합니다.");
  }
  
}
module.exports = App;
// const test = new App();
// console.log(App.play());