// class App {
//   play() {}
// }

// module.exports = App;

const { Console, Random } = require('@woowacourse/mission-utils');

function gameSet(){
  let game_flag = true;  // 게임을 재시작하거나 종료하기 위한 flag
  Console.print("숫자 야구 게임을 시작합니다.");

  while(game_flag){
    gameStart();
    let input_flag = true;

    while(input_flag){
      Console.print("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요");
      const input = Console.readLine();  // 입력받기
      if (Number(input)==1){
        input_flag=false;
      }else if(Number(input)==2){
        input_flag=false;
        game_flag =false;
        Console.close();
      }else{
        Console.print("1 또는 2를 입력하세요.");
      }
    }
  }
}

// 숫자와 자리 둘다 맞는지
function isStrike(number){
  
}

function isBall(number){

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
