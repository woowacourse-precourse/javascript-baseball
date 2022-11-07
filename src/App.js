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
    if(!nothing) countBall = isBall(answers, inputNums, countStrike);
    printResult(countBall, countStrike);

    if(countStrike===3 && isRestart()) Console.close();
    else baseBall(answers);
  });
  return countStrike;
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
  if(boolNothing) Console.print("낫싱");

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

function isBall(answers, input, countStrike){
  input = Array.from(input);
  let cnt = 0;
  for(let i=0; i<3; ++i) {
    let singleNum = input.pop();
    singleNum = Number(singleNum);
    if(answers.indexOf(singleNum) >= 0) cnt++;
  }
  if(countStrike) cnt -= countStrike;
  return cnt;
}

function printResult(countBall, countStrike){
  if(countBall && countStrike) {
    Console.print(countBall+"볼 "+countStrike+"스트라이크");
    return;
  }
  if(countBall) {
    Console.print(countBall+"볼");
    return;
  }
  if(countStrike) {
    Console.print(countStrike+"스트라이크");
  }
  if(countStrike===3) Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
}

function isRestart(){
  Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n', (boolRestart) => {
    if(boolRestart == 2) Console.close();
    else if(boolRestart == 1) gameStart();
    else throw new Error();
  });
}

module.exports = App;
