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

    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

    while(true){
      //사용자에게 숫자 3개를 받음
      MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (answer) => {
        console.log(`${answer}`);
        MissionUtils.Console.close();
      });
    }
  }
}

module.exports = App;
