const { Random } = require("@woowacourse/mission-utils");

const makeRandomNumber = () => {
  const answer = [];

  answer.push(Random.pickNumberInRange(1, 9)); // 첫 자릿수에 0이 나오지 않도록
  while (answer.length < 3) {
    const tempNumber = Random.pickNumberInRange(0, 9);
    if (answer.indexOf(tempNumber) === -1) {
      answer.push(tempNumber);
    }
  }

  return +answer.join(""); // 3자리 수를 만들어 number형태로 리턴
};

module.exports = makeRandomNumber;
