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
  MissionUtils.Console.readLine('숫자를 입력해주세요.:', (userNumber) => {
    verifyUserNumber(userNumber);
  });
}

const verifyUserNumber = (userNumber) =>{
  const userNumberArr = userNumber.split("")

  if(userNumberArr.length !== 3){
    throw "세개의 숫자가 아닙니다";
  }

  if(userNumber[0]==userNumber[1]||userNumber[1]==userNumber[2]||userNumber[0]==userNumber[2]){
    throw "중복되는 숫자가 있습니다"
  }
  if(userNumber[0]==0||userNumber[1]==0||userNumber[2]==0){
    throw "1~9사이의 수가 아닙니다"
  }
}


const judgeNumber = () =>{}

module.exports = App;
