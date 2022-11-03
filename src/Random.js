const MissionUtils = require('@woowacourse/mission-utils');
const FirstEnd = 1;
const LastEnd = 9;
const Range = 3;

/*
1부터 9까지 3개를 겹치지 않게 리턴(배열 형태)
*/
const Number = MissionUtils.Random.pickUniqueNumbersInRange(
  FirstEnd,
  LastEnd,
  Range
);

/*
배열 -> 문자열로 바꿔서 리턴
*/
function ArrayToString(number) {
  let Random = '';
  number.forEach((EachNumber) => {
    Random += EachNumber.toString();
  });
  return Random;
}

module.exports = ArrayToString(Number);
