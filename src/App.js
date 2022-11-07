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

  /* 게임 플레이 */
  play() {
    this.pickRandomNumbers();
    // console.log("numbers: ", this.numbers);

    // 게임 시작 문구 출력
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (answer) => {
      try {
        this.validateInput(answer);
        const [strike, ball] = this.checkStrikeBall(answer);

        // 결과(힌트) 출력
        strike === 0 && ball === 0
          ? MissionUtils.Console.print("낫싱")
          : MissionUtils.Console.print(ball + "볼 " + strike + "스트라이크");
      } catch(e) {
        console.error(e);
      }
    });
  }
}

const app = new App();
app.play();

module.exports = App;
