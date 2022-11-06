class App {
  play() {
    const MissionUtils = require("@woowacourse/mission-utils");
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    var computer = init(MissionUtils);
    game(MissionUtils, computer);
  }
}

function init (MissionUtils){
  var computer = [];
  while (computer.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    computer = checkarr(computer, number);
  }
  return computer
}

function checkarr(computer, number) {
  if (!computer.includes(number)) {
    computer.push(number);    
  }
  return computer;
}


function game(MissionUtils, computer) {
  var count = [0,0];
  MissionUtils.Console.readLine("숫자를 입력하세요 : ", function(input) { 
    check3num(input);
    checkdiffnum(input);
    count = checknum(0, input, computer, count);
    count = checknum(1, input, computer, count);
    count = checknum(2, input, computer, count);
    printball(count, MissionUtils);
    game(MissionUtils, computer);
  });
}

function checknum(index, input, computer, count){
  for (var i = 0; i<3; i++){
    count = checkball(i, index, input, computer, count)
  }
  return count;
}

function checkball(i, index, input, computer, count){
  if (computer[index] == input.charAt(i)){
    count = checkstrike(i,index, count)
  }
  return count;
}

function checkstrike(i,index, count){
  if (i==index){
    count[1]++;
  }
  else{
    count[0]++;
  }
  return count;
}

function printball(count, MissionUtils){
  if (count[0] == 0 && count[1] == 0){
    MissionUtils.Console.print("낫싱");
  }
  else if (count[0]>0 && count[1] == 0){
    MissionUtils.Console.print(count[0] + "볼");
  }
  else if (count[1]>0 && count[0] == 0){
    MissionUtils.Console.print(count[1] + "스트라이크");
    strike3check(MissionUtils, count);
  }
  else{
    MissionUtils.Console.print(count[0] + "볼 " + count[1] + "스트라이크");
  }
}

function strike3check(MissionUtils, count) {
  if (count[1] == 3){
    strike3(MissionUtils);
  }
}

function strike3(MissionUtils) {
  MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
  MissionUtils.Console.readLine("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n", function(restart) {
    check1num(restart);
    checkrestart(restart, MissionUtils);
  });
}

function check1num(input) {
  if (isNaN(input) || input.length != 1){
    throw new Error("1자리 숫자를 입력하세요");
  }
}

function checkrestart(restart, MissionUtils) {
  if (restart == 1){
    game(MissionUtils, init(MissionUtils));
  }
  else if (restart == 2){
    MissionUtils.Console.close();
    return;
  }
  else{
    throw new Error("1과 2만 입력 가능합니다");
  }
}

function check3num(input) {
  if (isNaN(input) || input.length != 3){
    throw new Error("3자리 숫자를 입력하세요");
  }
}

function checkdiffnum(input) {
  if (input.charAt(0) == input.charAt(1) || input.charAt(0) == input.charAt(2) || input.charAt(1) == input.charAt(2)){
    throw new Error("3자리 숫자 모두 다르게 입력하세요");
  }
}

module.exports = App;
