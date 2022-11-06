const MissionUtils = require("@woowacourse/mission-utils");


class App {

  constructor () {}

  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

    let user = this.getUserInput();
    let computer = this.getComputerInput();
  }

  detectError(user) {
    if(this.detectStringError(user)) {
      if (user.length != 3) {
        throw new Error("유효하지 않은 값이 입력되었습니다.");
      }
    }
  }
  detectStringError(user) {
    user = [...user];
    user.forEach(element => {
      if (!(element >= '1' && element <= '9')) { 
        throw new Error("유효하지 않은 값이 입력되었습니다."); 
      }
    });
    return 1;
  }

  detectReStartError(user) {
    if (!(user === '1' || user === '2')) {
      throw new Error("유효하지 않은 값이 입력되었습니다. 종료오류");
    }
  }

  getComputerInput() {
    let computerInput = [];
    while (computerInput.length < 3) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(1,9);
      if (!computerInput.includes(randomNumber)) {
        computerInput.push(randomNumber);
      }
    }
    return computerInput.join("");
  }

  compareUserAndComputer(computer) {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (userValue) => {
        let isUserInputValid = this.detectError(userValue);

        if (isUserInputValid) {
            let [strike, ball] = this.countStrikeAndBall(userValue, computer);
            if (this.isStrikeOut(strike, ball)){
                this.reGame();
            }
            else{
                this.compareUserAndComputer(computer);
            }
        }

    }); 
  }

  countStrikeAndBall(user, computer) {
    user = [...user];
    computer = [...computer];

    let i = 0;
    let strike = 0;
    let ball = 0;
    user.forEach(element => {
      if (computer.includes(element)){
        if (element === computer[i]) { strike += 1 }
        else { ball += 1}
      }
      i += 1;
    });
    return [strike, ball];
  }
  
  isStrikeOut(user, computer) {  
    if (strike === 0 && ball === 0) { MissionUtils.Console.print("낫싱")};
    if (strike === 1 && ball === 0) { MissionUtils.Console.print("1스트라이크")};
    if (strike === 2 && ball === 0) { MissionUtils.Console.print("2스트라이크")};
    if (strike === 3 && ball === 0) { 
      MissionUtils.Console.print("3스트라이크");
      MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      return 1;
    };
    if (strike === 0 && ball === 1) { MissionUtils.Console.print("1볼")};
    if (strike === 0 && ball === 2) { MissionUtils.Console.print("2볼")};
    if (strike === 1 && ball === 1) { MissionUtils.Console.print("1볼 1스트라이크")};
    if (strike === 1 && ball === 2) { MissionUtils.Console.print("2볼 1스트라이크")};
  
  
    return 0;
  }
}


const game = new App();
game.play();

module.exports = App;
