const MissionUtils = require("@woowacourse/mission-utils");

class Opponent {
  //상대방 관련 클래스
  setRandomNumber() {
    //랜덤으로 숫자 3개를 추출하여 배열에 저장(중복 없음)
    const opponentNumber = [];
    while (opponentNumber.length < 3) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!opponentNumber.includes(randomNumber)) {
        // 중복 숫자 없어야 함
        opponentNumber.push(randomNumber);
      }
    }
    return opponentNumber;
  }
}

module.exports = Opponent;
