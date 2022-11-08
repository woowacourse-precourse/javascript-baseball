const MissionUtils = require("@woowacourse/mission-utils");

// 랜덤 숫자 발생
const numberRandom = () => {
    const computer = [];
    while (computer.length < 3) {
        const number = MissionUtils.Random.pickNumberInRange(1, 9);
        if (!computer.includes(number)) {
            computer.push(number);
        }
    }
    return computer.join("");
}

module.exports = numberRandom