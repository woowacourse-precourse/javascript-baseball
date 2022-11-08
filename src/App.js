const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.randomNumbers = [];
  }

  // 게임 시작
  play() {
    this.randomNumbers = this.createRandom();
    this.inGame();
  }

  // 랜덤 숫자 생성
  createRandom() {
    const computer = [];
    while (computer.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer.join('');
  }

  // 인게임 진행
  inGame() {
    
  }

  // 입력 예외 처리
  checkInput(input) {
    if (input.length !== 3) {
      throw ("INPUT ERROR: 3자리 숫자를 입력해주세요.");
    }
    
    if (Number.isNaN(Number(input))) {
      throw ("INPUT ERROR: 숫자만 입력해주세요.");
    }
  
    if (input.split("").some((num, index, arr) => arr.indexOf(num) !== index)) {
      throw ("INPUT ERROR: 중복되지 않은 숫자를 입력해주세요.");
    }
  }

}

module.exports = App;
