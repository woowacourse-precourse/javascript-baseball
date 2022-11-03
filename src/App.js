const MissionUtils = require("@woowacourse/mission-utils");
class App {
  constructor() {
    this.computerNumberArr = this.getRandomNumberFromComputer();
  }
  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.getUserNumber();
  }
  getUserNumber() {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (userNumberStr) => {
      this.isValid(userNumberStr);
      this.playBaseBall(userNumberStr);
    });
  }
  playBaseBall(userNumberStr) {
    const totalCountStrike = this.countStrike(
      userNumberStr,
      this.computerNumberArr
    );
    const totalCountBall = this.countBall(
      userNumberStr,
      this.computerNumberArr
    );
    if (totalCountStrike === 0 && totalCountBall === 0) {
      MissionUtils.Console.print("낫싱");
    } else if (totalCountStrike === 3) {
      MissionUtils.Console.print(`${totalCountStrike}스트라이크`);
      MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    } else if (totalCountBall === 0) {
      MissionUtils.Console.print(`${totalCountStrike}스트라이크`);
    } else if (totalCountStrike === 0) {
      MissionUtils.Console.print(`${totalCountBall}볼`);
    } else {
      MissionUtils.Console.print(
        `${totalCountBall}볼 ${totalCountStrike}스트라이크`
      );
    }
    this.getUserNumber();
  }

  isValid(answer) {
    this.isValidSingleDigitNaturalNumber(answer);
    this.isValidNumberWithoutDuplicate(answer);
  }

  isValidSingleDigitNaturalNumber(answer) {
    const regexp = new RegExp("^[1-9]+$");
    if (!regexp.test(answer)) {
      throw "1에서 9까지의 자연수를 입력해주세요";
    }
  }
  isValidNumberWithoutDuplicate(answer) {
    let isValid = false;
    const wordLengthWidhoutDuplicate = new Set([...answer]).size;

    [...answer].map((i) => {
      i === "" || i === " " ? (isValid = true) : (isValid = false);
    });

    if (wordLengthWidhoutDuplicate !== 3 || isValid) {
      throw "서로 다른 3개의 숫자를 입력해주세요";
    }
  }
  getRandomNumberFromComputer() {
    const randomArr = [];

    while (randomArr.length !== 3) {
      const randomNum = MissionUtils.Random.pickNumberInRange(1, 9);
      !randomArr.includes(randomNum) && randomArr.push(randomNum);
    }
    return randomArr;
  }

  countStrike(userNumberStr, computerNumberArr) {
    let totalCount = 0;
    totalCount = computerNumberArr.reduce((count, comCurNum, index) => {
      const oneLetterOfuserNumberStr = Number(userNumberStr[index]);
      if (oneLetterOfuserNumberStr === comCurNum) {
        return count + 1;
      } else {
        return count;
      }
    }, 0);
    return totalCount;
  }
  countBall(userNumberStr, computerNumberArr) {
    let totalCount = 0;
    totalCount = computerNumberArr.reduce((count, comCurNum, index) => {
      const oneLetterOfuserNumberStr = Number(userNumberStr[index]);
      if (
        computerNumberArr.includes(oneLetterOfuserNumberStr) &&
        comCurNum !== oneLetterOfuserNumberStr
      ) {
        return count + 1;
      } else {
        return count;
      }
    }, 0);
    return totalCount;
  }
}

const app = new App();
app.play();
module.exports = App;
