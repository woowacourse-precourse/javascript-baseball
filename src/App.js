const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    const computer = this.getComputerRandomNumberString();
    
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
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
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (user) => {
      try{
        this.invalidValueException(user);

        if(computer === user){
          MissionUtils.Console.print('3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료')
          this.selectRestartOrExitGame();
        }
        else{
          this.showBallStrike(computer, user);
          this.numberBaseballGame(computer);
        }
      } catch(e){
        MissionUtils.Console.print(e);
        MissionUtils.Console.close();
      }
    });
  }

  invalidValueException(user){
    if(user === '' || user === ' ' || user.includes(' ')){
      throw "예외 발생! 공백은 입력되지 않습니다.";
    }
    if(user.length !== 3){
      throw "입력의 길이는 3이여야 합니다.";
    }
    if(isNaN(Number(user))){
      throw "숫자가 아닌 입력이 있습니다.";
    }

    [...user].forEach((num, numIndex)=>{
      if(isNaN(num)){
        throw "음수 또는 소수점 입력은 불가합니다.";
      }
      if(num<1 || num>9){ //이 경우 num=0
        throw "각 숫자는 1~9 사이입니다.";
      }
      [...user].forEach((compareNum, compareIndex)=>{
        if(numIndex !== compareIndex && num === compareNum){
          throw "서로 다른 3개의 숫자를 입력하세요.";
        }
      });
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

  selectRestartOrExitGame(){
    MissionUtils.Console.print('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
    MissionUtils.Console.readLine('', (choice) => {
      if(choice==='1'){
        const computer = this.getComputerRandomNumberString();
        this.numberBaseballGame(computer);
      }
      else{
        MissionUtils.Console.close();
      }
    });
  }
}

module.exports = App;
