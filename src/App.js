const MissionUtils = require("@woowacourse/mission-utils");

class App {
  chooseStartEnd(chooseNum) {
    if (parseInt(chooseNum) === 1) {
      this.getComputerNum();
    } else if (parseInt(chooseNum) === 2) {
      MissionUtils.Console.print("게임 종료");
      return;
    } else {
      MissionUtils.Console.print("1 또는 2를 입력해주세요");
      this.getCorrectAnswer();
    }
  }

  getCorrectAnswer() {
    MissionUtils.Console.readLine("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.", (chooseNum) => {
      this.chooseStartEnd(chooseNum);
    });
  }

  getHint(compareResult, randomNum) {
    if (compareResult[0] === 3) {
      MissionUtils.Console.print("3스트라이크");
      MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      this.getCorrectAnswer();
    }
    if (compareResult[0] != 0 && compareResult[1] != 0) {
      MissionUtils.Console.print(`${compareResult[1]}볼 ${compareResult[0]}스트라이크`);
      this.inputUserNum(randomNum);
    }
    if (compareResult[1] != 0) {
      MissionUtils.Console.print(`${compareResult[1]}볼`);
      this.inputUserNum(randomNum);
    }
    if (compareResult[2] != 0) {
      MissionUtils.Console.print("낫싱");
      this.inputUserNum(randomNum);
    }
  }

  compareNumbers(randomNum, getUserNum) {
    const compareResult = [0, 0, 0];

    for (let i = 0; i < 3; i++) {
      if (randomNum[i] === getUserNum[i]) {
        compareResult[0]++;
      }
      if (getUserNum.indexOf(randomNum[i]) >= 0) {
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
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (getUserNum) => {
      this.checkUserNum(randomNum, getUserNum);
    });
  }

  getComputerNum() {
    const numberArray = [];
    while (numberArray.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!numberArray.includes(number)) numberArray.push(number);
    }
    let randomNum = numberArray.join("");
    this.inputUserNum(randomNum);
  }

  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.getComputerNum();
  }
}

module.exports = App;
