const MissionUtils = require("@woowacourse/mission-utils");

class App {

  checkRange(input) {
    input.map((num)=> {
      if(num > 9 || num<1) {
        return false;  
      }
    })
    return true;
  }
  checkDupulicate(input) {
    const set = new Set(input);
    if(set.size !== input.length) return true;
    return false;
  }

  inputValidation(input) {
    if(input.length !== 3)  {
      throw new("입력은 세자리 숫자로 해주세요.");
    }
    if(input.some((num)=> isNaN(num))) {
      throw new("숫자만 입력 가능합니다.");
    }
    if(checkRange(input)) {
      throw new("1~9사이의 숫자를 입력해주세요.")
    }
    if(checkDupulicate(input)) {
      throw new("서로 다른숫자로 입력해주세요.")
    }
    return true;
  }
  
  play() {
    const computer = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
    let userAnswer;
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ",(answer)=> {
      userAnswer = answer.split('').map((num)=>{return Number(num)});
    });
  }
}

// const app = new App();
// app.play();

module.exports = App;
