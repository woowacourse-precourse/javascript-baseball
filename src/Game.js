const MissionUtils = require("@woowacourse/mission-utils");
const { createComputerNums } = require("./computerNum.js");

function gameStart() {
  return MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
}

exports.gameStart = gameStart;

function gameplay(computerNums) {
  MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (userNums) => {
    MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    MissionUtils.Console.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
      (userNums) => {
        if (!(userNums === "1" || userNums === "2")) throw "잘못된 입력입니다.";
        if (userNums === "1") return gameplay(createComputerNums());
        MissionUtils.Console.close();
      }
    );
  });
  return;
}

exports.gameplay = gameplay;
