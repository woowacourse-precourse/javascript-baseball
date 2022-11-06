const MissionUtils = require("@woowacourse/mission-utils");

const printCompareResult = (ballCount, strikeCount) => {
    let resultMSG = '';

    if (ballCount === 0 && strikeCount === 0) {
        resultMSG = '낫싱';
    } else if (ballCount !== 0  && strikeCount === 0) {
        resultMSG = `${ballCount}볼`;
    } else if (ballCount === 0 && strikeCount !== 0) {
        resultMSG = `${strikeCount}}스트라이크`;
    } else {
        resultMSG = `${ballCount}볼 ${strikeCount}}스트라이크`;
    }

    MissionUtils.Console.print(resultMSG);
}

module.exports = printCompareResult;