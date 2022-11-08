const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.randoms = [];
    this.inputs = [];
    this.strike = 0;
    this.ball = 0;
    this.playTimes = 0;
  }

  /* 랜덤 숫자 추출 */
  setRandoms() {
    while (this.randoms.length < 3) {
      const random = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.randoms.includes(random)) this.randoms.push(random);
    }
  }

  /* 사용자 입력 받기 */
  setInputs() {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (input) => {
      this.inputs = input.split('').map((splited) => Number(splited));
      this.processInputs(this.inputs);
    });
  }

  /* 입력값 검증 및 예외 처리 */
  validateInputs() {
    if (this.inputs.length !== 3) {
      throw "잘못된 값을 입력하였습니다. 3자리의 수만 입력할 수 있습니다.";
    }
    
    if (this.inputs[0] === this.inputs[1] || this.inputs[1] === this.inputs[2] || this.inputs[2] === this.inputs[0]) {
      throw "잘못된 값을 입력하였습니다. 3자리의 수는 각각 서로 다른 숫자여야 합니다."
    }

    for (let i=0; i<3; i++) {
      if (this.inputs[i] < 1 || this.inputs[i] > 9) {
        throw "잘못된 값을 입력하였습니다. 1부터 9까지의 수만 입력할 수 있습니다.";
      }
    }
  }

  /* 스트라이크 및 볼 개수 카운트 */
  countStrikeBall() {
    this.strike = 0;
    this.ball = 0;

    for (let i=0; i<this.inputs.length; i++) {
      if (this.inputs[i] === this.randoms[i]) this.strike++;
      else if (this.randoms.includes(this.inputs[i])) this.ball++;
    }
  }
  
  /* 결과(힌트) 출력 */ 
  printResult() {
    if (this.strike === 0 && this.ball === 0) MissionUtils.Console.print("낫싱");
    else MissionUtils.Console.print(this.ball + "볼 " + this.strike + "스트라이크");

    // 게임 종료
    if (this.strike === 3) this.exitOrRestart();
    // 숫자를 모두 맞힐 때까지 반복
    else this.setInputs();
  }

  /* 종료 또는 재시작 */
  exitOrRestart() {
    MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    MissionUtils.Console.readLine("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.", (flag) => {
      if (flag == 1) {
        this.randoms = [];
        this.play();
      }
      else if (flag == 2) return;
      else throw "잘못된 값을 입력하였습니다. 1 또는 2만 입력할 수 있습니다."
    });
  }

  /* 사용자 입력값 저장 후 호출될 콜백 함수 */ 
  processInputs() {
    this.validateInputs();
    this.countStrikeBall();
    this.printResult();
  }

  /* 게임 플레이 */
  play() {
    // 게임 시작 문구 출력
    if (this.playTimes === 0) MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.playTimes++;

    this.setRandoms();
    this.setInputs();
  }
}

module.exports = App;
