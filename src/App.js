const MissionUtils = require("@woowacourse/mission-utils");

// - 사용자 숫자 입력 기능

class App {

  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

    this.createRandomNum();
    this.startGame();
  }

  // 컴퓨터 랜덤값 생성 기능
  createRandomNum() {
    const computerInput = [];
    while (computerInput.length < 3){
      let randomNum = MissionUtils.Random.pickNumberInRange(1, 9);
      randomNum = randomNum.toString();
      if (!computerInput.includes(randomNum)){
        computerInput.push(randomNum);
      }
    }
    MissionUtils.Console.print(computerInput);
    this.startGame(computerInput)
  }

  startGame(computerInput) {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (userInput) => {
      if (this.isValidNum(userInput)) {
        userInput = userInput.split("")
        this.compareNum(computerInput, userInput)
      }
    });
  }

  compareNum(computerInput,userInput){
    console.log(computerInput,userInput)
  }

  //[예외처리] 잘못된 값 입력시 오류 처리 기능
  isValidNum(userInput) {
    if (userInput.length !== 3){
      throw "3개의 숫자를 입력해주세요."
    }

    if (isNaN(userInput)){
      throw "숫자만 입력해주세요."
    }

    if (new Set(userInput).size !== 3){
      throw "서로 다른 3자리의 숫자를 입력해주세요."
    }

    if (userInput.includes('0')){
      throw "0을 제외한 숫자를 입력해주세요."
    }
    return true
  }

  

}
const app = new App();
app.play()
// module.exports = App;
