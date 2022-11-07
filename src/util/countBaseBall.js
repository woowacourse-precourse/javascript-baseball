const MissionUtils = require("@woowacourse/mission-utils");
const {BALL_COUNT} = require("../constant/constant");

const countBaseBall = (strike, ball) => {
    let finalResult = ""; // 출력될 최종 메시지

    const message = {
        strikeSet: ["", "1스트라이크", "2스트라이크", "3스트라이크" ],
        ballSet: ["", "1볼", "2볼", "3볼"]
    };
    
    if(strike===0 && ball===0){
        finalResult = "낫싱";
    } else {
        finalResult =
      `${message.ballSet[ball]} ${message.strikeSet[strike]}`.trim();
    } 


    MissionUtils.Console.print(finalResult);

    return finalResult;
};

module.exports = countBaseBall;