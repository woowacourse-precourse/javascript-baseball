const MissionUtils = require("@woowacourse/mission-utils");
const Console = MissionUtils.Console;
const Random = MissionUtils.Random;

class App {
  play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    gameStart();
    return 0;
  }
}

function gameStart(){
  let answers = makeRandom();
  baseBall(answers);
}

function makeRandom(){
  const computerNums = [];
  while (computerNums.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computerNums.includes(number)) computerNums.push(number);
  }
  console.log(computerNums);
  return computerNums;
}

function baseBall(answers){
  let nothing;
  let countBall;
  let countStrike;
  
  Console.readLine('숫자를 입력해주세요 : ', (inputNums) => {

    
  });
}

module.exports = App;
