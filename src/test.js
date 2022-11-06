const { Console } = require("@woowacourse/mission-utils");
const { Random } = require("@woowacourse/mission-utils");

answer = Console.readLine("닉네임을 입력해주세요.", (answer) => {
  Console.colse();
  return answer;
});
console.log(answer);
