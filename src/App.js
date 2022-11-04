class App {
  generateGoalNumber() {}

  receiveNumberFromUser() {
    // 서로 다른 3자리의 수 입력 받고 반환
    // 잘못된 값일 경우 throw 하고 앱 종료하기
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
    const goal = generateGoalNumber();
    let userAnswer = receiveNumberFromUser();
    let score = compareGoalAndUserAnswer(goal, userAnswer);

    while (score !== 스트라이크3) {
      printResult(score);
      userAnswer = receiveNumberFromUser();
      score = compareGoalAndUserAnswer(goal, userAnswer);
    }

    printResult(score);
    if (confirmRestart()) return restartGame();
    exitGame();
  }
}

module.exports = App;
