const MissionUtils = require("@woowacourse/mission-utils");

class App {

  play() {
    console.log("숫자 야구 게임");
    let isPlaying = true;

    while (isPlaying) {
      this.callGameSequence(); 
      if (!this.askRestart()) isPlaying = false;
    }
    MissionUtils.Console.print("게임 종료");
  }

  callGameSequence() {
    this.gameStatus = true;
    // 1. computer값을 생성한다
    const answerMap = this.initGameSetting(); 
    // 스트라이크까지 2,3번 반복
    while (this.gameStatus) {
      // 2. user값을 받아와 검사한다
      const userNumber = this.getUserNumber();
      // 3. computer & user 값을 비교한다
      if (this.compareWithAnswer(answerMap, userNumber)){ 
        this.gameStatus = false;
      } 
    }
  }

  initGameSetting() { // 컴퓨터 숫자 생성, map 생성
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
      answer = answer.split("").map(e => userNumber.push(e));
    });
    MissionUtils.Console.close();
    // 예외 처리
    this.checkUserNumber(userNumber);
    
    return userNumber;
  }

  checkUserNumber(value) {
    const valueSet = new Set(value);

    if (value.length !== 3) { // 길이 검사
      throw `잘못된 형식 입력`;
    }

    if (valueSet.size !== 3) { // 중복 숫자 검사
      throw `잘못된 형식 입력`;
    }

    value.map(element => { // 숫자 검사
      element = Number(element);
      if (Number.isNaN(element)) throw `잘못된 형식 입력`;
    })
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
    if (!strike && !ball) {
      MissionUtils.Console.print("낫싱");
    } else if (!ball) {
      MissionUtils.Console.print(`${strike}스트라이크`);
    } else if (!strike) {
      MissionUtils.Console.print(`${ball}볼`);
    } else {
      MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
    }
  }

  askRestart() {
    let isRestart;
    
    MissionUtils.Console.readLine(
      `3개의 숫자를 모두 맞히셨습니다! 게임 종료₩n
      게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.`,
      (answer) => {
        answer = Number(answer);
        isRestart = answer;
      }
    )
    MissionUtils.Console.close();

    if (isRestart === 1) {
      return true;
    } else if (isRestart === 2) {
      return false;
    } else {
      throw `잘못된 값을 입력하여 게임을 종료합니다.`
    }
  }
}

module.exports = App;
