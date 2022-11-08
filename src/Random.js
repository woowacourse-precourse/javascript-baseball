const { Random } = require("@woowacourse/mission-utils");

let numbList = [1, 2, 3, 4, 5, 6, 7, 8, 9];

/**
 * 랜덤으로 생성된 숫자 세개를 배열에 담아 리턴
 * @returns {[number,number,number]}
 */
function getRandomThreeNumbers() {
  const randomThreeDigitNumber = [];
  for (let i = 0; i < 3; i++) {
    const currentRandomNumber = Random.pickNumberInList(numbList);
    numbList = numbList.filter((num) => num !== currentRandomNumber);
    randomThreeDigitNumber[i] = currentRandomNumber;
  }
  return randomThreeDigitNumber;
}

module.exports = { getRandomThreeNumbers };
