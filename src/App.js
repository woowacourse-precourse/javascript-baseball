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
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (input) => {

      // 예외 처리 및 계산
      this.checkInput(input);
      const result = this.compareNumbers(input);

      // 결과 출력
      if (result.strike == 3) {
        MissionUtils.Console.print(`3스트라이크`);
        MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다!");
        MissionUtils.Console.print("게임 종료");
        this.restart();
      } else {
        if (result.strike == 0 && result.ball == 0) MissionUtils.Console.print("낫싱");
        else if (result.strike == 0) MissionUtils.Console.print(`${result.ball}볼`);
        else if (result.ball == 0) MissionUtils.Console.print(`${result.strike}스트라이크`);
        else MissionUtils.Console.print(`${result.ball}볼 ${result.strike}스트라이크`);
        return this.inGame();
      }
    });
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

  // 입력값과 랜덤값 비교
  compareNumbers(input) {
    const inputArr = input.split("");
    let strike = 0;
    let ball = 0;
  
    inputArr.forEach((cur, idx) => {
      if (idx === this.randomNumbers.indexOf(cur)) {
        strike++;
      } else if (this.randomNumbers.includes(cur)) {
        ball++;
      }
    });
  
    return { strike, ball };
  }

  // 게임 재시작 여부 확인
  restart() {
    const answer = MissionUtils.Console.readLine("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n", (input) => {
      if (input == 1) this.play();
      else if (input == 2) MissionUtils.Console.close();
      else {
        MissionUtils.Console.print("잘못 입력하셨습니다.");
        this.restart();
      }
    });
  }

}

module.exports = App;
