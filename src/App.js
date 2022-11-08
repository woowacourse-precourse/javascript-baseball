const MissionUtils = require("@woowacourse/mission-utils");

class App{
  get computerNumber(){
    let pickedNumber = [];
    while(pickedNumber.length < 3){
      let number = MissionUtils.Random.pickNumberInRange(1, 9);
      if(!pickedNumber.includes(number)) pickedNumber.push(number);
    }
    return pickedNumber;
  }

  play(){
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    const COMPUTER_NUMBER = this.computerNumber;
    this.enterNumber(COMPUTER_NUMBER);
  }

  enterNumber(computerNumber){
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (number) => {
        let splitenterNumber = number.split("");
        this.validCheck(splitenterNumber);
        let ballStrike = this.ballStrikeCounter(splitenterNumber, computerNumber);
        let response = this.gameResult(ballStrike);
        if(response){
          this.restartOrFinish();
        } else{
          this.enterNumber(computerNumber);
        }
      }
    );
  }

  restartOrFinish(){
    MissionUtils.Console.readLine("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.", (answer) => {
        if(answer == 1) {this.play();}
        else if(answer == 2) {MissionUtils.Console.close();}
      }
    );
  }

  validCheck(userNumber){
    if(userNumber.length != 3){
      throw new Error("잘못된 값을 입력하셨습니다. 게임을 종료합니다.");
    }
    let removeDuplication = new Set(userNumber);
    removeDuplication = [...removeDuplication];
    if(removeDuplication.length != 3){
      throw new Error("잘못된 값을 입력하셨습니다. 게임을 종료합니다.");
    }
  }

  ballStrikeCounter(userNumber, COMPUTER_NUMBER){
    let ballStrikeCount = [0, 0];
    userNumber.forEach((item, index) => {
      if(item == COMPUTER_NUMBER[index]){
        ballStrikeCount[1] += 1;
      } else if(COMPUTER_NUMBER.includes(Number(item))){
        ballStrikeCount[0] += 1;
      }
    });
    return ballStrikeCount;
  }


  gameResult(ballStrike){
    if(ballStrike[0] == 0 && ballStrike[1] == 0){
      MissionUtils.Console.print("낫싱");
      return false;
    } else if(ballStrike[1] == 3){
      MissionUtils.Console.print("3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      return true;
    } else if(ballStrike[0] == 0){
      MissionUtils.Console.print(ballStrike[1] + "스트라이크");
      return false;
    } else if(ballStrike[1] == 0){
      MissionUtils.Console.print(ballStrike[0] + "볼");
      return false;
    } else {
      MissionUtils.Console.print(
        ballStrike[0] + "볼" + " " + ballStrike[1] + "스트라이크"
      );
      return false;
    }
  }
}
module.exports = App;

const app = new App();
app.play();