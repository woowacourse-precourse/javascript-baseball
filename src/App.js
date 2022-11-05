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
      if(computer === user){
        MissionUtils.Console.print('3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료')
        this.selectRestartOrExitGame();
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

  selectRestartOrExitGame(){
    MissionUtils.Console.print('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
    MissionUtils.Console.readLine('', (choice) => {
      MissionUtils.Console.close();
    });
  }
}

module.exports = App;
