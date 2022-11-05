const MissionUtils = require("@woowacourse/mission-utils");

function gameStart() {
    return MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
}

exports.gameStart = gameStart