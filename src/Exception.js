const {
  DUPLICATE_NUMBER,
  IS_NOT_NUM,
  IS_NOT_3_LENGTH,
  IS_NOT_1_2,
  IS_NOT_1_LENGTH,
} = require("./Error.js");
/**
 * 사용자 입력이 3자리이고, 모두 숫자일때(아스키코드)
 * 정답 맞췄을 때, 입력 숫자가 1자리이고, 숫자일 때
 * throw 후 애플리케이션 종료
 */
function handleGameEndException(ans) {
  if (ans.length !== 1) throw new Error();
  let ansAscii = ans.charCodeAt(0);
  if (ansAscii === 49 || ansAscii === 50) {
    return Number(ans);
  } else {
    throw "exception1";
  }
}
//depth 확인
function handleUserNumException(ans) {
  if (ans.length !== 3) throw "exception2";
  else {
    for (let i = 0; i < ans.length; i++) {
      let ansAscii = ans.charCodeAt(i);
      if (ansAscii < 49 || ansAscii > 57) throw "exception3";
    }
  }
  return true;
}
function handleDuplicateNumber(ans) {
  let ansSet = Array.from(new Set(ans));
  if (ansSet.length !== ans.length) return false;
  return true;
}
