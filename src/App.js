const MissionUtils = require("@woowacourse/mission-utils");

class App {
  getHint(compareResult) {
    if(compareResult[0] === 3) {
      Console.print("3스트라이크");
      Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      this.getCorrectAnswer();
    } 
    if(compareResult[0] != 0 && compareResult[1] !=0) {
      Console.print(`${compareResult[1]}볼 ${compareResult[0]}스트라이크`);
      this.inputUserNum(randomNum);
    } 
    if(compareResult[1] != 0) {
      Console.print(`${compareResult[1]}볼`);
      this.inputUserNum(randomNum);
    }
    if(compareResult[2] != 0) {
      Console.print("낫싱");
      this.inputUserNum(randomNum);
    }
  }

  compareNumbers(randomNum, getUserNum) {
    const compareResult = [0, 0, 0];

    for (let i = 0; i < 3; i++) {
      if (randomNum[i] === getUserNum[i]) {
        compareResult[0]++;
      }
      if (getUserNum.indexOf(userNumber[i]) >= 0) {
        compareResult[1]++;
      }
    }
    if (compareResult[0] === 0 && compareResult[1] === 0) {
      compareResult[2]++;
    }
    this.getHint(compareResult);
  }

  checkUserNum(randomNum, getUserNum) {
    if (getUserNum.match(/[^1-9]/)) {
      throw new Error("숫자를 입력해주세요.");
    } else if (new Set(getUserNum.split("")).size !== 3) {
      throw new Error("중복되지 않은 숫자를 입력해주세요.");
    } else if (getUserNum.length !== 3) {
      throw new Error("세자리 숫자를 입력해주세요.");
    }
    this.compareNumbers(randomNum, getUserNum);
  }

  inputUserNum(randomNum) {
    Console.readLine("숫자를 입력해주세요 : ", (getUserNum) => {
      this.checkUserNum(randomNum, getUserNum);
    });
  }

  getComputerNum() {
    const randomNum = [];
    while (randomNum.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!randomNum.includes(number)) randomNum.push(number);
    }
    this.inputUserNum(randomNum);
  }

  play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    this.getComputerNum();
  }
}

module.exports = App;
