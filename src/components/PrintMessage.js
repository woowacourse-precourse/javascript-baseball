const MissionUtils = require("@woowacourse/mission-utils");
const printMessage = (message) => {
    if (message.nothing) {
        MissionUtils.Console.print(message.nothing);
    } else if (message.ball === "") {
        MissionUtils.Console.print(message.strike);
    } else if (message.strike === "") {
        MissionUtils.Console.print(message.ball);
    } else {
        MissionUtils.Console.print(`${message.ball} ${message.strike}`);
    }
};

module.exports = printMessage;
