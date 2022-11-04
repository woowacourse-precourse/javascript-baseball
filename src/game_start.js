const { MissionUtils } = require("@woowacourse/mission-utils");

function gameStart(answer){
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    threeDigitsError(answer);
    includeZeroError(answer);
}

function threeDigitsError(answer){
    if(answer.length !==3){
        throw "Error" ;
    }
}

function includeZeroError(answer){
    if(answer.includes(0)){
        throw "Error"
    }
}