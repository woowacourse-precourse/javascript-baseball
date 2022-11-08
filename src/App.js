const MissionUtils = require("@woowacourse/mission-utils");

class App {
  getComputerNumber () {
    const computer = [];
    while (computer.length <= 2) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  }

  getUserInputAndPlay(computerNumber) {
    MissionUtils.Console.readLine('숫자를 입력해주세요: ', answer => {
      let answerSet = new Set(answer);
      let answerSetCopy = [...answerSet];
      if (answerSetCopy.length != 3) {
        throw new Error("입력 값이 세글자가 아니라서 게임을 종료합니다");
      }
      if (answer.includes('0')){
        throw new Error("숫자 0 이 포함되어 게임을 종료합니다")
      }
      try {
        let answerArray = answer.split('');
        answerArray = answerArray.map(number => {
          number = parseInt(number);
          if (isNaN(number)) {
            throw error;
          }
          return number;
        });

        if (!this.compareNumbers(computerNumber, answerArray)) {
          return this.getUserInputAndPlay(computerNumber);
        } else {
          console.log("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
          return this.replayGame();
        }
      }
      catch (error) {
        throw new Error("입력 값을 숫자로 변환하는 과정에서 오류 발생하여 게임을 종료합니다");
      }
    });  
  }

  countStrikes (computerNum,userInputNum) {
    let totalStrike = 0;
    let com = computerNum;
    let user = userInputNum;
    for (let i = 0; i < com.length ; i++) {
      if(com[i] == user[i]){ 
          totalStrike += 1;
      }
    }
    return totalStrike;
  }

  countBalls (computerNum,userInputNum) {
    let totalBall = 0;
    let com = computerNum;
    let user = userInputNum;
    for (let i = 0; i < com.length ; i++) {
      if(com[i] != user[i] && com.includes(user[i])){ 
        totalBall += 1;
      }
    }
    return totalBall;
  }

  compareNumbers (computerNum, userInputNum) {
    let strike = this.countStrikes(computerNum, userInputNum);
    let ball = this.countBalls(computerNum, userInputNum);
    if (strike == 0 && ball == 0) {
      MissionUtils.Console.print("낫싱")
      return false
    } else if (strike == 3) {
      MissionUtils.Console.print("3스트라이크");
      return true
    } else if (strike == 0) {            
      MissionUtils.Console.print(`${ball}볼`)
      return false
    } else if (ball == 0) {
      MissionUtils.Console.print(`${strike}스트라이크`)
      return false;
    } 
    MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`)
    return false;
  }

  replayGame (){
    MissionUtils.Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. ', answer => {
      if (answer == '1') {
        this.play();
      } else if (answer == '2'){
        MissionUtils.Console.print("게임 종료")
        MissionUtils.Console.close();
      } else {throw new Error("잘못된 값 입력으로 게임을 종료합니다.")}
      })
  }

  play () {    
    console.log("숫자 야구 게임을 시작합니다.");
    let computerNumber = this.getComputerNumber();
    this.getUserInputAndPlay(computerNumber);
  }
}
const app = new App();
app.play();

module.exports = App;