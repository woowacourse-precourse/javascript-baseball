const MissionUtils = require("@woowacourse/mission-utils");

MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (answer) => {
  console.log(answer);
  MissionUtils.Console.close();
});
