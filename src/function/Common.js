const MissionUtils = require("@woowacourse/mission-utils");

function input(text) {
  let result = 0;
  MissionUtils.Console.readLine('입력', (answer) => {
    MissionUtils.Console.print(`${text}${answer}`);
    result = answer;
  });
  return result;
}

function checklength(text, input) {
  if (text === '숫자를 입력해주세요 : ') {
    if (input.length === 3)
      return true;
  }
  else if (text === '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n') {
    if (input.length === 1)
      return true;
  }
  return false;
}

exports.input = input;
exports.checklength = checklength;