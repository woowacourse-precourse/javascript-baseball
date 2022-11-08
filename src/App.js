const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    console.log("숫자 야구 게임");
    let isPlaying = true;

    while (isPlaying) {
      this.callGameSequence();
      if (!this.askRestart()) {
        isPlaying = false;
      }
    }
    MissionUtils.Console.print("게임 종료");
  }

  callGameSequence() {
    this.gameStatus = true;
    
    const answerMap = this.initGameSetting(); // 1. computer값을 생성한다
    
    while (this.gameStatus) {
      const userNumber = this.getUserNumber();  // 2. user값을 받아와 검사한다
      if (this.compareWithAnswer(answerMap, userNumber)) {  // 3. computer & user 값을 비교한다
        this.gameStatus = false;
      }
    }
  }

  initGameSetting() {
    const answer = [];
    const answerMap = {};

    while (answer.length !== 3) {
      const num = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!answer.includes(num)) {
        answer.push(num);
      }
    }

    for (let idx = 0; idx < answer.length; idx++) {
      const num = answer[idx];
      answerMap[num] = idx;
    }

    return answerMap;
  }

  getUserNumber() {
    const userNumber = [];

    MissionUtils.Console.readLine("숫자를 입력해주세요: ", (answer) => {
      answer.split("").forEach((e) => userNumber.push(e));
    });
    MissionUtils.Console.close();

    this.checkUserNumber(userNumber);

    return userNumber;
  }

  checkUserNumber(value) {
    const valueSet = new Set(value);

    if (value.length !== 3) { // 길이 검사
      throw `잘못된 형식 입력, 입력값의 길이는 3이어야 합니다. 입력된 길이: ${value.length}`;
    }

    if (valueSet.size !== 3) {  // 중복 숫자 검사
      throw `잘못된 형식 입력, 중복 숫자 존재, 입력된 value: ${value}`;
    }

    value.map((element) => {  // 숫자 검사
      element = Number(element);
      if (Number.isNaN(element)) {
        throw `잘못된 형식 입력, 숫자로 변환 불가능한 문자 존재, 입력된 value: ${value}`;
      }
    });
  }

  compareWithAnswer(answerMap, userNumber) {
    let strike = 0;
    let ball = 0;

    for (let idx = 0; idx < userNumber.length; idx++) {
      const num = userNumber[idx];
      if (answerMap[num] !== undefined) {
        answerMap[num] === idx ? strike++ : ball++;
      }
    }
    this.printResult(strike, ball);

    return strike === 3 ? true : false;
  }

  printResult(strike, ball) {
    if (strike === 0 && ball === 0) {
      MissionUtils.Console.print("낫싱");
    } else if (ball === 0) {
      MissionUtils.Console.print(`${strike}스트라이크`);
    } else if (strike === 0) {
      MissionUtils.Console.print(`${ball}볼`);
    } else {
      MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
    }
  }

  askRestart() {
    let isRestart;

    MissionUtils.Console.readLine(
      `3개의 숫자를 모두 맞히셨습니다! 게임 종료\n
      게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n
       > `,
      (answer) => {
        if (answer === "1" || answer === "2") {
          isRestart = answer;
        } else {
          throw `잘못된 입력 값 (재시작:1 , 게임종료:2) : ${answer}`;
        }
      }
    );
    MissionUtils.Console.close();

    return isRestart === "1" ? true : false;
  }
}

module.exports = App;
