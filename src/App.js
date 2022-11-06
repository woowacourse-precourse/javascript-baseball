class App {
  play() {
    const MissionUtils = require("@woowacourse/mission-utils");
    const random = []; //랜덤 숫자가 담길 빈 배열 생성
    
    while(random.length < 3){  //random 배열에 1~9 수 중에 3개의 랜덤한 숫자를 넣음
      const numbers = MissionUtils.Random.pickNumberInRange(1, 9);
      if(!random.includes(numbers)){  //중복되는 숫자 없는지 확인
        random.push(numbers);
      }
    }
  }
}

module.exports = App;
