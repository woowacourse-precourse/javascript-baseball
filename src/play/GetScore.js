class GetScore {
  constructor(pcNum, userNum) {
    this.pcNum = pcNum;
    this.userNum = userNum;
  }

  compare() {
    return this.getScore(this.pcNum, this.userNum);
  }

  getScore(computerInputNumbers, userInputNumbers) {
    const computerNumArr = String(computerInputNumbers)
      .split("")
      .map((x) => +x);
    const userNumArr = String(userInputNumbers)
      .split("")
      .map((x) => +x);

    const strikeCount = this.getStrikeCount(computerNumArr, userNumArr);
    const ballCount = this.getBallCount(computerNumArr, userNumArr);

    return this.scoreCheck(strikeCount, ballCount);
  }

  getStrikeCount(computerNumArr, userNumArr) {
    return userNumArr.reduce((acc, currentValue, index) => {
      if (computerNumArr[index] === currentValue) {
        return acc + 1;
      }
      return acc;
    }, 0);
  }

  getBallCount(computerNumArr, userNumArr) {
    return userNumArr.reduce((acc, currentValue, index) => {
      if (computerNumArr[index] !== currentValue && computerNumArr.includes(currentValue)) {
        return acc + 1;
      }
      return acc;
    }, 0);
  }

  scoreCheck(strikeCount, ballCount) {
    if (!strikeCount && !ballCount) {
      return "낫싱";
    }
    if (!strikeCount && ballCount) {
      return `${ballCount}볼`;
    }
    if (strikeCount && !ballCount) {
      return `${strikeCount}스트라이크`;
    }
    if (strikeCount && ballCount) {
      return `${ballCount}볼 ${strikeCount}스트라이크`;
    }
  }
}

module.exports = GetScore;
