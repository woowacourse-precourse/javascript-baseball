const MissionUtils = require("@woowacourse/mission-utils");
class App {
  comInput=[];
  playerInput=[];
  strike=0;
  ball=0;
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
    this.playerInput=[];
    for(let i=0;i<3;i++){
      this.playerInput.push(parseInt(ans[i]));
    }
    return this.playerInput;
  }

  checkPlayerInput(playerInput){
   if((playerInput.length)!==3){
    throw  new Error();
   }
   else if(playerInput.includes(0)){
    throw  new Error();
   }
   else{
    //길이가 3이지만, 숫자가 아닌 값이 있는 경우 
    for(let i=0;i<3;i++){
      if(!parseInt(playerInput[i])){
        throw  new Error();
      }
    }
    const ARR= new Set(playerInput)
    if(ARR.size<playerInput.length){
      throw  new Error();
    }
   }
  return true;
  }

  getStrike(player, comInput){
    this.strike=0;
    for(let i=0;i<3;i++){
      if(player[i]==comInput[i]){
      this.strike++;
      }
    }
    return this.strike;
  }

  getBall(player, comInput){
    this.ball=0;
    for(let i=0;i<3;i++){
      if((player[i]!==comInput[i]) && comInput.includes(player[i])){
        this.ball++;
      }
    }
    return this.ball;
  }

  printScore(){
    if(this.ball==0 && this.strike==0){
      MissionUtils.Console.print("낫싱");
    }
    else if(this.ball && this.strike){
      MissionUtils.Console.print(`${this.ball}볼 ${this.strike}스트라이크`);
    }
    else if(!this.strike && this.ball){
      MissionUtils.Console.print(`${this.ball}볼`);
    }
    else{
      MissionUtils.Console.print(`${this.strike}스트라이크`);
    }
  }

  restartGame(){
    MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    MissionUtils.Console.readLine("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n", (userInput)=>{
      try{
        if(userInput==1){
        this.repeat=1;
        this.strike=0;
        this.ball=0;
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
    this.getStrike(this.playerInput, this.comInput);
    this.getBall(this.playerInput, this.comInput);
    this.printScore();
    if(this.strike==3){
      this.restartGame();
    }
    this.playGame();
  }) 
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