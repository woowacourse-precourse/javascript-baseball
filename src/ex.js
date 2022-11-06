const MissionUtils = require("@woowacourse/mission-utils");

MissionUtils.Console.readLine('닉네임을 입력해주세요.', (answer) => {
    console.log(`닉네임: ${answer}`);
    if(answer == 'hi') MissionUtils.Console.close()
}); 