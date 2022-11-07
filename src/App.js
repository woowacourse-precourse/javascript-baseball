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
    const userInput = this.user.getInput();
    MissionUtils.Console.print(`나의 입력은 ${userInput} 입니다`);
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
  getInput() {
    let userInput;
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (userInputNumber) => {
      userInput = userInputNumber
        .toString()
        .split("")
        .map((letter) => Number(letter));
      MissionUtils.Console.close();
    });
    return userInput;
  }
}

module.exports = App;
