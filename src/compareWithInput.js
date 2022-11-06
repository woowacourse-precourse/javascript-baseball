const compareWithInput = (computerNumArr, inputNum) => {
    let ballCount = 0;
    let strikeCount = 0;
    const computerNum = computerNumArr.join('');
    const userNum = toString(inputNum);

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