const { Console, Random } = require("@woowacourse/mission-utils");

class App {
  play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    this.askForNumbers();
  }

  makeRandomNumber() {
    const correctNumbers = new Set();
    while (correctNumbers.size < 3) {
      correctNumbers.add(Random.pickNumberInRange(1, 9));
    }
    return [...correctNumbers].join("");
  }

  askForNumbers() {
    Console.readLine("숫자를 입력해주세요 : ", (receivedNumbers) => {
      this.stirUp(receivedNumbers);
    });
  }

  /**
   * 입력된 숫자(문자 형태)가 유효한지 판별합니다.
   * @param {string} input - 문자열 형식의 숫자
   * @return {boolean}
   */
  isValidInput(input) {
    if (typeof input !== "string") return false;
    if (input.indexOf("0") >= 0) return false;
    const numberArr = input.split("");
    if (input.length !== 3) return false;
    else if (!Number(input)) return false;
    else if (new Set(numberArr).size !== 3) return false;
    else return true;
  }

  /**
   * 입력된 숫자를 받아 유효 여부에 따라 분기를 나눕니다.
   * @param {string} receivedNumbers - 유저가 입력한 문자열 형식의 숫자
   */
  stirUp(receivedNumbers) {
    if (this.isValidInput(receivedNumbers)) {
      const correctNumbers = this.makeRandomNumber();
      this.gradeInput(correctNumbers, receivedNumbers);
    } else {
      throw "잘못된 입력입니다.";
    }
  }

  /**
   * 사용자가 입력한 값을 평가합니다.
   * @param {string} correct
   * @param {string} received
   */
  gradeInput(correct, received) {
    // 볼, 스트라이크 점수를 담을 배열
    let points = [0, 0];

    // 정답일 경우
    if (correct === received) {
      // 메시지 설정 함수로 [0, 3] 인자 전달;
      return this.setMessage([0, 3]);
    }

    // 같은 수가 존재하는 경우
    for (let i = 0; i < 3; i++) {
      if (correct[i] === received[i]) points[1]++;
      else if (received.indexOf(correct[i]) >= 0) points[0]++;
    }

    // 메시지 설정 함수로 points를 인자로 전달
    return this.setMessage(points);
  }

  /**
   * 유저 입력의 점수에 대한 메시지를 설정합니다.
   * @param {Array<number>} pointsArray - 유저가 입력한 답변에 대한 점수가 담긴 배열
   */
  setMessage(pointsArray) {
    const pointString = pointsArray.join("");
    const [ball, strike] = pointsArray;
    let message;
    if (pointString === "03")
      message = "3개의 숫자를 모두 맞히셨습니다! 게임 종료";
    else if (pointString === "00") message = "낫싱";
    else message = `${ball}볼 ${strike}스트라이크`;
  }
}

const app = new App();
app.play();

module.exports = App;
