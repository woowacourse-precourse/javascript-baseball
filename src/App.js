class App {
  play() {}
}


function checkStrike(randomNum,userNumber) {
  var strike=0;
  for(let i=0; i<3; i++){
    if(randomNum[i]==userNumber[i]){
      strike=strike+1;
    }
  }
  return strike;
}