const { Random, Console } = require("@woowacourse/mission-utils");

class App {
  generateGoalNumber(minNumber = 1, maxNumber = 9, numberLength = 3) {
    return Random.pickUniqueNumbersInRange(minNumber, maxNumber, numberLength);
  }

  receiveNumberFromUser() {
    let userNumber;
    Console.readLine("숫자를 입력해주세요 : ", (answer) => {
      const uniqueNumber = [...new Set(Array.from(answer))];
      if (uniqueNumber.length !== 3) throw Error();
      userNumber = uniqueNumber.map((stringNumber) => +stringNumber);
    });
    return userNumber;
  }

  compareGoalAndUserAnswer() {
    // 스트라이크 아웃 비교하고 결과 반환
  }

  printResult() {
    // 볼 스트라이크 낫싱 등 결과 출력;
  }

  confirmRestart() {}

  restartGame() {
    this.play();
  }

  exitGame() {}

  play() {
    // const goal = generateGoalNumber();
    let userAnswer = this.receiveNumberFromUser();
    // userAnswer가 undefined면 앱 종료하기

    // let score = compareGoalAndUserAnswer(goal, userAnswer);
    // while (score !== 스트라이크3) {
    //   printResult(score);
    //   userAnswer = receiveNumberFromUser();
    //   score = compareGoalAndUserAnswer(goal, userAnswer);
    // }
    // printResult(score);
    // if (confirmRestart()) return restartGame();
    // exitGame();
  }
}

module.exports = App;
