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
    
    // 양수가 아닌 값을 입력 받았을 때
    this.checkInputInteger(input);

    // 숫자가 세자리가 아닐 때
    this.checkInputSize(input);

    // 중복된 숫자 포함하여 입력 받았을 때
    this.checkDuplication(input);
        
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
      is_game_over = 1;
    }

  }

}

module.exports = App;


const app = new App();
app.play();

