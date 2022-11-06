// 기능요구사항

// - [x] 시작 메세지 출력.
// - [x] 랜덤수를 생성한다.
// - [x] 숫자를 입력해주세요 메세지 출력.
// - [x] 숫자를 입력받는다.
// - [x] 스트라이크인지 판별하는 함수
// - [x] 볼인지 판별하는 함수
// - [x] 낫싱인지 판별한다.
// - [x] 스트라이크 볼 낫싱을 출력한다.
// - [x] 세개의 숫자가 모두 맞으면 종료한다.
// - [x] 반복한다.
// - [x] 입력 예외처리 추가

const MissionUtils = require("@woowacourse/mission-utils");

function App() {
  this.play = () => {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    createcomputerNumber();
    recursiveAsyncReadLine();
  };

  const findBall = (userNumber, computerNumber) => {
    let ball = 0;
    for (let index = 0; index < 3; index++) {
      if (computerNumber.search(userNumber[index]) > -1) {
        ball++;
      }
    }

    return ball;
  };
  const findStrike = (userNumber, computerNumber) => {
    let strike = 0;
    for (let index = 0; index < 3; index++) {
      if (userNumber[index] === computerNumber[index]) {
        strike++;
      }
    }

    return strike;
  };

  const findAllStrike = (userNumber, computerNumber) => {
    if (computerNumber === userNumber) {
      MissionUtils.Console.print("3스트라이크");
      MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      this.endflag = true;
      return true;
    }
  };
  const checkNumber = (userNumber, computerNumber) => {
    let ball = findBall(this.userNumber, this.computerNumber);
    let strike = findStrike(this.userNumber, this.computerNumber);

    if (findAllStrike(userNumber, computerNumber) === true) {
      return;
    }
    if (findNothing(ball, strike) === true) {
      return;
    }
    makeAnswer(ball, strike);
  };

  const findNothing = (ball, strike) => {
    if (ball === 0 && strike === 0) {
      MissionUtils.Console.print("낫싱");
      return true;
    }
  };

  const makeAnswer = (ball, strike) => {
    let answer = "";

    if (ball - strike !== 0) {
      answer += ball - strike + "볼 ";
    }
    if (strike !== 0) {
      answer += strike + "스트라이크";
    }
    MissionUtils.Console.print(answer);
    return;
  };

  const restartGame = (number) => {
    if (number === "2") {
      MissionUtils.Console.print("게임종료");
      MissionUtils.Console.close();
      return;
    }
    if (number === "1") {
      createcomputerNumber();
      this.endflag = undefined;
      recursiveAsyncReadLine();
      return;
    }
  };

  const recursiveAsyncReadLine = () => {
    MissionUtils.Console.readLine(
      this.endflag === undefined
        ? "숫자를 입력해주세요 : "
        : "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. \n",
      (number) => {
        if (this.endflag === true) {
          restartGame(number);
          return;
        }
        if (number.length !== 3) {
          throw new Error("올바른 입력이 아닙니다. 다시 입력해 주세요");
        }
        this.userNumber = number;
        checkNumber(this.userNumber, this.computerNumber);
        recursiveAsyncReadLine();
      }
    );
  };

  const createcomputerNumber = () => {
    this.computerNumber = "";

    for (let index = 0; index < 3; index++) {
      this.computerNumber += MissionUtils.Random.pickNumberInList([
        1, 2, 3, 4, 5, 6, 7, 8, 9,
      ]).toString();
    }
    return;
  };
}

const app = new App();
app.play();

module.exports = App;
