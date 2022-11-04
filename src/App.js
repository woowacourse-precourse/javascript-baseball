const MissionUtils = require("@woowacourse/mission-utils");

function getComputerNumbers(){
  const COMPUTER_NUMBERS = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
  return COMPUTER_NUMBERS
}

function getUserNumbers(){
  let user_numbers;
  MissionUtils.Console.readLine('숫자를 입력해주세요.\n', (user_number) => {
    if(user_number.toString().length != 3) throw new Error("에러")
    user_numbers = String(user_number).split('').map((number)=> Number(number));
    return user_numbers
  });
}

function getStrike(COMPUTER_NUMBERS,USER_NUMBERS,score){
  COMPUTER_NUMBERS.map((element,index)=>{
    if(USER_NUMBERS[index] == element) score.strike = score.strike + 1 
  })
  return score.strike
}
function getBall(COMPUTER_NUMBERS,USER_NUMBERS,score){
  COMPUTER_NUMBERS.map((element,index)=>{
    if(USER_NUMBERS.indexOf(element) != -1 && USER_NUMBERS.indexOf(element) != index) score.ball = score.ball + 1
  })
  return score.ball
}

function play(){
  const COMPUTER_NUMBERS = getComputerNumbers();
  console.log(COMPUTER_NUMBERS)
  let strike = 0;
  while (strike != 3){
    const USER_NUMBERS = getUserNumbers();
    console.log(USER_NUMBERS)
    let score = {strike: 0, ball: 0};
    strike = getStrike(COMPUTER_NUMBERS,USER_NUMBERS,score)
    let ball = getBall(COMPUTER_NUMBERS,USER_NUMBERS,score)
    MissionUtils.Console.print(strike+"스트라이크"+ball+"볼")
  }
  MissionUtils.Console.print("게임 종료")
}

console.log(play())

class App {
  play() {}
}

module.exports = App;
