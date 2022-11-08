const { MissionUtils } = require("@woowacourse/mission-utils");

class App {
  play() {
    gamestart();
  }
}

const gamestart = () =>{

  MissionUtils.Console.print("숫자 야구 게임을 시작합니다.")
  judgeNumber(createComputerNumber().split(""),inputUserNumber().split(""));
  return ;

}

const createComputerNumber = () =>{
  const computerInputNumber = [];
  while (computerNumber.length<3){
    const randomInputNumber = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computerInputNumber.includes(randomInputNumber)){
      computerInputNumber.push(randomInputNumber);
    }
  }
  return computerInputNumber.join("")
}

const inputUserNumber =() =>{
  MissionUtils.Console.readLine('숫자를 입력해주세요.:', (userNumber) => {
    const userNumberArr = userNumber.split("")
    while(verifyUserNumber(userNumberArr)==true){
      return userNumber;
    };
  });
}

const verifyUserNumber = (userNumber) =>{
  const userNumberArr = userNumber.split("");

  if(userNumberArr.length !== 3){
    throw "세개의 숫자가 아닙니다";
  }

  if(userNumberArr[0]==userNumberArr[1]||userNumberArr[1]==userNumberArr[2]||userNumberArr[0]==userNumberArr[2]){
    throw "중복되는 숫자가 있습니다"
  }
  if(userNumberArr[0]==0||userNumberArr[1]==0||userNumberArr[2]==0){
    throw "1~9사이의 수가 아닙니다"
  }

  return true;
}


const judgeNumber = (computerNumber,userNumber) =>{
  let ballScore =0;
  let strikeScore = 0;

  for (let i = 0; i < computerNumber.length; i++) {
    if(userNumber[i] == computerNumber[i]){
      strikeScore++;
    };
    if(userNumber.includes(computerNumber)){
      ballScore++;
    }
  }
  if (strikeScore==3){
    gameRestartOrEnd();
  }
  else if(strikeScore==0&&ballScore==0){
    MissionUtils.Console.print(`낫싱`)
    inputUserNumber(userNumber)
  }
  else if(!strikeScore==3){
    MissionUtils.Console.print(`${strikeScore}스트라이크`);
    MissionUtils.Console.print(`${ballScore}볼`);
    inputUserNumber(userNumber);
  }

}

const gameRestartOrEnd = () =>{
  MissionUtils.Console.readLine(`세개의 숫자를 모두 맞히셨습니다. 게임종료\n
   계속하려면 1, 중지하려면 2를 입력하세요`,(answer)=>{
    if(answer==1){
      gamestart();
    }
    else if(answer==2){
      MissionUtils.Console.close();
    }
    else if (answer!=1&&answer!=2){
      throw "잘못된 입력값입니다"
    }
   })
}

