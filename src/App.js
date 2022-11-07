const MissionUtils = require("@woowacourse/mission-utils");

class App {
  /* 랜덤 숫자 추출 */
  pickRandomNumbers() {
    const numbers = [];
    while (numbers.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!numbers.includes(number)) numbers.push(number);
    }

    return numbers;
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

  /* 게임 플레이 */
  play() {
    const numbers = this.pickRandomNumbers();

    // 게임 시작 문구 출력
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (answer) => {
      try {
        this.validateInput(answer);
      } catch(e) {
        console.error(e);
      }
    })
  }
}

const app = new App();
app.play();

module.exports = App;
