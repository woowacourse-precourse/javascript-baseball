const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

    const randomNumber = this.getRandomNumber();

    this.round(randomNumber);
  }

  // 컴퓨터가 랜덤한 세 자리 숫자를 생성하는 함수
  getRandomNumber() {
    const computer = [];

    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }

    return computer;
  }

  // 사용자의 입력값을 확인하고, 올바른 숫자를 입력한 경우 정답을 확인하는 함수로 전달하는 함수
  round(computerNumber) {
    return MissionUtils.Console.readLine("숫자를 입력해주세요: ", (answer) => {
      if (
        answer.length !== 3 ||
        isNaN(Number(answer)) ||
        !this.checkDuplicate(answer)
      ) {
        throw new Error("잘못된 값을 입력하여 게임을 종료합니다.");
      }
      this.checkForAnswer(computerNumber, answer);
    });
  }

  // 사용자의 입력값 중 중복값이 존재하는지 확인하는 함수
  checkDuplicate(num) {
    const set = new Set();

    for (let el of num) {
      set.add(el);
    }

    if (set.size === 3) {
      return true;
    } else {
      return false;
    }
  }

  // 컴퓨터의 정답과 사용자의 입력값을 전달받아 결과를 확인하는 함수
  checkForAnswer(computerNumber, answer) {
    let result = this.myResult(computerNumber, answer);

    if (result === "3스트라이크") {
      this.correctAnswer(result);
    } else {
      MissionUtils.Console.print(result);
      this.round(computerNumber);
    }
  }

  // 사용자의 입력값을 확인하여 스트라이크, 볼 카운트를 확인하는 함수
  myResult(computer, input) {
    const myNumber = this.changeToArr(input);
    const answer = this.countStrikeAndBall(computer, myNumber);
    let ballCount, strikeCount;

    if (answer["ball"] !== 0) {
      ballCount = `${answer["ball"]}볼`;
    }
    if (answer["strike"] !== 0) {
      strikeCount = `${answer["strike"]}스트라이크`;
    }

    return this.countResult(ballCount, strikeCount);
  }

  // 문자열로 입력받은 사용자의 숫자 입력값을 배열로 전환하는 함수
  changeToArr(num) {
    let myArr = [];

    for (let el of num) {
      myArr.push(Number(el));
    }

    return myArr;
  }

  // 스트라이크, 볼 카운트를 계산하는 함수
  countStrikeAndBall(computerNumber, myNumber) {
    let answer = {
      strike: 0,
      ball: 0,
    };

    for (let i = 0; i < 3; i++) {
      if (computerNumber[i] === myNumber[i]) {
        answer["strike"]++;
      }
      if (
        computerNumber[i] !== myNumber[i] &&
        computerNumber.includes(myNumber[i])
      ) {
        answer["ball"]++;
      }
    }

    return answer;
  }

  // 스트라이크, 볼 카운트 결과에 따라 결과값을 리턴하는 함수
  countResult(ball, strike) {
    if (!ball && !strike) {
      return "낫싱";
    }
    if (!ball) {
      return strike;
    }

    if (!strike) {
      return ball;
    }

    return `${ball} ${strike}`;
  }

  // 정답을 맞춘 경우(3 스트라이크) 게임을 종료하고, 재시작을 확인하는 함수
  correctAnswer(result) {
    MissionUtils.Console.print(result);
    MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    MissionUtils.Console.readLine(
      `게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.
`,
      this.restart
    );
  }

  // 사용자의 입력값에 따라 재시작 혹은 종료를 리턴하는 함수
  restart(num) {
    if (num === "1") {
      app.play();
    } else if (num === "2") {
      MissionUtils.Console.close();
    } else {
      throw new Error("잘못된 값을 입력하여 게임을 종료합니다.");
    }
  }
}

const app = new App();
app.play();

module.exports = App;
