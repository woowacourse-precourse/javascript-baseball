/**
 * 볼, 스트라이크, nothing 체크 결과를 나타내는 객체
 * @typedef {{ball :number, strike:number, nothing:boolean}} numberCheckResult
 */

/**
 * 3자리 숫자를 배열에 담은 객체
 * @typedef {[number,number,number]} threeDitisNumberByArray
 */

/**
 *  사용자가 입력한 숫자와 게임 시작 시 생성된 랜덤 숫자을 비교해서
 *  볼, 스트라이크를 체크한 결과값을 리턴해주는 함수.
 * @param {{input:[number,number,number], random:[number,number,number]}} param
 * 사용자가 입력한 숫자 인풋값 배열과, 게임 시작 시 생성된 랜덤 숫자값 배열을 파라미터로 전달받음,
 * @returns {{numberCheckResult}}
 * 결과를 {ball: number ,strike:number, noting:boolean} 값으로 리턴해준다
 */
function getThisTurnResult(param) {
  if (typeof param !== "object" || typeof param.length === "number")
    throw new Error("전달값의 타입이 object가 아닙니다. 확인해주세요");

  const { input = [], random = [] } = param;
  if (input.length !== 3) throw new Error("인풋값을 확인해주세요");
  if (random.length !== 3) throw new Error("랜덤값을 확인해주세요");

  const ball = checkBall(input, random);
  const strike = checkStrike(input, random);
  const nothing = ball || strike;

  return { ball, strike, nothing };
}
/**
 * @param {threeDitisNumberByArray} input
 * @param {threeDitisNumberByArray} random
 * @returns {number} strikeCount
 */
function checkStrike(input, random) {
  let strikeCount = 0;
  for (let i = 0; i < 3; i++) {
    if (input[i] === random[i]) strikeCount++;
  }
  return strikeCount;
}

/**
 * @param {threeDitisNumberByArray} input
 * @param {threeDitisNumberByArray} random
 * @returns {number} ballCount
 */
function checkBall(input, random) {
  let ballCount = 0;
  for (let i = 0; i < 3; i++) {
    const currentInput = input[i];
    if (currentInput === random[i]) continue;
    if (random.includes(currentInput)) ballCount++;
  }
  return ballCount;
}
module.exports = { getThisTurnResult, checkStrike, checkBall };
