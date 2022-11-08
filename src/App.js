const MissionUtils = require("@woowacourse/mission-utils");
class App {
  play() {
    
    var randomNum = makeRandomNum();
    startGame(randomNum);
    
  
    
  }
}

function makeRandomNum(){
  //컴퓨터가 랜덤한 3자리 수(1~9)를 생성
  const randomSoleNum= MissionUtils.Random.pickUniqueNumbersInRange(1, 10, 3);
  var randomNum=(randomSoleNum[0]*100)+(randomSoleNum[1]*10)+(randomSoleNum[2]);
  return randomNum;
}

function startGame(randomNum){
  
  //게임 시작문구 출력
  MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
  //사용자에게 숫자 입력받기
  var userNumber;

  console.log(randomNum);

  MissionUtils.Console.readLine('숫자를 입력해주세요 : ',(answer)=>{
    userNumber = Number(answer);
    var answer = gameResult(randomNum,userNumber);
    var finalAnswer = printGameResult(answer);
    console.log(finalAnswer);


    if(finalAnswer=="3개의 숫자를 모두 맞히셨습니다! 게임 종료"){
      gameRestart();
    }
    else{
      getUserInput();
    }

    // MissionUtils.Console.close();
  });

}

function getUserInput(){
  MissionUtils.Console.readLine('숫자를 입력해주세요 : ',(answer)=>{
    userNumber = Number(answer);
    var answer = gameResult(randomNum,userNumber);
    var finalAnswer = printGameResult(answer);
    console.log(finalAnswer);
    if(finalAnswer=="3개의 숫자를 모두 맞히셨습니다! 게임 종료"){
      gameRestart();
    }
    else{
      getUserInput();
    }
  })
}

function checkStrike(randomNum,userNumber) {
  var strike=0;
  var randomNum =String(randomNum);
  var userNumber =String(userNumber);
  for(let i=0; i<3; i++){
      if(randomNum[i]==userNumber[i]){
      strike=strike+1;
    }
  }
  return strike;
}

function checkball(randomNum,userNumber){
  var randomNumList=[];
  var userNumberList=[];
  var randomNum =String(randomNum);
  var userNumber =String(userNumber);
  var ball=0;
  //리스트로 값 이동
  for(let i=0; i<3; i++){
      randomNumList.push(randomNum[i]);
      userNumberList.push(userNumber[i]);
  }
  
  for(let i=0; i<3; i++){
      if(userNumberList.includes(randomNumList[i]) && userNumberList[i]!=randomNumList[i]){
          ball=ball+1;
      }
  }
  return ball;
}

function checkNothing(strike,ball){
  var nothing;
  if(strike==0 && ball==0){
      nothing=1;
  }
  else{ nothing=0;}
  return nothing;
}

function gameResult(randomNum,userNumber){
  const strike = checkStrike(randomNum,userNumber);
  const ball = checkball(randomNum,userNumber);
  const nothing = checkNothing(strike,ball);
  let answer =""
  if(nothing==1){
      answer="낫싱";
  }
  else if(strike==0 && ball>0){
      answer=`${ball}볼`;
  }
  else if(strike>0 && ball==0){
      answer=`${strike}스트라이크`;
  }
  else{
      answer=`${ball}볼 ${strike}스트라이크`;
  }
  return answer;
}

function checkGameResult(answer){
  if(answer=="3스트라이크"){
      return true;
  }
  return false;
}

function printGameResult(answer){
  const win = checkGameResult(answer);
  if(win){
      answer="3개의 숫자를 모두 맞히셨습니다! 게임 종료"; //+다시할지물어보는 함수
      return answer;
  }
  else{
      return answer; //+다시 사용자의 입력을 받아야함
      
  }
}

function gameRestart(){
  var newanswer=0;
  MissionUtils.Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',(answer)=>{
    newanswer = answer;
    if(newanswer==2){
      MissionUtils.Console.close();
    }
    else{
      startGame();
    }
  })
}


//실행테스트
const app = new App();
app.play();