const { Random } = require("@woowacourse/mission-utils");

const numbList = [1, 2, 3, 4, 5, 6, 7, 8, 9];

/**
 * 랜덤으로 생성된 숫자 세개를 배열에 담아 리턴
 * @returns {[number,number,number]}
 */
function getRandomThreeNumbers() {
  const randomThreeDigitNumber = [];
  for (let i = 0; i < 3; i++) {
    randomThreeDigitNumber[i] = Random.pickNumberInList(numbList);
  }
  return randomThreeDigitNumber;
}

module.exports = { getRandomThreeNumbers };
