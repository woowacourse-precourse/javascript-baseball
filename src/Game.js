const MissionUtils = require("@woowacourse/mission-utils");
const { compareInputNum } = require("./countNum");
const { createComputerNums } = require("./computerNum.js");
const { Console } = require("@woowacourse/mission-utils");

function gameStart() {
  return MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
}

exports.gameStart = gameStart;

function gameplay(computerNums) {
  Console.readLine("숫자를 입력해주세요 : ", (userNums) => {
   /*예외 처리 구현 라인 */
    Console.print(compareInputNum(computerNums, userNums));
    if (computerNums !== userNums) return gameplay(computerNums);
    Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    Console.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
      (userNums) => {
        if (!(userNums === "1" || userNums === "2")) throw "잘못된 입력입니다.";
        if (userNums === "1") return gameplay(createComputerNums());
        Console.close();
      }
    );
  });
  return;
}

exports.gameplay = gameplay;
