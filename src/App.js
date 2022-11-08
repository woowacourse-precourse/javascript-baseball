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
}

module.exports = App;
