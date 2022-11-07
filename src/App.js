const MissionUtils = require("@woowacourse/mission-utils");

function compare(computer_num, user_num) {
  let i = 0;
  let strike = 0;
  let ball = 0;

  //input 값 배열에 저장
  const userNumArr = [];
  userNumArr.push(user_num);

  //스트라이크
  for (i = 0; i < 3; i++) {
    if (computer_num[i] == userNumArr[i]) {
      strike += 1;
    }
  }
  return strike;
  
}

class App {
  play() {
    const computer_num = MissionUtils.Random.pickUniqueNumbersInRange([1, 9, 3]);

    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

    let user_num;
    MissionUtils.Cosole.readLine("숫자를 입력해주세요 :", (number) => {
      user_num = number;
      console.print(user_num);
    });


  }
}

module.exports = App;
