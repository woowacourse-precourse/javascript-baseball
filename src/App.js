const MissionUtils = require("@woowacourse/mission-utils");


class App {

  selectComputerNum(){
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  }

  checkInputValue(input){
    
    // 숫자가 세자리가 아닐 때
    if(input.length != 3){
      throw "세자리 숫자를 입력해주세요."
    }
    
    // 양수가 아닌 값을 입력 받았을 때
    let is_inteager = 1;
    for(let i=0; i<input.length; i++){
      if(!Number.isInteger(input.charAt(i))){
        is_inteager = 0;
      }
    }
    if(!is_inteager){
      throw "양수 세자리를 입력해주세요."
    }

  }


  getGameResult(){
    
  }


  play() {

    const computer_num = this.selectComputerNum();

    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    

    let is_game_over = 0;
    while(!is_game_over){

      const game_num = [];
      MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (input) => {
        console.log(input);
        MissionUtils.Console.close();

        try {
          this.checkInputValue(input);
        } catch(e) {
          console.error(e);
        }

      })

      // this.getGameResult(computer_num, game_num);
      // is_game_over = 1;
    }

  }

}

module.exports = App;


const app = new App();
app.play();

