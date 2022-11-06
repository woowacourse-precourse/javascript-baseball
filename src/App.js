const MissionUtils = require("@woowacourse/mission-utils");
const isError = require('./errorHandler');

class App {
  play() {
    // 3개의 랜덤숫자 생성
    let RANDOM_VALUE = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);

    MissionUtils.Console.readLine('숫자를 입력해주세요.', (USER_INPUT) => {
      let errorHandler = new isError(USER_INPUT);
      if(errorHandler.isInputCorrect(USER_INPUT)) {
        throw new Error("입력값이 올바르지 않습니다.");
      }
    });
  }
}

const app = new App();

app.play();

module.exports = App;
