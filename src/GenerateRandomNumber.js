const MissionUtils = require("@woowacourse/mission-utils");

function generateComputerNum() {
    const computerNum = [];
    while(computerNum.length < 3) {
        const num  = MissionUtils.Random.pickNumberInRange(1,9);
        if(!computerNum.includes(num)) {
            computerNum.push(num);
        }
    }
    return computerNum.join('');
}

module.exports.generateComputerNum = generateComputerNum;