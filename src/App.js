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
      }}
      return computerNumber;
    }
    InputUserNumber(){
      let userInput=0;
      MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (userNum) => {
        userInput=userNum;
      })
        return userInput;
    }
    strike(computerRandomNum, userInputNum){
      let strikeScore=0;
      for(let index=0;index<3;index++){
        if(String(computerRandomNum).charAt(index)===String(userInputNum).charAt(index)){
          strikeScore+=1;  
        }
      }  
      return strikeScore;
    }
    /*볼인지 점수 계산하는 기능*/
    ball(computerRandomNum, userInputNum){
      let ballScore=0;
      for(let index=0; index<3;index++){
        if((computerRandomNum).includes(String(userInputNum).charAt(index))&&!(String(computerRandomNum).charAt(index)===String(userInputNum).charAt(index))){
          ballScore+=1;
        }
      }
      return ballScore;
    }
}

module.exports = App;
