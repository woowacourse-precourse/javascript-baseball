const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.computerNumber = this.createComputerNumber();
  }

  createComputerNumber = () => {
    const computerNumber = [];
    while (computerNumber.length < 3) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
      if (this.isEveryNumberUnique(computerNumber)) {
        computerNumber.push(randomNumber);
      }
    }
    return computerNumber;
  };

  isEveryNumberUnique = (nums) => {
    return nums.length === new Set(nums).size;
  };

  getUserNumber = () => {
    let userNumber;
    MissionUtils.Console.readLine("숫자를 입력해주세요 :", (inputNumber) => {
      try {
        const valideNumbers = this.checkValidity(inputNumber);
        userNumber = valideNumbers;
        return userNumber;
      } catch (e) {
        MissionUtils.Console.print(e);
        MissionUtils.Console.close();
      }
    });
  };

  checkValidity = (userNumber) => {
    const numsArray = Array.from(String(userNumber), Number);
    if (numsArray.length !== 3) {
      throw "숫자 3개를 입력해야 합니다.";
    } else if (this.isEveryNumberUnique(numsArray)) {
      throw "중복되지 않는 숫자 3개를 입력해야 합니다.";
    } else {
      return numsArray;
    }
  };

  getStrikeAndBallNumber = (computer, user) => {
    const strikeNum = user.filter((item, ind) => item === computer[ind]).length;

    const ballNum = user
      .filter((item, index) => item !== computer[index])
      .filter((item) => computer.includes(item)).length;

    return [strikeNum, ballNum];
  };

  convertNumberToMessage = (matchNum) => {
    const [strikeNum, ballNum] = matchNum;

    let message = `${ballNum === 0 ? "" : `${ballNum}볼`}${
      strikeNum === 0 ? "" : ` ${strikeNum}스트라이크`
    }`;

    if (matchNum.every((item) => item === 0)) {
      message = "낫싱";
    }

    return message;
  };

  showMessage = (message) => {
    MissionUtils.Console.print(message);
    if (message === "3스트라이크") {
      MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      MissionUtils.Console.readLine(
        "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
        (answer) => {
          if (answer === 1) {
            MissionUtils.Console.print("리플레이");
          } else {
            MissionUtils.Console.print(" 게임 종료");
          }
        }
      );
    } else {
      this.compareNumbers();
    }
  };

  compareNumbers = () => {
    const userNumber = this.getUserNumber();
    const strikeAndBallNumber = this.getStrikeAndBallNumber(
      this.computerNumber,
      userNumber
    );
    const result = this.convertNumberToMessage(strikeAndBallNumber);
    this.showMessage(result);
  };

  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.compareNumbers();
  }
}

module.exports = App;
