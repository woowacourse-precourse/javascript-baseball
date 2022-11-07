const { Console } = require("@woowacourse/mission-utils");

function Referee(computer,user){
  let strike = 0;
  let ball = 0;
  let index = 0;
  user = Array.from(user);

  user.map((value)=>{
    if(computer.indexOf(value) != -1){ //있다면
      if(computer[index] == value) {
        strike++;
      }
      else ball++;
    }
    index++;
  })
  
  if(ball === 0 && strike === 0) Console.print("낫싱");
  else if (ball === 0) Console.print(strike + "스트라이크");
  else if (strike === 0) Console.print(ball + "볼");
  else Console.print(ball + "볼 " + strike + "스트라이크");

  if(strike === 3) return true;
  else return false;
  
}
module.exports = Referee;