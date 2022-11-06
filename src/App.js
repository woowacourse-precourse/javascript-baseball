class App {
  play() {}

  createRandomNumber() {
    let computerNumber="";
    let count=0;
    while(count<3){
      let charNum=MissionUtils.Random.pickNumberInRange(1, 9);
      if(!computerNumber.includes(String(charNum))){
        computerNumber+=String(charNum);
        count++;
      }
      }
      return computerNumber;
    }
    InputUserNumber(){
      let userInput=0;
      MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (userNum) => {
          userInput=userNum;
          if(userNum==1||userNum==2){
            this.selectGameEnd
          }
    })
      return userInput;
    }
      /*스트라이크인지 점수를 계산하는 기능*/
  strike(computerRandomNum, userInputNum){
    let strikeScore=0;
    console.log(computerRandomNum+"스트 "+userInputNum);
    for(let index=0;index<3;index++){
      if(String(computerRandomNum).charAt(index)==String(userInputNum).charAt(index)){
        strikeScore+=1;
        
      }
    }  
    return strikeScore;
  }
  /*볼인지 점수 계산하는 기능*/
  ball(computerRandomNum, userInputNum){
    console.log(computerRandomNum+"볼 "+userInputNum);
    let ballScore=0;
    for(let index=0; index<3;index++){
      if((computerRandomNum).includes(String(userInputNum).charAt(index))&&!(String(computerRandomNum).charAt(index)==String(userInputNum).charAt(index))){
        ballScore+=1;
        
      }
    }
    return ballScore;
  }
    /*볼과 스트라이크 점수 계산하는 기능*/
    calResult(computerRandomNum, userInputNum){
      let score=[];
      score.push(this.strike(computerRandomNum,userInputNum));
      score.push(this.ball(computerRandomNum,userInputNum));
      let answer="";
      if(score[0]==0&&score[1]==0){
        answer="낫싱";
      }
      if(score[0]==0&&score[1] >0){
        answer=`${score[1]}볼`;
      }
      if(score[0]>0&&score[1]==0){
        answer=`${score[0]}스트라이크`;
      }
      if(score[0]>0&&score[1]>0){
        answer=`${score[1]}볼 ${score[0]}스트라이크`;
      }
      return answer;
      }
        /*3스트라이크 인지 확인하는 기능*/
  checkThreeStrike(computerRandomNum, userInputNum){
    if(this.strike(computerRandomNum, userInputNum)==3){
      MissionUtils.Console.print("3개를 모두 맞히셨습니다! 게임 종료");
      userInputNum=this.InputUserNumber();
      this.selectGameEnd(userInputNum);
    }
    return false;
  }
          /*유저가 입력한 수의 길이가 유효한지 확인하는 기능*/
    checkUserNumLength(userInputNum){
      if(userInputNum==1||userInputNum==2){
        return true;
      }
      if(userInputNum.length==3){
        return true;
      }
      return false;
    }
    /*유저가 입력한 수가 숫자가 맞는지 확인하는 기능*/
    checkUserNumIsNum(userInputNum){
      if(userInputNum==1||userInputNum==2){
        return true;
      }
      if(userInputNum>99&&userInputNum<1000){
        return true;
      }
      return false;
    }
      /*유저가 입력한 수가 서로 다른 수 인지 확인하는 기능*/
    checkUserNumIsDifferent(userInputNum){
      if(userInputNum==1||userInputNum==2){
        return true;
      }
      if(userInputNum.charAt(0).includes(userInputNum.charAt(1))){
        return false;
      }
      if(userInputNum.charAt(0).includes(userInputNum.charAt(2))){
        return false;
      }
      if(userInputNum.charAt(1).includes(userInputNum.charAt(2))){
        return false;
      }
      return true;
    }
    /*입력 수가 유효한지 확인하는 기능*/
    checkUserNumVaildation(userInputNum){
      try{
        if(!this.checkUserNumLength(userInputNum)){
          throw "입력이 잘못되었습니다";
        }
        if(!this.checkUserNumIsNum(userInputNum)){
          throw "입력이 잘못되었습니다";
        }
        if(!this.checkUserNumIsDifferent(userInputNum)){
          throw "입력이 잘못되었습니다";
      }
    }catch(e){
        MissionUtils.Console.print("입력이 잘못되었습니다. 게임 종료");
        throw "게임 종료"
      }
      return true;
    }
    /*게임 종료 여부 선택하는 기능*/
    selectGameEnd(userInputNum){
      console.log(userInputNum);
      if(userInputNum==1){
        MissionUtils.Console.print("게임 재시작");
        this.play();
        }
      if(userInputNum==2){
        MissionUtils.Console.print("게임 종료");

      }
    }
}

module.exports = App;
