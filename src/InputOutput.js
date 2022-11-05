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
  if (!inputValue) throw new Error("입력한 값이 없습니다.");

  Console.close();
  return inputValue;
}

module.exports = { getInputValue, print };
