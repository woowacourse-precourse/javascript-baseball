const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    const COMPUTER=this.generateComRandom()
    this.userInput(COMPUTER)
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
  userInput(COMPUTER) {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (userNumber) => {
      this.getBothArrays(userNumber,COMPUTER);
    });
  }

  getBothArrays(userNumber,COMPUTER) {
    let cleanUserNumber=this.checkUserInputValue(userNumber)
    console.log(cleanUserNumber,COMPUTER);
  }
  checkUserInputValue(userNumber) {
    let userNumberArray=userNumber.split("").map((element)=>{
      return Number(element)
    })
    if(userNumberArray.includes(NaN)) throw "문자는 불가능 합니다."
    if(userNumberArray.includes(0)) throw "1~10사이의 숫자만 가능합니다"
    if(userNumberArray.length !==3) throw "3자리 숫자를 입력해주세요"
    if(new Set(userNumberArray).size !==3 ) throw "중복 값이 있습니다."
    return userNumber
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
