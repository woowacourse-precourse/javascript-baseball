const { MissionUtils } = require("@woowacourse/mission-utils");

class App {
  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.")
  }
}

const gamestart = () =>{

}

const createComputerNumber = () =>{
  const computerNumber = [];
  while (computerNumber.length<3){
    const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computerNumber.includes(randomNumber)){
      computerNumber.push(randomNumber);
    }
  }
  return computerNumber.join("")
}

const inputUserNumber =() =>{
  
  });
}

const judgeNumber = () =>{}

module.exports = App;
