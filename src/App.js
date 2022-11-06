// 기능요구사항

// - [x] 시작 메세지 출력.
// - [x] 랜덤수를 생성한다.
// - [x] 숫자를 입력해주세요 메세지 출력.
// - [x] 숫자를 입력받는다.
// - [] 스트라이크인지 판별하는 함수
// - [] 볼인지 판별하는 함수
// - [x] 낫싱인지 판별한다.
// - [x] 스트라이크 볼 낫싱을 출력한다.
// - [x] 세개의 숫자가 모두 맞으면 종료한다.
// - [x] 반복한다.

const MissionUtils = require("@woowacourse/mission-utils");

function App() {
  this.play = () => {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    createcomputerNumber();
    console.log(this.computerNumber);
    recursiveAsyncReadLine();
  };

  this.init = () => {
    this.play();
  };

  const findBall = (userNumber, computerNumber) => {};
  const findStrike = (userNumber, computerNumber) => {};

  const recursiveAsyncReadLine = () => {
    MissionUtils.Console.readLine(
      this.endflag === undefined
        ? "숫자를 입력해주세요 : "
        : "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. \n",
      (number) => {
        if (number === "2" && this.endflag == true) {
          MissionUtils.Console.print("게임종료");
          MissionUtils.Console.close();
          return;
        }
        if (number === "1" && this.endflag == true) {
          createcomputerNumber();
          this.endflag = undefined;
          recursiveAsyncReadLine();

          return;
        }

        this.userNumber = number;

        checkNumber(this.computerNumber, this.userNumber);

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

  const checkNumber = (computerNumber, userNumber) => {
    if (computerNumber === userNumber) {
      MissionUtils.Console.print("3스트라이크");
      MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      this.endflag = true;
      return;
    }

    let strike = 0;
    let ball = 0;

    for (let index1 = 0; index1 < 3; index1++) {
      for (let index2 = 0; index2 < 3; index2++) {
        if (userNumber[index1] === computerNumber[index2]) {
          if (index1 === index2) strike++;
          if (index1 !== index2) ball++;
          if (index1 === index2 || index1 !== index2) {
            this.strikecheck = true;
            break;
          }
        }
      }
    }

    if (ball === 0 && strike === 0) {
      MissionUtils.Console.print("낫싱");
      return;
    }

    let answer = "";

    if (ball !== 0) {
      answer += ball + "볼 ";
    }
    if (strike !== 0) {
      answer += strike + "스트라이크";
    }

    MissionUtils.Console.print(answer);
    return;
  };
}

const app = new App();
app.play();

module.exports = App;
