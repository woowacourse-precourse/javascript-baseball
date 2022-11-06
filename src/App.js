const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {}

  //build_answer
  build_answer() {
    let answer;
    do{
      answer = MissionUtils.Random.pickUniqueNumbersInRange(0, 9, 3);
      //첫 숫자가 0인경우 재생성
    }while(answer[0] == 0);
    return answer;
  }
  choice_answer(user_nums) {
    console.log(user_nums)
    //숫자이어야함
    if(!Number.isInteger(user_nums)) {
      throw 'user_nums가 정수가 아님'
    }
    //3자리어야함
    if(user_nums <= 99 && user_nums >= 1000) {
      throw 'user_nums가 세자리가 아님'
    }
    let user_add = []
    do {
      user_add.unshift(user_nums % 10);
      user_nums = Math.floor(user_nums/10);
    }while(user_nums != 0);

    //중복없어야함
    let lenght_test = [...new Set(user_add)];
    if(lenght_test.length < 3){
      throw '중복 숫자가 존재합니다.'
    }
    return user_add;
  }
  count_strike(answer, user_select) {
    let strike = 0 ;
    for (let i=0; i<3; i++) {
      if(answer[i] == user_select[i]) {
        strike = strike + 1;
      }
    } 
    return strike
  }
}
module.exports = App;
