const { MissionUtils } = require("@woowacourse/mission-utils");

function gameStart(answer){
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    three_digits_error(answer);
}

function threeDigitsError(answer){
    if(answer.length !==3){
        throw "Error" ;
    }
}