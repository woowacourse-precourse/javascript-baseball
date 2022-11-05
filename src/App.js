const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    const computer = this.getComputerRandomNumberString();

    this.numberBaseballGame(computer);
  }

  getComputerRandomNumberString() {
    let randomNumberList = [];

    while (randomNumberList.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!randomNumberList.includes(number)) {
        randomNumberList.push(number);
      }
    }

    return randomNumberList.join('');
  }

  numberBaseballGame(computer) {
    MissionUtils.Console.readLine('', (user) => {
      if(computer === user){
        MissionUtils.Console.close();
      }
      else{
        this.showBallStrike(computer, user);
        this.numberBaseballGame(computer);
      }
    });
  }

  showBallStrike(computer, user){
    let ball = 0;
    let strike = 0;
    [...computer].forEach((computerNumber, computerIndex)=>{
      [...user].forEach((userNumber, userIndex)=>{
        if(computerNumber === userNumber){
          if(computerIndex === userIndex){
            strike++;
          }
          else{
            ball++;
          }
        }
      });
    });

    if(!ball && !strike){
      MissionUtils.Console.print("낫싱");
    }
    else if(!strike){
      MissionUtils.Console.print(ball + "볼");
    }
    else if(!ball){
      MissionUtils.Console.print(strike + "스트라이크");
    }
    else{
      MissionUtils.Console.print(ball + "볼 " + strike + "스트라이크");
    }
  }
}

module.exports = App;
