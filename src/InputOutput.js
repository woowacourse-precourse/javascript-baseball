const { Console } = require("@woowacourse/mission-utils");

/**
 * 콘솔(터미널)에서 입력된 값을 문자열로 리턴해주는 함수입니다.
 * 파라미터로 문자열 전달시, 입력 전 콘솔에 문자열 값을 띄워줍니다.
 *
 * @param {string} question
 * @returns {string}
 */
async function getInputValue(question) {
  if (!question) {
    throw new Error("inputValue 메서드에 질문받을 내용을 입력해주세요");
  }
  let inputValue = await new Promise((resolve) => {
    Console.readLine(question, (answer) => resolve(answer));
  });
  if (!inputValue) {
    throw new Error("입력한 값이 없습니다.");
  }

  Console.close();
  return inputValue;
}

/**
 * @typedef {{ball :number, strike:number, nothing:boolean}} numberCheckResult
 */
/**
 * 문자열 혹은 숫자확인 결과 객체를 받아 출력해주는 함수.
 * @param {string | numberCheckResult} content 문자열 혹은 숫자확인 결과 객체
 */
function print(content) {
  if (!(content || JSON.stringify(content) == {} || content.length == 0)) {
    throw Error("출력할 값이 없습니다");
  }
  if (!(typeof content === "string" || typeof content === "object"))
    throw Error("string 혹은 object 값만 출력가능합니다");
  if (typeof content === "string") {
    return Console.print(content);
  }

  const { ball = 0, strike = 0, nothing = false } = content;

  if (nothing) return Console.print("낫싱");

  return Console.print(
    `${ball ? `${ball}볼 ` : ""}${strike ? `${strike}스트라이크` : ""}`
  );
}
module.exports = { getInputValue, print };
