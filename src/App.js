const MissionUtils = require("@woowacourse/mission-utils");

function getComputerNumbers(){
  const COMPUTER_NUMBERS = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
  return COMPUTER_NUMBERS
}

function getUserNumbers(){
  let user_numbers;
  MissionUtils.Console.readLine('숫자를 입력해주세요.\n', (user_number) => {
    user_numbers = String(user_number).split('').map((number)=> Number(number));
    return user_numbers
  });
}

function play(){
  const COMPUTER_NUMBERS = getComputerNumbers();
  const USER_NUMBERS = getUserNumbers();
  console.log(USER_NUMBERS,COMPUTER_NUMBERS)
}

console.log(play())

class App {
  play() {}
}

module.exports = App;
