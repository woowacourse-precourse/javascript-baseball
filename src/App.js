// 기능요구사항

// - [x] 시작 메세지 출력.
// - [x] 랜덤수를 생성한다.
// - [x] 숫자를 입력해주세요 메세지 출력.
// - [x] 숫자를 입력받는다.
// - [] 스트라이크인지 판별한다.
// - [] 볼인지 판별한다.
// - [] 낫싱인지 판별한다.
// - [] 스트라이크 볼 낫싱을 출력한다.
// - [x] 세개의 숫자가 모두 맞으면 종료한다.
// - [x] 반복한다.

import MissionUtils from "@woowacourse/mission-utils";

function App() {
  this.play = () => {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    createRandomNumber();
    recursiveAsyncReadLine();
  };

  this.init = () => {
    this.play();
  };

  const recursiveAsyncReadLine = () => {
    MissionUtils.Console.readLine(
      this.endflag === undefined
        ? "숫자를 입력해주세요 : "
        : "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. \n",
      (number) => {
        this.currentNumber = number;
        this.endflag = checkNumber(this.randomNumber, this.currentNumber);

        if (number === "2") {
          MissionUtils.Console.close();
          return;
        }

        recursiveAsyncReadLine();
      }
    );
  };

  const createRandomNumber = () => {
    this.randomNumber = "";

    for (let index = 0; index < 3; index++) {
      this.randomNumber += MissionUtils.Random.pickNumberInList([
        1, 2, 3, 4, 5, 6, 7, 8, 9,
      ]).toString();
    }
    return;
  };

  const checkNumber = (randomNumber, currentNumber) => {
    console.log(randomNumber);

    if (randomNumber === this.currentNumber) {
      MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      return true;
    }
  };
}

const app = new App();

app.init();

//module.exports = App;
