const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    this.playGame();
  }
  
  checkException(num){
    if(isNaN(num)){
      throw new Error("숫자를 입력하세요.");
    }else if(num<0){
      throw new Error("양수를 입력하세요.");
    }else if(num.charAt(0) === 0 || num.charAt(1) === 0 || num.charAt(1) === 0){
      throw new Error("1-9 사이의 숫자로 이루어진 세자리 숫자를 입력하세요.");
    }else if(num.charAt(0) === " " ||num.charAt(1) === " " || num.charAt(3) === " "){
      throw new Error("공백을 포함하지 않는 숫자를 입력하세요.")
    }else if(num.length !== 3){
      throw new Error("3자리 숫자를 입력하세요.");
    }else if(num.charAt(0) === num.charAt(1) || num.charAt(0) === num.charAt(2) || num.charAt(1) === num.charAt(2)){
      throw new Error("중복되지 않는 숫자를 입력하세요.");
    }else{
      return 1;
    }
  }

  getUserNum(com_num){
    let user_num;
    do{
      MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (input) => {
        user_num = input;
      });        
      this.checkException(user_num);
    } while(!this.compareNum(com_num, user_num));
  }

  compareNum(com_num, user_num){
    let strike = 0;
    let ball = 0;

    for(let i = 0; i < 3; i++){
      let index = com_num.indexOf(user_num.charAt(i));
      if(index === -1){
        continue;
      } else if (index === i){
        strike += 1;
      } else {
        ball += 1;
      }
    }
    this.printStrikeBall(strike, ball);
    if(strike === 3){
      return 1;
    }
    return 0;
  }

  printStrikeBall(strike, ball){
    if(ball === 0 && strike === 0){
      MissionUtils.Console.print('낫싱');
    } else if(ball === 0){
      MissionUtils.Console.print(`${strike}스트라이크`);
    } else if(strike === 0){
      MissionUtils.Console.print(`${ball}볼`);
    } else{
      MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
    }
  }

  getRandomNum(){
    const com_num = [];
    while(com_num.length < 3){
      const randomNum = MissionUtils.Random.pickNumberInRange(1,9);
      if(!com_num.includes(randomNum)){
        com_num.push(randomNum);
      }
    }
    return com_num.join("");
  }

  playGame() {
    let game = "1";

    while(game === "1"){
      let com = this.getRandomNum();
      this.getUserNum(com);
      MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
      MissionUtils.Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.', (answer) =>{
        game = answer;
      });
    }
  }
}

module.exports = App;
