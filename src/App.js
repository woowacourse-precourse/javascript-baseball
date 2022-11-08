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
    let is_possible = 0;

    try{
      is_possible = this.checkInputInteger(input) && this.checkInputSize(input) && this.checkDuplication(input);
    }catch(e){
      console.error(e);
    }
    
    if(is_possible){
      for(let i=0; i<input.length; i++){
        game_num.push(parseInt(input.charAt(i)));
      }
    }

    return game_num;
  }


  printResult(result){
    let strike_cnt = result[0];
    let ball_cnt = result[1];
    
    if(strike_cnt === 0 && ball_cnt === 0){
      MissionUtils.Console.print("낫싱");
    }
    else if(strike_cnt === 0){
      MissionUtils.Console.print(`${ball_cnt}볼`);
    }
    else if(ball_cnt === 0){
      MissionUtils.Console.print(`${strike_cnt}스트라이크`);
    }
    else{
      MissionUtils.Console.print(`${ball_cnt}볼 ${strike_cnt}스트라이크`);
    }
  }


  getGameResult(computer_num, game_num){

    // [0]strike_cnt  [1]ball_cnt
    const result = [0, 0];
    if(game_num.length === 0) {
      result[0] = -1;
      console.log("RESULT>>", result);
      return result;
    }

    let idx;
    for(let i=0; i<game_num.length; i++){
      idx = computer_num.findIndex( x => x === game_num[i]); // 포함하지 않을 경우 -1 return

      if(idx === -1) continue;
      else if(idx === i) result[0]++;
      else if(idx !== i) result[1]++;
    }
    console.log("RESIE>>", result);
    this.printResult(result);
  
    return result;
  }


  startGame(computer_num){
    let is_game_over = 0;
    let result = [];

    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", async (input) => {
      await MissionUtils.Console.close();
      const game_num = await(this.checkInputValue(input));
      const tmp = await this.getGameResult(computer_num, game_num);
      await result.push(tmp[0]); // copy
      await result.push(tmp[1]);
    });

    if(result === undefined) {
      is_game_over = 1;
      return is_game_over;
    }
    if(result[0] === -1) {
      is_game_over = 1;
    }
    else if(result[0] === 3){ // 3 strike
      is_game_over = 1;
      this.printResult(result);
      MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    }
    else{
      this.printResult(result);
    }
    return is_game_over;
  }



  play() {
    const computer_num = this.selectComputerNum();

    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    
    let is_game_over;
    while(!is_game_over){
      is_game_over = this.startGame(computer_num);
      
      if(is_game_over){
        console.log("restart game")
        // let response = this.restartGame();
        if(response === 1) is_game_over = 0;
        else if(response === 2) is_game_over = 1;
      }

      if(is_game_over) break;
    }
  }
}

module.exports = App;


const app = new App();
app.play();

