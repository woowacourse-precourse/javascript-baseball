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
      } catch (e) {
        MissionUtils.Console.print(e);
        MissionUtils.Console.close();
      }
    });
    return userNumber;
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

  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    const userNumber = this.getUserNumber();
  }
}

module.exports = App;
