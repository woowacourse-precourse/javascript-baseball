const MissionUtils = require("@woowacourse/mission-utils");

const compareWithInput = (computerNumArr, userNum) => {
    let ballCount = 0;
    let strikeCount = 0;
    const computerNum = computerNumArr.join('');

    for(let i = 0; i < computerNum.length; i++) {
        if (userNum.includes(computerNum[i])) {
          ballCount++;
        }
        if (userNum[i] === computerNum[i]) {
          strikeCount++;
      }
    }
    
    ballCount -= strikeCount;

    return [ballCount, strikeCount];
}

module.exports = compareWithInput;