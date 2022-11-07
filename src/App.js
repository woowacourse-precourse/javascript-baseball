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
    exceptionHandling(inputNums);
    nothing = isNothing(answers, inputNums);
    if(!nothing) countStrike = isStrike(answers, inputNums);
  });
}

function exceptionHandling(input){
  if(input.length != 3 || isNaN(input) || input[0]=='-') throw "Exception1 : Wrong Input!";
  if(input.indexOf('0')>=0) throw "Exception2 : Cannot Enter Zero!";
  if(input[0]==input[1] || input[1]==input[2] || input[0]==input[2]) throw "Exception3 : Duplicate Input!";
}

function isNothing(answers, input){
  input = Array.from(input);
  let boolNothing;
  let cnt = 0;
  for(let i=0; i<3; ++i) {
    let singleNum = input.pop();
    singleNum = Number(singleNum);
    if(answers.indexOf(singleNum) < 0) cnt++;
  }
  cnt == 3 ? boolNothing = 1 : boolNothing = 0;
  if(boolNothing) Console.print('낫싱');

  return boolNothing;
}

function isStrike(answers, input){
  input = Array.from(input);
  let cnt = 0;
  for(let i=0; i<3; ++i) {
    let singleNum = input.pop();
    singleNum = Number(singleNum);
    if(answers.indexOf(singleNum) == 2-i) cnt++;
  }
  return cnt;
}

module.exports = App;
