const MissionUtils = require('@woowacourse/mission-utils');
const FirstEnd = 1;
const LastEnd = 9;

/*
랜덤한 숫자 3개가 들어가는 리스트
*/
const RandomNumberList = [];

/*
랜덤한 숫자3개까지만 허용
*/

function OutRange(List) {
  if (List.length < 3) {
    return true;
  }
  return false;
}

/*
독립적인 3개의 숫자리턴
*/

function CreateRandomNumber() {
  while (OutRange(RandomNumberList)) {
    const RandomNumber = MissionUtils.Random.pickNumberInRange(
      FirstEnd,
      LastEnd
    );
    if (!RandomNumberList.includes(RandomNumber)) {
      RandomNumberList.push(RandomNumber);
    }
  }

  return RandomNumberList;
}
module.exports = CreateRandomNumber();
