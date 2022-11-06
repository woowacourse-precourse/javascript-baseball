const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    // 3개의 랜덤숫자 생성
    let RANDOM_VALUE = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);

    MissionUtils.Console.readLine('숫자를 입력해주세요.', (USER_INPUT) => {
      if(this.errorHandler(USER_INPUT)) {
        throw new Error("입력값이 올바르지 않습니다.");
      }
    });
  }

  // 통합 예외처리 함수
  errorHandler(USER_INPUT) {
    if (this.isInputLengthCorrect(USER_INPUT) | this.isNumCorrect(USER_INPUT) | this.isNumberRangeCorrect(USER_INPUT)) {
      return true;
    }
    return false;
  }

  // 입력받은 숫자가 3자리가 맞는가
  isInputLengthCorrect(USER_INPUT) {
    if (USER_INPUT.length != 3){
      return true;
    }
    return false;
  }

  // 입력받은 값이 숫자가 맞는가
  isNumCorrect(USER_INPUT) {
    for (let i = 0; i < 3; i++){
      if (isNaN(Number(USER_INPUT[i]))) {
        return true;
      }
      return false;
    }
  }

  // 입력받은 값이 1 ~ 9 사이의 정수인가
  isNumberRangeCorrect(USER_INPUT) {
    for (let i=0; i<3; i++) {
      if (Number(USER_INPUT[i]) < 0 | Number(USER_INPUT) > 10) {
        return true;
      }
    }
    return false;
  }
}

const app = new App();

app.play();

module.exports = App;
