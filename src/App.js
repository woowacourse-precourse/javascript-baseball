const MissionUtils = require('@woowacourse/mission-utils');

class App {
  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    startgame();
  }

  startgame(){
    const RandomNumber = MakeNumber();
    inputNum(num) = RandomNumber;
  }

  //Make random number
  MakeNumber(){
    const RandomNumber = [];
    while(RandomNumber.length < 3){
      const numbers = MissionUtils.Random.pickNumberInRange(1,9);
      
      //Check for duplicates
      if(!random.includes(numbers)){
        RandomNumber.push(numbers);
      }
    }
    return RandomNumber.join("");
  }
}
// module.exports = App;

