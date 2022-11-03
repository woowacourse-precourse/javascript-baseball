const MissionUtils = require("@woowacourse/mission-utils");
class App {
  play() {
    const RANDOM_NUMBER = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
    // 미션 유틸 라이브러리에 있는 함수 pickUniqueNumbersInRange를 활용하여 1부터 9까지의 숫자 중 겹치지 않는 3개의 숫자를 반환.
    // 출력값 예시)[ 3, 2, 8 ] or [ 2, 3, 4 ] 같이 배열로 반환됨.
  }
}

module.exports = App;
