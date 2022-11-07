const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.userInput();
  }
  generateComRandom(){
    const COMPUTER = [];
    while (COMPUTER.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!COMPUTER.includes(number)) {
        COMPUTER.push(number);
      }
    }
    return COMPUTER
  }
  userInput() {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (userNumber) => {
      this.checkUserInputValue(userNumber);
    });
  }

  checkUserInputValue(userNumber) {
    let stringUserNumber = userNumber.split("").map((element) => {
      return Number(element);
    });
    if (stringUserNumber.includes(0) || stringUserNumber.includes(NaN) || stringUserNumber.length!==3) {
      throw "1~9사이의 정수 입력해주세요"
    }
    let userNumberArray = [];
    console.log(stringUserNumber);
    stringUserNumber.forEach((element) => {
      if (!userNumberArray.includes(element)) {
        userNumberArray.push(element);
      } else {
        throw "중복된 수가 있습니다";
      }
    });
    this.getBothArrays(userNumberArray);
  }
  
  getBothArrays(userNumberArray) {
    let userArray = userNumberArray;
    this.compareNumbers(userArray);
  }

  compareNumbers(userNumberArray) {
    console.log("사용자 :", userNumberArray);
    console.log("컴퓨터: ", COMPUTER);
    let strike = 0;
    let ball = 0;
    for (let idx = 0; idx < userNumberArray?.length; idx++) {
      let findIndex = COMPUTER.indexOf(userNumberArray[idx]);
      if (findIndex > -1) {
        if (findIndex === idx) {
          strike++;
        } else {
          ball++;
        }
      }
    }
    if(strike===0 && ball===0){
      MissionUtils.Console.print('낫싱')
    }
    else{
      MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
    }
    if (strike === 3) {
      MissionUtils.Console.print(`${strike} 스트라이크`)
      MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      this.gameReplay();
    }
    this.userInput();
  }

  gameReplay() {
    MissionUtils.Console.readLine(
      "게임을 재시작하려면 1, 종료하려면 2를 입력하세요.",
      (gameSetNumber) => {
        if (+gameSetNumber === 1) {
          count--
          this.play();
        } else if (+gameSetNumber === 2) {
          MissionUtils.Console.close()
          throw "게임을 종료합니다";
        } else {
          throw "1,2가 아닌 입력 발생! 프로그램 종료!";
        }
      }
    );
  }
}

const app = new App();
app.play();
module.exports = App;
