const compareWithInput = (computerNum, userNum) => {
    let ballCount = 0;
    let strikeCount = 0;

    for(let i = 0; i < computerNum.length; i++) {
        if (userNum.includes(computerNum[i])) {
          ballCount++;
        }
        if (userNum[i] === computerNum[i]) {
          strikeCount++;
      }
    }

    ballCount -= strikeCount;
}

module.exports = compareWithInput;