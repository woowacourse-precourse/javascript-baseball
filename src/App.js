const MissionUtils = require("@woowacourse/mission-utils");

class App {
  compare(computerNum, userNum) {
    let i = 0;
    let strike = 0;
    let ball = 0;
  
    //input 값 배열에 저장
    const userNumArr = [];
    userNumArr.push(userNum);
  
    //스트라이크
    for (i = 0; i < 3; i++) {
      if (computerNum[i] == userNumArr[i]) {
        strike += 1;
      }
      return strike;
    }
    
    const intersect = computerNum.filter(x => userNumArr(x));
    let countIntersect = intersect.length;
    ball = countIntersect - strike;
  }

  play() {
    const computerNum = MissionUtils.Random.pickUniqueNumbersInRange([1, 9, 3]);

    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

    let user_num;
    MissionUtils.Cosole.readLine("숫자를 입력해주세요 :", (number) => {
      userNum = number;
      console.print(userNum);
    });
  }
}

module.exports = App;
