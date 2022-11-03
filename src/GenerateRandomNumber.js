const MissionUtils = require("@woowacourse/mission-utils");

function generateComputerNum(computerNum) {
    const ONE_TO_NINE = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const SIZE_OF_NUM = 3;
    for(let iter = 0; iter < SIZE_OF_NUM; iter++){
        computerNum.push(MissionUtils.Random.pickNumberInList(ONE_TO_NINE));
        const eraseNumIndex = ONE_TO_NINE.indexOf(computerNum[iter]);
        ONE_TO_NINE.splice(eraseNumIndex, 1);
    }
}

module.exports = generateComputerNum;