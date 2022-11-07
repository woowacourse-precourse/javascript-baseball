class App {
  play() {}
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