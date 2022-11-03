const MissionUtils = require("@woowacourse/mission-utils");

// 1. 컴퓨터의 수 3자리 구하기.
const machineNum = [];
while (machineNum.length < 3) {
  const number = MissionUtils.Random.pickNumberInRange(1, 9);
  if (!machineNum.includes(number)) {
    machineNum.push(number);
  }
}
//3, 입력한 숫자에 대한 스트라이크,볼 결과 구하기.
let checkBallArray = [];

function checkStrike(arr) {
  let strike = 0;
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] === inputNum[j]) {
      strike += 1;
    } else {
      checkBallArray.push(inputNum[j]);
    }
  }
  return strike
}

function checkball(arr) {
  let ball = 0;
  for (let i = 0; i < checkBallArray.length; i++) {
    if (arr.includes(checkBallArray[i])) {
      ball += 1
    }
  }
  return ball
}

// 2. 게임 플레이어는 컴퓨터가 생각하고 있는 서로 다른 3개의 숫자를 입력
const inputNum = [];

MissionUtils.Console.readLine('서로 다른 숫자를 3개 입력하시오.', (answer) => {
  const num = answer;
  for (let i = 0; inputNum.length < 3; i++) {
    inputNum.push(parseInt(num[i]));
  }
  console.log(checkStrike(machineNum));
  console.log(checkball(machineNum));
  console.log(checkBallArray);
  MissionUtils.Console.close();
});




class App {
  play() { }



}


module.exports = App;
