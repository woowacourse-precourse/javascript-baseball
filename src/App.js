const MissionUtils = require("@woowacourse/mission-utils");
class App {
  comInput=[];
  PlayerInput=[];
  strike=0;
  Ball=0;
  repeat=0;

  setComInput(){
    this.comInput=[];
    while(this.comInput.length<3){
      let computerNum=MissionUtils.Random.pickNumberInRange(1, 9);
      if(!this.comInput.includes(computerNum)){
        this.comInput.push(computerNum);
      }
    }
    return this.comInput;
  }

  setPlayerInput(ans){
    this.PlayerInput=[];
    for(let i=0;i<3;i++){
      this.PlayerInput.push(parseInt(ans[i]));
    }
    return this.PlayerInput;
  }

  checkPlayerInput(PlayerInput){
   if((PlayerInput.length)!==3){
    throw  new Error();
   }
   else if(PlayerInput.includes(0)){
    throw  new Error();
   }
   else{
    for(let i=0;i<3;i++){
      if(!parseInt(PlayerInput[i])){
        throw  new Error();
      }
    }
    const arr= new Set(PlayerInput)
    if(arr.size<PlayerInput.length){
      throw  new Error();
    }
   }
  return true;
  }

  getStrike(Player, comInput){
    this.strike=0;
    for(let i=0;i<3;i++){
      if(Player[i]==comInput[i]){
      this.strike++;
      }
    }
    return this.strike;
  }

  getBall(Player, comInput){
    this.Ball=0;
    for(let i=0;i<3;i++){
      if((Player[i]!==comInput[i]) && comInput.includes(Player[i])){
        this.Ball++;
      }
    }
    return this.Ball;
  }

  restartGame(){
    MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    MissionUtils.Console.readLine("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n", (userInput)=>{
      try{
        if(userInput==1){
        this.repeat=1;
        this.strike=0;
        this.Ball=0;
        this.play();
        }
        else if(userInput==2){
          MissionUtils.Console.close();
        }
        else{
          throw new Error();
        }
      }
      catch(e){
         MissionUtils.Console.close();
      }
    });
  }

  playGame(){
    MissionUtils.Console.readLine('숫자를 입력하세요 : ',(userInput)=>{
    try{
      this.checkPlayerInput(userInput);
    }
    catch(e){
      MissionUtils.Console.close();
      throw new Error();
    }
    this.setPlayerInput(userInput);
    this.getStrike(this.PlayerInput, this.comInput);
    this.getBall(this.PlayerInput, this.comInput);
    this.printResult();
    if(this.strike==3){
      this.restartGame();
    }
    this.playGame();
  }) 

}

printResult(){
    if(this.Ball==0 && this.strike==0){
      MissionUtils.Console.print("낫싱");
    }
    else if(this.Ball && this.strike){
      MissionUtils.Console.print(`${this.Ball}볼 ${this.strike}스트라이크`);
    }
    else if(!this.strike && this.Ball){
      MissionUtils.Console.print(`${this.Ball}볼`);
    }
    else{
      MissionUtils.Console.print(`${this.strike}스트라이크`);
    }
}

  play(){
    if(this.repeat==0){
      MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    }
    this.setComInput();
    try{
      this.playGame();
    }
    catch(e){
      MissionUtils.Console.close();
      throw new Error();
    }
  }
}

module.exports=App