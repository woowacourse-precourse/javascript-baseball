const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.numbers = [];
  }

  /* 랜덤 숫자 추출 */
  pickRandomNumbers() {
    while (this.numbers.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.numbers.includes(number)) this.numbers.push(number);
    }
  }

  /* 입력값 검증 및 예외 처리 */
  validateInput(input) {
    if (input.length !== 3) {
      throw "잘못된 값을 입력하였습니다. 3자리의 수만 입력할 수 있습니다.";
    }
    
    const splited = input.split('');
    if (splited[0] === splited[1] || splited[1] === splited[2] || splited[0] === splited[2]) {
      throw "잘못된 값을 입력하였습니다. 3자리의 수는 각각 서로 다른 숫자여야 합니다."
    }

    for (let i=0; i<3; i++) {
      if (Number(splited[i]) < 1 || Number(splited[i]) > 9) {
        throw "잘못된 값을 입력하였습니다. 1부터 9까지의 수만 입력할 수 있습니다.";
      }
    }
  }

  /* 사용자 입력 처리 */
  checkStrikeBall(input) {
    let strike = 0;
    let ball = 0;

    const splited = input.split('');
    for (let i=0; i<splited.length; i++) {
      const splitedNum = Number(splited[i]);
      if (splitedNum === this.numbers[i]) strike++;
      else if (this.numbers.includes(splitedNum)) ball++;
    }

    return [strike, ball];
  }
  
  /* 종료 또는 재시작 */
  exitOrRestart(flag) {
    if (flag == 1) {
      this.numbers = [];
      this.pickRandomNumbers();
      this.getInput();
    }
    else if (flag == 2) return;
    else throw "잘못된 값을 입력하였습니다. 1 또는 2만 입력할 수 있습니다."
  }  

  /* (숫자를 모두 맞힐 때까지 반복되는) 사용자 입력에 대한 재귀 호출 함수 */ 
  processInput(input) {
    this.validateInput(input);
    const [strike, ball] = this.checkStrikeBall(input);

    // 결과(힌트) 출력
    if (strike === 0 && ball === 0) MissionUtils.Console.print("낫싱");
    else MissionUtils.Console.print(ball + "볼 " + strike + "스트라이크");

    if (strike === 3) { // 게임 종료
      MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      MissionUtils.Console.readLine("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.", (flag) => {
        this.exitOrRestart(flag);
      });
    }
    else { // 숫자를 모두 맞힐 때까지 반복
      this.getInput();
      MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (input) => {
        this.processInput(input);
      });
    }
  }

  /* 사용자 입력 받기 */
  getInput() {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (input) => {
      this.processInput(input);
    });  
  }

  /* 게임 플레이 */
  play() {
    this.pickRandomNumbers();

    // 게임 시작 문구 출력
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.getInput();
  }
}

module.exports = App;
