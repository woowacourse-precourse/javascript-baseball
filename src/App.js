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

  
  checkInputInteger(input){
    let is_integer = 1;
    if(isNaN(input)){
      is_integer = 0;
    }
    if(input < 0){ // 숫자야구게임에서 음수를 입력 받을 수 없음
      is_integer = 0;
    }

    if(!is_integer){
      throw "양수 세자리를 입력해주세요."
    }
    return is_integer;
  }

  checkInputSize(input){
    let is_three = 1;
    if(input.length != 3){
      is_three = 0;
      throw "세자리 숫자를 입력해주세요."
    }
    return is_three;
  }

  checkDuplication(input){
    let isNot_dupli = 1;
    const num_list = [];
    for(let i=0; i<input.length; i++){
      if(num_list.includes(input.charAt(i))){
        isNot_dupli = 0;
      }
      else{
        num_list.push(input.charAt(i));
      }
    }

    if(!isNot_dupli){
      throw "중복되지 않은 숫자 조합을 입력해주세요."
    }
    return isNot_dupli;
  }


  checkInputValue(input){
    
    const game_num = [];
    if(this.checkInputInteger(input) && this.checkInputSize(input) && this.checkDuplication(input)){
      for(let i=0; i<input.length; i++){
        game_num.push(parseInt(input.charAt(i)));
      }
    }
    return game_num;
  }


  getGameResult(){
    
  }


  play() {

    const computer_num = this.selectComputerNum();

    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    

    let is_game_over = 0;
    while(!is_game_over){

      MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (input) => {
        console.log(input);
        MissionUtils.Console.close();
        
        try {
          const game_num = this.checkInputValue(input);
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

