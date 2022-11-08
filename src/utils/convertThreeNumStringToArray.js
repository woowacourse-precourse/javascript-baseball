/**
 * String 타입의 세자리 숫자값을 받아 각 숫자를 배열에 담아 리턴해주는 함수
 * @param {string} threeNumString length가 3이고, 각 문자열이 모두 숫자인 string
 * @return {[number,number,number]} length가 3인 배열, 배열의 각 원소는 한자리 number 값
 */
function convertThreeNumStringToArray(threeNumString) {
  if (typeof threeNumString !== "string") {
    throw new Error("변환하려는 대상의 타입이 String이 아닙니다");
  }
  if (threeNumString.length !== 3) {
    throw new Error("변환하려는 스트링의 길이가 3이 아닙니다");
  }

  const numArray = new Array(3);

  for (let i = 0; i < threeNumString.length; i++) {
    const currentNumber = Number(threeNumString[i]);
    if (!currentNumber)
      throw new Error(
        `변환하려는 스트링의 ${i + 1}번째 숫자가 Number가 아닙니다.`
      );
    numArray[i] = currentNumber;
  }

  return numArray;
}

module.exports = { convertThreeNumStringToArray };
