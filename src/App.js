const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.opponent = new Opponent(); //상대방 등장
    this.opponent.setRandomNumber(); //상대방 숫자 지정
    this.user = new User(); //사용자(본인) 등장
  }
  play() {
    this.gameStart();
    // MissionUtils.Console.print(`상대방의 숫자는 ${this.opponent.number} 입니다`);
    this.user.getInput();
    this.user.checkValidation();
  }
  gameStart() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
  }
}

class Opponent {
  //상대방 관련 클래스
  constructor() {
    this.number = []; //빈 숫자 배열 생성
  }
  setRandomNumber() {
    //랜덤으로 숫자 3개를 추출하여 배열에 저장(중복 없음)
    while (this.number.length < 3) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.number.includes(randomNumber)) {
        // 중복 숫자 없어야 함
        this.number.push(randomNumber);
      }
    }
  }
}

class User {
  constructor() {
    this.input = [];
  }
  getInput() {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (inputNumber) => {
      this.input = inputNumber.toString().split("");
      MissionUtils.Console.close();
    });
  }
  checkValidation() {
    this.input.map((number) => {
      if (isNaN(number)) throw new Error("오직 숫자만 입력이 가능합니다.");
    });
    if (this.input.includes("0")) throw new Error("1부터 9 사이의 숫자만 입력 가능합니다.");
    if (this.input.length !== 3) throw new Error("3자리 수만 입력이 가능합니다.");
  }
}

module.exports = App;
