// class App {
//   play() {}
// }

// module.exports = App;

const MU = require("@woowacourse/mission-utils");
//const Console = require("@woowacourse/mission-utils/src/console");
//const Random = require("@woowacourse/mission-utils/src/random");

function gameSet(){
  let game_flag = true;  // 게임을 재시작하거나 종료하기 위한 flag
  MU.Console.print("숫자 야구 게임을 시작합니다.");

  while(game_flag){
    gameStart();
    let input_flag = true;

    while(input_flag){
      MU.Console.print("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요");
      const input = MU.Console.readLine();  // 입력받기
      if (Number(input)==1){
        input_flag=false;
      }else if(Number(input)==2){
        input_flag=false;
        game_flag =false;
        MU.Console.close();
      }else{
        MU.Console.print("1 또는 2를 입력하세요.");
      }
    }
  }
}




function setRandomNumber(){
  const computer = [];
  while (computer.length < 3) {
    const number = Random.pickNumberInRange(1, 9);
    // n.inculdes(m) : n 배열에 m이 들어있으면 true 리턴
    if (!computer.includes(number)) { 
      computer.push(number);
    }
  }

  return computer;
}

function gameStart(){
  Console.print("숫자를 입력해주세요 : ");
}
