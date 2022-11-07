const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {}

  // 1. 컴퓨터가 뽑은 랜덤 숫자 3개 배열로 만드는 함수
  randomNums() {
    let nums = [];
    while (nums.length < 3) {
      let number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!nums.includes(number)) {
        nums.push(number);
      }
    }
    return nums;
  }

  // 2. 사용자에게 숫자 3개 받는 함수
  readNums() {
    let user = "";
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (answer) => {
      this.checkError(answer);
      user = [...answer].map((num) => Number(num));
    });

    return user;
  }

  // 8. 사용자에게 입력받은 숫자 에러 체크하는 함수
  checkError(answer) {
    let set = new Set([...answer])

    if (
      isNaN(Number(answer)) ||
      answer.includes(0) ||
      answer.length !== 3 ||
      answer.length !== set.size
    ) {
      throw new Error();
    }
  }

  // 3. 컴퓨터 숫자와 사용자 숫자 비교하는 함수
  compareNums(computer, user) {
    let ball = 0;
    let strike = 0;

    for (let i = 0; i < user.length; i++) {
      if (user[i] === computer[i]) {
        strike++;
      } else if (computer.includes(user[i])) {
        ball++;
      }
    }
    return [ball, strike];
  }

  // 4. 3번에 비교한 결과를 바탕으로 출력해주는 함수
  printResult(score) {
    let ball = score[0];
    let strike = score[1];

    if (strike === 3) {
      MissionUtils.Console.print("3스트라이크");
      MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      return true;
    }

    if (ball === 0 && strike === 0) {
      MissionUtils.Console.print("낫싱");
    } else if (strike === 0) {
      MissionUtils.Console.print(`${ball}볼`);
    } else if (ball === 0) {
      MissionUtils.Console.print(`${strike}스트라이크`);
    } else {
      MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
    }
    return false;
  }

  // 5. 새 게임을 시작하는 함수
  newGame() {
    let computer = this.randomNums();
    this.startGame(computer);
  }

  // 6. 게임을 진행하는 함수
  startGame(computer) {
    let user = this.readNums();
    let score = this.compareNums(computer, user);
    let result = this.printResult(score);
    if (!result) this.startGame(computer);

    MissionUtils.Console.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. ",
      (answer) => {
        this.checkContinue(answer);
      }
    );
  }

  // 7. 새로 시작할지 종료할지 판단하는 함수
  checkContinue(answer) {
    if (answer === "1") {
      this.newGame();
    } else if (answer === "2") {
      MissionUtils.Console.print("숫자 야구 프로그램을 종료합니다");
      MissionUtils.Console.close();
    } else {
      throw new Error();
    }
  }

  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.newGame();
    MissionUtils.Console.close();
  }
}

module.exports = App;
