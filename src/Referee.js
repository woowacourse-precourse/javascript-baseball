const MissionUtils = require("@woowacourse/mission-utils");



const ballsAndStrikes  = function () {
    const GetError = require("./GetError");
    // GetError.userInputArr 
    console.log( GetError.userInputArr )

    const RandomNum = require("./RandomNum");
    RandomNum.creatNum


    // MissionUtils.Console.print(`${ballCount}볼 ${strikeCount}스트라이크`);
};

ballsAndStrikes()
exports.ballsAndStrikes = ballsAndStrikes;